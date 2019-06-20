import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { ClarityModule } from "@clr/angular";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UiModule } from "./ui/ui.module";
import { FeaturesModule } from "./features/features.module";

import { reducers, metaReducers } from "./store/reducers";
import { AppEffects } from "./store/effects/app.effects";
import { CustomerEffects } from "./store/effects/customer.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    FeaturesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, CustomerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
