import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { ClarityModule } from "@clr/angular";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "src/environments/environment";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";

import { UiModule } from "src/app/ui/ui.module";
import { FeaturesModule } from "src/app/features/features.module";

//import { reducers, metaReducers } from "src/app/store/reducers";
import { AppEffects } from "src/app/store/effects/app.effects";
//import { CustomerEffects } from "src/app/store/effects/customer.effects";

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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    //StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
