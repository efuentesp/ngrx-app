import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClarityModule } from "@clr/angular";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [LandingPageComponent, PageNotFoundComponent],
  imports: [CommonModule, ClarityModule],
  exports: [LandingPageComponent, PageNotFoundComponent]
})
export class CommonPagesModule {}
