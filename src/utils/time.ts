/* eslint-disable @typescript-eslint/no-explicit-any */

export const sleep = async (ms: number) => await new Promise((res) => setTimeout(res, ms))

export function debounce<T extends (...args: any[]) => any> (cb: T, timeout: number): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null
  
  return function (this: T, ...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      return cb.apply(this, args)
    }, timeout)
  }
}

export function debounceAsync<T extends (...args: any[]) => any> (cb: T, timeout: number): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  let timeoutId: number | null = null
  let rejectPrevious: ((reason?: any) => void) | null = null
  
  return function (this: any, ...args: Parameters<T>[]) {
    if (timeoutId) clearTimeout(timeoutId)
    if (rejectPrevious) {
      rejectPrevious(new Error('Debounced: llamada cancelada por una nueva'))
    }
    
    return new Promise((resolve, reject) => {
      rejectPrevious = reject
      
      timeoutId = setTimeout(async () => {
        try {
          const result = await cb.apply(this, args)
          resolve(result)
        } catch (err) {
          reject(err)
        } finally {
          rejectPrevious = null
        }
      }, timeout)
    })
  }
}
