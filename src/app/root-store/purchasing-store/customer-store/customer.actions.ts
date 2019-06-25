import { Action } from "@ngrx/store";
import { Customer } from "src/app/features/purchasing/customer/customer.model";

export enum CustomerActionTypes {
  FindAllRequest = "[Customer] Find All Customers request",
  FindAllSuccess = "[Customer] Find All Customers response succesfully",
  FindAllFailure = "[Customer] Find All Customers response failure",

  FindOneRequest = "[Customer] Find One Customer request",
  FindOneSuccess = "[Customer] Find One Customer response succesfully",
  FindOneFailure = "[Customer] Find One Customer response failure",

  CreateNewRequest = "[Customer] Create new Customer request",
  CreateNewSuccess = "[Customer] Create new Customer response successfully",
  CreateNewFailure = "[Customer] Create new Customer response failure",

  UpdateRequest = "[Customer] Update an existing Customer request",
  UpdateSuccess = "[Customer] Update an existing Customer response successfully",
  UpdateFailure = "[Customer] Update an existing Customer response failure",

  DeleteRequest = "[Customer] Delete an existing Customer request",
  DeleteSuccess = "[Customer] Delete an existing Customer response successfully",
  DeleteFailure = "[Customer] Delete an existing Customer response failure"
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

export class FindOneRequest implements Action {
  readonly type = CustomerActionTypes.FindOneRequest;
  constructor(public payload: { id: string }) {}
}

export class FindOneSuccess implements Action {
  readonly type = CustomerActionTypes.FindOneSuccess;
  constructor(public payload: Customer) {}
}

export class FindOneFailure implements Action {
  readonly type = CustomerActionTypes.FindOneFailure;
  constructor(public payload: any) {}
}

export class CreateNewRequest implements Action {
  readonly type = CustomerActionTypes.CreateNewRequest;
  constructor(public payload: Customer) {}
}

export class CreateNewSuccess implements Action {
  readonly type = CustomerActionTypes.CreateNewSuccess;
  constructor(public payload: Customer) {}
}

export class CreateNewFailure implements Action {
  readonly type = CustomerActionTypes.CreateNewFailure;
  constructor(public payload: any) {}
}

export class UpdateRequest implements Action {
  readonly type = CustomerActionTypes.UpdateRequest;
  constructor(public payload: { id: string; newCustomerValues: Customer }) {}
}

export class UpdateSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateSuccess;
  constructor(public payload: { id: string; newCustomerValues: Customer }) {}
}

export class UpdateFailure implements Action {
  readonly type = CustomerActionTypes.UpdateFailure;
  constructor(public payload: any) {}
}

export class DeleteRequest implements Action {
  readonly type = CustomerActionTypes.DeleteRequest;
  constructor(public payload: { id: string }) {}
}

export class DeleteSuccess implements Action {
  readonly type = CustomerActionTypes.DeleteSuccess;
  constructor(public payload: { id: string }) {}
}

export class DeleteFailure implements Action {
  readonly type = CustomerActionTypes.DeleteFailure;
  constructor(public payload: any) {}
}

export type CustomerActions =
  | FindAllRequest
  | FindAllSuccess
  | FindAllFailure
  | FindOneRequest
  | FindOneSuccess
  | FindOneFailure
  | CreateNewRequest
  | CreateNewSuccess
  | CreateNewFailure
  | UpdateRequest
  | UpdateSuccess
  | UpdateFailure
  | DeleteRequest
  | DeleteSuccess
  | DeleteFailure;
