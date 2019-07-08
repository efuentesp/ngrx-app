import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { Customer } from "../../customer.model";
import { Store } from "@ngrx/store";
import {
  RootStoreState,
  CustomerStoreSelectors,
  CustomerStoreActions
} from "src/app/root-store";

@Component({
  selector: "app-customer-select-dialog",
  templateUrl: "./customer-select-dialog.component.html",
  styleUrls: ["./customer-select-dialog.component.scss"]
})
export class CustomerSelectDialogComponent implements OnInit {
  @Input() title: string = "";
  @Input() isDialogVisible: boolean = false;

  @Output() onClickSelect = new EventEmitter();
  @Output() onClickCancel = new EventEmitter();

  customerItems$: Observable<Customer[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  selectedCustomer: Customer = null;

  constructor(private store$: Store<RootStoreState.AppState>) {}

  ngOnInit() {
    console.log("CustomerSelectDialogComponent ngOnInit()");
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

  _onSelectionChanged(customer: Customer) {
    // console.log("CustomerSelectDialogComponent _onSelectionChanged()", customer);
    this.selectedCustomer = customer;
  }

  _onClickSelect() {
    this.onClickSelect.emit(this.selectedCustomer);
  }

  _onClickCancel() {
    this.onClickCancel.emit();
  }
}
