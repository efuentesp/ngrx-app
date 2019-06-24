import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerSearchPageComponent } from "./containers/customer-search-page/customer-search-page.component";
import { CustomerCreatePageComponent } from "./containers/customer-create-page/customer-create-page.component";

const customerRoutes: Routes = [
  {
    path: "purchasing/customer/search",
    component: CustomerSearchPageComponent
  },
  { path: "purchasing/customer/create", component: CustomerCreatePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
