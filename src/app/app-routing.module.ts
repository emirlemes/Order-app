import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./private/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'customers', loadChildren: () => import('./private/components/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'supplies', loadChildren: () => import('./private/components/supplies/supplies.module').then(m => m.SuppliesModule) },
  { path: 'orders', loadChildren: () => import('./private/components/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'reports', loadChildren: () => import('./private/components/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
