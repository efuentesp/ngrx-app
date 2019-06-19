import { Action } from "@ngrx/store";
import { Customer } from "src/app/features/customer/models/customer.model";

export enum CustomerActionTypes {
  FindAllCustomer = "[Customer] Find All Customers",
  FindAllCustomerFinished = "[Customer] Find All Customers finished"
}

export class FindAllCustomer implements Action {
  readonly type = CustomerActionTypes.FindAllCustomer;
}

export class FindAllCustomerFinished implements Action {
  readonly type = CustomerActionTypes.FindAllCustomerFinished;
  constructor(public payload: Customer[]) {}
}

export type CustomerActions = FindAllCustomer | FindAllCustomerFinished;
