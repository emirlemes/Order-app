import { Component } from '@angular/core'
import { logOutAction } from '../../../core/auth/store/auth.actions'
import { AppState } from '../../../store/app.reducer'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private store: Store<AppState>) { }


  onLogOut() {
    this.store.dispatch(logOutAction())
  }
}
