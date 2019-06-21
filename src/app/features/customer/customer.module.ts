import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { CustomerRoutingModule } from "./customer-routing.module";

import { CustomerSearchComponent } from "./customer-search/customer-search.component";
import { CustomerCreateComponent } from "./customer-create/customer-create.component";

import { CustomerService } from "./services/customer.service";

import { customerReducer } from "./store/customer.reducer";
import { CustomerEffects } from "./store/customer.effects";

@NgModule({
  declarations: [CustomerSearchComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ClarityModule,
    StoreModule.forFeature("customerFeature", {
      customer: customerReducer
    }),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
