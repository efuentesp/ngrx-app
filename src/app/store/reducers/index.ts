import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import * as fromCustomer from "./customer.reducer";

export interface State {
  customer: fromCustomer.State;
}

export const reducers: ActionReducerMap<State> = {
  customer: fromCustomer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
