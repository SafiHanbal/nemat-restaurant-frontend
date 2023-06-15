import { combineReducers } from 'redux';

import { menuReducer } from './menu/menuSlice';
import { userReducer } from './user/userSlice';
import { alertReducer } from './alert/alertSlice';
import { cartReducer } from './cart/cartSlice';
import { ratingReducer } from './rating/ratingSlice';

export const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  alert: alertReducer,
  cart: cartReducer,
  rating: ratingReducer,
});
