import type { NextRequest } from 'next/server'
import { googleAuthValidate } from './middlewares/google-auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname.startsWith('/api')) {
    await googleAuthValidate(request)
  }
}
