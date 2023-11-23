import { Action } from '../../types/action'
import { IUserPayload, IUserState, USER_ACTION } from '../../types/user'

export const initialState: IUserState = {
  currentUser: {
    employee_id: 0,
    rol_id: 0,
    name: '',
    last_name: '',
    status: false,
  },
}

export function reducer(
  state = initialState,
  action: Action<USER_ACTION, Partial<IUserPayload>>
): IUserState {
  switch (action.type) {
    case USER_ACTION.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload?.currentUser || initialState.currentUser,
      }
    default:
      return state
  }
}
