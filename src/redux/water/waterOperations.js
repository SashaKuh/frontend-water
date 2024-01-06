import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWater, getMonthWater, addWater, editWater, deleteWaterById } from "services/api/waterAPI";

export const getWaterOperation = createAsyncThunk("water/getWater", async (date, thunkAPI) => {
  try {
    const response = await getWater(date);
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

export const getMonthWaterOperation = createAsyncThunk("water/getMonthWater", async (date, thunkAPI) => {
  try {
    const response = await getMonthWater(date);
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
 
});

export const addWaterOperation = createAsyncThunk("water/addWater", async ({waterVolume, date}, thunkAPI) => {
  try {
    const response = await addWater({waterVolume, date});
    return response;
  }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const editWaterOperation = createAsyncThunk("water/editWater", async ({id, waterVolume, date}, thunkAPI) => {
  try {
    const response = await editWater({id, waterVolume, date});
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

