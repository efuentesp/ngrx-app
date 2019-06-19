import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./dashboard/header/header.component";
import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { ContentComponent } from "./dashboard/content/content.component";
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [CommonModule, ClarityModule],
  exports: [DashboardComponent]
})
export class UiModule {}
