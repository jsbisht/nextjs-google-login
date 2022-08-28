import { createContext, useContext } from 'react'
import { AuthProviderValue } from '../types/AuthProviderValue'

export const AuthContext = createContext<AuthProviderValue | null>(null)

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw Error('useAuthContext must only be used within AuthContext')
  }

  return context
}
