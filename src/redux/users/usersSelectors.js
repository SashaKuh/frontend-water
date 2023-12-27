export const selectUserToken = state => state.auth.token;
export const selectEmail = state => state.auth.user.email;
export const selectError = state => state.auth.error;
export const selectSuccessful = state => state.auth.successful;
