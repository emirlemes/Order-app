import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NavbarComponent } from './navbar.component'

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) },
      { path: 'supplies', loadChildren: () => import('../supplies/supplies.module').then(m => m.SuppliesModule) },
      { path: 'orders', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
      { path: 'reports', loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule) },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule {

}