import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://glass-it.fr',
  compressHTML: true,
  build: {
    // La feuille globale fait ~7 ko compressés : l'inliner supprime la seule
    // requête encore bloquante pour le rendu, au prix de quelques ko par page.
    inlineStylesheets: 'always',
  },
});
