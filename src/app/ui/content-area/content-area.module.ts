import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { PageComponent } from "./page/page.component";
import { AlertComponent } from "./modal-alert/modal-alert.component";
import { NgrxFormAlertComponent } from "./form-alert/form-alert.component";

import { NgrxInputComponent } from "./ngrx-form-components/ngrx-input/ngrx-input.component";
import { NgrxClrInputContainerDirective } from "./ngrx-form-components/ngrx-input/ngrx-clr-input-container.directive";

@NgModule({
  declarations: [
    PageComponent,
    AlertComponent,
    NgrxFormAlertComponent,
    NgrxInputComponent,
    NgrxClrInputContainerDirective
  ],
  imports: [CommonModule, ClarityModule],
  exports: [
    PageComponent,
    AlertComponent,
    NgrxFormAlertComponent,
    NgrxInputComponent,
    NgrxClrInputContainerDirective
  ]
})
export class ContentAreaModule {}
