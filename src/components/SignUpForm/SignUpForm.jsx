import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import { signUpSchema } from 'schemas/SignUpSchema';
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
} from './SignUpForm.styled';

import {
  selectSuccessful,
  selectError,
} from '../../redux/users/usersSelectors';
import Notiflix from 'notiflix';
import { register } from '../../redux/users/usersOperations';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successful = useSelector(selectSuccessful);
  const error = useSelector(selectError);

  const emailInLocalStorage = email => {
    localStorage.setItem('registrationEmail', email);
  };

  const emailFromLocalStorage = () => {
    return localStorage.getItem('registrationEmail') || '';
  };

  const storeEmail = emailFromLocalStorage();
  const [email, setEmail] = useState(storeEmail);

  useEffect(() => {
    if (successful && !error) {
      Notiflix.Notify.Success(
        'Congratulations! Verify your email for confirmation.'
      );
      setTimeout(() => {
        navigate('/signin');
      }, 6000);
    }

    if (error) {
      Notiflix.Notify.Failure(error);
    }
  }, [dispatch, successful, error, navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Зберігаю меіл в LocalStorage
      emailInLocalStorage(values.email);
      // Меiл у станi
      setEmail(values.email);
      await dispatch(
        register({ email: values.email, password: values.password })
      );

      Notiflix.Notify.Success(
        'Registration successful! Please check your email for confirmation.'
      );
      setTimeout(() => {
        navigate('/signin');
      }, 6000);
    } catch (error) {
      console.error('Error during signup:', error);
      Notiflix.Notify.Failure('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
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
      <div className="container">
        <BottleBackground>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched, values }) => (
                <MainForm>
                  <Title>Sign Up</Title>
                  <Label htmlFor="email">Enter your email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    hasError={touched.email && errors.email}
                    value={values.email}
                    required
                  />
                  <ErrorMessage name="email" component={MessageError} />

                  <Label htmlFor="password">Enter your password</Label>
                  <InputContainer>
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      hasError={touched.password && errors.password}
                      value={values.password}
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
                  <ErrorMessage name="password" component={MessageError} />

                  <Label htmlFor="repeatPassword">Repeat password</Label>
                  <InputContainer>
                    <Input
                      type={repeatPasswordVisible ? 'text' : 'password'}
                      name="repeatPassword"
                      placeholder="Repeat password"
                      hasError={touched.repeatPassword && errors.repeatPassword}
                      value={values.repeatPassword}
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
                  <ErrorMessage
                    name="repeatPassword"
                    component={MessageError}
                  />

                  <SignInButton type="submit" disabled={isSubmitting}>
                    Sign Up
                  </SignInButton>
                  <PageLink to="/signin">Sign In</PageLink>
                </MainForm>
              )}
            </Formik>
          </div>
        </BottleBackground>
      </div>
    </Background>
  );
};

export default SignUpForm;
