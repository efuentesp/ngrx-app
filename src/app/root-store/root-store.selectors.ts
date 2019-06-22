import { createSelector, MemoizedSelector } from "@ngrx/store";
import { CustomerStoreSelectors } from "./purchasing-store/customer-store";

// import {
//   MyOtherFeatureStoreSelectors
// } from './my-other-feature-store';

// export const selectError: MemoizedSelector<object, string> = createSelector(
//   CustomerStoreSelectors.selectCustomerError,
//   (CustomerError: string) => {
//     return customer
//   }
// );

// export const selectError: MemoizedSelector<object, string> = createSelector(
//   MyFeatureStoreSelectors.selectMyFeatureError,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureError,
//   (myFeatureError: string, myOtherFeatureError: string) => {
//     return myFeature || myOtherFeature;
//   }
// );

// export const selectIsLoading: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   CustomerStoreSelectors.selectCustomerIsLoading
//   (customer: boolean) => {
//     return customer;
//   }
// );

// export const selectIsLoading: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   MyFeatureStoreSelectors.selectMyFeatureIsLoading,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureIsLoading,
//   (myFeature: boolean, myOtherFeature: boolean) => {
//     return myFeature || myOtherFeature;
//   }
// );
