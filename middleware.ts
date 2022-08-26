import type { NextRequest } from 'next/server'
import { googleAuthValidate } from './middlewares/google-auth'

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  const { pathname } = request.nextUrl
  if (pathname.startsWith('/api')) {
    console.log('MIDDLEWARE RUNNING')
    console.log('googleAuth')
    await googleAuthValidate(request)
    console.log('MIDDLEWARE COMPLETED')
  } else {
    return
  }
}
