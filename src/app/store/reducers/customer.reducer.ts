import { Customer } from "../../features/customer/models/customer.model";

import * as customerActions from "../actions/customer.actions";

export interface State {
  loading: boolean;
  customerList: Customer[];
}

export const initialState: State = {
  loading: false,
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
        loading: true
      };
    case customerActions.CustomerActionTypes.FindAllCustomerFinished:
      return {
        ...state,
        loading: false,
        customerList: action.payload
      };
    default:
      return state;
  }
}
