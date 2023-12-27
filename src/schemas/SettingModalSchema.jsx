import * as Yup from 'yup';

export const SettingModalSchema = Yup.object().shape({
    name: Yup.string()
        .nullable(),
    email: Yup.string()
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Invalid email address'
        )
        .nullable(),
    newPassword: Yup.string()
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
            'Password must include letters, numbers and special characters'
        )
        .min(8, 'Password is too short')
        .nullable()
        .max(64, 'Password is too long'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .nullable()
})