import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThkYmI4MmI3YzM4ZDIzZTk0NjEyY2EiLCJpYXQiOjE3MDM4NTIzMDksImV4cCI6MTcwMzkzNTEwOX0.auA3YIWPzhwsym6_XJGyeGr9LfZ91HkhOw9I4ZdQ_rg";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const addWater = createAsyncThunk("water/addWater", async ({water}, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", water);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// export const addWater = async (data) => {
//     const response = await instance.post('water/add', data);
//     return response;
// }

export const editWater = createAsyncThunk("water/editWater", async ({id, water}, thunkAPI) => {
  try {
    const response = await axios.patch(`water/${id}`, water);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// export const editWater = async (data, id, token) => {
//     if (data.hasOwnProperty('id')) {
//         delete data.id;
//     }
//     const response = await instance.patch(`water/${id}`, data);
//     return response;
// }

export const getWater = createAsyncThunk("water/getWater", async (data, thunkAPI) => {
  try {
    const data1 = JSON.stringify(data)
    console.log(data1);
    const response = await axios.get(`water/today`, data1);
  return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

// export const getWater = async token => {
//     const response = await instance.get(`water/today`);
//     return response;
// }

export const getMonthWater = createAsyncThunk("water/getMonthWater", async ({date}, thunkAPI) => {
  try {
  const response = await axios.get(`water/month`, date);
  return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

// export const getMonthWater = async (data, token) => {
//     const response = await instance.get(`water/month`);
//     return response;
// }


export const deleteWater = createAsyncThunk("water/deleteWater", async ({id}, thunkAPI) => {
  try {
    const response = await axios.delete(`water/${id}`);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


// export const deleteWaterById = async (id, token) => {
//     const response = await instance.delete(`water/${id}`);
//     return response;
// }

