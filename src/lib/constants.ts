export const {
  VITE_HMR_HOST: HMR_HOST,
  VITE_HMR_PORT: HMR_PORT,
  PUBLIC_SERVER_URL: SERVER_URL
} = import.meta.env

export const ENDPOINTS = {
  PRODUCTS: `${SERVER_URL}/products`
}

export const DEFAULT_INTERVAL = 20 * 1000
