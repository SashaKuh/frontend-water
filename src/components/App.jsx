import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
// import { ErrorBoundary } from 'react-error-boundary';

import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';

import { useDispatch, useSelector } from 'react-redux';

import { selectUserToken } from '../redux/selectors.js';
import { refreshUserThunk } from '../redux/users/usersOperations.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../pages/WellcomePage/WellcomePage')); // Corrected typo
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

export const App = () => {
  const token = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(refreshUserThunk());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/homepage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
