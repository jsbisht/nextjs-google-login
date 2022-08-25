import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID
export const AUTH_LOCAL_DATA = 'auth-local-data'
export const GOOGLE_TOKEN_COOKIE = 'google-token'
