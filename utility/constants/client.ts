import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID
