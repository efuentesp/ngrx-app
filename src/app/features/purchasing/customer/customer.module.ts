import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { CustomerRoutingModule } from "./customer-routing.module";

import { CustomerService } from "./customer.service";

import { CustomerSearchComponent } from "./containers/customer-search/customer-search.component";
import { CustomerCreateComponent } from "./containers/customer-create/customer-create.component";

import { ContentAreaModule } from "src/app/ui/content-area/content-area.module";

@NgModule({
  declarations: [CustomerSearchComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ClarityModule,
    ContentAreaModule
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
