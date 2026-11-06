# Portfolio — Yanis Forster

Mon portfolio, je suis étudiant en BUT MMI (parcours développement web) à l'IUT de Montbéliard.

Site en ligne : https://www.ton-domaine.fr

## Stack

| Outil | Rôle | Pourquoi |
|---|---|---|
| Astro | Framework, génération statique | Pages HTML statiques rapides, architecture en composants |
| Tailwind CSS v4 | Styles | Responsive rapide, thème personnalisé (`src/styles/global.css`) |
| JavaScript | Interactions | Menu mobile, formulaire de contact « terminal » |
| Fontsource | Polices (Anton, Space Mono, Inter) | Auto-hébergées : pas d'appel à Google (RGPD, performance) |
| PHP | Envoi du formulaire de contact | Exécuté chez Infomaniak, données en Suisse |
| @astrojs/sitemap | Référencement | Génère `sitemap-index.xml` |
| Infomaniak | Hébergement | Hébergeur européen, infrastructure en Suisse |

## Lancer le projet

```bash
npm install
npm run dev      
npm run build    
npm run preview  
```


## Structure

```
src/
  components/   Header, Footer, FicheInfo
  layouts/      BaseLayout (head, SEO, header, footer)
  pages/        une page = une route
  styles/       global.css (thème Tailwind)
public/         fichiers copiés tels quels (contact.php, robots.txt, favicon)
```

## Documents du projet

- [JOURNAL.md](JOURNAL.md) — journal de bord
- [IA.md](IA.md) — déclaration d'usage de l'IA
- [QUALITE.md](QUALITE.md) — grille de contrôle qualité
