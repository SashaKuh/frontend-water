import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import iconSprite from '../../images/SVG/symbol-defs.svg';

import {
  Title,
  MainForm,
  Input,
  SignInButton,
  Label,
  PageLink,
  MessageError,
  EyeIcon,
  InputContainer,
  Background,
  BottleBackground,
} from './AuthForm.styled';
import { signInSchema } from 'schemas/SignInSchema';
import { logIn } from '../../redux/users/usersOperations';
import {
  selectError,
  selectSuccessful,
} from '../../redux/users/usersSelectors';

const initialValues = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const error = useSelector(selectError);
  const successful = useSelector(selectSuccessful);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (successful && !error) {
      Notiflix.Notify.success('Success! You have successfully logged in.');
      setTimeout(() => {
        navigate('/homepage');
      }, 3000);
    }

    if (error) {
      Notiflix.Notify.failure(error);
    }
  }, [dispatch, successful, error, navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(logIn({ email: values.email, password: values.password }));

      Notiflix.Notify.success('Login successful!');
      setTimeout(() => {
        navigate('/homepage');
      }, 3000);
    } catch (error) {
      console.error('Error during login:', error);
      Notiflix.Notify.failure('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Background>
        <div className="container">
          <BottleBackground>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <MainForm>
                    <Title>Sign In</Title>
                    <div>
                      <Label htmlFor="firstName">Enter your email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        hasError={touched.email && errors.email}
                        required
                      />
                      <ErrorMessage name="email" component={MessageError} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Enter your password </Label>
                      <InputContainer>
                        <Input
                          type={passwordVisible ? 'text' : 'password'}
                          name="password"
                          placeholder="Password"
                          hasError={touched.password && errors.password}
                          required
                        />
                        <span onClick={togglePasswordVisibility}>
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
                      <ErrorMessage name="password" component={MessageError} />
                    </div>
                    <SignInButton type="submit" disabled={isSubmitting}>
                      Sign In
                    </SignInButton>
                    <PageLink to="/forgot-password">Forgot password?</PageLink>
                    <PageLink to="/signup">Sign Up</PageLink>
                  </MainForm>
                )}
              </Formik>
            </div>
          </BottleBackground>
        </div>
      </Background>
    </>
  );
};
export default AuthForm;
