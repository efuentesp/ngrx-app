import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Customer } from "../../customer.model";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
  styleUrls: ["./customer-search.component.scss"]
})
export class CustomerSearchComponent implements OnInit {
  @Input() customerItems: Customer[];
  @Input() isLoading: boolean = false;
  @Input() createAction: boolean = false;
  @Input() editAction: boolean = false;
  @Input() deleteAction: boolean = false;
  @Input() singleSelectAction: boolean = false;
  @Input() showInDialog: boolean = false;

  @Output() onEditCustomer = new EventEmitter();
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onSelectionChanged = new EventEmitter();

  selectedCustomer: Customer = null;

  constructor() {}

  ngOnInit() {
    //console.log("CustomerSearchComponent ngOnInit()");
  }

  _onEditCustomer(customer: Customer) {
    // console.log("Edit Customer:", customer);
    this.onEditCustomer.emit(customer);
  }

  _onDeleteCustomer(customer: Customer) {
    // console.log("Delete Customer:", customer);
    this.onDeleteCustomer.emit(customer);
  }

  _onSelectionChanged(customer: Customer) {
    // console.log("CustomerSearchComponent _onSelectionChanged()", customer);
    this.onSelectionChanged.emit(customer);
    this.selectedCustomer = null;
  }
}
