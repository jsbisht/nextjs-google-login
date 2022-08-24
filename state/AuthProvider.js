import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null)

  const onLogin = (payload) => {
    setAuthData(payload)
  }

  const onLogout = () => {
    setAuthData(null)
  }

  const value = { authData, onLogin, onLogout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
