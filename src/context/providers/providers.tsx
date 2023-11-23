import React from 'react'
import { UserProvider } from '../UserContext'

interface ProviderProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return <UserProvider>{children}</UserProvider>
}

export default Providers
