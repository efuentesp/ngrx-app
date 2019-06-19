import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ClarityModule } from "@clr/angular";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./dashboard/header/header.component";
import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { ContentComponent } from "./dashboard/content/content.component";
import { AlertAppLevelComponent } from "./dashboard/alert-app-level/alert-app-level.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    AlertAppLevelComponent,
    PageNotFoundComponent,
    LandingPageComponent
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
  exports: [DashboardComponent]
})
export class UiModule {}
