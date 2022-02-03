import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { AppState } from 'src/app/store/app.reducer'
import { Store } from '@ngrx/store'
import { loginStart } from '../../../../core/auth/store/auth.actions'
import { map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  errorMessage = ''
  loginValid = true

  loginForm = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(s => s.auth).pipe(map((data) => {
      return data.authError
    }), tap((errorMessage) => {
      this.errorMessage = errorMessage ?? ''
    })).subscribe()
  }


  get f(): { [key: string]: AbstractControl } { return this.loginForm.controls }

  onSubmit() {
    if (!this.loginForm) return

    const { email } = this.loginForm.value
    const { password } = this.loginForm.value

    this.store.dispatch(loginStart({ email, password }))
  }
}
