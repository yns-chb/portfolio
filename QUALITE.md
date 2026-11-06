# Contrôle qualité

Pour chaque critère retenu : ce que j'ai vérifié, comment, et ce que j'ai corrigé.

## Accessibilité

| Critère | Vérification (outil / méthode) | Résultat | Correction |
|---|---|---|---|
| Navigation complète au clavier, focus visible | | | |
| Lien d'évitement « Aller au contenu » | | | |
| Menu mobile : `aria-expanded`, fermeture avec Échap | | | |
| Contrastes : rouge #B70101 sur crème OK (≈ 5.8:1), mais ≈ 3:1 sur noir | Calcul du ratio (WebAIM Contrast Checker) | Échec AA sur fond noir | Rouge éclairci #FF5C5C sur fond noir (≈ 6.5:1) |
| Formulaire : labels liés, messages d'erreur lus (`role="status"`) | | | |

## Sobriété et performance

| Critère | Vérification | Résultat | Correction |
|---|---|---|---|
| Polices auto-hébergées (pas de requête vers Google) | | | |
| Poids des pages | | | |
| Images en WebP et redimensionnées | | | |

## Référencement

| Critère | Vérification | Résultat | Correction |
|---|---|---|---|
| Title et meta description uniques par page | | | |
| Un seul h1 par page, titres hiérarchisés | | | |
| sitemap.xml et robots.txt | | | |

## Conformité juridique

| Critère | Vérification | Résultat | Correction |
|---|---|---|---|
| Mentions légales complètes (éditeur, hébergeur) | | | |
| Formulaire : consentement et durée de conservation | | | |
| Crédits des images et licences des polices | | | |
| Aucun cookie déposé | | | |
