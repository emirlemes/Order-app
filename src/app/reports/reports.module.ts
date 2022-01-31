import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { ReportsRoutingModule } from './reports-routing.module'
import { ReportsComponent } from './reports.component'

@NgModule({
  declarations: [
    ReportsComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReportsRoutingModule,
    SharedModule
  ]
})

export class ReportsModule {

}