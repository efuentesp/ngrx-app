import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerSearchComponent } from "./features/customer/customer-search/customer-search.component";

const routes: Routes = [
  { path: "customer/search", component: CustomerSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
