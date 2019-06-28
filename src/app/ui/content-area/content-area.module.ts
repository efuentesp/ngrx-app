import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { PageComponent } from "./page/page.component";
import { AlertComponent } from "./alert/alert.component";
import { NgrxInputComponent } from "./ngrx-form-components/ngrx-input/ngrx-input.component";
import { NgrxInputDirective } from "./ngrx-form-components/ngrx-input/ngrx-input.directive";

@NgModule({
  declarations: [
    PageComponent,
    AlertComponent,
    NgrxInputComponent,
    NgrxInputDirective
  ],
  imports: [CommonModule, ClarityModule],
  exports: [
    PageComponent,
    AlertComponent,
    NgrxInputComponent,
    NgrxInputDirective
  ]
})
export class ContentAreaModule {}
