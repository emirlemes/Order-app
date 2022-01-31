import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../auth/auth.guard'
import { CustomersDetailComponent } from './customers-detail/customers-detail.component'
import { CustomersListComponent } from './customers-list/customers-list.component'
import { CustomersComponent } from './customers.component'

const routes: Routes = [
  {
    path: '', component: CustomersComponent, canActivate: [AuthGuard], children: [
      { path: '', component: CustomersListComponent },
      { path: ':id', component: CustomersDetailComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {

}