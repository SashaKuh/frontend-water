import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

import { authReducer } from './users/usersSlice';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    modals: {},
    water: {},
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
