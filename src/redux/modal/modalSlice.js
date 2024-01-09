import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name: "modals",
    initialState: {
        modalDetails: "",
        modalDelete: "null",
        modalEdit: "null",
        modalAdd: false,
    },
    reducers: {
        setModalDetails(state, action) {
            state.modalDetails = action.payload;
        },
        openModalDelete(state, action) {
            state.modalDelete = action.payload;
        },
        closeModalDelete(state, action) {
            state.modalDelete = "null";
        },
        openModalEdit(state, action) {
            state.modalEdit = action.payload;
        },
        closeModalEdit(state, action) {
            state.modalEdit = "null";
        },
        openModalAdd(state, action) {
            state.modalAdd = true;
        },
        closeModalAdd(state, action) {
            state.modalAdd = false;
        }
    }
})




export const modalReducer = Slice.reducer;

export const { setModalDetails, openModalDelete, closeModalDelete, openModalEdit, closeModalEdit, openModalAdd, closeModalAdd } = Slice.actions;