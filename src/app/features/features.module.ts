import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";

import { FeaturesRoutingModule } from "./features-routing.module";
import { CustomerModule } from "./customer/customer.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule, CustomerModule, FeaturesRoutingModule]
})
export class FeaturesModule {}
