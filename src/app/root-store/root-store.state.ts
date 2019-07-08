import { CustomerStoreState } from "./purchasing-store/customer-store";
import { RouterReducerState } from "@ngrx/router-store";

export interface AppState {
  router: RouterReducerState<any>;
  customer: CustomerStoreState.CustomerState;
}
