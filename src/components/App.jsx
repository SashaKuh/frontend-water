// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DailyNorma } from './DailyNorma/DailyNorma';

// const SignInPage = lazy(() => import(''));

export const App = () => {
  return (<div><DailyNorma/>
    <Routes>
      <Route path="signin"  />
    </Routes></div>
  );
};

