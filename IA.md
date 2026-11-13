# Déclaration d'usage de l'IA

Pour chaque outil : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'il a produit.

## Claude (Anthropic)

| Date | Étape | Usage | Ce que j'ai modifié, corrigé ou rejeté |
|---|---|---|---|
| 06/11 | Planification | Répartition du travail sur les 13 jours avant la soutenance | Planning adapté à mes week-ends de travail |
| 06/11 | Conception | Analyse des retours de la soutenance maquette | J'ai choisi quels retours appliquer et comment |
| 06/11 | Maquette Figma | Ajout de [PROJETS] au menu, page Projets, page projet en 6 sections, correction d'une coquille | Les textes entre crochets sont à rédiger par moi ; le choix des 3 projets reste à trancher |
| 06/11 | Choix techniques | Conseils : Markdown plutôt que SQLite/PocketBase, polices auto-hébergées, PHP pour le formulaire | J'ai remplacé npm par Bun |
| 06/11 | Développement | Squelette du site : layout, header, footer, pages À propos / Contact / Mentions légales / 404 | Header refait d'après ma maquette (texte plus petit, statut à droite avec carré clignotant, header noir sur la page contact) ; tailles de texte recalées sur mes styles Figma ; champs du formulaire repris de ma maquette |
| 06/11 | Développement | Écran d'intro | J'ai choisi la version écran d'entrée (au lieu d'une animation par-dessus le site) avec accès direct ; fusion avec mon propre code d'animation (boîte terminal qui s'étend) ; retrait du texte « Extension du territoire » ; couleurs rouge et noir en plein écran à ma demande |
| 06/11 | Développement | Barre d'infos (dernier commit via l'API GitHub, poids de la page) | Rejetée : je ne l'ai pas gardée |
| 06/11 | Développement | Curseur `_` clignotant à la fin des libellés | Gardé |
| 06/11 | Animations | Propositions : transitions entre pages, survol des cartes, façade pour tester les sites | Reportées à la création des pages projet ; curseur de souris personnalisé écarté |
| 06/11 | Mise en ligne | Configuration Infomaniak, `.htaccess` fusionné avec celui d'Infomaniak, workflow GitHub Actions (FTPS) | J'ai choisi Infomaniak plutôt que le VPS ; j'ai corrigé le dossier de déploiement (`FTP_DIR`) après un premier envoi au mauvais endroit |
| 06/11 | Mise en ligne | Diagnostic du formulaire de contact (SPF, `mail()` désactivé) et réécriture de `contact.php` en SMTP | J'ai activé le service mail, créé la boîte et le mot de passe d'application ; les identifiants restent hors du repo (`config-mail.php` sur le serveur) |
| Textes des études de cas (contexte, processus, bilan) | La structure en sections 01 à 06 | J'ai corrigé mon rôle sur cineHOME (audit et persona avec Maxence, maquette seul), retiré la partie dev et une phrase sur les droits d'auteur qui était fausse, et remis Tailwind dans les choix techniques de Tacita |
| Maquette cineHOME (pages manquantes, guide de style) | Les pages recherche, lecteur, profil et connexion, et le guide | J'ai demandé de retirer le fond Blade Runner de la connexion et de repasser en 1280 après un essai en 1920 |
| Story mapping TiK•TaK | La mise en forme dans la charte du projet | — |
| Code de l'accueil et de la page Projets | Le fichier de données et le composant carte | Les cartes étaient trop grandes et mal alignées : j'ai demandé les mêmes cartes sur les deux pages |
| Pages des études de cas | La page unique `[slug].astro` et l'agrandissement des images | J'ai refusé l'image en pleine largeur (floue), puis la barre de navigateur au-dessus, et réduit l'espace avant le footer |
| Prototype Figma intégré | Le chargement au clic | — |
| Sécurité du repo TiK•TaK | La copie publique nettoyée | — |
## Autres outils

Pour l'animation j'avais déja un code généré par GéminiPro, j'ai demandé à Claude de le modifié