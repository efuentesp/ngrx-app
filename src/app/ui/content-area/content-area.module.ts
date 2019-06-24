import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { PageComponent } from "./page/page.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [PageComponent, AlertComponent],
  imports: [CommonModule, ClarityModule],
  exports: [PageComponent, AlertComponent]
})
export class ContentAreaModule {}
