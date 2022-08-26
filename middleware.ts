import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { googleAuthValidate } from './middlewares/google-auth'
import { GOOGLE_TOKEN_COOKIE } from './utility/constants/app'

export function middleware(request: NextRequest) {
  console.log('MIDDLEWARE RUNNING')
  googleAuthValidate(request)
  console.log('another middelware')
}
