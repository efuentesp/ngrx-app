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

  @Output() onEditCustomer = new EventEmitter();
  @Output() onDeleteCustomer = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log("CustomerSearchComponent ngOnInit()");
  }

  _onEditCustomer(customer: Customer) {
    //console.log("Edit Customer:", customer);
    this.onEditCustomer.emit(customer);
  }

  _onDeleteCustomer(customer: Customer) {
    //console.log("Delete Customer:", customer);
    this.onDeleteCustomer.emit(customer);
  }
}
