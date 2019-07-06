import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ClarityModule } from "@clr/angular";

import { NgrxFormsModule } from "ngrx-forms";

import { CustomerRoutingModule } from "./customer-routing.module";

import { CustomerService } from "./customer.service";

import { ContentAreaModule } from "src/app/ui/content-area/content-area.module";

import { CustomerSearchPageComponent } from "./containers/customer-search-page/customer-search-page.component";
import { CustomerCreatePageComponent } from "./containers/customer-create-page/customer-create-page.component";
import { CustomerUpdatePageComponent } from "./containers/customer-update-page/customer-update-page.component";

import { CustomerSearchComponent } from "./components/customer-search/customer-search.component";
import { CustomerSelectDialogComponent } from "./containers/customer-select-dialog/customer-select-dialog.component";

@NgModule({
  declarations: [
    CustomerSearchComponent,
    CustomerSearchPageComponent,
    CustomerCreatePageComponent,
    CustomerUpdatePageComponent,
    CustomerSelectDialogComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    NgrxFormsModule,
    ContentAreaModule
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
