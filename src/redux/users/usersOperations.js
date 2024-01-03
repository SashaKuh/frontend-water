import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  signup,
  signin,
  signout,
  refreshUser,
  updateAvatar,
  updateUsers,
  addWaterRate,
} from '../../services/api/userAPI.js';



export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async newUser => {
  try {
    const resp = await signup(newUser);
    
    return resp;
  } catch (error) {
    return error.response.data; 
  }
});


export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (user, { rejectWithValue }) => {
    try {
      const resp = await signin(user);

      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutThunk  = createAsyncThunk(
  'auth/signout',
  async (_, {rejectWithValue}) => {
    try {
      const resp = await signout();

      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'users/current',
  async token => {
  try {
    const data = await refreshUser(token);
    
    return data;
  } catch (error) {
    return error.message;
  }
});

export const updateAvatarThunk  = createAsyncThunk(
  'users/avatar',
  async ({ avatar, token }) => {
    try {
      const data = await updateAvatar(avatar, token);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateThunk  = createAsyncThunk(
  'users/update',
  async ({ updateUser, token }) => {
    try {
      const data = await updateUsers(updateUser, token);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateWaterThunk  = createAsyncThunk(
  'water/rate',
  async ({ dailyNorma, token }) => {
    try {
      const data = await addWaterRate(dailyNorma, token);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);