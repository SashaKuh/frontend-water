import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Formik, Field } from 'formik';
import iconSprite from '../images/SVG/symbol-defs.svg';
import { toast } from 'react-toastify';

import {
  Background,
  BottleBackground,
  MainForm,
  FormSection,
  Input,
  MessageError,
  Title,
  Label,
  SignInButton,
  EyeIcon,
  InputContainer,
} from '../components/AuthForm/AuthForm.styled';
import { resetPassword } from 'services/api/userAPI';
import { signUpSchema } from '../schemas/SignUpSchema';

const initialValues = {
  password: '',
  repeatPassword: '',
};

const ResetPasswordPage = () => {
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [notification, setNotification] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { resetToken } = useParams();

  // const validatePassword = () => {
  //   const isValid = password.length >= 8 && password.length <= 64;

  //   setPasswordError(
  //     isValid ? '' : 'Password must be at least 6 characters long'
  //   );
  //   return isValid;
  // };

  // const validateConfirmPassword = () => {
  //   const isValid = confirmPassword === password;

  //   setPasswordError(isValid ? '' : 'Passwords do not match');
  //   return isValid;
  // };

  const handleResetPassword = async values => {
    try {
      const response = await resetPassword(resetToken, values.password);
      toast.success('Password has been successfully reset');
      console.log(response);
      // setNotification('Password has been successfully reset.');
      navigate('/signin');
    } catch (error) {
      console.error('Error resetting password:', error);
      // setNotification('Error resetting password.');
    }
  };

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'repeatPassword') {
      setRepeatPasswordVisible(!repeatPasswordVisible);
    }
  };
  // const validatePassword = values => {
  //   const errors = {};
  //   if (values.password.length < 8 || values.password.length > 64) {
  //     errors.password = 'Password must be between 8 and 64 characters long';
  //   }
  //   return errors;
  // };

  // const validateConfirmPassword = values => {
  //   const errors = {};
  //   if (values.confirmPassword !== values.password) {
  //     errors.confirmPassword = 'Passwords do not match';
  //   }
  //   return errors;
  // };

  return (
    <Background>
      <BottleBackground>
        <FormSection>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleResetPassword}
          >
            {({ handleResetPassword, errors, touched }) => (
              <MainForm>
                <Title>Reset Password</Title>
                <Label>Enter your new password below</Label>
                <Label>Password</Label>
                <InputContainer>
                  <Field
                    as={Input}
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    $hasError={touched.password && errors.password}
                    required
                  />
                  <span onClick={() => togglePasswordVisibility('password')}>
                    {passwordVisible ? (
                      <EyeIcon>
                        <svg>
                          <use href={iconSprite + '#icon-eye'} />
                        </svg>
                      </EyeIcon>
                    ) : (
                      <EyeIcon>
                        <svg>
                          <use href={iconSprite + '#icon-eye-slash'} />
                        </svg>
                      </EyeIcon>
                    )}
                  </span>
                </InputContainer>
                {<ErrorMessage name="password" component={MessageError} />}

                <Label>Confirm password</Label>
                <InputContainer>
                  <Field
                    as={Input}
                    type={repeatPasswordVisible ? 'text' : 'password'}
                    name="repeatPassword"
                    placeholder="Confirm password"
                    $hasError={touched.repeatPassword && errors.repeatPassword}
                    required
                  />
                  <span
                    onClick={() => togglePasswordVisibility('repeatPassword')}
                  >
                    {repeatPasswordVisible ? (
                      <EyeIcon>
                        <svg>
                          <use href={iconSprite + '#icon-eye'} />
                        </svg>
                      </EyeIcon>
                    ) : (
                      <EyeIcon>
                        <svg>
                          <use href={iconSprite + '#icon-eye-slash'} />
                        </svg>
                      </EyeIcon>
                    )}
                  </span>
                </InputContainer>
                {
                  <ErrorMessage
                    name="repeatPassword"
                    component={MessageError}
                  />
                }
                <SignInButton type="submit" disabled={handleResetPassword}>
                  Reset Password
                </SignInButton>
                {/* {notification && <p>{notification}</p>} */}
              </MainForm>
            )}
          </Formik>
        </FormSection>
      </BottleBackground>
    </Background>
  );
};

export default ResetPasswordPage;
