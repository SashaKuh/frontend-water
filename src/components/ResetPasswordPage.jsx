import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Formik, Field } from 'formik';
import { toast } from 'react-toastify';
import iconSprite from '../images/SVG/symbol-defs.svg';
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

const initialValues = {
  password: '',
  confirmPassword: '',
};

const ResetPasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [notification, setNotification] = useState('');

  const navigate = useNavigate();

  const { resetToken } = useParams();

  const validatePassword = () => {
    const isValid = password.length >= 8 && password.length <= 64;

    setPasswordError(
      isValid ? '' : 'Password must be at least 6 characters long'
    );
    return isValid;
  };

  const validateConfirmPassword = () => {
    const isValid = confirmPassword === password;

    setPasswordError(isValid ? '' : 'Passwords do not match');
    return isValid;
  };

  const handleResetPassword = async () => {
    if (validatePassword() && validateConfirmPassword()) {
      try {
        const response = await resetPassword(resetToken, password);
        toast.success('Password has been successfully reset');
        console.log(response);
        // setNotification('Password has been successfully reset.');
        navigate('/signin');
      } catch (error) {
        console.error('Error resetting password:', error);
        // setNotification('Error resetting password.');
      }
    }
  };

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'repeatPassword') {
      setRepeatPasswordVisible(!repeatPasswordVisible);
    }
  };

  return (
    <Background>
      <BottleBackground>
        <FormSection>
          <Formik
            initialValues={initialValues}
            validate={validatePassword}
            onSubmit={handleResetPassword}
          >
            {({ handleResetPassword, errors, touched, values }) => (
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={validatePassword}
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
                {passwordError && <MessageError>{passwordError}</MessageError>}
                {<ErrorMessage name="passweord" component={MessageError} />}

                <Label>Confirm Password</Label>
                <InputContainer>
                  <Field
                    as={Input}
                    type={repeatPasswordVisible ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    $hasError={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onBlur={validateConfirmPassword}
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
                {passwordError && <MessageError>{passwordError}</MessageError>}
                {<ErrorMessage name="password" component={MessageError} />}
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
