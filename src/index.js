import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'fonts/Roboto-Bold.ttf'
import 'fonts/Roboto-Medium.ttf'
import 'fonts/Roboto-Regular.ttf'


import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend-water">
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
