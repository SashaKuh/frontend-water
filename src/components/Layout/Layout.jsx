import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Приклад: Симуляція завантаження даних з API
    const fetchData = async () => {
      try {
        // Здійснюємо запит на сервер або виконуємо необхідні завдання
        // Після завершення завдань встановлюємо loading в false
        // Наприклад, після завантаження даних або після перевірки автентифікації
        // У цьому прикладі використовується затримка 500 мс для симуляції завантаження
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);
      } catch (error) {
        console.error('Error during data fetching:', error);
        setLoading(false);
      }
    };

    fetchData(); // Викликати функцію для симуляції завантаження
  }, []); // Передати порожній масив залежностей, щоб ефект викликався лише під час монтування компонента

  return (
    <>
      <Header />
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
