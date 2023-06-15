import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: '',
    active: false,
    type: '',
  },
  reducers: {
    setAlert(state, action) {
      state.active = true;
      state.message = action.payload?.message;
      state.type = action.payload?.type;
    },
    removeAlert(state) {
      state.active = false;
      state.message = '';
      state.type = '';
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;
