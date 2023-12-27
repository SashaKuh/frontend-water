import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://backend-water.onrender.com',
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
    const response = await instance.post('/users/signup', newUser);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const logIn = createAsyncThunk(
  '/auth/signin',
  async (user, thunkAPI) => {
    try {
      const response = await instance.post('/users/signin', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
