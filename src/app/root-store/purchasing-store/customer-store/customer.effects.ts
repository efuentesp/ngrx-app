import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import {
  map,
  filter,
  mergeMap,
  switchMap,
  catchError,
  tap
} from "rxjs/operators";

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
  findAllRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.FindAllRequest),
    switchMap((action: CustomerActions.FindAllRequest) =>
      this.customerService.findAll("").pipe(
        map(
          (customerItems: Customer[]) =>
            new CustomerActions.FindAllSuccess(customerItems)
        ),
        catchError(error => of(new CustomerActions.FindAllFailure(error)))
      )
    )
  );

  @Effect()
  CreateNewRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.CreateNewRequest),
    switchMap((action: CustomerActions.CreateNewRequest) =>
      this.customerService.create(action.payload).pipe(
        map((customer: Customer) => {
          return new CustomerActions.CreateNewSuccess(customer);
        }),
        catchError(error => of(new CustomerActions.CreateNewFailure(error)))
      )
    )
  );
}
