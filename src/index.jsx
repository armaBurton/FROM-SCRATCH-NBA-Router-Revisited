import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ColorProvider } from './context/ColorProvider';
import './index.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <App />
      </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
