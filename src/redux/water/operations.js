import { instance } from "services/api/userAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const addWater = createAsyncThunk("water/addWater", async ({water}, thunkAPI) => {
  try {
    const response = await instance.post("/contacts", water);
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
    const response = await instance.patch(`water/${id}`, water);
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

export const getWater = createAsyncThunk("water/getWater", async ({date}, thunkAPI) => {
  try {
  const response = await instance.get(`water/today`, date);
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
  const response = await instance.get(`water/month`, date);
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
    const response = await instance.delete(`water/${id}`);
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

