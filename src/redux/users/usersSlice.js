import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  register,
  refreshUser,
  updateAvatar,
  signout,
  updateUser,
} from './usersOperations';

import {
  handleSignUp,
  handleSignUpError,
  handlePendingSignUp,
  handleSignIn,
  handleSignInError,
  handlePendingSignIn,
  handleSignOut,
  handleSignOutError,
  handlePendingSignOut,
  handleRefresh,
  handleRefreshError,
  handlePendingRefresh,
  handleAvatar,
  handleAvatarError,
  handlePendingAvatar,
  handleUpdate,
  handleUpdateError,
  handlePendingUpdate,
} from './handlers';

export const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

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
      .addCase(register.fulfilled, handleSignUp)
      .addCase(register.rejected, handleSignUpError)
      .addCase(register.pending, handlePendingSignUp)

      .addCase(logIn.fulfilled, handleSignIn)
      .addCase(logIn.rejected, handleSignInError)
      .addCase(logIn.pending, handlePendingSignIn)

      .addCase(signout.fulfilled, handleSignOut)
      .addCase(signout.rejected, handleSignOutError)
      .addCase(signout.pending, handlePendingSignOut)

      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(refreshUser.rejected, handleRefreshError)
      .addCase(refreshUser.pending, handlePendingRefresh)

      .addCase(updateAvatar.fulfilled, handleAvatar)
      .addCase(updateAvatar.rejected, handleAvatarError)
      .addCase(updateAvatar.pending, handlePendingAvatar)

      .addCase(updateUser.fulfilled, handleUpdate)
      .addCase(updateUser.rejected, handleUpdateError)
      .addCase(updateUser.pending, handlePendingUpdate),
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;
