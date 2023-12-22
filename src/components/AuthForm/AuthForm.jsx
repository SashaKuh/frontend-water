import React from 'react';
import { Formik } from 'formik';

import {
  Title,
  MainForm,
  Input,
  SignInButton,
  Label,
  PageLink,
} from './AuthForm.styled';

const AuthForm = () => (
  <>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <MainForm>
        <Title>Sign In</Title>
        <div>
          <Label htmlFor="firstName">Enter your email</Label>
          <Input type="email" name="email" placeholder="E-mail" />
        </div>
        <div>
          <Label htmlFor="lastName">Enter your password </Label>
          <Input type="password" name="password" placeholder="Password" />
        </div>
        <SignInButton type="submit">Sign In</SignInButton>
      </MainForm>
    </Formik>
    <PageLink to="/forgot-password">Forgot password?</PageLink>
    <PageLink to="/signup">Sign Up</PageLink>
  </>
);

export default AuthForm;
