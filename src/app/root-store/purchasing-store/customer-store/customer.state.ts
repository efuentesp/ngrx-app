import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Customer } from "src/app/features/purchasing/customer/customer.model";
import {
  FormGroupState,
  createFormGroupState,
  updateGroup,
  validate
} from "ngrx-forms";
import {
  minLength,
  maxLength,
  required,
  requiredTrue
} from "ngrx-forms/validation";

export const CUSTOMER_FORM_ID = "customerForm";

export interface CustomerForm {
  id: string;
  name: string;
  description: string;
  created_date: Date;
}

export interface CustomerState extends EntityState<Customer> {
  isLoading?: boolean;
  isSubmitting?: boolean;
  error?: any;
  customerForm: {
    formState: FormGroupState<CustomerForm>;
    submittedValues: CustomerForm | undefined;
  };
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>({
  selectId: model => model.id,
  sortComparer: (a: Customer, b: Customer): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export const initialStateCustomerForm = createFormGroupState<CustomerForm>(
  CUSTOMER_FORM_ID,
  {
    id: "",
    name: "",
    description: "",
    created_date: null
  }
);

export const initialState: CustomerState = customerAdapter.getInitialState({
  isLoading: false,
  isSubmitting: false,
  error: null,
  customerForm: {
    formState: initialStateCustomerForm,
    submittedValues: undefined
  }
});

export const validateAndUpdateCustomerForm = updateGroup<CustomerForm>({
  id: validate(required, maxLength(8)),
  name: validate(required, maxLength(128)),
  description: validate(required, maxLength(128)),
  created_date: validate(required)
});
