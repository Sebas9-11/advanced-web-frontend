import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { Action } from '../types/action'
import { IAuthPayload, IAuthState, AUTH_ACTION } from '../types/auth'
import { initialState, reducer } from './reducers/AuthReducer'

type Dispatch = React.Dispatch<Action<AUTH_ACTION, Partial<IAuthPayload>>>

interface IAuthContext {
  state: IAuthState
  dispatch: Dispatch
}

export const AuthContext = createContext<IAuthContext>({
  state: initialState,
  dispatch: () => null,
})

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContext => useContext(AuthContext)
