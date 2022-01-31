import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AppState } from 'src/app/store/app.reducer'
import { Store } from '@ngrx/store'
import { loginStart } from '../store/auth.actions'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginValid = true

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  get f(): { [key: string]: AbstractControl } { return this.loginForm.controls }

  onSubmit() {
    if (!this.loginForm) return

    const { email } = this.loginForm.value
    const { password } = this.loginForm.value
    this.store.dispatch(loginStart({ email, password }))
  }
}
