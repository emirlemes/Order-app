import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../../../shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule
  ]
})

export class DashboardModule {

}