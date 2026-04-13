// * @ts-check
import { defineConfig } from 'astro/config'

import node from '@astrojs/node'
import cloudflare from '@astrojs/cloudflare'

import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'
import { readAdapterKey } from './src/lib/adapter'
import { getCertificates } from './src/lib/certificates'
import { HMR_HOST, HMR_PORT } from './src/lib/constants'

const adapterKey = readAdapterKey()
console.log({ adapterKey })

const { cert, key } = getCertificates(adapterKey)

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
    plugins: [tailwindcss()],
    server: adapterKey === 'node' ? {
      https: { cert, key },
      hmr: {
        host: HMR_HOST,
        port: HMR_PORT,
        protocol: 'wss'
      }
    } : {}
  },

  redirects: {
    '/': '/dashboard'
  },

  output: 'server',
  adapter: adapters[adapterKey]
})
