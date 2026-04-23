import { db } from '@/database/provider'

export async function GET () {
  let products
  try {
    products = await db.getProducts()
  } catch (err) {
    console.error('[api] Error consiguiendo los productos')
    console.error(err)

    const error = {
      msg: 'Error consiguiendo los productos'
    }
    
    return new Response(JSON.stringify(error), {
      headers: {
        'content-type': 'application/json'
      },
      status: 500,
      statusText: 'internal_server_error'
    })
  }

  return new Response(JSON.stringify(products),  {
    headers: {
      'content-type': 'application/json'
    }
  })
}
