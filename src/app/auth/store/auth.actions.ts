import { createAction, props } from '@ngrx/store'


export const authenticateSuccess = createAction(
  '[Auth] Login',
  props<{ email: string, userId: string, token: string, expirationDate: Date, redirect: boolean }>()
)

//LogIn
export const logOutAction = createAction('[Auth] LogOut')

export const loginStart = createAction('[Auth] Login start', props<{ email: string, password: string }>())

export const authenticateFailed = createAction('[Auth] Login fail', props<{ message: string }>())

//Sign Up
export const signUpStart = createAction('[Auth] Sign up start', props<{ email: string, password: string }>())

export const clearError = createAction('[Auth] Clear error')

export const autoLogin = createAction('[Auth] Auto LogIn')
