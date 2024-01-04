import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { resetPasswordThunk } from '../redux/users/usersOperations';

import {
    Background,
    BottleBackground,
    // MainForm,
    Title,
    Label,
    SignInButton
} from '../components/AuthForm/AuthForm.styled';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [notification, setNotification] = useState('');

//   const { resetToken } = useParams(); // Отримуємо параметр resetToken з URL
//   const dispatch = useDispatch();

  const validatePassword = () => {
    const isValid = password.length >= 6; // Ваші вимоги до пароля

    setPasswordError(isValid ? '' : 'Password must be at least 6 characters long');
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
        // Відправляємо запит на сервер для збереження нового пароля
        // await dispatch(resetPasswordThunk({ resetToken, password }));
        setNotification('Password has been successfully reset.');
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
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={validatePassword}
                            />
                            {passwordError && <p>{passwordError}</p>}
                        </div>

                        <div>
                            <Label>Confirm Password:</Label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
