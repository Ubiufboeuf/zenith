import { defineMiddleware, sequence } from 'astro:middleware'

const ui = defineMiddleware((context, next) => {
  const isProd = import.meta.env.PROD
  
  if (context.url.pathname.startsWith('/ui') && isProd) {
    return context.redirect('/', 302)
  }
  
  next()
})

export const onRequest = sequence(ui)
