// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // À remplacer par ton vrai nom de domaine : sert au sitemap et aux URL canoniques
  site: 'https://yanischouhib.fr',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
