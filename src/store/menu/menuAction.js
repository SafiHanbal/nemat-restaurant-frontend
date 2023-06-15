// values: ['starter', 'main-course', 'bread', 'rice', 'sides', 'dessert']
import { apiRequest } from '../../utils/apiRequest';
import { showAlert } from '../alert/alertAction';

import { getMenuStart, getMenuSuccess, getMenuFailed } from './menuSlice';

export const MENU_CATEGORY_TYPES = {
  IS_SPECIAL: 'isSpecial',
  STARTER: 'starter',
  MAIN_COURSE: 'main-course',
  BREAD: 'bread',
  RICE: 'rice',
  SIDES: 'sides',
  DESSERT: 'dessert',
};

export const MENU_SORT_TYPES = {
  DEFAULT: null,
  PRICE_INCREASING: 'price',
  PRICE_DECREASING: '-price',
  LOWEST_RATED: 'ratingsAverage',
  HIGEST_RATED: '-ratingsAverage',
};

export const getMenuAsync =
  (category = MENU_CATEGORY_TYPES.STARTER, sortBy = MENU_SORT_TYPES.DEFAULT) =>
  async (dispatch) => {
    dispatch(getMenuStart());
    try {
      const categoryUrl =
        category === MENU_CATEGORY_TYPES.IS_SPECIAL
          ? 'isSpecial=true'
          : `category=${category}`;

      const sortUrl = sortBy ? `&sort=${sortBy}` : '';

      const url = `menu?${categoryUrl}${sortUrl}`;

      const res = await apiRequest(url);
      if (res.status !== 'success') throw new Error(res.message);

      const { menu } = res.data;
      dispatch(getMenuSuccess({ [category]: menu }));
    } catch (err) {
      dispatch(getMenuFailed(err));
      dispatch(showAlert(err.message));
    }
  };
