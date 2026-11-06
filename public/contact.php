<?php
// Traitement du formulaire de contact, exécuté sur l'hébergement Infomaniak.
// Les données ne sont pas stockées : elles sont envoyées par mail puis oubliées.

const DESTINATAIRE = 'yanis.forster@gmail.com';
// Adresse d'expédition sur TON domaine (sinon le mail risque de finir en spam)
const EXPEDITEUR = 'contact@ton-domaine.fr';

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

// Empêche l'injection d'en-têtes mail via le nom
$nom = str_replace(["\r", "\n"], ' ', $nom);

$sujet = '=?UTF-8?B?' . base64_encode("[Portfolio] Message de $nom") . '?=';
$corps = "Nom : $nom\nEmail : $email\n\n$message\n";
$entetes = implode("\r\n", [
    'From: Portfolio <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
]);

if (!mail(DESTINATAIRE, $sujet, $corps, $entetes)) {
    repondre(false, 'le serveur n\'a pas pu envoyer le message');
}

repondre(true);
