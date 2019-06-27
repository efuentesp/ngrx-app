import {
  formGroupReducer,
  FormGroupState,
  createFormStateReducerWithUpdate,
  createFormGroupState
} from "ngrx-forms";

import {
  customerAdapter,
  initialState,
  CustomerState,
  CustomerForm,
  validateAndUpdateCustomerForm,
  CUSTOMER_FORM_ID
} from "./customer.state";
import { CustomerActions, CustomerActionTypes } from "./customer.actions";

const customerFormReducer = createFormStateReducerWithUpdate<CustomerForm>(
  validateAndUpdateCustomerForm
);

export function customerReducer(
  state = initialState,
  action: CustomerActions
): CustomerState {
  const _customerForm = customerFormReducer(
    state.customerForm.formState,
    action
  );

  if (_customerForm !== state.customerForm.formState) {
    state = {
      ...state,
      customerForm: { formState: _customerForm, submittedValues: undefined }
    };
  }

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

    case CustomerActionTypes.FindOneRequest:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case CustomerActionTypes.FindOneSuccess:
      const customerEditForm = createFormGroupState<CustomerForm>(
        CUSTOMER_FORM_ID,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      );

      return customerAdapter.addOne(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        customerForm: {
          formState: customerEditForm,
          submittedValues: undefined
        }
      });
    case CustomerActionTypes.FindOneFailure:
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
