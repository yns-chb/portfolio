// Contenu détaillé des études de cas, affiché par src/pages/projets/[slug].astro.
// Les infos de la carte (titre, image principale…) restent dans projets.ts :
// ici, seulement ce qui est propre à la page du projet.
import type { ImageMetadata } from 'astro';

// Tacita
import tacitaMoodboard from '../assets/projets/tacita/moodboard.webp';
import tacitaVerte from '../assets/projets/tacita/version-verte.webp';
import tacitaRouge from '../assets/projets/tacita/version-rouge.webp';
import tacitaSite from '../assets/projets/tacita/resultat-site.webp';
import tacitaProfil from '../assets/projets/tacita/resultat-profil.webp';
// TiK•TaK
import tiktakStoryMapping from '../assets/projets/tiktak/story-mapping.webp';
import tiktakMcd from '../assets/projets/tiktak/mcd.webp';
import tiktakMld from '../assets/projets/tiktak/mld.webp';
import tiktakConfigurateur from '../assets/projets/tiktak/configurateur.webp';
import tiktakSite from '../assets/projets/tiktak/resultat-site.webp';
import tiktakMobile from '../assets/projets/tiktak/resultat-mobile.webp';
// cineHOME
import cinehomePersona from '../assets/projets/cinehome/persona.webp';
import cinehomeArborescence from '../assets/projets/cinehome/arborescence.webp';
import cinehomeProfil from '../assets/projets/cinehome/profil.webp';
import cinehomeSeries from '../assets/projets/cinehome/resultat-series.webp';

export interface Lien {
  texte: string;
  href: string;
}

export interface Visuel {
  image: ImageMetadata;
  alt: string;
}

export interface Etude {
  fiche: { label: string; valeur?: string; liens?: Lien[] }[];
  contexte: string[];
  commande: { label: string; texte: string }[];
  role: {
    colonnes: { tag: string; sombre?: boolean; items: string[] }[];
    note?: string;
  };
  processus: string[];
  // Chaque étape affiche sa première image ; les suivantes s'ouvrent avec ← → dans l'agrandissement
  etapes: { legende: string; visuels: Visuel[] }[];
  choix: { titre: string; items: { nom: string; texte: string }[] };
  prototype?: Lien;
  resultat: {
    texte: string;
    liste?: string[];
    principal: Visuel;
    mobile?: Visuel;
    liens: Lien[];
  };
  bilan: string[];
}

const figma = {
  tacita: 'https://www.figma.com/design/Nqep1amiZJqXdWoQ631fYs/',
  tiktak: 'https://www.figma.com/design/j7u4znJPiXO0lGyweTsaJU/',
  cinehome: 'https://www.figma.com/design/YrBCFyoo4bh4ZoBbIe1XA0/',
};

export const etudes: Record<string, Etude> = {
  tacita: {
    fiche: [
      { label: "date_d'exécution", valeur: 'mars – juin 2026' },
      { label: 'type_de_mission', valeur: 'projet universitaire\n(équipe de trois)' },
      { label: 'mon_rôle', valeur: 'co-conception ui\nintégration front-end' },
      { label: 'stack_projet', valeur: 'figma · astro\ntailwind · pocketbase' },
      { label: 'liens', liens: [{ texte: 'maquette_figma', href: figma.tacita }] },
    ],
    contexte: [
      "Tacita est une application web pensée pour mobile, qui vise à démocratiser l'apprentissage de la Langue des Signes Française (LSF). Ce projet académique du BUT MMI (IUT de Montbéliard), réalisé en équipe de trois, devait transformer un apprentissage souvent rigide en une expérience ludique, avec des mécaniques de jeu (quiz, memory, jeux d'association) et un système de progression pour garder les utilisateurs motivés.",
    ],
    commande: [
      {
        label: 'Contraintes',
        texte:
          'une interface conçue uniquement pour mobile, une base de données fonctionnelle pour gérer les profils, et des mécaniques de gamification interactives.',
      },
      {
        label: 'Livrables',
        texte:
          'la modélisation de la base de données (MCD/MLD), les maquettes interactives sur Figma et un MVP codé, fonctionnel et déployé.',
      },
    ],
    role: {
      colonnes: [
        {
          tag: '[moi]',
          items: [
            'co-conception des écrans sur Figma',
            "définition de l'expérience utilisateur",
            'intégration front-end avec Astro',
          ],
        },
        {
          tag: "[l'équipe]",
          sombre: true,
          items: [
            'modélisation de la base de données (MCD)',
            'back-end et déploiement sur PocketBase',
            "co-conception de l'interface",
          ],
        },
      ],
    },
    processus: [
      "Le projet est parti des données. L'équipe a d'abord modélisé la base (MCD) pour gérer les leçons, les vidéos LSF et la progression des joueurs. Côté design, une première direction verte, inspirée de la forêt tropicale, a été abandonnée au profit d'une version rouge, qui affiche le profil du joueur (niveau, série de jours) en haut de chaque écran et propose des défis quotidiens plus concrets.",
      "J'ai ensuite pris en charge l'intégration front-end en Astro, composant par composant, en branchant progressivement les mini-jeux sur PocketBase.",
    ],
    etapes: [
      {
        legende: '01 · moodboard de départ',
        visuels: [
          {
            image: tacitaMoodboard,
            alt: 'Moodboard de départ de Tacita : forêt tropicale, palette de verts et de bruns, ombres chinoises faites avec les mains.',
          },
        ],
      },
      {
        legende: '02 · première direction, abandonnée',
        visuels: [
          {
            image: tacitaVerte,
            alt: "Première version verte de Tacita : écran d'accueil et choix de la difficulté du quiz.",
          },
        ],
      },
      {
        legende: '03 · version retenue',
        visuels: [
          {
            image: tacitaRouge,
            alt: "Version rouge retenue : le profil du joueur (pseudo, niveau, série de jours) s'affiche en haut de l'accueil et du quiz.",
          },
        ],
      },
    ],
    choix: {
      titre: 'Choix techniques',
      items: [
        {
          nom: 'astro',
          texte: "Son architecture en composants permet de séparer proprement chaque jeu, et le site reste léger à l'affichage.",
        },
        {
          nom: 'pocketbase',
          texte:
            "Un back-end tout-en-un, basé sur SQLite, qui gère l'authentification, le stockage des médias et l'enregistrement des scores sans serveur complexe à mettre en place.",
        },
        {
          nom: 'tailwind css',
          texte:
            "Il m'a permis de reproduire fidèlement la maquette mobile directement dans les composants, sans multiplier les fichiers CSS.",
        },
      ],
    },
    resultat: {
      texte: 'Tacita a été livrée sous forme de MVP fonctionnel et déployé. Le produit final comprend :',
      liste: [
        "19 écrans intégrés dans l'application, pensés uniquement pour mobile : leçons, jeux, profil, compte et abonnement, en plus des pages du site de présentation ;",
        '3 mini-jeux (memory, association, quiz) générés à partir des données de PocketBase ;',
        'une gestion complète du compte : modification du pseudo, photo de profil et personnalisation de la bannière.',
      ],
      principal: {
        image: tacitaSite,
        alt: "Page d'accueil du site de présentation de Tacita, avec le slogan « Ne reste plus dans le silence ».",
      },
      mobile: {
        image: tacitaProfil,
        alt: 'Écran profil de l’application sur mobile : photo, pseudo, bouton Modifier le profil et liste des paramètres.',
      },
      liens: [{ texte: 'maquette_figma', href: figma.tacita }],
    },
    bilan: [
      "Tacita m'a appris à travailler sur une application complète en équipe, en m'appuyant sur une base de données conçue par d'autres. Côté front, j'ai renforcé ma logique JavaScript avec les mini-jeux : gestion d'états, chronomètres, validation des réponses.",
      "J'en retiens surtout une méthode : partir des données et de la maquette avant de coder, et toujours vérifier que la technique sert l'expérience de l'utilisateur.",
    ],
  },

  tiktak: {
    fiche: [
      { label: "date_d'exécution", valeur: '2 – 5 novembre 2026' },
      { label: 'type_de_mission', valeur: 'saé 301 · semestre 3\n3 jours' },
      { label: 'mon_rôle', valeur: 'conception · développement\ndéploiement' },
      { label: 'stack_projet', valeur: 'figma · astro · daisyui\nsqlite · better auth\nopenrouter · vps' },
      {
        label: 'liens',
        liens: [
          { texte: 'maquette_figma', href: figma.tiktak },
          { texte: 'repository_github', href: 'https://github.com/yns-chb/tiktak' },
          { texte: 'tiktak.yanischouhib.fr', href: 'https://tiktak.yanischouhib.fr' },
        ],
      },
    ],
    contexte: [
      "TiK•TaK est une marque de montres au style raffiné, minimaliste et épuré, fabriquées en France, qui s'adresse aux 25-40 ans. L'objectif : impliquer l'utilisateur dans la création de son modèle et lui offrir une expérience originale. Il compose sa montre (bracelet, cadran rond ou carré, boîtier, matériaux, couleurs), l'enregistre, la commande, ou la décrit en langage naturel à une IA qui la configure pour lui.",
    ],
    commande: [
      {
        label: 'La commande',
        texte:
          'un projet de 3 jours avec quatre livrables. Une maquette Figma (personnalisation, compte utilisateur, fiche produit), le MCD / MPD et la base SQLite avec ses requêtes, le site Astro déployé en HTTPS sur un VPS avec connexion Google et déploiement automatique, et un document marketing (objectif SMART, nudges et contenus).',
      },
    ],
    role: {
      colonnes: [
        {
          tag: '[moi]',
          items: [
            'story mapping du parcours utilisateur',
            'maquette Figma et thème DaisyUI',
            'modélisation MCD / MPD et base SQLite (DataGrip), requêtes SQL',
            'site Astro : configurateur, comptes, montres enregistrées, commandes',
            'connexion Google (Better Auth) et configuration par IA',
            'déploiement sur VPS : HTTPS, service systemd, GitHub Actions',
          ],
        },
        {
          tag: '[partie mkg]',
          sombre: true,
          items: [
            'objectif marketing SMART',
            "barre de progression : effet de gradient d'objectif",
            '« Votre création » nommée par l’utilisateur : effet IKEA',
            '« Livraison offerte » sous le bouton Commander : effet du prix zéro',
            'rédaction des descriptions produits',
          ],
        },
      ],
    },
    // À relire : ce texte remplace le texte provisoire de la maquette Figma
    processus: [
      "Avant de dessiner, j'ai cartographié le parcours de l'utilisateur en story mapping, de la recherche du site au suivi de ses commandes : six étapes et les tâches de chacune. Ce découpage a donné les pages du site et les données à stocker.",
      "J'ai ensuite modélisé la base : une montre réunit plusieurs composants, et un même composant sert dans plusieurs montres, d'où la table de liaison possede. La maquette Figma est venue après. Le configurateur y est découpé en quatre étapes (cadran, boîtier, bracelet, finitions), avec le récapitulatif et le prix toujours visibles, et un assistant IA qui compose la montre à partir d'une description.",
    ],
    etapes: [
      {
        legende: '01 · story mapping du parcours',
        visuels: [
          {
            image: tiktakStoryMapping,
            alt: 'Story mapping de TiK•TaK : six étapes, de la recherche sur le web au suivi des commandes, avec les tâches de chaque étape.',
          },
        ],
      },
      {
        legende: '02 · modèle de données : MCD et MLD',
        visuels: [
          {
            image: tiktakMcd,
            alt: 'MCD de TiK•TaK : entités USER, MONTRE, COMPOSANT et COMMANDE, reliées par compose, possede, effectue et ligne de commande.',
          },
          {
            image: tiktakMld,
            alt: 'MLD de TiK•TaK : tables USER, MONTRE, COMPOSANT, COMMANDE, possede et ligne_de_commande avec leurs clés étrangères.',
          },
        ],
      },
      {
        legende: '03 · maquette du configurateur',
        visuels: [
          {
            image: tiktakConfigurateur,
            alt: "Maquette du configurateur : aperçu de la montre à gauche, assistant IA, choix du cadran en quatre étapes et récapitulatif du prix à droite.",
          },
        ],
      },
    ],
    choix: {
      titre: 'Choix techniques',
      items: [
        {
          nom: 'astro',
          texte:
            'Site, pages et routes API dans un seul projet, installé avec Bun. Le thème DaisyUI reprend les couleurs et les polices de la maquette.',
        },
        {
          nom: 'sqlite',
          texte:
            'Modélisée en MCD / MPD et créée avec DataGrip. Une montre réunit plusieurs composants, et un même composant sert dans plusieurs montres. La table COMPOSANT porte aussi la finition et la description : les textes sont en base, pas dans le code.',
        },
        {
          nom: 'ia',
          texte:
            "Configuration de la montre en langage naturel : Ollama (llama3.2) en local pendant le développement, un modèle gratuit d'OpenRouter en ligne.",
        },
      ],
    },
    resultat: {
      texte:
        "Le site est en ligne sur tiktak.yanischouhib.fr. Le parcours complet fonctionne : composer sa montre en quatre étapes avec un assistant IA pour les couleurs, l'enregistrer, la modifier, la commander et retrouver son historique.",
      principal: {
        image: tiktakSite,
        alt: "Page d'accueil du site TiK•TaK en ligne : « Votre montre, à votre image. » et deux montres personnalisées.",
      },
      mobile: {
        image: tiktakMobile,
        alt: "Page d'accueil de TiK•TaK sur mobile.",
      },
      liens: [
        { texte: 'maquette_figma', href: figma.tiktak },
        { texte: 'repository_github', href: 'https://github.com/yns-chb/tiktak' },
        { texte: 'tiktak.yanischouhib.fr', href: 'https://tiktak.yanischouhib.fr' },
      ],
    },
    bilan: [
      "Le plus difficile n'a pas été de coder, mais de mettre le site en ligne. Entre un port déjà utilisé par un autre projet sur le VPS, un déploiement automatique GitHub Actions qui échouait et des variables d'environnement mal copiées, j'ai passé plus de temps sur le serveur que sur le code. J'ai appris à diagnostiquer un problème côté serveur en lisant les logs et en testant étape par étape.",
      "Aujourd'hui, je déploierais dès le premier jour, je stabiliserais le modèle de données avant de coder, je garderais la maquette Figma à jour au fil du projet, et je séparerais les secrets du code dès le départ. C'est pour ça que le repo public est une version nettoyée, sans l'historique de la SAÉ.",
    ],
  },

  cinehome: {
    fiche: [
      { label: "date_d'exécution", valeur: '3 septembre –\n14 octobre 2026' },
      { label: 'type_de_mission', valeur: 'ressource r304\nculture du numérique\nbinôme · sur pc' },
      { label: 'mon_rôle', valeur: 'audit et persona en binôme\nmaquette et prototype' },
      { label: 'stack_projet', valeur: 'figma · audit ux\npersona · prototypage' },
      { label: 'liens', liens: [{ texte: 'prototype_figma', href: figma.cinehome }] },
    ],
    contexte: [
      "cineHOME est un concept de plateforme de streaming pensée pour les cinéphiles. Le projet est parti d'un audit UX/UI de Netflix, Prime Video et Disney+, réalisé en binôme avec Maxence Jot dans le cadre de la ressource R304. L'objectif : imaginer une plateforme qui met en avant les versions des films (final cut, director's cut), les restaurations et la synchronisation avec Letterboxd.",
    ],
    commande: [
      {
        label: 'La commande',
        texte:
          "en sept séances, auditer des plateformes de streaming d'un point de vue esthétique et ergonomique, définir le persona du cinéphile et ses attentes, puis concevoir une plateforme pensée pour lui. Le rendu : un dossier A4 avec l'écran d'accueil, au moins trois écrans clés, l'arborescence de la plateforme, et une présentation orale de 5 minutes.",
      },
    ],
    role: {
      colonnes: [
        {
          tag: '[mon rôle]',
          items: [
            'audit des plateformes et persona du cinéphile, en binôme',
            'maquette Figma et prototype interactif, seul',
            'pages ajoutées pour le portfolio : recherche, lecteur, profil, déconnexion, connexion / inscription',
          ],
        },
      ],
      note: "Projet en binôme avec Maxence Jot : l'audit et le persona ont été faits ensemble, Maxence a mis en forme le dossier. J'ai conçu seul la maquette et le prototype.",
    },
    processus: [
      "Avec Maxence, nous avons audité Netflix, Prime Video et Disney+ à travers le regard de Julien, notre persona, selon six critères : les genres, les affiches, le respect des œuvres, l'adéquation au cinéphile, la recherche et la notation. Constat : les trois plateformes sont pensées pour un consommateur passif. Les genres de patrimoine (western, film noir) sont absents, Netflix modifie les affiches par algorithme et impose la qualité vidéo, Prime Video mélange l'abonnement et la location, et partout la recherche est trop simple et les notes critiques ont disparu.",
      "cineHOME prend le contre-pied : un abonnement unique sans publicité, la VOSTFR par défaut, le choix du montage et de la résolution, les affiches d'origine grâce à TMDB, une recherche par décennie, réalisateur ou chef opérateur, et les avis de la presse et de Letterboxd à la place des algorithmes.",
    ],
    etapes: [
      {
        legende: '01 · persona et audit des plateformes',
        visuels: [
          {
            image: cinehomePersona,
            alt: "Fiche persona : Julien, 22 ans, étudiant passionné de cinéma, ses besoins et ses frustrations relevées pendant l'audit.",
          },
        ],
      },
      {
        legende: '02 · arborescence de la plateforme',
        visuels: [
          {
            image: cinehomeArborescence,
            alt: 'Arborescence de cineHOME : accueil, films, séries, cinémathèque, recherche, profil, connexion et inscription.',
          },
        ],
      },
      {
        legende: '03 · maquette finale',
        visuels: [
          {
            image: cinehomeProfil,
            alt: 'Page profil de cineHOME : compte Letterboxd synchronisé, statistiques de visionnage et reprise de la lecture de Blade Runner.',
          },
        ],
      },
    ],
    choix: {
      titre: 'Choix de conception',
      items: [
        { nom: 'letterboxd', texte: 'Synchronisation avec Letterboxd pour retrouver ses avis et ses films vus.' },
        {
          nom: 'versions',
          texte: "Choix de la version d'un film (final cut, director's cut, montage cinéma) directement sur sa fiche.",
        },
        { nom: 'prototype', texte: 'Prototype Figma navigable : recherche, fiche film, lecteur, profil et déconnexion.' },
      ],
    },
    prototype: { texte: 'tester_le_prototype', href: figma.cinehome },
    resultat: {
      texte:
        "Rendu le 14 octobre 2026 : un dossier en deux parties (audit, puis conception) et une maquette Figma interactive sur PC, présentée à l'oral.",
      principal: {
        image: cinehomeSeries,
        alt: 'Page Séries de cineHOME, avec une série mise en avant et les boutons Lecture et Ajouter à la cinémathèque.',
      },
      liens: [{ texte: 'prototype_figma', href: figma.cinehome }],
    },
    bilan: [
      "L'audit mené avec Maxence a été la vraie force du projet. En analysant Netflix, Prime Video et Disney+, puis en définissant Julien, un cinéphile exigeant, on s'est donné des critères précis. Chaque choix de la maquette répond à l'une de ses frustrations : affiches d'époque, titre original, choix du montage, recherche multicritères, avis Letterboxd. Côté design, je me suis volontairement éloigné des codes de Prime Video pour aller vers une esthétique de cinémathèque, avec des fonds sombres, une typographie soignée et des badges techniques.",
      "La principale difficulté a été de sortir des réflexes des plateformes de streaming. J'avais d'abord organisé la page Films en rangées par genre, avant de comprendre qu'elles entraient en conflit avec les filtres avancés : j'en ai fait une grande grille filtrable. Il a aussi fallu faire tenir beaucoup d'informations sur de petites cartes sans les surcharger.",
      "Avec le recul, je partirais de l'arborescence avant de dessiner les pages : j'aurais vu plus tôt qu'il manquait la fiche film et le lecteur. Je ferais aussi tester le prototype à quelques vrais cinéphiles, plutôt que de m'appuyer seulement sur un persona.",
    ],
  },
};
