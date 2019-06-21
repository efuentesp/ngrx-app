import { Customer } from "../models/customer.model";

import * as customerActions from "./customer.actions";

export interface CustomerState {
  loading: boolean;
  error: any;
  customerList: Customer[];
}

export const initialState: CustomerState = {
  loading: false,
  error: null,
  customerList: []
};

export function customerReducer(
  state = initialState,
  action: customerActions.CustomerActions
): CustomerState {
  switch (action.type) {
    case customerActions.CustomerActionTypes.FindAllCustomer:
      return {
        ...state,
        loading: true,
        error: null
      };
    case customerActions.CustomerActionTypes.FindAllCustomerSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        customerList: action.payload
      };
    case customerActions.CustomerActionTypes.FindAllCustomerError:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
