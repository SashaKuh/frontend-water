import {instance} from './waterAPI.js'

export const getWater = async () => {
    const { data } = await instance.get(`water/today`);
    return data;
};

export const getMonthWater = async () => {
    const response = await instance.get(`water/month`);
    return response;
};

export const addWater = async newWaterUsed  => {
    const { data } = await instance.post('water/add', newWaterUsed);
    return data;
};

export const editWater = async ({newWaterUsed, id}) => {
    const { data } = await instance.post(`water/${id}`, newWaterUsed);
    return data;
};


export const deleteWaterById = async id => {
    const response = await instance.delete(`water/${id}`);
    return response;
};

