import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter basename="/frontend-water">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
