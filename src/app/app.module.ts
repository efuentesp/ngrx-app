import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";

import { UiModule } from "src/app/ui/ui.module";
import { PurchasingModule } from "src/app/features/purchasing/purchasing.module";

import { RootStoreModule } from "./root-store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    RootStoreModule,
    PurchasingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
