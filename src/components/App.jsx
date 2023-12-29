// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// const Layout = lazy(() => import('./Layout/Layout'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
// const MainPage = lazy(() => import(''));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* SharedLayout */}
          <Route index /> {/* MainPage */}
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
