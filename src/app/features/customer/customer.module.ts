import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerSearchComponent } from "./customer-search/customer-search.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerService } from "./services/customer.service";

@NgModule({
  declarations: [CustomerSearchComponent],
  imports: [CommonModule, CustomerRoutingModule],
  providers: [CustomerService]
})
export class CustomerModule {}
