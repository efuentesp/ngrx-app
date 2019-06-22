import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "src/app/ui/pages/landing-page/landing-page.component";
import { PageNotFoundComponent } from "src/app/ui/pages/page-not-found/page-not-found.component";

const purchasingRoutes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(purchasingRoutes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule {}
