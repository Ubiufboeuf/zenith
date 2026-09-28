const { env } = import.meta

export const {
  API_URL = env.PUBLIC_API_URL
} = import.meta.env

if (typeof window !== 'undefined') {
  console.log(import.meta.env)
}
