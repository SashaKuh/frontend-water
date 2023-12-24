import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://backend-water.onrender.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk("auth/register", async (credentials) => {
    const { data } = await axios.post('/users/signin', credentials);
    setAuthHeader(data.token);
    return data;
});


export const login = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectedWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthHeader(data.token)
            return data
        } catch (error) {
            return rejectedWithValue(error.message)
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectedWithValue }) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader()
        } catch (error) {
            return rejectedWithValue(error.message)
        }
    }
);
