import { createReducer, on } from '@ngrx/store'
import { User } from '../user.model'
import * as AuthActions from './auth.actions'

export interface AuthState {
  user: User | null,
  authError: string | null
  loading: boolean
}

const init: AuthState = {
  user: null,
  authError: null,
  loading: false
}

export const authReducer = createReducer(init,
  on(AuthActions.authenticateSuccess, (state, payload) => {
    const user = new User(payload.email, payload.userId, payload.token, payload.expirationDate)
    return {
      ...state,
      authError: null,
      user: user,
      loading: false
    }
  }),
  on(AuthActions.logOutAction, (state) => {
    return { ...state, user: null }
  }),
  on(AuthActions.authenticateFailed, (state, { message }) => {
    return { ...state, authError: message, loading: false }
  }),
  on(AuthActions.loginStart, (state) => {
    return { ...state, authError: null, loading: true }
  }),
  on(AuthActions.signUpStart, (state) => {
    return { ...state, authError: null, loading: true }
  }),
  on(AuthActions.clearError, (state) => {
    return { ...state, authError: null }
  }),
  on(AuthActions.autoLogin, (state) => {
    return { ...state }
  }),

)