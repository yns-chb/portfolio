# Journal de bord


## Semaine du 3 novembre 2026

**Ce que j'ai fait**
- Intégré les retours de la soutenance maquette dans Figma : ajout de [PROJETS] au menu, page Projets avec filtres, page projet détaillée en 6 sections (contexte, rôle, processus, choix techniques avec extrait de code, résultat, bilan).
- Mis en place le projet : Astro, Tailwind CSS v4, Bun, repository GitHub public.
- Développé le layout (header, footer), les pages À propos, Contact et Mentions légales, la page 404.
- Créé l'écran d'intro : écran d'entrée avec accès direct au portfolio, et animation « INITIALISATION DU PROJET » (boîte terminal qui s'étend en rouge puis noir).
- Ajouté le statut « recherche de stage » avec un voyant qui clignote, un header noir pour la page contact et un curseur `_` de terminal.
- Calé toutes les tailles de texte sur les styles de ma maquette Figma, avec des tailles qui s'adaptent à la largeur de l'écran.
- Mis le site en ligne sur yanischouhib.fr (Infomaniak) avec un déploiement automatique par GitHub Actions à chaque push.
- Rendu le formulaire de contact fonctionnel (PHP + SMTP Infomaniak) : le mail arrive en boîte de réception, pas en spam.

**Ce qui a coincé**
- Le site paraissait plus gros que la maquette : mon écran affiche environ 1280 px alors que la maquette fait 1440 px. Résolu avec des tailles de texte proportionnelles à la largeur de l'écran.
- L'intro ne s'affichait pas : je l'avais mise dans `projets/index.astro` au lieu de `index.astro`.
- Premier déploiement envoyé dans un sous-dossier en trop : mon compte FTP démarre déjà dans le dossier du site, il fallait `./` comme chemin. J'ai aussi dû fusionner le `.htaccess` d'Infomaniak avec le mien.
- Formulaire de contact : le DNS interdisait l'envoi de mails (`v=spf1 -all` et DMARC `p=reject`), puis `mail()` s'est révélé désactivé chez Infomaniak (erreur fatale). Passage à un envoi SMTP authentifié, puis erreur 535 corrigée avec un mot de passe d'application.
- Mon hébergement expire le 14/11, avant la soutenance : demande de renouvellement de l'offre étudiante envoyée.

**Ce que j'ai décidé**
- Contenus des projets en Markdown (content collections Astro) plutôt qu'en base SQLite ou PocketBase : 3 projets seulement, et PocketBase ne tourne pas sur un hébergement mutualisé.
- Polices auto-hébergées au lieu de Google Fonts, pour rester cohérent avec mon choix RGPD.
- Hébergement Infomaniak plutôt que le VPS ou Netlify : il ne dépend pas de l'IUT, PHP et les mails y fonctionnent, et c'est cohérent avec ce que j'ai annoncé en soutenance maquette.
- Bun à la place de npm.
- Intro en écran d'entrée avec un lien « Aller directement au portfolio », pour ne pas bloquer un recruteur pressé.
- Pas de barre d'informations techniques (dernier commit, poids de la page) : je ne l'ai pas gardée.
- Transitions entre pages et survol des cartes reportés à la création des pages projet.
- Nom affiché « Yanis Forster », nom de domaine yanischouhib.fr.

**Prochaine semaine** : page d'accueil, page Projets, modèle de page projet, rédaction des 3 études de cas, qualité.

## Semaine du 10 novembre

### Fait
- Choix des trois études de cas : Tacita, TiK•TaK et cineHOME (cineHOME n'est pas codé, mais son prototype Figma est complet).
- Maquette Figma : page Projets et pages TiK•TaK et cineHOME, remplies à partir des sujets.
- cineHOME : pages ajoutées (recherche, lecteur, profil, déconnexion, connexion / inscription), passage au format 1280 × 832 et guide de style.
- TiK•TaK : story mapping refait dans la charte du projet, et copie publique du repo sans secrets ni base de données.
- Code : page d'accueil, page Projets et pages des études de cas, générées depuis un seul fichier de données.
- Animations : survol des cartes (décalage et ombre rouge) et transitions entre les pages (l'image de la carte grandit jusqu'à la page du projet).
- Agrandissement des images au clic (story mapping, MCD / MLD).
- Prototype cineHOME intégré dans la page, chargé seulement au clic.
- Images converties en WebP.
- Maquette mobile mise à jour avec les nouvelles pages.

### Ce qui a bloqué
- Le repo de TiK•TaK contenait des clés (Google, OpenRouter, Better Auth) dans le dossier dist : j'ai créé une copie propre et je dois changer ces clés.
- Le prototype cineHOME ne défilait pas jusqu'au footer dans le portfolio : les pages Figma étaient trop hautes, l'accueil défilait à l'horizontale et une image traînait hors du cadre.
- Les images en pleine largeur étaient floues sur les grands écrans : l'en-tête des pages projet est passé sur deux colonnes.
- Le README de Tacita affiche un mot de passe du back-office : je ne mets pas le lien du repo tant qu'il n'est pas changé.

### Décisions
- Contenu des projets dans un fichier TypeScript plutôt que dans PocketBase ou SQLite : trois projets ne justifient pas une base de données.
- Une seule page `[slug].astro` pour les trois études de cas.
- View Transitions natives du navigateur plutôt que le ClientRouter d'Astro, qui aurait cassé les scripts de l'intro, du menu et du formulaire.
- Mêmes cartes et même taille sur l'accueil et sur la page Projets.

### Reste à faire
- Vérifier le partage des fichiers Figma (« tout le monde avec le lien »).
- Préparer la soutenance du 19 novembre.


