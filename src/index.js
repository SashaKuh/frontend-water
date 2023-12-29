import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  
// import { PersistGate } from 'redux-persist/integration/react'

import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyles';
import './index.css';
import { store } from './redux/store.js';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      {/* <PersistGate persistor={persistor}>  */}
      <GlobalStyle />
      <BrowserRouter basename="/frontend-water">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>  
  </React.StrictMode>
);
