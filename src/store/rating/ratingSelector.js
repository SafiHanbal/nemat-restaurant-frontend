import { createSelector } from 'reselect';

const selectRatingSlice = (state) => state.rating;

export const selectActive = createSelector(
  [selectRatingSlice],
  (ratingSlice) => ratingSlice.active
);

export const selectLoading = createSelector(
  [selectRatingSlice],
  (ratingSlice) => ratingSlice.loading
);

export const selectMenuItem = createSelector(
  [selectRatingSlice],
  (ratingSlice) => ratingSlice.menuItem
);

export const selectRatingLoaded = createSelector(
  [selectRatingSlice],
  (ratingSlice) => ratingSlice.ratingLoaded
);

export const selectRating = createSelector(
  [selectRatingSlice],
  (ratingSlice) => ratingSlice.rating
);
