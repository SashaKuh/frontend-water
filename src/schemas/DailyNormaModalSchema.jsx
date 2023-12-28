import * as Yup from 'yup';

export const DailyNormaModalSchema = Yup.object().shape({
    gender: Yup.string().required('Gender is required'),
    weight: Yup.number().positive('Number must be positive').min(1)
        .required('Weight is required'),
    time: Yup.number('must be number').max(24, 'Time must not be greater than 24')
        .positive('Number must be positive')
})