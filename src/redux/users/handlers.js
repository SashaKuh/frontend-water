import { initialState } from "./usersSlice";

//----------------------- SignUp ------------------------

export const handleSignUp = (state, { payload }) => {
  state.user.email = payload.email;
  state.user.username = payload.username;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatar.URL;
  state.token = payload.token;
  state.user.dailyNorma = payload.dailyNorma;
  state.isLoggedIn = true;
  state.successful = true;
  state.isRefreshng = false;
  state.isLoading = false;
};

export const handleSignUpError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignUp = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- SignIn ------------------------

export const handleSignIn = (state, { payload }) => {
  state.user.email = payload.email;
  state.user.username = payload.username;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatar.URL;
  state.token = payload.token;
  state.user.dailyNorma = payload.dailyNorma;
  state.isLoggedIn = true;
  state.successful = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleSignInError = (state, { payload }) => {
  state.error = payload.message;
  state.isLoading = false;
};

export const handlePendingSignIn = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- SignOut ------------------------

export const handleSignOut = (state, { payload }) => {
  state.user = initialState.user;
  state.token = null;
  state.isRefreshing = false;
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const handleSignOutError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignOut = (state, { payload }) => {

  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- Refresh ------------------------

export const handleRefresh = (state, { payload }) => {
  state.user.email = payload.email;
  state.user.username = payload.username;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatar.URL;
  state.user.dailyNorma = payload.dailyNorma;
  state.token = localStorage.getItem('token');
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleRefreshError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingRefresh = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- Avatar ------------------------

export const handleAvatar = (state, { payload }) => {
  state.user.avatarURL = payload.avatar.URL;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleAvatarError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingAvatar = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- Update ------------------------

export const handleUpdate = (state, { payload }) => {
  state.user.email = payload.email;
  state.user.username = payload.username;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatar.URL;
  state.user.dailyNorma = payload.dailyNorma;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleUpdateError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingUpdate = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};

//----------------------- WaterRare ------------------------

export const handleWaterRate = (state, { payload }) => {
  state.user.dailyNorma = payload.dailyNorma;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleWaterRateError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingWaterRate = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoading = true;
};