import { NextRequest, NextResponse } from 'next/server'
import { GOOGLE_CLIENT_ID, GOOGLE_TOKEN_COOKIE } from '../utility/constants/app'

async function validate(request: NextRequest) {
  const tokenid =
    request.headers.get(GOOGLE_TOKEN_COOKIE) ??
    request.cookies.get(GOOGLE_TOKEN_COOKIE)
  if (tokenid) {
    try {
      const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenid}`
      const result = await fetch(url)
      const data = await result.json()
      const { aud } = data
      return aud === GOOGLE_CLIENT_ID
    } catch (error) {
      console.error(error)
    }
  }
  throw Error('Could not validate tokenId')
}

export async function googleAuthValidate(request: NextRequest) {
  let response = NextResponse.next()
  try {
    validate(request)
    response.cookies.set(
      GOOGLE_TOKEN_COOKIE,
      request.headers.get(GOOGLE_TOKEN_COOKIE)
    )
  } catch (error) {
    console.error(error)
    response = NextResponse.rewrite(request.nextUrl.pathname)
    response.cookies.delete(GOOGLE_TOKEN_COOKIE)
  } finally {
    response.headers.delete(GOOGLE_TOKEN_COOKIE)
    return response
  }
}
