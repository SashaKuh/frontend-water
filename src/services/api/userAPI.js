import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://backend-water.onrender.com/api',
});

const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  localStorage.removeItem('token');
};

export const signin = async body => {
  const { data } = await instance.post('users/signin', body);
  setAuthHeader(data.token);

  return data;
};

export const signup = async body => {
  const { data } = await instance.post('users/signup', body);
  setAuthHeader(data.token);

  return data;
};

export const signout = async () => {
  await instance.post('users/signout');
  removeToken();
};

export const refreshUser = async token => {
  setAuthHeader(token);
  const { data } = await instance.get('users/current');

  return data;
};

export const updateAvatar = async (newPhotoFile, token) => {
  setAuthHeader(token);
  const data = await instance.patch('users/avatar', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.data.avatar;
};

export const updateUser = async (updateUser, token, id) => {
  setAuthHeader(token);
  if (updateUser.hasOwnProperty('id')) {
    delete updateUser.id;
  }
  const data = await instance.patch(`users/update/${id}`, updateUser);

  return data;
};
