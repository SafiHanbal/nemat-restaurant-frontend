import {
  MENU_CATEGORY_TYPES,
  MENU_SORT_TYPES,
} from '../../store/menu/menuAction';

export const categoryOptions = [
  {
    name: 'Starter',
    value: MENU_CATEGORY_TYPES.STARTER,
  },
  {
    name: 'Main Course',
    value: MENU_CATEGORY_TYPES.MAIN_COURSE,
  },
  {
    name: 'Bread',
    value: MENU_CATEGORY_TYPES.BREAD,
  },
  {
    name: 'Rice',
    value: MENU_CATEGORY_TYPES.RICE,
  },
  {
    name: 'Sides',
    value: MENU_CATEGORY_TYPES.SIDES,
  },
  {
    name: 'Dessert',
    value: MENU_CATEGORY_TYPES.DESSERT,
  },
];

export const sortOptions = [
  {
    name: 'Sort By:',
    value: MENU_SORT_TYPES.DEFAULT,
  },
  {
    name: 'Price Increasing',
    value: MENU_SORT_TYPES.PRICE_INCREASING,
  },
  {
    name: 'Price Decreasing',
    value: MENU_SORT_TYPES.PRICE_DECREASING,
  },
  {
    name: 'Highest Rated',
    value: MENU_SORT_TYPES.HIGEST_RATED,
  },
  {
    name: 'Lowest Rated',
    value: MENU_SORT_TYPES.LOWEST_RATED,
  },
];
