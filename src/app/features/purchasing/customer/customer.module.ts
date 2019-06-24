import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { ClarityModule } from "@clr/angular";

import { CustomerRoutingModule } from "./customer-routing.module";

import { CustomerService } from "./customer.service";

import { ContentAreaModule } from "src/app/ui/content-area/content-area.module";

import { CustomerSearchPageComponent } from "./containers/customer-search-page/customer-search-page.component";
import { CustomerCreatePageComponent } from "./containers/customer-create-page/customer-create-page.component";

import { CustomerSearchComponent } from "./components/customer-search/customer-search.component";

@NgModule({
  declarations: [
    CustomerSearchComponent,
    CustomerCreatePageComponent,
    CustomerSearchPageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ClarityModule,
    ContentAreaModule
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
