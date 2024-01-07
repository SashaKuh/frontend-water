export const selectUserToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectError = state => state.auth.error;
export const selectId = state => state.auth.user.id;
export const selectDailyNorma = state => state.auth.user.dailyNorma;

export const selectTodayList = state => state.water.todatList;
export const selectManthList = state => state.water.monthList;
export const selectСompleteToday = state => state.water.completeToday;