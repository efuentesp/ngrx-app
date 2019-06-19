import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "../ui/pages/landing-page/landing-page.component";
import { PageNotFoundComponent } from "../ui/pages/page-not-found/page-not-found.component";

const featuresRoutes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(featuresRoutes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
