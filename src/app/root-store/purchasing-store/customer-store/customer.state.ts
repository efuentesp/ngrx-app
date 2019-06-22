import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Customer } from "src/app/features/purchasing/customer/customer.model";

export interface CustomerState extends EntityState<Customer> {
  isLoading?: boolean;
  error?: any;
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>({
  selectId: model => model.id
  // sortComparer: (a: Customer, b: Customer): number =>
  //   b.someDate.toString().localeCompare(a.someDate.toString())
});

export const initialState: CustomerState = customerAdapter.getInitialState({
  isLoading: false,
  error: null
});
