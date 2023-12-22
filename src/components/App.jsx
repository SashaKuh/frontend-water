<<<<<<< Updated upstream
export const App = () => {};
=======
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
    </Routes>
  );
};
export default App;
>>>>>>> Stashed changes
