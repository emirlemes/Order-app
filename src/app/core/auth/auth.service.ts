import { Injectable } from '@angular/core'
import { AppState } from '../../store/app.reducer'
import { Store } from '@ngrx/store'
import { logOutAction } from './store/auth.actions'


@Injectable({ providedIn: 'root' })
export class AuthService {
  logoutTime: NodeJS.Timeout | null = null

  constructor(private store: Store<AppState>) { }

  clearLogoutTimer() {
    if (this.logoutTime) { clearInterval(this.logoutTime) }
  }

  setLogoutTimer(time: number) {
    this.logoutTime = setTimeout(() => {
      this.store.dispatch(logOutAction())
    }, time)
  }

}