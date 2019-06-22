import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { Customer } from "../../customer.model";

import {
  RootStoreState,
  CustomerStoreActions,
  CustomerStoreSelectors
} from "src/app/root-store";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
  styleUrls: ["./customer-search.component.scss"]
})
export class CustomerSearchComponent implements OnInit {
  customerItems$: Observable<Customer[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    console.log("CustomerSearchComponent ngOnInit()");
    this.customerItems$ = this.store$.select(
      CustomerStoreSelectors.selectAllCustomerItems
    );

    this.error$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerError
    );

    this.isLoading$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerIsLoading
    );

    this.store$.dispatch(new CustomerStoreActions.FindAllRequest());
  }
}
