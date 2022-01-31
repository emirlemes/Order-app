import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LogInComponent } from '../../public/components/log-in/log-in.component'
import { SignUpComponent } from '../../public/components/sign-up/sign-up.component'
import { SignedInGuard } from '../guard/signedIn.guard'

const routes: Routes = [
  { path: '', component: LogInComponent, redirectTo: 'login' },
  { path: 'login', component: LogInComponent, canActivate: [SignedInGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [SignedInGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}