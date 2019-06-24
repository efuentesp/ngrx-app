import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Store, select } from "@ngrx/store";

import { ClrLoadingState } from "@clr/angular";

import { Observable } from "rxjs";

import {
  RootStoreState,
  CustomerStoreActions,
  CustomerStoreSelectors
} from "src/app/root-store";

@Component({
  selector: "app-customer-create-page",
  templateUrl: "./customer-create-page.component.html",
  styleUrls: ["./customer-create-page.component.scss"]
})
export class CustomerCreatePageComponent implements OnInit {
  formCreateCustomer: FormGroup;
  isLoading$: Observable<boolean>;
  submitBtnState$: Observable<ClrLoadingState>;

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<RootStoreState.State>
  ) {
    this.formCreateCustomer = this.formBuilder.group({
      id: ["", [Validators.required]],
      name: ["", Validators.required]
    });
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
    if (this.formCreateCustomer.valid) {
      this.store$.dispatch(
        new CustomerStoreActions.CreateNewRequest(this.formCreateCustomer.value)
      );
    } else {
      console.error("Invalid form!");
      this.formCreateCustomer.markAsTouched();
    }
  }

  resetForm() {
    this.formCreateCustomer.reset();
  }
}
