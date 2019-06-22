import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerSearchComponent } from "./containers/customer-search/customer-search.component";
import { CustomerCreateComponent } from "./containers/customer-create/customer-create.component";

const customerRoutes: Routes = [
  { path: "purchasing/customer/search", component: CustomerSearchComponent },
  { path: "purchasing/customer/create", component: CustomerCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
