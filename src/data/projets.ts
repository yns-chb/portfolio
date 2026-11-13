
import type { ImageMetadata } from 'astro';
import tacita from '../assets/projets/tacita.webp';
import tiktak from '../assets/projets/tiktak.webp';
import cinehome from '../assets/projets/cinehome.webp';

export type Categorie = 'développement' | 'ux design';

export interface Projet {
  slug: string; 
  titre: string;
  sousTitre: string;
  description: string;
  categorie: Categorie;
  stack: string[];
  image: ImageMetadata;
  alt: string;
  cadrage?: string; 
}

export const projets: Projet[] = [
  {
    slug: 'tacita',
    titre: 'Tacita',
    sousTitre: 'Application LSF & gamification',
    description:
      "Co-conception et développement d'une application mobile gamifiée pour l'apprentissage de la Langue des Signes Française.",
    categorie: 'développement',
    stack: ['figma', 'astro', 'tailwind', 'pocketbase'],
    image: tacita,
    alt: "Page d'accueil du site de Tacita : deux personnes qui échangent en langue des signes, avec le slogan « Ne reste plus dans le silence ».",
  },
  {
    slug: 'tiktak',
    titre: 'TiK•TaK',
    sousTitre: 'Configurateur de montres',
    description:
      'Configurateur de montres personnalisées : connexion Google, configuration par IA en langage naturel, base SQLite et déploiement sur VPS.',
    categorie: 'développement',
    stack: ['figma', 'astro', 'sqlite', 'openrouter', 'vps'],
    image: tiktak,
    alt: "Page d'accueil de TiK•TaK : le titre « Votre montre, à votre image. » à côté de deux montres personnalisées.",
  },
  {
    slug: 'cinehome',
    titre: 'cineHOME',
    sousTitre: 'Streaming pour cinéphiles',
    description:
      "Audit UX de Netflix, Prime Video et Disney+, puis conception d'une plateforme pensée pour les cinéphiles, jusqu'au prototype Figma.",
    categorie: 'ux design',
    stack: ['figma', 'audit ux', 'prototypage'],
    image: cinehome,
    cadrage: 'center',
    alt: "Page d'accueil de cineHOME : un film mis en avant en grand, avec les boutons Lecture et Ajouter à la cinémathèque.",
  },
];


export const categories = [...new Set(projets.map((p) => p.categorie))];
