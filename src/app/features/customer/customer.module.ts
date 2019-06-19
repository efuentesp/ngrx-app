import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerSearchComponent } from "./customer-search/customer-search.component";
import { CustomerRoutingModule } from "./customer-routing.module";

@NgModule({
  declarations: [CustomerSearchComponent],
  imports: [CommonModule, CustomerRoutingModule]
})
export class CustomerModule {}
