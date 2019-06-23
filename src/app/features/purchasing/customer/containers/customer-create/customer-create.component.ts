import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { RootStoreState, CustomerStoreActions } from "src/app/root-store";

@Component({
  selector: "app-customer-create",
  templateUrl: "./customer-create.component.html",
  styleUrls: ["./customer-create.component.scss"]
})
export class CustomerCreateComponent implements OnInit {
  formCreateCustomer: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<RootStoreState.State>
  ) {
    this.formCreateCustomer = this.formBuilder.group({
      id: ["", [Validators.required]],
      name: ["", Validators.required]
    });
  }

  ngOnInit() {}

  submit() {
    if (this.formCreateCustomer.valid) {
      this.store$.dispatch(
        new CustomerStoreActions.CreateNewRequest(this.formCreateCustomer.value)
      );
    } else {
      console.log("Invalid form!");
      this.formCreateCustomer.markAsTouched();
    }
  }

  resetForm() {
    this.formCreateCustomer.reset();
  }
}
