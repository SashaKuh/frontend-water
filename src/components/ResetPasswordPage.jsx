import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Background,
  BottleBackground,
  // MainForm,
  Title,
  Label,
  SignInButton,
} from '../components/AuthForm/AuthForm.styled';
import { resetPassword } from 'services/api/userAPI';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [notification, setNotification] = useState('');

  const navigate = useNavigate();

  const { resetToken } = useParams();

  const validatePassword = () => {
    const isValid = password.length >= 8 && password.length <= 64;

    setPasswordError(
      isValid ? '' : 'Password must be at least 6 characters long'
    );
    return isValid;
  };

  const validateConfirmPassword = () => {
    const isValid = confirmPassword === password;

    setPasswordError(isValid ? '' : 'Passwords do not match');
    return isValid;
  };

  const handleResetPassword = async () => {
    if (validatePassword() && validateConfirmPassword()) {
      try {
        const response = await resetPassword(resetToken, password);
        toast.success('Password has been successfully reset')
        console.log(response);
        setNotification('Password has been successfully reset.');
        navigate('/signin');
      } catch (error) {
        console.error('Error resetting password:', error);
        setNotification('Error resetting password.');
      }
    }
  };

  return (
    <div>
      <Background>
        <div className="container">
          <BottleBackground>
            <Title>Reset Password</Title>
            <p>Enter your new password below:</p>

            <div>
              <Label>Password:</Label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              {passwordError && <p>{passwordError}</p>}
            </div>

            <div>
              <Label>Confirm Password:</Label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                onBlur={validateConfirmPassword}
              />
              {passwordError && <p>{passwordError}</p>}
            </div>

            <SignInButton type="button" onClick={handleResetPassword}>
              Reset Password
            </SignInButton>

            {notification && <p>{notification}</p>}
          </BottleBackground>
        </div>
      </Background>
    </div>
  );
};

export default ResetPasswordPage;
