import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../../shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { LogInComponent } from '../../public/components/log-in/log-in.component'
import { SignUpComponent } from '../../public/components/sign-up/sign-up.component'

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})

export class AuthModule {

}