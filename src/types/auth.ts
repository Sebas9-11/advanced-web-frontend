export enum AUTH_ACTION {
  IS_AUTH = 'IS_AUTH',
}

export interface IAuthState {
  isAuth: boolean
}

export interface IAuthPayload {
  isAuth: boolean
}
