// створюю slice для стану авторизації

import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './usersOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { username: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  reducers: {
    resetSuccessful: state => {
      state.successful = false;
    },
    resetError: state => {
      state.error = null;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
        state.error = 'Wrong email or password.';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(register.pending, state => {
        state.error = null;
      })
      .addCase(logIn.fulfilled, state => {
        state.successful = true;
        state.error = null;
      })
      .addCase(logIn.rejected, state => {
        state.isRefreshing = false;
        state.error = 'Values are not valid, try again.';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(logIn.pending, state => {
        state.error = null;
      }),
});

export const authReducer = authSlice.reducer;
