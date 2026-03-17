import { readFileSync } from 'node:fs'

export function getCertificates (adapterKey) {
  let cert, key

  if (adapterKey === 'node') {
      cert = readFileSync('.cert/server.crt')
      key = readFileSync('.cert/server.key')
  }
  
  return { cert, key }
}
