import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, switchMap, catchError } from "rxjs/operators";

import { Customer } from "src/app/features/purchasing/customer/customer.model";
import { CustomerService } from "src/app/features/purchasing/customer/customer.service";

import * as CustomerActions from "./customer.actions";

@Injectable()
export class CustomerStoreEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  @Effect()
  findAllEffectRequest$ = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.FindAllRequest),
    switchMap((action: CustomerActions.FindAllRequest) =>
      this.customerService.findAll("").pipe(
        map(
          (customerList: Customer[]) =>
            new CustomerActions.FindAllSuccess(customerList)
        ),
        catchError(error => of(new CustomerActions.FindAllFailure(error)))
      )
    )
  );
}
