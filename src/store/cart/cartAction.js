import { apiRequest, API_REQ_TYPES } from '../../utils/apiRequest';
import { showAlert, ALERT_TYPES, ALERT_DURATION } from '../alert/alertAction';

import {
  setCartItems,
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFailed,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailed,
} from './cartSlice';

export const addItemToCart = (cartItems, itemToAdd) => (dispatch) => {
  const isAlreadyIncluded = cartItems.some(
    (item) => item._id === itemToAdd._id
  );

  let newCartItems;
  if (isAlreadyIncluded) {
    newCartItems = cartItems.map((item) => {
      if (item._id !== itemToAdd.id) return item;

      return { ...itemToAdd, quantity: item.quantity + 1 };
    });
  } else {
    newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
  }

  dispatch(setCartItems(newCartItems));
  dispatch(
    showAlert('Item added to cart.', ALERT_TYPES.SUCCESS, ALERT_DURATION.SHORT)
  );
};

export const removeItemFromCart = (cartItems, itemToRemove) => (dispatch) => {
  const isLastItem = cartItems.some(
    (item) => item._id === itemToRemove._id && item.quantity === 1
  );

  let newCartItems;
  if (isLastItem) {
    newCartItems = cartItems.filter((item) => item._id !== itemToRemove._id);
  } else {
    newCartItems = cartItems.map((item) => {
      if (item._id !== itemToRemove._id) return item;

      return { ...item, quantity: item.quantity - 1 };
    });
  }

  dispatch(setCartItems(newCartItems));
  dispatch(
    showAlert(
      'Item removed from cart.',
      ALERT_TYPES.SUCCESS,
      ALERT_DURATION.SHORT
    )
  );
};

export const clearItemFromCart = (cartItems, itemToClear) => (dispatch) => {
  const newCartItems = cartItems.filter((item) => item._id !== itemToClear._id);

  dispatch(setCartItems(newCartItems));
  dispatch(
    showAlert(
      'Item cleared from cart.',
      ALERT_TYPES.SUCCESS,
      ALERT_DURATION.SHORT
    )
  );
};

export const placeOrderAsync =
  (cartItems, orderOptions, successHandler) => async (dispatch) => {
    dispatch(placeOrderStart());

    const menuItems = cartItems.map((item) => ({
      menuItem: item._id,
      quantity: item.quantity,
    }));

    try {
      const reqBody = {
        menuItems,
        ...orderOptions,
      };

      const res = await apiRequest('order', API_REQ_TYPES.POST, reqBody);
      if (res.status !== 'success') throw new Error(res.message);

      dispatch(placeOrderSuccess());
      successHandler();
    } catch (err) {
      dispatch(placeOrderFailed(err));
      showAlert(err.message);
    }
  };

export const getOrdersAsync = () => async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await apiRequest('order/user-order');
    if (res.status !== 'success') throw new Error(res.message);

    const { orders } = res.data;
    dispatch(getOrdersSuccess(orders));
  } catch (err) {
    dispatch(getOrdersFailed(err));
    dispatch(showAlert(err.message));
  }
};
