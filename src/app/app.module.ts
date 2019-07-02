import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localeEsMx from "@angular/common/locales/es-MX";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";

import { DashboardModule } from "src/app/ui/dashboard/dashboard.module";

import { PurchasingModule } from "src/app/features/purchasing/purchasing.module";

import { RootStoreModule } from "./root-store";

registerLocaleData(localeEsMx);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    RootStoreModule,
    PurchasingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-MX" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
