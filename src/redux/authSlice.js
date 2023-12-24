import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations.js';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        });
    },
});

export const authReducer = authSlice.reducer;