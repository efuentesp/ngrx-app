import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  formCustomerState$: Observable<FormGroupState<CustomerForm>>;
  submittedValues$: Observable<CustomerForm | undefined>;

  isLoading$: Observable<boolean>;
  submitBtnState$: Observable<ClrLoadingState>;

  constructor(private store$: Store<RootStoreState.State>) {
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
    this.submitBtnState$ = this.store$.select(
      CustomerStoreSelectors.selectClrLoadingState
    );
  }

  submit() {
    this.formCustomerState$
      .pipe(
        take(1),
        tap(v => console.log(v.errors)),
        filter(fs => fs.isValid),
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
