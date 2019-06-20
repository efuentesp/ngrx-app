import { Action } from "@ngrx/store";
import { Customer } from "src/app/features/customer/models/customer.model";

export enum CustomerActionTypes {
  FindAllCustomer = "[Customer] Find All Customers",
  FindAllCustomerSuccess = "[Customer] Find All Customers finished succesfully",
  FindAllCustomerError = "[Customer] Find All Customers finished with error"
}

export class FindAllCustomer implements Action {
  readonly type = CustomerActionTypes.FindAllCustomer;
}

export class FindAllCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.FindAllCustomerSuccess;
  constructor(public payload: Customer[]) {}
}

export class FindAllCustomerError implements Action {
  readonly type = CustomerActionTypes.FindAllCustomerError;
  constructor(public payload: any) {}
}

export type CustomerActions =
  | FindAllCustomer
  | FindAllCustomerSuccess
  | FindAllCustomerError;
