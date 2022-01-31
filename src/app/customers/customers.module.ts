import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { CustomersComponent } from './customers.component'
import { CustomersListComponent } from './customers-list/customers-list.component'
import { CustomersDetailComponent } from './customers-detail/customers-detail.component'
import { CustomersRoutingModule } from './customers-router.module'
import { CustomerItemComponent } from './customers-list/customer-item/customer-item.component'

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersDetailComponent,
    CustomerItemComponent,
    CustomersComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CustomersRoutingModule,
    SharedModule
  ]
})

export class CustomersModule { }