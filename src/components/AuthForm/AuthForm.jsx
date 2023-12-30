import React, { useState } from 'react';
import { ErrorMessage, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
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

const initialValues = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(
        logIn({ email: values.email, password: values.password })
      );
      if (response.payload) {
        setTimeout(() => {
          navigate('/homepage');
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
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        $hasError={touched.email && errors.email}
                        required
                      />
                      <ErrorMessage name="email" component={MessageError} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Enter your password </Label>
                      <InputContainer>
                        <Field
                          as={Input}
                          type={passwordVisible ? 'text' : 'password'}
                          name="password"
                          placeholder="Password"
                          $hasError={touched.password && errors.password}
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
