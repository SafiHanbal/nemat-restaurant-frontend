import { createSlice } from '@reduxjs/toolkit';

const MENU_INITIAL_STATE = {
  menu: [],
  loading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: MENU_INITIAL_STATE,
  reducers: {
    getMenuStart(state) {
      state.loading = true;
    },
    getMenuSuccess(state, action) {
      state.loading = false;
      state.menu = { ...state.menu, ...action.payload };
    },
    getMenuFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMenuStart, getMenuSuccess, getMenuFailed } =
  menuSlice.actions;

export const menuReducer = menuSlice.reducer;
