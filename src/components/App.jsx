// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import TodayAndMonthLayout from './TodayAndMonthLayout/TodayAndMonthLayout';

// const SignInPage = lazy(() => import(''));

export const App = () => {
  return <TodayAndMonthLayout />;
};
