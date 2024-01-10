export const selectUserToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectError = state => state.auth.error;
export const selectId = state => state.auth.user.id;
export const selectDailyNorma = state => state.auth.user.dailyNorma;

export const selectTodayList = state => state.water.todayList;
export const selectManthList = state => state.water.monthList;
export const selectCompleteToday = state => state.water.completeToday;

export const selectIsLoading = state => state.auth.isLoading

export const selectModalDetails = state => state.modals.modalDetails;
export const selectModalEdit = state => state.modals.modalEdit;
export const selectModalDelete = state => state.modals.modalDelete;
export const selectModalAdd = state => state.modals.modalAdd;


export const selectNewCompleted = state => {
    const allWater = selectTodayList(state).reduce((previousValue, item) => {
        return previousValue + item.waterVolume;
    }, 0)
    const result = allWater / selectDailyNorma(state) * 100;
    return result.toFixed();
}