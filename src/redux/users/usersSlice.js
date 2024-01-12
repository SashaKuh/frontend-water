import { createSlice } from '@reduxjs/toolkit';
import {
  signUpThunk,
  signInThunk,
  signOutThunk,
  refreshUserThunk,
  updateAvatarThunk,
  updateThunk,
  updateWaterThunk,
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
  handleWaterRate,
  handleWaterRateError,
  handlePendingWaterRate,
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
  isLoading: false,
  isInitialized: false,
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
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(signUpThunk.rejected, handleSignUpError)
      .addCase(signUpThunk.pending, handlePendingSignUp)

      .addCase(signInThunk.fulfilled, handleSignIn)
      .addCase(signInThunk.rejected, handleSignInError)
      .addCase(signInThunk.pending, handlePendingSignIn)

      .addCase(signOutThunk.fulfilled, handleSignOut)
      .addCase(signOutThunk.rejected, handleSignOutError)
      .addCase(signOutThunk.pending, handlePendingSignOut)

      .addCase(refreshUserThunk.fulfilled, handleRefresh)
      .addCase(refreshUserThunk.rejected, handleRefreshError)
      .addCase(refreshUserThunk.pending, handlePendingRefresh)

      .addCase(updateAvatarThunk.fulfilled, handleAvatar)
      .addCase(updateAvatarThunk.rejected, handleAvatarError)
      .addCase(updateAvatarThunk.pending, handlePendingAvatar)

      .addCase(updateThunk.fulfilled, handleUpdate)
      .addCase(updateThunk.rejected, handleUpdateError)
      .addCase(updateThunk.pending, handlePendingUpdate)

      .addCase(updateWaterThunk.fulfilled, handleWaterRate)
      .addCase(updateWaterThunk.rejected, handleWaterRateError)
      .addCase(updateWaterThunk.pending, handlePendingWaterRate),
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;
