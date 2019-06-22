import { Action } from "@ngrx/store";
import { Customer } from "src/app/features/purchasing/customer/customer.model";

export enum CustomerActionTypes {
  FindAllRequest = "[Customer] Find All Customers request",
  FindAllSuccess = "[Customer] Find All Customers response succesfully",
  FindAllFailure = "[Customer] Find All Customers response failure"
}

export class FindAllRequest implements Action {
  readonly type = CustomerActionTypes.FindAllRequest;
}

export class FindAllSuccess implements Action {
  readonly type = CustomerActionTypes.FindAllSuccess;
  constructor(public payload: Customer[]) {}
}

export class FindAllFailure implements Action {
  readonly type = CustomerActionTypes.FindAllFailure;
  constructor(public payload: any) {}
}

export type CustomerActions = FindAllRequest | FindAllSuccess | FindAllFailure;
