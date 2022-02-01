/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, } from '@angular/forms'
import { AppState } from 'src/app/store/app.reducer'
import { Store } from '@ngrx/store'
import { signUpStart } from '../../../../core/auth/store/auth.actions'

type ValidationErrors = {
  [key: string]: any;
};

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  loginValid = true

  signUpForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6), this.matchValidator('passwordAgain', true)]],
    'passwordAgain': ['', [Validators.required, Validators.minLength(6), this.matchValidator('password')]]
  })

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  get f(): { [key: string]: AbstractControl } { return this.signUpForm.controls }

  onSubmit() {
    if (!this.signUpForm) return

    const { email } = this.signUpForm.value
    const { password } = this.signUpForm.value

    this.store.dispatch(signUpStart({ email, password }))
  }

  matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
      ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl
        if (c) {
          c.updateValueAndValidity()
        }
        return null
      }
      return !!control.parent &&
        !!control.parent.value && control.value ===
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true }
    }
  }

}
