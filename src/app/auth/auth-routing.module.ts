import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { AuthComponent } from "./auth.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: "", component: AuthComponent, redirectTo: "login" },
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}