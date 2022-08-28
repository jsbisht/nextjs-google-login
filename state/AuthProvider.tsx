import { useState } from 'react'
import { AuthProviderValue } from '../types/AuthProviderValue'
import { Props } from '../types/Props'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: Props) => {
  const [authData, setAuthData] = useState(null)

  const onLogin = (payload: any) => {
    setAuthData(payload)
  }

  const onLogout = () => {
    setAuthData(null)
  }

  const value: AuthProviderValue = { authData, onLogin, onLogout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
