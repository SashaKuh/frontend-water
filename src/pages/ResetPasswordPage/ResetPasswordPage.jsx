import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { toast } from 'react-toastify';

import iconSprite from '../../images/SVG/symbol-defs.svg';
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
  Layout
} from '../../components/AuthForm/AuthForm.styled';
import { resetPassword } from 'services/api/userAPI';

const ResetPasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const { resetToken } = useParams();

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validatePassword = () => {
    const isValid = password.length >= 8 && password.length <= 64;

    setPasswordError(
      isValid ? '' : 'Password must be at least 8 characters long'
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
        await resetPassword(resetToken, password);
        toast.success('Password has been successfully reset');

        navigate('/');
      } catch (error) {
        toast.error('Error resetting password');
      }
    }
  };

  return (
    <Layout className='static-background'>
      <Background>
        <BottleBackground>
          <FormSection>
            <Formik
              initialValues={initialValues}
              validate={validatePassword}
              onSubmit={handleResetPassword}
            >
              {({ handleSubmit }) => (
                <MainForm onSubmit={handleSubmit}>
                  <Title>Reset Password</Title>
                  <Label>Enter your new password below</Label>
                  <Label>Password</Label>
                  <InputContainer>
                    <Field
                      as={Input}
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onBlur={validatePassword}
                    />
                    <span onClick={() => setPasswordVisible(!passwordVisible)}>
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
                  <Label>Confirm Password</Label>
                  <InputContainer>
                    <Field
                      as={Input}
                      type={passwordVisible ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      onBlur={validateConfirmPassword}
                    />
                    <span onClick={() => setPasswordVisible(!passwordVisible)}>
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
                  <SignInButton type="button" onClick={handleResetPassword}>
                    Reset Password
                  </SignInButton>
                </MainForm>
              )}
            </Formik>
          </FormSection>
        </BottleBackground>
      </Background>
    </Layout>
  );
};

export default ResetPasswordPage;
