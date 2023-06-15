import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
    orders: [],
  },
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },

    placeOrderStart(state) {
      state.loading = true;
    },
    placeOrderSuccess(state) {
      state.loading = false;
    },
    placeOrderFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    getOrdersStart(state) {
      state.loading = true;
    },
    getOrdersSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    getOrdersFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCartItems,
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailed,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailed,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
