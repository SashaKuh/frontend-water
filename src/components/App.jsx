import { lazy, Suspense,  } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

// import {PrivateRoute} from './privateRoute';
// import {PublicRoute} from './publicRoute';

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
          <Route path="/">{/* Layout */}
            <Route
              index
            element={
               // <PublicRoute>
                  <WellcomePage />
               // </PublicRoute>
              }
            />
          <Route path="signin"
            element={
               // <PublicRoute>
                  <SignInPage />
               // </PublicRoute>
              }
            />
          <Route path="signup"
            element={
                //<PublicRoute>
                  <SignUpPage />
                //</PublicRoute>
              }
          />
            <Route
              path="/homepage"
            element={
              // <PrivateRoute>
                <HomePage />
              // </PrivateRoute>
            }
            />
          </Route>
        </Routes>
      </Suspense>
    // </ErrorBoundary>
  );
};
