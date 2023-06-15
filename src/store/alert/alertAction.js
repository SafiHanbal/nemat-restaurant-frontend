import { setAlert, removeAlert } from './alertSlice';

export const ALERT_TYPES = {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
};

export const ALERT_DURATION = {
  SHORT: 1000,
  MEDIUM: 1500,
  LONG: 2000,
};

export const showAlert =
  (message, type = ALERT_TYPES.ERROR, duration = ALERT_DURATION.LONG) =>
  (dispatch) => {
    dispatch(setAlert({ message, type }));

    setTimeout(() => {
      dispatch(removeAlert());
    }, duration);
  };
