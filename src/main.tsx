import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Error from './pages/Error.tsx';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeflex/primeflex.css';
// custom css rule
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact.tsx';

// create routing path

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'contact/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
