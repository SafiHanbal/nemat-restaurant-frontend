import { createSelector } from 'reselect';

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartCount = createSelector(
  [selectCartSlice],
  (cartSlice) => {
    const { cartItems } = cartSlice;

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return cartCount;
  }
);

export const selectCartTotal = createSelector(
  [selectCartSlice],
  (cartSlice) => {
    const { cartItems } = cartSlice;

    const cartTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return cartTotal;
  }
);

export const selectLoading = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.loading
);

export const selectOrders = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.orders
);
