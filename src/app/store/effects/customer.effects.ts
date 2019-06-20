import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, switchMap, catchError } from "rxjs/operators";

import { Customer } from "src/app/features/customer/models/customer.model";
import * as CustomerActions from "src/app/store/actions/customer.actions";
import { CustomerService } from "src/app/features/customer/services/customer.service";

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  @Effect()
  findAll$ = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.FindAllCustomer),
    switchMap((action: CustomerActions.FindAllCustomer) =>
      this.customerService.findAll("").pipe(
        map(
          (customerList: Customer[]) =>
            new CustomerActions.FindAllCustomerSuccess(customerList)
        ),
        catchError(error => of(new CustomerActions.FindAllCustomerError(error)))
      )
    )
  );
}
