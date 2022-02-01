import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../../../shared/shared.module'
import { NavbarRoutingModule } from './navbar-routing.module'
import { NavbarComponent } from './navbar.component'

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    NavbarRoutingModule,
    SharedModule
  ]
})

export class NavbarModule {

}