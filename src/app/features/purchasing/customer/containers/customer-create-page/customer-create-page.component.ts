import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store, select } from "@ngrx/store";

import { ClrLoadingState } from "@clr/angular";

import { Observable } from "rxjs";
import { take, map, tap, filter } from "rxjs/operators";

import { RootStoreState, CustomerStoreSelectors } from "src/app/root-store";
import { FormGroupState, SetValueAction, ResetAction } from "ngrx-forms";

import {
  CustomerForm,
  initialStateCustomerForm
} from "src/app/root-store/purchasing-store/customer-store/customer.state";

import { CreateNewRequest } from "src/app/root-store/purchasing-store/customer-store/customer.actions";

@Component({
  selector: "app-customer-create-page",
  templateUrl: "./customer-create-page.component.html",
  styleUrls: ["./customer-create-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCreatePageComponent implements OnInit {
  error$: Observable<string>;
  formCustomerState$: Observable<FormGroupState<CustomerForm>>;
  submittedValues$: Observable<CustomerForm | undefined>;

  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  submitBtnState$: Observable<ClrLoadingState>;

  constructor(private store$: Store<RootStoreState.State>) {
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
    this.isLoading$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerIsLoading
    );
    this.isSubmitting$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerIsSubmitting
    );
    this.submitBtnState$ = this.store$.select(
      CustomerStoreSelectors.selectClrLoadingState
    );

    this.resetForm();
  }

  submit() {
    this.formCustomerState$
      .pipe(
        take(1),
        filter(fs => fs.isValid),
        tap(v => console.log(v.errors)),
        map(fs => new CreateNewRequest(fs.value))
      )
      .subscribe(this.store$);
  }

  resetForm() {
    this.store$.dispatch(
      new SetValueAction(
        initialStateCustomerForm.id,
        initialStateCustomerForm.value
      )
    );
    this.store$.dispatch(new ResetAction(initialStateCustomerForm.id));
  }
}
