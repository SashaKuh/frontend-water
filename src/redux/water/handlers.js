export const handlePending = state => {
        state.isLoading = true;
};
export const handleRejected = (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
};

export const getWaterFulfilled = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todatList = action.payload?.entries ? action.payload.entries : [];
        state.completeToday = action.payload?.completed ? action.payload.completed : 0;
};
export const getMonthWaterFulfilled = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.monthList = action.payload;
};
export const addWaterFulfilled = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todatList.push(action.payload);
};
export const editWaterFulfilled = (state, action) => {
        const { id, water, date } = action.payload; 
        state.isLoading = false;
        state.error = null;
        state.todatList = state.todatList.map(element => {
        if (element.id === id) {
         return { id, water, date };
         } 
        return element;
        }); 
};
export const deleteWaterFulfilled = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todatList = state.todatList.filter(element => element.id !== action.payload.id);  
};