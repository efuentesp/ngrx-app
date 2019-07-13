import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Action, Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable } from "rxjs";
import {
  map,
  filter,
  mergeMap,
  switchMap,
  catchError,
  tap,
  delay,
  withLatestFrom,
  exhaustMap
} from "rxjs/operators";

import { Customer } from "src/app/features/purchasing/customer/customer.model";
import { CustomerService } from "src/app/features/purchasing/customer/customer.service";

import * as CustomerActions from "./customer.actions";
import { RootStoreState } from "src/app/root-store";
import { selectAllCustomerItems } from "./customer.selectors";

@Injectable()
export class CustomerStoreEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private router: Router
  ) {}

  @Effect()
  findAllRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.FindAllRequest),
    switchMap((action: CustomerActions.FindAllRequest) =>
      this.customerService.findAll("").pipe(
        map((customerItems: Customer[]) => {
          const customerItemsEnriched = customerItems.map(
            (customer: Customer) => {
              if (customer.customer_id) {
                this.customerService
                  .findOne(customer.customer_id)
                  .subscribe((customer_id: Customer) => {
                    //customer.customer_rel = customer_id;
                  });
              }
              return customer;
              //console.log(customer);
            }
          );
          //console.log(customerItemsEnriched);
          return customerItemsEnriched;
        }),
        map(
          (customerItems: Customer[]) =>
            new CustomerActions.FindAllSuccess(customerItems)
        ),
        catchError(error => of(new CustomerActions.FindAllFailure(error)))
      )
    )
  );

  // @Effect()
  // findAllRequestEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType(CustomerActions.CustomerActionTypes.FindAllRequest),
  //   withLatestFrom(this.store$.select(selectAllCustomerItems)),
  //   filter(([_, loaded]) => !loaded),
  //   exhaustMap(() =>
  //     this.customerService.findAll("").pipe(
  //       map(
  //         (customerItems: Customer[]) =>
  //           new CustomerActions.FindAllSuccess(customerItems)
  //       ),
  //       catchError(error => of(new CustomerActions.FindAllFailure(error)))
  //     )
  //   )
  // );

  @Effect()
  findOneRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.FindOneRequest),
    switchMap((action: CustomerActions.FindOneRequest) =>
      this.customerService.findOne(action.payload.id).pipe(
        map((customer: Customer) => {
          if (customer.customer_id) {
            this.customerService
              .findOne(customer.customer_id)
              .subscribe((customer_id: Customer) => {
                //customer.customer_rel = customer_id;
              });
          }
          //console.log(customer);
          return customer;
        }),
        map(
          (customer: Customer) => new CustomerActions.FindOneSuccess(customer)
        ),
        catchError(error => of(new CustomerActions.FindAllFailure(error)))
      )
    )
  );

  @Effect()
  CreateNewRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.CreateNewRequest),
    switchMap((action: CustomerActions.CreateNewRequest) => {
      return this.customerService.create(action.payload).pipe(
        map((customer: Customer) => {
          return new CustomerActions.CreateNewSuccess(customer);
        }),
        tap(() => this.router.navigate(["/purchasing/customer/search"])),
        catchError(error => of(new CustomerActions.CreateNewFailure(error)))
      );
    })
  );

  @Effect()
  UpdateRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.UpdateRequest),
    switchMap((action: CustomerActions.UpdateRequest) =>
      this.customerService
        .update(action.payload.id, action.payload.newCustomerValues)
        .pipe(
          map((customer: Customer) => {
            return new CustomerActions.UpdateSuccess({
              id: action.payload.id,
              newCustomerValues: customer
            });
          }),
          tap(() => this.router.navigate(["/purchasing/customer/search"])),
          catchError(error => of(new CustomerActions.UpdateFailure(error)))
        )
    )
  );

  @Effect()
  DeleteRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(CustomerActions.CustomerActionTypes.DeleteRequest),
    mergeMap((action: CustomerActions.DeleteRequest) =>
      this.customerService.delete(action.payload.id).pipe(
        map(() => {
          return new CustomerActions.DeleteSuccess({ id: action.payload.id });
        }),
        catchError(error => of(new CustomerActions.DeleteFailure(error)))
      )
    )
  );
}
