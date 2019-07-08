import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./root-store.state";
import { RouterReducerState, getSelectors } from "@ngrx/router-store";

export const selectRouter = createFeatureSelector<
  AppState,
  RouterReducerState<any>
>("router");

export const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);
