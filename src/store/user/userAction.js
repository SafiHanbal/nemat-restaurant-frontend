import { apiRequest, API_REQ_TYPES } from '../../utils/apiRequest';
import { showAlert, ALERT_TYPES } from '../alert/alertAction';

import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailed,
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailed,
  getOtpStart,
  getOtpSuccess,
  getOtpFailed,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFailed,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailed,
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFailed,
  updatePhotoStart,
  updatePhotoSuccess,
  updatePhotoFailed,
} from './userSlice';

export const loginUserAsync =
  (userData, resetFormFields) => async (dispatch) => {
    dispatch(loginUserStart());
    try {
      const res = await apiRequest('user/login', API_REQ_TYPES.POST, userData);
      if (res.status !== 'success') throw new Error(res.message);

      const { token, user } = res.data;
      resetFormFields();
      dispatch(loginUserSuccess({ token, user }));
    } catch (err) {
      dispatch(loginUserFailed(err));
      dispatch(showAlert(err.message));
    }
  };

export const signupUserAsync =
  (formData, resetFormFields) => async (dispatch) => {
    dispatch(signUpUserStart());
    try {
      const userData = {
        name: formData.name,
        phone: formData.phone,
        address: {
          house: formData.house,
          area: formData.area,
          city: formData.city,
          pincode: formData.pincode,
        },
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const res = await apiRequest('user/signup', API_REQ_TYPES.POST, userData);
      if (res.status !== 'success') throw new Error(res.message);

      const { token, user } = res.data;
      resetFormFields();
      dispatch(signUpUserSuccess({ token, user }));
    } catch (err) {
      dispatch(signUpUserFailed(err));
      dispatch(showAlert(err.message));
    }
  };

export const getOtpAsync = (phoneData, successHandler) => async (dispatch) => {
  dispatch(getOtpStart());
  try {
    const res = await apiRequest(
      'user/forgot-password',
      API_REQ_TYPES.POST,
      phoneData
    );
    if (res.status !== 'success') throw new Error(res.message);

    successHandler();
    dispatch(getOtpSuccess(phoneData.phone));
  } catch (err) {
    dispatch(getOtpFailed(err));
    dispatch(showAlert(err.message));
  }
};

export const resetPasswordAsync =
  (passwordData, resetFormFields) => async (dispatch) => {
    dispatch(resetPasswordStart());
    try {
      const res = await apiRequest(
        'user/reset-password',
        API_REQ_TYPES.POST,
        passwordData
      );
      if (res.status !== 'success') throw new Error(res.message);

      const { user, token } = res.data;
      resetFormFields();
      dispatch(resetPasswordSuccess({ user, token }));
    } catch (err) {
      dispatch(resetPasswordFailed(err));
      dispatch(showAlert(err.message));
    }
  };

export const logoutUserAsync = (successHandler) => async (dispatch) => {
  dispatch(logoutUserStart());
  try {
    const res = await apiRequest('user/logout');
    if (res.status !== 'success') throw new Error(res.message);

    successHandler();
    // Delay clearing user state to bypass not find error in account
    setTimeout(() => {
      dispatch(logoutUserSuccess());
    }, 100);
  } catch (err) {
    dispatch(logoutUserFailed(err));
    dispatch(showAlert(err.message));
  }
};

export const updateProfileAsync = (formData) => async (dispatch) => {
  const profileData = {
    name: formData.name,
    email: formData.email,
    address: {
      house: formData.house,
      area: formData.area,
      city: formData.city,
      pincode: formData.pincode,
    },
  };

  dispatch(updateProfileStart());
  try {
    const res = await apiRequest('user', API_REQ_TYPES.PATCH, profileData);
    if (res.status !== 'success') throw new Error(res.message);

    const { user } = res.data;
    dispatch(updateProfileSuccess(user));
    dispatch(showAlert('Profile updated successfully.', ALERT_TYPES.SUCCESS));
  } catch (err) {
    dispatch(updateProfileFailed(err));
    dispatch(showAlert(err.message));
  }
};

export const updatePasswordAsync =
  (passwordData, resetFormFields) => async (dispatch) => {
    dispatch(updatePasswordStart());
    try {
      const res = await apiRequest(
        'user/update-password',
        API_REQ_TYPES.POST,
        passwordData
      );
      if (res.status !== 'success') throw new Error(res.message);

      const { token } = res.data;
      resetFormFields();
      dispatch(updatePasswordSuccess(token));
      dispatch(
        showAlert('Password updated successfully.', ALERT_TYPES.SUCCESS)
      );
    } catch (err) {
      dispatch(updatePasswordFailed(err));
      dispatch(showAlert(err.message));
    }
  };

export const updatePhotoAsync =
  (formData, resetFormFields) => async (dispatch) => {
    dispatch(updatePhotoStart());
    try {
      const res = await apiRequest(
        'user/update-photo',
        API_REQ_TYPES.POST,
        formData,
        false
      );
      if (res.status !== 'success') throw new Error(res.message);

      const { user } = res.data;
      resetFormFields();
      dispatch(showAlert('Photo saved successfully.', ALERT_TYPES.SUCCESS));
      dispatch(updatePhotoSuccess(user));
    } catch (err) {
      dispatch(updatePhotoFailed(err));
      dispatch(showAlert(err.message));
    }
  };
