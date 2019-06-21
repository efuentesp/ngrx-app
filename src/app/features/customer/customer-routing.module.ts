import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerSearchComponent } from "./containers/customer-search/customer-search.component";

const customerRoutes: Routes = [
  { path: "customer/search", component: CustomerSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
