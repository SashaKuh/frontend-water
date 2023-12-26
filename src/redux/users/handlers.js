export const handleUsers = (state, { payload }) => {
    state.user.email = payload.email;
};

export const handleSignError = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};

export const handleLogIn = (state, { payload }) => {
    state.token = payload.token;
    state.user.email = payload.user.email;
    state.isLogIn = true;
};

export const handleLogout = (state, { payload }) => {
    state.user = {};
    state.token = null;
};

export const handlePendingRefresh = (state, { payload }) => {
    state.isRefreshing = true;
};

export const handleRefresh = (state, { payload }) => {
    state.user.email = payload.email;
    state.user.name = payload.name;
    state.token = payload.token;
    state.user.id = payload._id;
    state.user.waterRate = payload.waterRate;
    state.user.gender = payload.gender;
    state.user.avatarURL = payload.avatarURL;
    state.isRefreshing = false;
};

export const handleRefreshReject = (state, { payload }) => {
    state.user = {};
    state.token = null;
    state.isRefreshing = true;
};

export const handleAvatar = (state, { payload }) => {
    state.user.avatarURL = payload;
};

export const handleUpdate = (state, { payload }) => {
    state.user.email = payload.email;
    state.user.name = payload.name;
    state.user.gender = payload.gender;
    state.user.avatarURL = payload.avatarURL;
};

export const handleWaterRate = (state, { payload }) => {
    state.user.waterRate = payload;
};