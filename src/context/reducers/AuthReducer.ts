import { IAuthPayload, IAuthState, AUTH_ACTION } from '../../types/auth'
import { Action } from '../../types/action'

export const initialState: IAuthState = {
  isAuth: false,
}

export function reducer(
  state = initialState,
  action: Action<AUTH_ACTION, Partial<IAuthPayload>>
): IAuthState {
  switch (action.type) {
    case AUTH_ACTION.IS_AUTH:
      return { ...state, isAuth: action.payload?.isAuth || false }
    default:
      return state
  }
}
