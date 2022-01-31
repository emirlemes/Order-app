import { Component } from '@angular/core'
import { logOutAction } from '../auth/store/auth.actions'
import { AppState } from '../store/app.reducer'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private store: Store<AppState>) { }


  onLogOut() {
    this.store.dispatch(logOutAction())
  }
}
