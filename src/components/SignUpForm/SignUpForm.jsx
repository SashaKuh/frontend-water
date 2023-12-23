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
} from './AuthForm.styled';
import { signInSchema } from 'schemas/SignInSchema';

const SignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
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
          </MainForm>
        )}
      </Formik>
      <PageLink to="/forgot-password">Forgot password?</PageLink>
      <PageLink to="/signup">Sign Up</PageLink>
    </>
  );
};
export default SignUpForm;
