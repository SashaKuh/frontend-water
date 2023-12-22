import React from 'react';
import { Formik, Form } from 'formik';
import { Title, MainForm, Input, SignInButton } from './AuthForm.styled';

const AuthForm = () => (
  <MainForm>
    <Title>Sign In</Title>
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
      <Form>
        <label htmlFor="firstName">Enter your email</label>
        <Input type="email" name="email" placeholder="E-mail" />

        <label htmlFor="lastName">Enter your password </label>
        <Input type="password" name="password" placeholder="Password" />

        <SignInButton type="submit">Sign In</SignInButton>
      </Form>
    </Formik>
  </MainForm>
);

export default AuthForm;
