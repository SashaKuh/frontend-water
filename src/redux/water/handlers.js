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
        state.todayList = action.payload?.entries ? action.payload.entries : [];
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
        state.todayList.push(action.payload);
        state.monthList = state.monthList.map(item => {
                if (item._id === new Date().getDate()) {
                        item.servings += 1;
                        return item;
                }
                return item;
        })
};
export const editWaterFulfilled = (state, action) => {
        const { _id, waterVolume, date } = action.payload; 
        state.isLoading = false;
        state.error = null;
        state.todayList = state.todayList.map(element => {
                if (element._id === _id) {
                return { _id, waterVolume, date };
         } 
        return element;
        }); 
};
export const deleteWaterFulfilled = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todayList = state.todayList.filter(element => element._id !== action.payload);
        console.log(state.monthList);
        state.monthList = state.monthList.map(item => {
                if (item._id === new Date().getDate()) {
                        item.servings -= 1;
                        return item;
                }
                return item;
        })
        console.log(state.monthList);
};