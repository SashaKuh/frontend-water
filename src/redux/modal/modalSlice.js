import { createSlice } from "@reduxjs/toolkit";



const Slice = createSlice({
    name: "modals",
    initialState: {
        modalDetails: "",
    },
    reducers: {
        setModalDetails(state, action) {
            console.log(action.payload);
            state.modalDetails = action.payload;
        },
    }
})




export const modalReducer = Slice.reducer;

export const { setModalDetails, closeModalDetails} = Slice.actions;