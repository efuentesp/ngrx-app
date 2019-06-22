import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

import { Customer } from "src/app/features/purchasing/customer/customer.model";

import { customerAdapter, CustomerState } from "./customer.state";

export const getError = (state: CustomerState): any => state.error;
export const getIsLoading = (state: CustomerState): boolean => state.isLoading;

export const selectCustomerState: MemoizedSelector<
  object,
  CustomerState
> = createFeatureSelector<CustomerState>("customer");

export const selectAllCustomerItems: (
  state: object
) => Customer[] = customerAdapter.getSelectors(selectCustomerState).selectAll;

export const selectCustomerById = (id: string) =>
  createSelector(
    this.selectCustomerItems,
    (allCustomer: Customer[]) => {
      if (allCustomer) {
        return allCustomer.find(p => p.id === id);
      } else {
        return null;
      }
    }
  );

export const selectCustomerError: MemoizedSelector<
  object,
  any
> = createSelector(
  selectCustomerState,
  getError
);

export const selectCustomerIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectCustomerState,
  getIsLoading
);