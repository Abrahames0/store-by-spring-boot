// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importaciones de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreApp from './StoreApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreApp />
    </BrowserRouter>
  </React.StrictMode>
);
