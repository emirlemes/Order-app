import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignedInGuard } from '../core/guard/signedIn.guard'
import { LogInComponent } from './components/auth/log-in/log-in.component'
import { SignUpComponent } from './components/auth/sign-up/sign-up.component'
import { FruitsComponent } from './components/fruits/fruits.component'
import { PublicComponent } from './public.component'

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: 'fruits', component: FruitsComponent },
      { path: 'meats', component: FruitsComponent },
      { path: 'dairy', component: FruitsComponent },
      { path: 'snacks', component: FruitsComponent },
      { path: 'drinks', component: FruitsComponent },
      { path: 'login', component: LogInComponent, canActivate: [SignedInGuard] },
      { path: 'sign-up', component: SignUpComponent, canActivate: [SignedInGuard] }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
