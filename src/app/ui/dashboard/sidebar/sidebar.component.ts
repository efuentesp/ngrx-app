import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RootStoreState } from "src/app/root-store";
import { Observable } from "rxjs";
import { selectUrl } from "src/app/root-store/root-store.selectors";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  selectUrl$: Observable<string>;

  constructor(private store$: Store<RootStoreState.AppState>) {}

  ngOnInit() {
    this.selectUrl$ = this.store$.select(selectUrl);

    this.selectUrl$.subscribe(url => console.log(url));
  }

  // private isActivePath(pathName: string): string {
  //   return this.selectUrl$.subscribe(url => {
  //     if (url == pathName) {
  //       return "active";
  //     } else {
  //       return "inactive";
  //     }
  //   });
  // }
}
