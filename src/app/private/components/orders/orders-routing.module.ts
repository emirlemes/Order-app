import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../../../core/guard/auth.guard'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { OrdersComponent } from './orders.component'

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: OrdersComponent, children: [
      { path: ':id', component: OrderDetailComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {

}