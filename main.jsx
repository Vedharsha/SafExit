import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import UnityComponent from './UnityComponent.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App>
        <UnityComponent />
      </App>
    </StrictMode>
  </BrowserRouter>
);

