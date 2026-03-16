/* eslint-disable */

export function readAdapterKey () {
  let key = 'node'
  
  try {
    const envKey = import.meta.env.ADAPTER
    if (envKey) key = envKey
  } catch {/* empty */}

  try {
    const envKey = process.env.ADAPTER
    if (envKey) key = envKey
  } catch {/* empty */}

  return key
}
