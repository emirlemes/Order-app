import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrderListComponent } from './order-list/order-list.component'
import { OrderItemComponent } from './order-list/order-item/order-item.component'
import { OrderRoutingModule } from './orders-routing.module'
import { OrdersComponent } from './orders.component'

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderItemComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    OrderRoutingModule,
    SharedModule
  ]
})

export class OrdersModule {

}