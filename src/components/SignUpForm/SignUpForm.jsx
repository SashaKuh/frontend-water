import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
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
} from './SignUpForm.styled';
import { signUpSchema } from 'schemas/SignUpSchema';

const SignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
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
              onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <MainForm>
                  <Title>Sign Up</Title>

                  <Label htmlFor="email">Enter your email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    hasError={touched.email && errors.email}
                    required
                  />
                  <ErrorMessage name="email" component={MessageError} />

                  <Label htmlFor="password">Enter your password </Label>
                  <InputContainer>
                    <Input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      hasError={touched.password && errors.password}
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

                  <Label htmlFor="repeatPassword">Repeat password </Label>
                  <InputContainer>
                    <Input
                      type={repeatPasswordVisible ? 'text' : 'password'}
                      name="repeatPassword"
                      placeholder="Repeat password"
                      hasError={touched.repeatPassword && errors.repeatPassword}
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
