import React, { useState } from 'react';

import {
    Background,
    BottleBackground,
    // MainForm,
    Title,
    Label,
    SignInButton
} from '../components/AuthForm/AuthForm.styled';


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [notification, setNotification] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailError(isValid ? '' : 'Enter a valid email');
    return isValid;
  };

  const handleSend = () => {
    if (validateEmail()) {

      const response = { ok: true, message: 'Instructions sent successfully.' };

      if (response.ok) {
        setNotification('Instructions for submitting a password reset have been sent to your email.');
      } else {
        setNotification(`Error: ${response.message}`);
      }
    }
  };

    return (
        <>
            <Background>
                <div className="container">
                    <BottleBackground>
                        {/* <MainForm> */}
                            <Title>Forgot Password</Title>
                            <form>
                                <div>
                                    <Label>Enter your email</Label>
                                    <br />
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={validateEmail}
                                    />
                                    {emailError && <p>{emailError}</p>}
                                </div>
                                <SignInButton type="button" onClick={handleSend}>
                                    Send
                                </SignInButton>
                            </form>
                            {notification && <p>{notification}</p>}
                        {/* </MainForm> */}
                    </BottleBackground>
                </div>
            </Background>
        </>
    );
};

export default ForgotPasswordPage;
