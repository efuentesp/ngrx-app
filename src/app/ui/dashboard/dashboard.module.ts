import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ClarityModule } from "@clr/angular";

import { DashboardComponent } from "./dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";
import { AlertAppLevelComponent } from "./alert-app-level/alert-app-level.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    AlertAppLevelComponent
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
