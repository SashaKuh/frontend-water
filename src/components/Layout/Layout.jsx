import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { OurTeam } from 'components/OurTeam/OurTeam';

export const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);
      } catch (error) {
        console.error('Error during data fetching:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 
  return (
    <>
      <Header />
      <OurTeam/>
      <Suspense >
        <Outlet />
      </Suspense>
      {/* Backdrop з лоадером */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
