import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'modals',
  initialState: {
    modalDetails: '',
  },
  reducers: {
    setModalDetails(state, action) {
      state.modalDetails = action.payload;
    },
  },
});

export const modalReducer = Slice.reducer;

export const { setModalDetails, closeModalDetails } = Slice.actions;
