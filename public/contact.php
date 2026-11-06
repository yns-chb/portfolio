<?php
// Traitement du formulaire de contact, exécuté sur l'hébergement Infomaniak.
// Les données ne sont pas stockées : elles sont envoyées par mail puis oubliées.
//
// Infomaniak désactive la fonction mail() de PHP : on envoie donc le message
// par leur serveur SMTP, en se connectant avec la boîte contact@yanischouhib.fr.
// Les identifiants sont dans config-mail.php, déposé À LA MAIN sur le serveur,
// hors du dossier du site (jamais dans le repo GitHub, qui est public).

const DESTINATAIRE = 'yanis.forster@gmail.com';
const FICHIER_CONFIG = __DIR__ . '/../../config-mail.php';

// En production, une erreur PHP ne doit jamais s'afficher dans la réponse
// (elle casserait le JSON et révélerait des chemins du serveur)
ini_set('display_errors', '0');

$veutJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function repondre(bool $ok, string $erreur = ''): never
{
    global $veutJson;
    if ($veutJson) {
        http_response_code($ok ? 200 : 400);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'erreur' => $erreur ?: null]);
    } else {
        // Sans JavaScript : retour sur la page contact
        header('Location: /contact/?envoi=' . ($ok ? 'ok' : 'erreur'), true, 303);
    }
    exit;
}

/**
 * Envoie un mail texte par SMTP (connexion chiffrée SSL + authentification).
 * Dialogue avec le serveur : chaque commande attend un code réponse précis
 * (220 = prêt, 250 = OK, 334 = attend la suite, 235 = connecté, 354 = envoie le message).
 */
function envoyerSmtp(array $config, string $replyTo, string $sujet, string $corps): void
{
    $connexion = stream_socket_client(
        ($config['chiffrement'] ?? 'ssl') . '://' . $config['hote'] . ':' . $config['port'],
        $codeErreur, $messageErreur, 10
    );
    if (!$connexion) {
        throw new RuntimeException("connexion SMTP impossible ($messageErreur)");
    }
    stream_set_timeout($connexion, 10);

    // Envoie une commande (ou rien) et vérifie le code de la réponse
    $echanger = function (?string $commande, int $codeAttendu) use ($connexion): void {
        if ($commande !== null) {
            fwrite($connexion, $commande . "\r\n");
        }
        // Une réponse peut tenir sur plusieurs lignes : "250-..." puis "250 ..."
        do {
            $ligne = fgets($connexion, 515);
            if ($ligne === false) {
                throw new RuntimeException('le serveur SMTP ne répond plus');
            }
        } while (isset($ligne[3]) && $ligne[3] === '-');

        if ((int) substr($ligne, 0, 3) !== $codeAttendu) {
            throw new RuntimeException('réponse SMTP inattendue : ' . trim($ligne));
        }
    };

    $expediteur = $config['utilisateur'];
    $entetes = implode("\r\n", [
        'Date: ' . date('r'),
        'From: Portfolio <' . $expediteur . '>',
        'To: <' . DESTINATAIRE . '>',
        'Reply-To: <' . $replyTo . '>',
        'Subject: =?UTF-8?B?' . base64_encode($sujet) . '?=',
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@yanischouhib.fr>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=utf-8',
        'Content-Transfer-Encoding: base64',
    ]);
    // Corps en base64 : évite tout souci d'accents ou de ligne commençant par "."
    $message = $entetes . "\r\n\r\n" . rtrim(chunk_split(base64_encode($corps)));

    $echanger(null, 220);
    $echanger('EHLO yanischouhib.fr', 250);
    $echanger('AUTH LOGIN', 334);
    $echanger(base64_encode($config['utilisateur']), 334);
    $echanger(base64_encode($config['mot_de_passe']), 235);
    $echanger('MAIL FROM:<' . $expediteur . '>', 250);
    $echanger('RCPT TO:<' . DESTINATAIRE . '>', 250);
    $echanger('DATA', 354);
    $echanger($message . "\r\n.", 250);
    fwrite($connexion, "QUIT\r\n");
    fclose($connexion);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    repondre(false, 'méthode non autorisée');
}

// Piège à robots rempli : on fait semblant que tout va bien
if (!empty($_POST['site'])) {
    repondre(true);
}

$nom = trim($_POST['nom'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$consentement = isset($_POST['consentement']);

if ($nom === '' || mb_strlen($nom) > 120) repondre(false, 'nom manquant ou trop long');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) repondre(false, 'adresse email invalide');
if ($message === '' || mb_strlen($message) > 5000) repondre(false, 'message manquant ou trop long');
if (!$consentement) repondre(false, 'consentement requis');

// Empêche l'injection d'en-têtes via le nom
$nom = str_replace(["\r", "\n"], ' ', $nom);

try {
    if (!is_readable(FICHIER_CONFIG)) {
        throw new RuntimeException('configuration mail introuvable');
    }
    $config = require FICHIER_CONFIG;

    envoyerSmtp($config, $email, "[Portfolio] Message de $nom", "Nom : $nom\nEmail : $email\n\n$message\n");
} catch (Throwable $e) {
    // Le détail va dans les logs du serveur, pas au visiteur
    error_log('[contact] ' . $e->getMessage());
    repondre(false, "le serveur n'a pas pu envoyer le message");
}

repondre(true);