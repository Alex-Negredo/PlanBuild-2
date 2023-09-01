import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  
  </React.StrictMode>
);