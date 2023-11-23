import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { Action } from '../types/action'
import { IUserPayload, IUserState, USER_ACTION } from '../types/user'
import { initialState, reducer } from './reducers/UserReducer'

type Dispatch = React.Dispatch<Action<USER_ACTION, Partial<IUserPayload>>>

interface IUserContext {
  state: IUserState
  dispatch: Dispatch
}

export const UserContext = createContext<IUserContext>({
  state: initialState,
  dispatch: () => null,
})

interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = (): IUserContext => useContext(UserContext)
