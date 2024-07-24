import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);