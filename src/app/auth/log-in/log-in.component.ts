import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store'
import { loginStart } from '../store/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginValid: boolean = true;
  loginForm: FormGroup | null = null

  email: FormControl = new FormControl('', Validators.required)
  password: FormControl = new FormControl('', Validators.required)

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.init()
  }

  ngOnInit(): void {
  }

  init() {
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  onSubmit(form: NgForm) {
    const email = form.value['email']
    const password = form.value['password']
    this.store.dispatch(loginStart({ email, password }))
  }
}
