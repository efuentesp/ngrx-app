import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as cutomerActions from "../store/customer.actions";

import { Customer } from "../models/customer.model";
import { CustomerState } from "../store/customer.reducer";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
  styleUrls: ["./customer-search.component.scss"]
})
export class CustomerSearchComponent implements OnInit {
  customerList: Customer[];

  constructor(private store: Store<{ customerList: Customer[] }>) {}

  ngOnInit() {
    this.store.dispatch(new cutomerActions.FindAllCustomer());

    this.store
      .select<any>((state: any) => state.customerFeature) // no strings here
      .subscribe((customerState: CustomerState) => console.log(customerState));
  }
}
