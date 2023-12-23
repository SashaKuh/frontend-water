import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email address'
    )
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
      'Password must include letters, numbers, and special characters'
    )
    .min(8, 'Password is too short')
    .max(64, 'Password is too long')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Repeat password is required'),
});
