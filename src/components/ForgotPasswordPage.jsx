import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Formik, Field, ErrorMessage } from 'formik';

import {
  Background,
  BottleBackground,
  FormSection,
  MainForm,
  Input,
  Title,
  MessageError,
  Label,
  SignInButton,
  PageLink,
  LableContainer
} from '../components/AuthForm/AuthForm.styled';
import { requestResetPassword } from 'services/api/userAPI';

import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
};

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailError(isValid ? '' : 'Enter a valid email');
    return isValid;
  };

  const handleSend = async () => {
    if (validateEmail()) {
      
      try {
        await requestResetPassword(email);
        navigate('/');
        toast.success('Confirmation email has been sent!');
      } catch (error) {
        toast.error('User with this email not found!')
      }
    }
  };

  return (
    <Background>
      <BottleBackground>
        <FormSection>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSend}
            validate={validateEmail}
          >
            {({ handleSend, errors, touched }) => (
              <MainForm>
                <Title>Forgot Password</Title>
                <LableContainer>
                  <Label htmlFor="email">Enter your email</Label>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    $hasError={touched.email && errors.email}
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => {
                      validateEmail();
                    }}
                  />
                  {emailError && <MessageError>{emailError}</MessageError>}
                  {<ErrorMessage name="email" component={MessageError} />}
                </LableContainer>
                <SignInButton type="submit" onSubmit={handleSend}>
                  Send
                </SignInButton>

                <PageLink to="/signin">Sign in</PageLink>

              </MainForm>
            )}
          </Formik>
        </FormSection>
      </BottleBackground>
    </Background>
  );
};
export default ForgotPasswordPage