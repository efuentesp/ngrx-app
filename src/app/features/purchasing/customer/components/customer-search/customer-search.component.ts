import { Component, OnInit, Input } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
