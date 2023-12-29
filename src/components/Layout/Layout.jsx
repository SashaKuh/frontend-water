import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
