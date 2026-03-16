// * @ts-check
import { defineConfig } from 'astro/config'

import node from '@astrojs/node'
import cloudflare from '@astrojs/cloudflare'

import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'
import { readAdapterKey } from './src/lib/adapter'

const adapterKey = readAdapterKey()
console.log({ adapterKey })

const adapters = {
  node: node({
    mode: 'standalone'
  }),
  cloudflare: cloudflare({
    imageService: 'passthrough'
  })
}

export default defineConfig({
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: adapters[adapterKey]
})
