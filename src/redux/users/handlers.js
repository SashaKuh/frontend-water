

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
  state.isLoaduing = false;
};

export const handleSignUpError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignUp = (state, { payload }) => {
  state.isLoaduing = true;
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
  state.isLoaduing = false;
};

export const handleSignInError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignIn = (state, { payload }) => {
  state.isLoaduing = true;
};

//----------------------- SignOut ------------------------

export const handleSignOut = (state, { payload }) => {
  state.user = {};
  state.token = null;
  state.isLoaduing = false;
  state.isLoggedIn = false
};

export const handleSignOutError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingSignOut = (state, { payload }) => {
  state.isLoaduing = true;
};

//----------------------- Refresh ------------------------

export const handleRefresh = (state, { payload }) => {
  state.user = { ...payload };
  state.user.avatarURL = payload.avatar.URL;
  state.isLoggedIn = true; // Set isLoggedIn to true after refresh
  state.isRefreshing = false;
  state.isLoaduing = false;
};


export const handleRefreshError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingRefresh = (state, { payload }) => {
  state.isRefreshing = true;
  state.isLoaduing = true;
};

//----------------------- Avatar ------------------------

export const handleAvatar = (state, { payload }) => {
  state.user.avatarURL = payload.avatar.URL;
  state.isLoaduing = false;
};

export const handleAvatarError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingAvatar = (state, { payload }) => {
  state.isLoaduing = true;
};

//----------------------- Update ------------------------

export const handleUpdate = (state, { payload }) => {
  state.user.avatarURL = payload.avatar.URL;
  state.isLoaduing = false;
};

export const handleUpdateError = (state, { payload }) => {
  state.error = payload.message;
};

export const handlePendingUpdate = (state, { payload }) => {
  state.isLoaduing = true;
};