import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Store } from "@ngrx/store";
import {
  RootStoreState,
  CustomerStoreSelectors,
  CustomerStoreActions
} from "src/app/root-store";
import { Observable } from "rxjs";

import { Customer } from "../../customer.model";

@Component({
  selector: "app-customer-search-page",
  templateUrl: "./customer-search-page.component.html",
  styleUrls: ["./customer-search-page.component.scss"]
})
export class CustomerSearchPageComponent implements OnInit {
  customerItems$: Observable<Customer[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  isDeleteAlertVisible: boolean = false;

  selectedCustomer: Customer = null;

  constructor(
    private store$: Store<RootStoreState.State>,
    private router: Router
  ) {}

  ngOnInit() {
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

  onEditCustomerAction(customer: Customer) {
    //console.log("Edit Customer:", customer);
    this.selectedCustomer = customer;
    this.router.navigate(["/purchasing/customer/update/" + customer.id]);
  }

  onDeleteCustomerAction(customer: Customer) {
    //console.log("Delete Customer:", customer);
    this.selectedCustomer = customer;
    this.isDeleteAlertVisible = true;
  }

  onConfirmDeleteCustomerAlert() {
    this.isDeleteAlertVisible = false;
    this.store$.dispatch(
      new CustomerStoreActions.DeleteRequest({ id: this.selectedCustomer.id })
    );
  }

  onCancelDeleteCustomerAlert() {
    this.isDeleteAlertVisible = false;
  }
}
