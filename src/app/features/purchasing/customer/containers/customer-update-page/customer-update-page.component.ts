import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store, select } from "@ngrx/store";

import { ClrLoadingState } from "@clr/angular";

import { Observable } from "rxjs";
import { take, map, tap, filter } from "rxjs/operators";

import * as moment from "moment";
import "moment/locale/es";

import {
  RootStoreState,
  CustomerStoreSelectors,
  CustomerStoreActions
} from "src/app/root-store";
import {
  FormGroupState,
  SetValueAction,
  ResetAction,
  createFormGroupState,
  MarkAsDirtyAction,
  SetErrorsAction
} from "ngrx-forms";

import {
  CustomerForm,
  initialStateCustomerForm,
  CUSTOMER_FORM_ID
} from "src/app/root-store/purchasing-store/customer-store/customer.state";

import { UpdateRequest } from "src/app/root-store/purchasing-store/customer-store/customer.actions";
import { Router, ActivatedRoute } from "@angular/router";
import { Customer } from "../../customer.model";

@Component({
  selector: "app-customer-update-page",
  templateUrl: "./customer-update-page.component.html",
  styleUrls: ["./customer-update-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerUpdatePageComponent implements OnInit {
  error$: Observable<string>;
  formCustomerState$: Observable<FormGroupState<CustomerForm>>;
  submittedValues$: Observable<CustomerForm | undefined>;

  isLoading$: Observable<boolean>;
  submitBtnState$: Observable<ClrLoadingState>;

  customerId: string;
  selectedCustomer$: Observable<Customer>;

  isShowingSelectCustomerDialog: boolean = false;

  constructor(
    private store$: Store<RootStoreState.State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.error$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerError
    );
    this.formCustomerState$ = store$.pipe(
      select(s => s.customer.customerForm.formState)
    );
    this.submittedValues$ = store$.pipe(
      select(s => s.customer.customerForm.submittedValues)
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = params["id"];
    });

    this.isLoading$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerIsLoading
    );

    this.submitBtnState$ = this.store$.select(
      CustomerStoreSelectors.selectClrLoadingState
    );

    this.selectedCustomer$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerById(this.customerId)
    );

    this.store$.dispatch(
      new CustomerStoreActions.FindOneRequest({ id: this.customerId })
    );
  }

  submit() {
    this.formCustomerState$
      .pipe(
        take(1),
        //tap(v => console.log(v.errors)),
        filter(fs => fs.isValid),
        map(
          fs =>
            new UpdateRequest({
              id: this.customerId,
              newCustomerValues: fs.value
            })
        )
      )
      .subscribe(this.store$);
  }

  resetForm() {
    this.selectedCustomer$.subscribe(customer => {
      const customerUpdateForm = createFormGroupState<CustomerForm>(
        CUSTOMER_FORM_ID,
        {
          id: customer.id,
          name: customer.name,
          customer_id: customer.customer_id,
          description: customer.description,
          email: customer.email,
          created_date: customer.created_date,
          orders_count: customer.orders_count,
          max_quantity: customer.max_quantity,
          max_amount: customer.max_amount,
          type: customer.type,
          country: customer.country,
          enabled: customer.enabled,
          product_types: customer.product_types
        }
      );

      this.store$.dispatch(
        new SetValueAction(customerUpdateForm.id, customerUpdateForm.value)
      );
      this.store$.dispatch(new ResetAction(customerUpdateForm.id));
    });
  }

  onCreatedDateSelected(date: Date) {
    console.log(date);
    if (moment(date).isValid()) {
      this.store$.dispatch(
        new SetValueAction(
          "customerForm.created_date",
          moment(date).format("DD/MM/YYYY")
        )
      );
      this.store$.dispatch(new MarkAsDirtyAction("customerForm.created_date"));
    } else {
      this.store$.dispatch(
        new SetErrorsAction("customerForm.created_date", {
          invalidDate: true
        })
      );
      this.store$.dispatch(
        new SetValueAction("customerForm.created_date", null)
      );
      this.store$.dispatch(new MarkAsDirtyAction("customerForm.created_date"));
    }
  }

  onClickSearchCustomer() {
    console.log("onClickSearchCustomer()");
    this.isShowingSelectCustomerDialog = true;
  }

  onClickSelectCustomer() {
    console.log("onClickSelectCustomer()");
    this.isShowingSelectCustomerDialog = false;
  }

  onClickCancel() {
    console.log("onClickCancel()");
    this.isShowingSelectCustomerDialog = false;
  }
}
