import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
  async (newUser, { rejectWithValue }) => {
    try {
      const resp = await signup(newUser);

      return resp;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `User with this email already exists`
          );
          return rejectWithValue(error.message);
        default:
          return rejectWithValue(error.message);
      }
    }
  }
);


export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (user, { rejectWithValue }) => {
    try {
      const resp = await signin(user);

      return resp;
    } catch (error) {
      toast.error(`Email or password is wrong`);
      return rejectWithValue(error.message);
    }
  }
);

export const signOutThunk  = createAsyncThunk(
  'auth/signout',
  async (_, {rejectWithValue}) => {
    try {
      const resp = await signout();
      toast.success('Sign out successful!');

      return resp;
    } catch (error) {
      toast.error(`Error! User not logged in!`)
      return rejectWithValue(error);
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
    toast.error(`Error! User with this email not found!`)
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
      toast.success('The changes have been adopted!')

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
      toast.error("Something went wrong")
      return error;
    }
  }
);
