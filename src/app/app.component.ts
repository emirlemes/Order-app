import { Component, OnInit } from '@angular/core';
import { autoLogin } from './auth/store/auth.actions';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { User } from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  isLoggedIn: boolean = true;

  ngOnInit(): void {
    this.store.select(state => state.auth).pipe(map(auth => auth.user))
      .subscribe(user => this.isLoggedIn = !!user)
    this.store.dispatch(autoLogin());
  }
}
