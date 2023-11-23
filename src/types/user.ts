import { employee } from './types'

export enum USER_ACTION {
  CURRENT_USER = 'CURRENT_USER',
}

export interface IUserState {
  currentUser: employee
}

export interface IUserPayload {
  currentUser: employee
}
