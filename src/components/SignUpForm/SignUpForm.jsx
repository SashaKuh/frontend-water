import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage, Field } from 'formik';
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
} from '../AuthForm/AuthForm.styled';

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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(
        register({ email: values.email, password: values.password })
      );
      if (response.payload) {
        setTimeout(() => {
          navigate('/signin');
        }, 3000);
      } else {
        console.error('Error during login:', response.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
                  <div>
                    <Label htmlFor="email">Enter your email</Label>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      $hasError={touched.email && errors.email}
                      value={values.email}
                      required
                    />
                    <ErrorMessage name="email" component={MessageError} />
                  </div>

                  <div>
                    <Label htmlFor="password">Enter your password</Label>
                    <InputContainer>
                      <Field
                        as={Input}
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        $hasError={touched.password && errors.password}
                        value={values.password}
                        required
                      />
                      <span
                        onClick={() => togglePasswordVisibility('password')}
                      >
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

                  <div>
                    <Label htmlFor="repeatPassword">Repeat password</Label>
                    <InputContainer>
                      <Field
                        as={Input}
                        type={repeatPasswordVisible ? 'text' : 'password'}
                        name="repeatPassword"
                        placeholder="Repeat password"
                        $hasError={
                          touched.repeatPassword && errors.repeatPassword
                        }
                        value={values.repeatPassword}
                        required
                      />
                      <span
                        onClick={() =>
                          togglePasswordVisibility('repeatPassword')
                        }
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
                  </div>

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
