import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeflex/primeflex.css';
// custom css rule
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
