// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="signin"  />
    </Routes>
  );
};

