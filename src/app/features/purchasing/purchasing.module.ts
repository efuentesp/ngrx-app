import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchasingRoutingModule } from "./purchasing-routing.module";
import { CustomerModule } from "./customer/customer.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomerModule, PurchasingRoutingModule]
})
export class PurchasingModule {}
