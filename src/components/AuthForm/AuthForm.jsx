import React, { useState } from 'react';
import { ErrorMessage, Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
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
  FormSection,
  Layout,
  LabelDiv,
} from './AuthForm.styled';
import { signInSchema } from 'schemas/SignInSchema';
import { signInThunk } from '../../redux/users/usersOperations';
import { selectIsLoading } from '../../redux/selectors';

const initialValues = {
  email: '',
  password: '',
};

export const AuthForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(
        signInThunk({ email: values.email, password: values.password })
      );
      if (!response.error) {
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Layout className="static-background">
      <Background>
        <BottleBackground>
          <FormSection>
            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <MainForm>
                  <Title>Sign In</Title>
                  <LabelDiv>
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
                  </LabelDiv>
                  <LabelDiv>
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
                  </LabelDiv>
                  <SignInButton
                    type="submit"
                    disabled={isSubmitting || isLoading}
                  >
                    Sign In
                  </SignInButton>

                  <PageLink to="/forgot-password">Forgot password?</PageLink>
                  <PageLink to="/signup">Sign up</PageLink>
                </MainForm>
              )}
            </Formik>
          </FormSection>
        </BottleBackground>
      </Background>
    </Layout>
  );
};
