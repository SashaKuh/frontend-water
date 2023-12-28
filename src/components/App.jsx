import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WellcomePage = lazy(() => import('../pages/WellcomePage/WellcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

// const ErrorFallback = ({ error }) => (
//   <div>
//     <p>An error occurred:</p>
//     <pre>{error.message}</pre>
//   </div>
// );

export const App = () => {
  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/">
          {/* Layout */}
          <Route index element={<WellcomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
    // </ErrorBoundary>
  );
};
