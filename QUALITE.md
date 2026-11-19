# Qualité du portfolio

## 1. Accessibilité : le site est-il utilisable par tout le monde ?

Le site se parcourt entièrement au clavier et avec un lecteur d'écran, et il respecte les préférences du visiteur.

**Ce qui est en place**
- Structure : un seul `h1` par page, des titres dans l'ordre, des zones `header`, `main` et `footer`, et un lien « Aller au contenu » en premier élément.
- Clavier : le focus est visible partout (contour rouge de 3 px). Les cartes projet réagissent au focus comme au survol. Le menu mobile et l'agrandissement d'images se ferment avec Échap.
- Lecteurs d'écran : chaque image a un texte alternatif qui décrit ce qu'elle montre. Les filtres indiquent leur état (`aria-pressed`) et annoncent le nombre de projets affichés. Les liens qui ouvrent un nouvel onglet le signalent. Le curseur « _ » du terminal est caché aux lecteurs d'écran.
- Contrastes : le rouge #B70101 ne fait que 3:1 sur fond noir, donc j'utilise un rouge plus clair (#FF5C5C) pour le texte sur fond noir, qui passe le niveau AA (4,5:1).
- Animations : avec « réduire les animations » activé, l'intro, le clignotement, le survol des cartes et les transitions entre pages sont désactivés.
- Formulaire de contact : chaque champ a un libellé, la case de consentement est obligatoire, et les messages d'erreur sont annoncés (`role="status"`).

**Vérifications**
- [OUI] Navigation complète au clavier (Tab, Entrée, Échap) sur toutes les pages
- [OUI] Test avec un lecteur d'écran (NVDA ou VoiceOver) :
- [OUI] Score Accessibilité Lighthouse : accueil 100 / projets 100 / page projet 100 / contact 100

**Limite connue** : le prototype Figma intégré dépend de Figma et n'est pas accessible au clavier. Un lien l'ouvre aussi directement dans Figma.

## 2. Sobriété et performance : que coûte le site à charger, et pourquoi ?

Le site est statique : Astro génère du HTML à l'avance, donc le serveur ne calcule rien quand on visite une page, et il n'y a presque pas de JavaScript.

**Ce qui est en place**
- Pas de framework JavaScript côté client : seulement quelques petits scripts (menu, filtres, agrandissement, intro).
- Images converties en WebP et proposées en plusieurs tailles (`srcset`) : le navigateur télécharge celle qui correspond à l'écran. Elles sont chargées au défilement, sauf l'image principale.
- Le prototype Figma, qui pèse plusieurs Mo, ne se charge que si le visiteur clique dessus.
- Polices hébergées sur le site, limitées aux graisses utilisées.
- Fichiers CSS et JS mis en cache un an par le navigateur, et pages compressées par le serveur.
- Hébergement chez Infomaniak, hébergeur suisse dont les datacenters fonctionnent aux énergies renouvelables.

**Mesures**
| Page | Poids transféré | Requêtes | Lighthouse Performance | EcoIndex |
|---|---|---|---|---|
| Accueil | 0.203 mo | 10 | 100 | A 89/100 |
| Projets | 0.202 mo | 10 | 100 | A 90/100 |
| Page projet Tacita | 0.644 mo | 13 | 100 | A 84/100 |
| Page projet TikTak | 0.363 mo | 13 | 100 | A 85/100 |
| Page projet cineHome | 0.421 mo | 12 | 100 | A 86/100 |
| Contact | 0.114 mo | 7 | 100 | A 91/100 |



**Ce qui coûte le plus** : les captures d'écran des projets. C'est un choix assumé, parce qu'un portfolio doit montrer le travail. Je les ai limitées en taille et chargées seulement quand elles sont visibles.

## 3. Référencement : le site est-il compréhensible par une machine ?

**Ce qui est en place**
- Titre et description propres à chaque page, y compris les trois études de cas.
- Adresse canonique sur chaque page, pour éviter les doublons.
- `sitemap-index.xml` généré au build et déclaré dans `robots.txt`.
- Balises Open Graph : titre, description et adresse corrects quand on partage le site sur LinkedIn.
- HTML sémantique (titres hiérarchisés, `article` pour les cartes, `figure` pour les images) et attribut `lang="fr"`.
- Adresses lisibles : `/projets/tacita/`, `/a-propos/`, `/contact/`.
- Page 404 personnalisée.

**Vérifications**
- [ ] Score SEO Lighthouse : 100
- [ ] Toutes les pages sont dans le sitemap : https://dnsrobot.net/fr/sitemap-checker?url=https%3A%2F%2Fyanischouhib.fr%2F


## 4. Conformité juridique : ce que je dois à mes visiteurs et aux auteurs

**Aux visiteurs**
- Mentions légales : éditeur (nom, statut d'étudiant, contact) et hébergeur (Infomaniak, avec son adresse).
- Aucun cookie et aucun outil de mesure d'audience, donc pas de bandeau cookies. Les polices sont hébergées sur le site, sans appel à Google Fonts, ce qui évite d'envoyer l'adresse IP du visiteur à un tiers.
- Le prototype Figma n'est chargé qu'à la demande du visiteur : c'est lui qui choisit d'appeler Figma.
- Formulaire de contact : seulement les données utiles (nom, email, message), consentement explicite, pas d'enregistrement en base. Le message arrive par email et n'est pas réutilisé. Le site est en HTTPS.
- Les mentions légales expliquent ces traitements et le droit d'accès et de suppression (RGPD).

**Aux auteurs des contenus**
- Polices : Anton, Space Mono et Inter sont sous licence libre (SIL Open Font License), qui autorise leur intégration.
- Projets de groupe : Tacita (trois personnes) et l'audit cineHOME (avec Maxence Jot) sont présentés comme des travaux d'équipe, avec le rôle de chacun. Le dossier d'audit est signé par nous deux.
- Code : repos publics sans secrets ni données personnelles. Celui de TiK•TaK est une copie nettoyée.

**À faire**
- [ OUI ] Nom complet dans les mentions légales

