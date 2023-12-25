import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import { signUpSchema } from 'schemas/SignUpSchema';
import { register } from '../../redux/users/usersOperations';
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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'repeatPassword') {
      setRepeatPasswordVisible(!repeatPasswordVisible);
    }
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = async values => {
    try {
      await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
          repeatPassword: values.repeatPassword,
        })
      );
    } catch (error) {
      // Помилки
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

                  <Label htmlFor="name">Enter your name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    hasError={touched.name && errors.name}
                    value={values.name}
                    required
                  />
                  <ErrorMessage name="name" component={MessageError} />

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
