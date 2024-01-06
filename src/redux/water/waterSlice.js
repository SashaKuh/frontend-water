import { createSlice } from "@reduxjs/toolkit";
import { getWaterOperation, deleteWaterOperation, editWaterOperation, getMonthWaterOperation, addWaterOperation } from "./waterOperations";
import { handlePending, handleRejected, addWaterFulfilled, getMonthWaterFulfilled, getWaterFulfilled, editWaterFulfilled, deleteWaterFulfilled } from "./handlers";

const waterSlice = createSlice(
    {
        name: "water",
        initialState: {
            todayList: [],
            completeToday: 0,
            monthList: [],
            isLoading: false,
            error: null,
        },

        extraReducers: builder => builder
            .addCase(getWaterOperation.pending, handlePending)
            .addCase(getWaterOperation.rejected, handleRejected)
            .addCase(getMonthWaterOperation.pending, handlePending)
            .addCase(getMonthWaterOperation.rejected, handleRejected)
            .addCase(addWaterOperation.pending, handlePending)
            .addCase(addWaterOperation.rejected, handleRejected)
            .addCase(editWaterOperation.pending, handlePending)
            .addCase(editWaterOperation.rejected, handleRejected)
            .addCase(deleteWaterOperation.pending, handlePending)
            .addCase(deleteWaterOperation.rejected, handleRejected)
            .addCase(getWaterOperation.fulfilled, getWaterFulfilled)
            .addCase(getMonthWaterOperation.fulfilled, getMonthWaterFulfilled)
            .addCase(addWaterOperation.fulfilled, addWaterFulfilled)
            .addCase(editWaterOperation.fulfilled, editWaterFulfilled)
            .addCase(deleteWaterOperation.fulfilled, deleteWaterFulfilled)
    }
)

export const waterReducer = waterSlice.reducer;

