import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";

import { PurchasingRoutingModule } from "./purchasing-routing.module";
import { CustomerModule } from "./customer/customer.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    CustomerModule,
    PurchasingRoutingModule
  ]
})
export class PurchasingModule {}
