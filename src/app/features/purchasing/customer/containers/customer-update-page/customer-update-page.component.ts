import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ClrLoadingState } from "@clr/angular";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  RootStoreState,
  CustomerStoreSelectors,
  CustomerStoreActions
} from "src/app/root-store";

import { Customer } from "../../customer.model";

@Component({
  selector: "app-customer-update-page",
  templateUrl: "./customer-update-page.component.html",
  styleUrls: ["./customer-update-page.component.css"]
})
export class CustomerUpdatePageComponent implements OnInit {
  formUpdateCustomer: FormGroup;
  isLoading$: Observable<boolean>;
  submitBtnState$: Observable<ClrLoadingState>;
  selectedCustomer$: Observable<Customer>;

  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<RootStoreState.State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formUpdateCustomer = this.formBuilder.group({
      id: ["", [Validators.required]],
      name: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.isLoading$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerIsLoading
    );

    this.submitBtnState$ = this.store$.select(
      CustomerStoreSelectors.selectClrLoadingState
    );

    this.selectedCustomer$ = this.store$.select(
      CustomerStoreSelectors.selectCustomerById(this.id)
    );

    this.store$.dispatch(
      new CustomerStoreActions.FindOneRequest({ id: this.id })
    );
  }

  submit() {
    if (this.formUpdateCustomer.valid) {
      this.store$.dispatch(
        new CustomerStoreActions.UpdateRequest(this.formUpdateCustomer.value)
      );
    } else {
      console.error("Invalid form!");
      this.formUpdateCustomer.markAsTouched();
    }
  }

  resetForm() {
    this.formUpdateCustomer.reset();
  }
}
