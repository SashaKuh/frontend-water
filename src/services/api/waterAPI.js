import {instance} from './userAPI.js'

export const getWater = async (date) => {
    const formatDate = date.toISOString().split("T")[0];
    const { data } = await instance.get(`water/today/${formatDate}`);
    return data[0];
};

export const getMonthWater = async (date) => {
    const formatDate = date.toISOString().slice(0, 7);
    const {data} = await instance.get(`water/month/${formatDate}`);
    return data;
};

export const addWater = async ({ waterVolume, date }) => {
    const formatDate = date.toISOString();
    const { data } = await instance.post('water/add', { waterVolume, date: formatDate});
    return data;
};

export const editWater = async ({ id, waterVolume, date }) => {
    const formatDate = date.toISOString();
    const { data } = await instance.put(`water/${id}`, {waterVolume, date: formatDate});
    return data;
};


export const deleteWaterById = async id => {
    const response = await instance.delete(`water/${id}`);
    return response;
};

