interface AuthProviderValue {
  authData: object | null
  onLogin: Function
  onLogout: Function
}

export type { AuthProviderValue }
