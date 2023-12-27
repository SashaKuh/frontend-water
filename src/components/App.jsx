// import { lazy, useEffect } from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
// const MainPage = lazy(() => import(''));

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === '/homepage') {
      
    } else {
      
    }
  }, [dispatch, currentPath])

  return (
    <>
      <Routes>
        <Route path="/">{/*Layout*/}
          
          <Route index /> {/* MainPage */}
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
