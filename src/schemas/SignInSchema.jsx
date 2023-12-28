import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
      'Password must include letters, numbers and special characters'
    )
    .min(8, 'Too short password')
    .max(64, 'Too long password')
    .required('Password is required'),
});
