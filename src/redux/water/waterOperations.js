import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWater, getMonthWater, addWater, editWater, deleteWaterById } from "services/api/waterAPI";

export const addWaterOperation = createAsyncThunk("water/addWater", async ({waterVolume, date}, thunkAPI) => {
  try {
    const formatDate = date.toISOString();
    const response = await addWater({waterVolume, date: formatDate});
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const editWaterOperation = createAsyncThunk("water/editWater", async ({id, waterVolume, date}, thunkAPI) => {
  try {
    const formatDate = date.toISOString();
    const response = await editWater({id, waterVolume, date: formatDate});
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export const getWaterOperation = createAsyncThunk("water/getWater", async (_, thunkAPI) => {
  try {
    const response = await getWater();
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});


export const getMonthWaterOperation = createAsyncThunk("water/getMonthWater", async (date, thunkAPI) => {
  try {
    const formatDate = date.toISOString();
    const response = await getMonthWater({date: formatDate});
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});


export const deleteWaterOperation = createAsyncThunk("water/deleteWater", async (id, thunkAPI) => {
  try {
    const response = await deleteWaterById(id);
    return response.data;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

