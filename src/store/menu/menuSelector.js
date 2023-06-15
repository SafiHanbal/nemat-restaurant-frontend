import { createSelector } from 'reselect';

const selectMenuReducer = (state) => state.menu;

export const selectMenu = createSelector(
  [selectMenuReducer],
  (menuSlice) => menuSlice.menu
);

export const selectLoading = createSelector(
  [selectMenuReducer],
  (menuSlice) => menuSlice.loading
);

export const selectError = createSelector(
  [selectMenuReducer],
  (menuSlice) => menuSlice.error
);
