import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators, } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { signUpStart } from '../store/auth.actions';

type ValidationErrors = {
  [key: string]: any;
};

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  loginValid: boolean = true;

  email: FormControl = new FormControl('', [Validators.required, Validators.email])
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6), this.matchValidator("passwordAgain", true)])
  passwordAgain: FormControl = new FormControl('', [Validators.required, Validators.minLength(6), this.matchValidator("password")])

  signUpForm: FormGroup

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.signUpForm = this.fb.group({
      email: this.email,
      password: this.password,
      passwordAgain: this.passwordAgain
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.signUpForm.value['email']
    const password = this.signUpForm.value['password']
    console.log(this.signUpForm);
    console.log(email, password);
    // this.store.dispatch(signUpStart({ email, password }))
  }

  matchValidator(
    matchTo: string,
    reverse?: boolean
  ): ValidatorFn {
    return (control: AbstractControl):
      ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value ===
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

}
