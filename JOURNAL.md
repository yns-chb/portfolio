# Journal de bord


## Semaine du 3 novembre 2026

**Ce que j'ai fait**
- Intégré les retours de la soutenance maquette dans Figma : ajout de [PROJETS] au menu, page Projets avec filtres, page projet détaillée en 6 sections (contexte, rôle, processus, choix techniques avec extrait de code, résultat, bilan).
- Mis en place le projet : Astro, Tailwind CSS v4, Bun, repository GitHub public.
- Développé le layout (header, footer), les pages À propos, Contact et Mentions légales, la page 404.
- Créé l'écran d'intro : écran d'entrée avec accès direct au portfolio, et animation « INITIALISATION DU PROJET » (boîte terminal qui s'étend en rouge puis noir).
- Ajouté le statut « recherche de stage » avec un voyant qui clignote, un header noir pour la page contact et un curseur `_` de terminal.
- Calé toutes les tailles de texte sur les styles de ma maquette Figma, avec des tailles qui s'adaptent à la largeur de l'écran.
- Mis le site en ligne sur yanischouhib.fr (Infomaniak, offre étudiante) avec un déploiement automatique par GitHub Actions à chaque push.
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

## Réseaux professionnels

