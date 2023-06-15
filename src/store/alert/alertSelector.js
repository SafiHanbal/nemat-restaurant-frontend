import { createSelector } from 'reselect';

const selectAlertReducer = (state) => state.alert;

export const selectActive = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.active
);

export const selectMessage = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.message
);

export const selectType = createSelector(
  [selectAlertReducer],
  (alertSlice) => alertSlice.type
);
