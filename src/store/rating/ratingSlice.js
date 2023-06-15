import { createSlice } from '@reduxjs/toolkit';

const ratingSlice = createSlice({
  name: 'rating',
  initialState: {
    active: false,
    menuItem: null,
    loading: false,
    rating: null,
    error: null,
    ratingLoaded: false,
  },
  reducers: {
    openRatingModal(state, action) {
      state.active = true;
      state.menuItem = action.payload;
    },
    closeRatingModal(state) {
      state.active = false;
      state.menuItem = null;
      state.rating = null;
      state.ratingLoaded = false;
    },

    getRatingStart(state) {
      state.ratingLoaded = false;
    },
    getRatingSuccess(state, action) {
      state.ratingLoaded = true;
      state.rating = action.payload;
    },
    getRatingFailed(state, action) {
      state.error = action.payload;
    },

    rateItemStart(state) {
      state.loading = true;
    },
    rateItemSuccess(state, action) {
      state.loading = false;
      state.rating = action.payload;
    },
    rateItemFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  openRatingModal,
  closeRatingModal,
  getRatingStart,
  getRatingSuccess,
  getRatingFailed,
  rateItemStart,
  rateItemSuccess,
  rateItemFailed,
} = ratingSlice.actions;

export const ratingReducer = ratingSlice.reducer;
