import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { SuppliesComponent } from "./supplies.component";
import { SuppliesListComponent } from "./supplies-list/supplies-list.component";
import { SuppliesEditComponent } from "./supplies-edit/supplies-edit.component";
import { SuppliesRoutingModule } from "./supplies-routing.module";

@NgModule({
  declarations: [
    SuppliesComponent,
    SuppliesListComponent,
    SuppliesEditComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    SuppliesRoutingModule,
    SharedModule
  ]
})

export class SuppliesModule {

}