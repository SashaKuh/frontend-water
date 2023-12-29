import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://backend-water.onrender.com/api',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

export const register = createAsyncThunk('/auth/signup', async newUser => {
  try {
    const response = await instance.post('/auth/signup', newUser);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const logIn = createAsyncThunk(
  '/auth/signin',
  async (user, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signin', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signout = createAsyncThunk(
  '/auth/signout',
  async (_, thunkAPI) => {
    try {
      await instance.post('/auth/signout');
      clearAuthHeader();
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk('/users/current', async token => {
  try {
    setAuthHeader(token);
    const response = await instance.get('users/current');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const updateAvatar = createAsyncThunk(
  '/users/updateAvatar',
  async ({ newPhotoFile, token }) => {
    try {
      setAuthHeader(token);
      const data = await instance.patch('users/avatar', newPhotoFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data.data.avatar;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const updateUser = createAsyncThunk(
  '/users/updateUser',
  async ({ updateUser, token }) => {
    try {
      setAuthHeader(token);
      const response = await instance.patch(`users/update`, updateUser);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
