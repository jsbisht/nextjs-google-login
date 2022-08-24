import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw Error('useAuthContext must only be used within AuthContext')
  }

  return context
}
