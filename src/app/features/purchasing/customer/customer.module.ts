import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { CustomerRoutingModule } from "./customer-routing.module";

import { CustomerSearchComponent } from "./containers/customer-search/customer-search.component";
import { CustomerCreateComponent } from "./containers/customer-create/customer-create.component";

import { CustomerService } from "./customer.service";
import { PageComponent } from "src/app/ui/dashboard/page/page.component";

@NgModule({
  declarations: [
    CustomerSearchComponent,
    CustomerCreateComponent,
    PageComponent
  ],
  imports: [CommonModule, CustomerRoutingModule, ClarityModule],
  providers: [CustomerService]
})
export class CustomerModule {}
