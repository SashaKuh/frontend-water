import {instance} from './userAPI.js'

export const getWater = async () => {
    const { data } = await instance.get(`water/today`);
    return data;
};

export const getMonthWater = async (date) => {
    const {data} = await instance.post(`water/month`, date);
    return data;
};

export const addWater = async newWaterCard => {
    const { data } = await instance.post('water/add', newWaterCard);
    return data;
};

export const editWater = async ({id, waterVolume, date}) => {
    const { data } = await instance.put(`water/${id}`, {waterVolume, date});
    return data;
};


export const deleteWaterById = async id => {
    const response = await instance.delete(`water/${id}`);
    return response;
};

