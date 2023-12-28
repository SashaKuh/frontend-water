import { createSlice } from "@reduxjs/toolkit";
import { getWater, deleteWater, editWater, getMonthWater, addWater } from "./operations";



const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice(
    {
        name: "water",
        initialState: {
            todatList: [],
            monthList: [],
            isLoading: false,
            error: null,
        },

        extraReducers: builder => builder
            .addCase(getWater.pending, handlePending)
            .addCase(getWater.rejected, handleRejected)
            .addCase(getMonthWater.pending, handlePending)
            .addCase(getMonthWater.rejected, handleRejected)
            .addCase(addWater.pending, handlePending)
            .addCase(addWater.rejected, handleRejected)
            .addCase(editWater.pending, handlePending)
            .addCase(editWater.rejected, handleRejected)
            .addCase(deleteWater.pending, handlePending)
            .addCase(deleteWater.rejected, handleRejected)
            .addCase(getWater.fulfilled, (state, action) => {
              state.isLoading = false;
              state.error = null;
              state.monthList = action.payload;
            })
            .addCase(getMonthWater.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.todatList = action.payload;
            })
            .addCase(addWater.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.todatList.push(action.payload);
            })
            .addCase(editWater.fulfilled, (state, action) => {
                const { id, water, date } = action.payload; 
                state.isLoading = false;
                state.error = null;
                state.todatList = state.todatList.map(element => {
                if (element.id === id) {
                 return { id, water, date };
                 } 
                return element;
                }); 
                  })
                .addCase(deleteWater.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.todatList = state.todatList.filter(element => element.id !== action.payload.id);  
            })
    }
)

export const waterReducer = waterSlice.reducer;

