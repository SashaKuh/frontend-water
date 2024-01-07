import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});
