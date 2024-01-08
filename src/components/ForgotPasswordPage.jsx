import React from 'react';
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
} from '../components/AuthForm/AuthForm.styled';
import { requestResetPassword } from 'services/api/userAPI';
import { signUpSchema } from '../schemas/SignUpSchema';
const initialValues = {
  email: '',
};

const ForgotPasswordPage = () => {
  // const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [notification, setNotification] = useState('');

  // const validateEmail = values => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValid = emailRegex.test(values.email);
  //   return isValid ? {} : { email: 'Enter a valid email' };
  // };

  const handleSend = async values => {
    const response = await requestResetPassword(values.email);
    console.log(response.ok);
    toast.success('Confirmation email has been sent!');

    // if (response.ok) {
    //   setNotification(
    //     'Instructions for submitting a password reset have been sent to your email.'
    //   );
    // } else {
    //   setNotification(`Error: ${response.message}`);
    // }
  };

  return (
    <Background>
      <BottleBackground>
        <FormSection>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSend}
            validationSchema={signUpSchema}
          >
            {({ handleSend, errors, touched }) => (
              <MainForm>
                <Title>Forgot Password</Title>
                <div>
                  <Label htmlFor="email">Enter your email</Label>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    $hasError={touched.email && errors.email}
                    required
                  />

                  {<ErrorMessage name="email" component={MessageError} />}
                </div>
                <SignInButton type="submit" disabled={handleSend}>
                  Send
                </SignInButton>
              </MainForm>
            )}
          </Formik>
        </FormSection>
      </BottleBackground>
    </Background>
  );
};
export default ForgotPasswordPage;
