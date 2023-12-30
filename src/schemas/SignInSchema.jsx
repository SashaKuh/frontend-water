import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      'Password must include letters and numbers'
    )
    .min(8, 'Too short password')
    .max(64, 'Too long password')
    .required('Password is required'),
});
