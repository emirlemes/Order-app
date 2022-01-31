import { Component, OnDestroy, OnInit } from '@angular/core'
import { autoLogin } from './core/auth/store/auth.actions'
import { AppState } from './store/app.reducer'
import { Store } from '@ngrx/store'
import { map, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) { }
  isLoggedIn = true
  userSubscription: Subscription | null = null

  ngOnInit(): void {
    this.userSubscription = this.store.select(state => state.auth)
      .pipe(map(auth => auth.user))
      .subscribe(user => {
        this.isLoggedIn = !!user
      })
    this.store.dispatch(autoLogin())
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
}
