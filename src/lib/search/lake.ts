import type { ProductWithCodes } from '@/types/products/productTypes'
import { tokenize } from './tokenizer'
import { isFuzzyMatch } from './fuzzy'

export const MATCH_MULTIPLIERS = {
  EXACT: 1.0,
  STARTS_WITH: 0.5,
  ENDS_WITH: 0.3,
  INCLUDES: 0.15,
  FUZZY: 0.05
} as const

export const FIELD_BASE_WEIGHTS = {
  MAIN_CODE: 1000,
  CODE: 800,
  TITLE: 300,
  CATEGORY: 200,
  BRAND: 150,
  SUBTITLE: 50,
  PROVIDER: 30
} as const

export type FieldType = keyof typeof FIELD_BASE_WEIGHTS

export interface ScoredResult<T> {
  item: T
  score: number
}

function getFieldScore (text: string, token: string, field: FieldType): number {
  if (!text || !token) return 0
  const base = FIELD_BASE_WEIGHTS[field]

  if (text === token) return base * MATCH_MULTIPLIERS.EXACT
  if (text.startsWith(token)) return base * MATCH_MULTIPLIERS.STARTS_WITH
  if (text.endsWith(token)) return base * MATCH_MULTIPLIERS.ENDS_WITH
  if (text.includes(token)) return base * MATCH_MULTIPLIERS.INCLUDES


  // Fuzzy Search (Excluimos códigos para no generar falsos positivos en lectores)
  if (field !== 'MAIN_CODE' && field !== 'CODE') {
    const words = text.split(' ')
    for (const word of words) {
      if (isFuzzyMatch(word, token)) {
        return base * MATCH_MULTIPLIERS.FUZZY
      }
    }
  }

  return 0
}

export function weighProduct (product: ProductWithCodes, tokens: string[]): number {
  if (tokens.length === 0) return 0

  let totalScore = 0

  // Pre-procesado de texto
  const normTitle = tokenize(product.title).join(' ')
  const normSubtitle = product.subtitle ? tokenize(product.subtitle).join(' ') : ''
  const normBrand = product.brand ? tokenize(product.brand).join(' ') : ''
  const normProvider = product.provider ? tokenize(product.provider).join(' ') : ''
  const normCategory = product.category ? tokenize(product.category).join(' ') : ''

  const normCodes = (product.codes ?? [])
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map(c => ({
      code: tokenize(c.code)[0] ?? '',
      isMain: c.isMain
    }))

  for (const token of tokens) {
    let tokenScore = 0

    // 1. Códigos
    for (const c of normCodes) {
      const field = c.isMain ? 'MAIN_CODE' : 'CODE'
      tokenScore += getFieldScore(c.code, token, field)
    }

    // 2. Resto de campos (Líneas comprimidas)
    tokenScore += getFieldScore(normTitle, token, 'TITLE')
    tokenScore += getFieldScore(normBrand, token, 'BRAND')
    tokenScore += getFieldScore(normSubtitle, token, 'SUBTITLE')
    tokenScore += getFieldScore(normProvider, token, 'PROVIDER')
    tokenScore += getFieldScore(normCategory, token, 'CATEGORY')

    totalScore += tokenScore
  }

  return totalScore
}

export function searchLake<T extends ProductWithCodes> (items: T[], query: string): T[] {
  const tokens = tokenize(query)
  if (tokens.length === 0) return items

  const scoredResults: ScoredResult<T>[] = []

  for (const item of items) {
    const score = weighProduct(item, tokens)
    if (score > 0) scoredResults.push({ item: { ...item, __score__: score }, score })
  }

  return scoredResults
    .sort((a, b) => b.score - a.score)
    .map(result => result.item)
}
