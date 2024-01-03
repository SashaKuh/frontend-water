import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';

import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';

import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/users/usersOperations.js';

// import ReactModal from 'react-modal';
// ReactModal.setAppElement('#modal-root');

// import {selectUserToken} from '../redux'


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../pages/WellcomePage/WellcomePage.jsx')); // Corrected typo
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

export const App = () => { 
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) { 
      dispatch(refreshUserThunk(storedToken));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={!isLoggedIn ? <WelcomePage /> : <HomePage />} 
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