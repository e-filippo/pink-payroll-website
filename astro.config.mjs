// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinkpayroll.com',
  integrations: [
    sitemap({
      // Exclude landing pages and utility pages from sitemap
      filter: (page) => !page.includes('/lp/metart202603'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});