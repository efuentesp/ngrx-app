import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { customerReducer } from "./customer.reducer";
import { CustomerStoreEffects } from "./customer.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("customer", customerReducer),
    EffectsModule.forFeature([CustomerStoreEffects])
  ],
  providers: [CustomerStoreEffects]
})
export class CustomerStoreModule {}
