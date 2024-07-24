import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import App from './components/App';
import './index.css';
import { WidgetProvider } from './lib/WidgetProviderContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>
  </React.StrictMode>
);