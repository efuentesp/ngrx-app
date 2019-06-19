import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";

import { CustomerModule } from "./customer/customer.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule, CustomerModule]
})
export class FeaturesModule {}
