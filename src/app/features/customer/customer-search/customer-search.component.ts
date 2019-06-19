import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../store/reducers";
import * as cutomerActions from "../../../store/actions/customer.actions";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
  styleUrls: ["./customer-search.component.scss"]
})
export class CustomerSearchComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new cutomerActions.FindAllCustomer());
  }
}
