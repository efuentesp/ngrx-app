import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { PageComponent } from "./page/page.component";

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, ClarityModule],
  exports: [PageComponent]
})
export class ContentAreaModule {}
