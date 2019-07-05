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
  requiredTrue,
  email,
  greaterThan,
  lessThan
} from "ngrx-forms/validation";

export const CUSTOMER_FORM_ID = "customerForm";

export interface CustomerForm {
  id: string;
  name: string;
  customer_id: string;
  description: string;
  email: string;
  created_date: Date;
  orders_count: number;
  max_quantity: number;
  max_amount: number;
  type: string;
  country: string;
  enabled: boolean;
  product_types: string[];
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
    customer_id: null,
    description: "",
    email: "",
    created_date: null,
    orders_count: 0,
    max_quantity: 0.0,
    max_amount: 0.0,
    type: "",
    country: "",
    enabled: true,
    product_types: null
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
  name: validate(required, maxLength(64)),
  customer_id: validate(required),
  description: validate(required, maxLength(128)),
  email: validate(required, email, maxLength(128)),
  created_date: validate(required),
  orders_count: validate(required, greaterThan(0), lessThan(100)),
  max_quantity: validate(required, greaterThan(0), lessThan(100000)),
  max_amount: validate(required, greaterThan(0), lessThan(1000000)),
  type: validate(required),
  country: validate(required),
  enabled: validate(required),
  product_types: validate(required)
});
