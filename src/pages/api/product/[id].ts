import { db } from '@/database/provider'
import type { APIRoute } from 'astro'

export async function GET ({ params }: Parameters<APIRoute>[0]) {
  const id = params.id

  console.log('[api] id', id)

  if (!id) {
    console.error('[api] Falta especificar un id')
    
    const error = {
      msg: 'Falta especificar el id del producto'
    }
    
    return new Response(JSON.stringify(error), {
      headers: {
        'content-type': 'application/json'
      },
      status: 400
    })
  }
  
  let product
  try {
    product = await db.getProductById(id)
  } catch (err) {
    console.error(`[api] Error consiguiendo el producto ${id}`)
    console.error(err)

    const error = {
      msg: `Error consiguiendo el producto con id: ${id}`
    }
    
    return new Response(JSON.stringify(error), {
      headers: {
        'content-type': 'application/json'
      },
      status: 404,
      statusText: 'not_found'
    })
  }

  console.log('[api] product:', product)

  return new Response(JSON.stringify(product),  {
    headers: {
      'content-type': 'application/json'
    }
  })
}
