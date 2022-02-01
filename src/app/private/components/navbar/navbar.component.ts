import { Component } from '@angular/core'
import { logOutAction } from '../../../core/auth/store/auth.actions'
import { AppState } from '../../../store/app.reducer'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>) { }


  onLogOut() {
    this.store.dispatch(logOutAction())
  }


}
