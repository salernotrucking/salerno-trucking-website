import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://salernotrucking.com',
  output: 'static',
  adapter: netlify()
});
