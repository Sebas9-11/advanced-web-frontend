import React from 'react'
import { AuthProvider } from '../AuthContext'

interface ProviderProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default Providers
