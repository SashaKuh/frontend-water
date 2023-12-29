import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  register,
  refreshUser,
  updateAvatar,
  signout,
} from './usersOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      username: null,
      email: null,
      avatarURL: null,
      gender: null,
      dailyNorma: null,
      waterRate: null,
    },
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
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(refreshUser.pending, state => {
        state.error = null;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
      })

      .addCase(signout.pending, state => {
        state.error = '';
        state.isLoggedIn = true;
      })
      .addCase(signout.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(signout.fulfilled, state => {
        state.user.username = '';
        state.user.email = '';
        state.user.avatarURL = '';
        state.user.gender = '';
        state.user.dailyNorma = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = '';
        state.error = '';
      }),
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;