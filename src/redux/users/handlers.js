

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
  state.isRefreshing = false;
};

export const handleSignUpError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignUp = (state, { payload }) => {
  state.isRefreshing = true;
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
};

export const handleSignInError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignIn = (state, { payload }) => {
  state.isRefreshing = true;
};

//----------------------- SignOut ------------------------

export const handleSignOut = (state, { payload }) => {
  state.user = {};
  state.token = null;
  state.isRefreshing = false;
  state.isLoading = false;
  state.isLoggedIn = false
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
  state.user.avatarURL = payload?.avatar.URL;
  state.token = localStorage.getItem('token');
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingRefresh = (state, { payload }) => {
  state.isRefreshing = true;
};

//----------------------- Avatar ------------------------

export const handleAvatar = (state, { payload }) => {
  state.user.avatarURL = payload.avatar.URL;
  state.isRefreshing = false;
};

export const handleAvatarError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingAvatar = (state, { payload }) => {
  state.isRefreshing = true;
};

//----------------------- Update ------------------------

export const handleUpdate = (state, { payload }) => {
  state.user.email = payload.email;
  state.user.username = payload.username;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatar.URL;
  state.user.dailyNorma = payload.dailyNorma;
  state.isRefreshing = false;
};

export const handleUpdateError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingUpdate = (state, { payload }) => {
  state.isRefreshing = true;
};