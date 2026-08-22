// src/lib/search/fuzzy.ts

/**
 * Calcula la distancia Damerau-Levenshtein restringida (Optimal String Alignment)
 * entre dos cadenas.
 * 
 * Permite: Inserción, Eliminación, Sustitución y Transposición de caracteres contiguos.
 * Optimizado para cero asignaciones de arrays multidimensionales en memoria.
 */
export function levenshteinDistance (a: string, b: string): number {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  // Optimización de espacio: aseguramos que 'b' sea la cadena más corta
  if (a.length < b.length) {
    const tmp = a
    a = b
    b = tmp
  }

  const lenA = a.length
  const lenB = b.length

  // Usamos TypedArrays (Int32Array) para ejecución ultra rápida en motores JS/Bun
  const v0 = new Int32Array(lenB + 1)
  const v1 = new Int32Array(lenB + 1)

  for (let j = 0; j <= lenB; j++) {
    v0[j] = j
  }

  for (let i = 0; i < lenA; i++) {
    v1[0] = i + 1

    for (let j = 0; j < lenB; j++) {
      const cost = a[i] === b[j] ? 0 : 1

      // Mínimo entre eliminación, inserción y sustitución
      let minCost = Math.min(
        v0[j + 1] + 1, // Eliminación
        v1[j] + 1,     // Inserción
        v0[j] + cost   // Sustitución
      )

      // Transposición (ej. "lo" -> "ol")
      if (i > 0 && j > 0 && a[i] === b[j - 1] && a[i - 1] === b[j]) {
        minCost = Math.min(minCost, v0[j - 1] + cost)
      }

      v1[j + 1] = minCost
    }

    // Intercambiamos los buffers para la siguiente fila
    for (let j = 0; j <= lenB; j++) {
      v0[j] = v1[j]
    }
  }

  return v0[lenB]
}

/**
 * Evalúa si una palabra del producto coincide de forma difusa con el token del usuario.
 * 
 * @param word Palabra del producto (ya normalizada sin tildes ni mayúsculas)
 * @param token Token tipeado por el usuario
 * @returns boolean si la palabra pasa la prueba difusa según su longitud
 */
export function isFuzzyMatch (word: string, token: string): boolean {
  // Ignoramos tokens de menos de 3 letras para evitar falsos positivos pesados
  if (token.length < 3) return false

  // Tolerancia según el largo del token
  const maxDistance = token.length > 6
    ? 3 : token.length > 3
      ? 2 : 1

  // Si la diferencia de largo entre palabra y token es mayor a la tolerancia, no puede matchear
  if (Math.abs(word.length - token.length) > maxDistance) {
    return false
  }

  return levenshteinDistance(word, token) <= maxDistance
}
