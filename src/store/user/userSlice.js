import { createSlice } from '@reduxjs/toolkit';

const USER_INITIAL_STATE = {
  token: '',
  user: null,
  phone: '',
  loading: false,
  profileLoading: false,
  passwordLoading: false,
  photoLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    // Login Actions
    loginUserStart(state) {
      state.loading = true;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Sign Up Actions
    signUpUserStart(state) {
      state.loading = true;
    },
    signUpUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signUpUserFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Forget Password(Get OTP) Actions
    getOtpStart(state) {
      state.loading = true;
    },
    getOtpSuccess(state, action) {
      state.loading = false;
      state.phone = action.payload;
    },
    getOtpFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Reset Password Actions
    resetPasswordStart(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    resetPasswordFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // Logout User Actions
    logoutUserStart(state) {
      state.loading = true;
    },
    logoutUserSuccess(state) {
      state.loading = false;
      state.user = null;
      state.token = '';
    },
    logoutUserFailed(state, action) {
      state.loading = true;
      state.error = action.payload;
    },

    // Update Profile Actions
    updateProfileStart(state) {
      state.profileLoading = true;
    },
    updateProfileSuccess(state, action) {
      state.profileLoading = false;
      state.user = action.payload;
    },
    updateProfileFailed(state, action) {
      state.profileLoading = false;
      state.error = action.payload;
    },

    // Update Password Actions
    updatePasswordStart(state) {
      state.passwordLoading = true;
    },
    updatePasswordSuccess(state, action) {
      state.passwordLoading = false;
      state.token = action.payload;
    },
    updatePasswordFailed(state, action) {
      state.passwordLoading = false;
      state.error = action.payload;
    },

    // Update Profile Image Actions
    updatePhotoStart(state) {
      state.photoLoading = true;
    },
    updatePhotoSuccess(state, action) {
      state.photoLoading = false;
      state.user = action.payload;
    },
    updatePhotoFailed(state, action) {
      state.photoLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = userSlice.actions;

export const userReducer = userSlice.reducer;
