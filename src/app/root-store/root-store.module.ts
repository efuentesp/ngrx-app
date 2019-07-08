import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "src/environments/environment";

import { CustomerStoreModule } from "./purchasing-store/customer-store/customer-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    CustomerStoreModule
  ]
})
export class RootStoreModule {}
