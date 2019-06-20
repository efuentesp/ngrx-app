import { Customer } from "../../features/customer/models/customer.model";

import * as customerActions from "../actions/customer.actions";

export interface State {
  loading: boolean;
  error: any;
  customerList: Customer[];
}

export const initialState: State = {
  loading: false,
  error: null,
  customerList: []
};

export function reducer(
  state = initialState,
  action: customerActions.CustomerActions
): State {
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
