// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap()],
  site: 'https://zenith-delta-dusky.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: vercel()
})
