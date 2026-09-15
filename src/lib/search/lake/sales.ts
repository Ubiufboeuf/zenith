import type { Sale } from '@/types/sales/saleTypes'
import { tokenize } from '../tokenizer'
import { isFuzzyMatch } from '../fuzzy'
import { getSaleDocumentLabel } from '@/utils/labels'

export const MATCH_MULTIPLIERS = {
  EXACT: 1.0,
  STARTS_WITH: 0.5,
  ENDS_WITH: 0.3,
  INCLUDES: 0.15,
  FUZZY: 0.05
} as const

export const FIELD_BASE_WEIGHTS = {
  DOCUMENT_NUMBER: 1000,
  TYPE: 800,
  CUSTOMER: 300,
  STATUS: 200,
  PAYMENT: 150,
  TOTAL: 60,
  SUBTOTAL: 50,
  CURRENCY: 30
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
  const words = text.split(' ')
  for (const word of words) {
    if (isFuzzyMatch(word, token)) {
      return base * MATCH_MULTIPLIERS.FUZZY
    }
  }

  return 0
}

export function weighSale (sale: Sale, tokens: string[]): number {
  if (tokens.length === 0) return 0

  let totalScore = 0

  const label = getSaleDocumentLabel(sale.documentType, sale.saleType)
  
  const normDocumentNumber = sale.documentNumber ? tokenize(sale.documentNumber).join(' ') : ''
  const normDocumentNumberWithHashtag = sale.documentNumber ? tokenize(`#${sale.documentNumber}`).join(' ') : ''
  const normType = label ? tokenize(label).join(' ') : ''
  const normStatus = sale.status ? tokenize(sale.status).join(' ') : ''
  const normPayment = sale.paymentStatus ? tokenize(sale.paymentStatus).join(' ') : ''
  const normTotal = sale.total ? tokenize(String(sale.total)).join(' ') : ''
  const normSubTotal = sale.subtotal ? tokenize(String(sale.subtotal)).join(' ') : ''
  const normCurrency = sale.currency ? tokenize(String(sale.currency)).join(' ') : ''

  for (const token of tokens) {
    let tokenScore = 0

    if (token.includes('#')) tokenScore += getFieldScore(`#${normDocumentNumberWithHashtag}`, token, 'DOCUMENT_NUMBER')
    else tokenScore += getFieldScore(normDocumentNumber, token, 'DOCUMENT_NUMBER')
    
    tokenScore += getFieldScore(normType, token, 'TYPE')
    tokenScore += getFieldScore(normStatus, token, 'STATUS')
    tokenScore += getFieldScore(normPayment, token, 'PAYMENT')
    tokenScore += getFieldScore(normTotal, token, 'TOTAL')
    tokenScore += getFieldScore(normSubTotal, token, 'SUBTOTAL')
    tokenScore += getFieldScore(normCurrency, token, 'CURRENCY')

    totalScore += tokenScore
  }

  return totalScore
}

export function lakeSearch<T extends Sale> (items: T[], query: string): T[] {
  const tokens = tokenize(query)
  if (tokens.length === 0) return items

  const scoredResults: ScoredResult<T>[] = []

  for (const item of items) {
    const score = weighSale(item, tokens)
    if (score > 0) scoredResults.push({ item: { ...item, __score__: score }, score })
  }

  return scoredResults
    .sort((a, b) => b.score - a.score)
    .map(result => result.item)
}
