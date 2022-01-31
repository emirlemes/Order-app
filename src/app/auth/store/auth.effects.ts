import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { environment } from 'src/environments/environment'
import { AuthService } from '../auth.service'
import { User } from '../user.model'
import * as AuthActions from './auth.actions'

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName?: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts'
  key: string = environment.api_key

  constructor(private actions$: Actions, private http: HttpClient, private router: Router, private authService: AuthService) { }

  authSignUp = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUpStart),
      switchMap((authData) => {
        return this.http.post<AuthResponse>(`${this.url}:signUp?key=${this.key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).pipe(
          map((resData) => {
            return this.handleAuthResponse(resData)
          }),
          catchError(err => {
            return of(AuthActions.authenticateFailed({ message: this.handleError(err) }))
          })
        )
      })
    ))
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      switchMap((authData) => {
        return this.http.post<AuthResponse>(`${this.url}:signInWithPassword?key=${this.key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).pipe(
          map(resData => {
            return this.handleAuthResponse(resData)
          }),
          catchError((error) => {
            return of(AuthActions.authenticateFailed({ message: this.handleError(error) }))
          })
        )
      })
    ))

  authAutoLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.autoLogin),
    map(() => {
      const user = JSON.parse(localStorage.getItem('userData') || 'null')

      if (!user) { return { type: 'DUMMY' } }

      const storageUser = new User(
        user.email,
        user.id,
        user._token,
        new Date(user._tokenExpirationDate))

      if (!storageUser.token) { return { type: 'DUMMY' } }

      const expirationDate = new Date(user._tokenExpirationDate).getTime() - new Date().getTime()
      this.authService.setLogoutTimer(expirationDate)

      return AuthActions.authenticateSuccess({
        email: storageUser.email,
        userId: storageUser.id,
        token: storageUser.token,
        expirationDate: new Date(user._tokenExpirationDate),
        redirect: false
      })
    })))

  authRedirect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.authenticateSuccess),
    tap((authSuccessData) => {
      if (authSuccessData.redirect)
        this.router.navigate(['/'])
    })), { dispatch: false })

  authLogOutClear = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logOutAction),
    tap(() => {
      this.authService.clearLogoutTimer()
      localStorage.removeItem('userData')
      this.router.navigate(['/auth'])
    })), { dispatch: false })


  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred'
    console.log(errorResponse)
    if (!errorResponse.error || !errorResponse.error.error) {
      return errorMessage
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS': errorMessage = 'Email already exists'; break
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.'
        break
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
        break
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found please sign up first'
        break
      case 'INVALID_PASSWORD':
        errorMessage = 'Password is not valid'
        break
      case 'USER_DISABLED':
        errorMessage = 'The account has been disabled by an administrator.'
        break
    }
    return errorMessage
  }

  private handleAuthResponse(resData: AuthResponse) {
    const expireDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000))

    this.authService.setLogoutTimer(+resData.expiresIn * 1000)

    const userToStore = new User(resData.email, resData.localId, resData.idToken, expireDate)
    localStorage.setItem('userData', JSON.stringify(userToStore))

    return AuthActions.authenticateSuccess({
      email: resData.email,
      userId: resData.localId,
      token: resData.idToken,
      expirationDate: expireDate,
      redirect: true
    })
  }
}


