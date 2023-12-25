// import { configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// import sessionStorage from 'redux-persist/es/storage/session';

// // import authReducer
// // import modalReducer
// // import waterReducer

// const persistConfig = {
//     key: 'root',
//     Storage: sessionStorage,
//     whitelist: ['token']
// };

// export const store = configureStore({
//     reducer: {
//         auth: persistReducer(persistConfig, {/*authReducer*/ }),
//         modals: {/*modalReducer*/ },
//         water: {/*waterReducer*/ }
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
//     evTools: process.env.NODE_ENV === 'development'
// });

// export const persistor = persistStore(store)