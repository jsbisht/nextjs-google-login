import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('MIDDLEWARE RUNNING')
  // Setting cookies on the response
  const response = NextResponse.next()
  // response.cookies.set('vercel', 'fast')

  // Getting cookies from the request
  // const cookie = request.cookies.get('vercel')

  // Deleting cookies
  // response.cookies.delete('vercel')
  // response.cookies.clear()

  return response
}

export const config = {
  matcher: '/api/auth/login'
}
