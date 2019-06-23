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

    case CustomerActionTypes.CreateNewRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CustomerActionTypes.CreateNewSuccess:
      console.log("CreateNewSuccess reducer", action.payload);
      return customerAdapter.addOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    case CustomerActionTypes.CreateNewFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case CustomerActionTypes.UpdateRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CustomerActionTypes.UpdateSuccess:
      return customerAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.newCustomerValues
        },
        {
          ...state,
          isLoading: false,
          error: null
        }
      );
    case CustomerActionTypes.UpdateFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case CustomerActionTypes.DeleteRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CustomerActionTypes.DeleteSuccess:
      return customerAdapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false,
        error: null
      });
    case CustomerActionTypes.DeleteFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
