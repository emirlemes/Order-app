import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { SuppliesEditComponent } from "./supplies-edit/supplies-edit.component";
import { SuppliesComponent } from "./supplies.component";

const routes: Routes = [
  {
    path: '', component: SuppliesComponent, children: [
      { path: ':id', component: SuppliesEditComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliesRoutingModule {

}