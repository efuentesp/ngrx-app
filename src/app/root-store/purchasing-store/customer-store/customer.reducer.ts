import { Customer } from "src/app/features/purchasing/customer/customer.model";

import { customerAdapter, initialState, CustomerState } from "./customer.state";
import { CustomerActions, CustomerActionTypes } from "./customer.actions";

export function customerReducer(
  state = initialState,
  action: CustomerActions
): CustomerState {
  switch (action.type) {
    case CustomerActionTypes.FindAllRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CustomerActionTypes.FindAllSuccess:
      return customerAdapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    case CustomerActionTypes.FindAllFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
