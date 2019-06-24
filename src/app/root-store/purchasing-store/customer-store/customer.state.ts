import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Customer } from "src/app/features/purchasing/customer/customer.model";

export interface CustomerState extends EntityState<Customer> {
  isLoading?: boolean;
  error?: any;
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>({
  selectId: model => model.id,
  sortComparer: (a: Customer, b: Customer): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export const initialState: CustomerState = customerAdapter.getInitialState({
  isLoading: false,
  error: null
});
