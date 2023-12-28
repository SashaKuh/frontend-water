import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://backend-water.onrender.com/api/',
});

const setAuthHeader = token => {
    instance.defaults.headers.common.Authorization = ` Bearer ${token}`;
    localStorage.setItem('token', token);
}

export const addWater = async (data, token) => {
    setAuthHeader(token);
    const response = await instance.post('water/add', data);

    return response;
}

export const editWater = async (data, token, id) => {
    setAuthHeader(token);
    if (data.hasOwnProperty('id')) {
        delete data.id;
    }
    const response = await instance.patch(`water/${id}`, data);

    return response;
}

export const getWater = async token => {
    setAuthHeader(token);
    const response = await instance.get(`water/today`);

    return response;
}

export const getMonthWater = async token => {
    setAuthHeader(token);
    const response = await instance.get(`water/month`);

    return response;
}

export const deleteWaterById = async (token, id) => {
    setAuthHeader(token);
    const response = await instance.delete(`water/${id}`);
    return response;
}

