import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BaseComponent from './pages/BaseComponent';

const router = createBrowserRouter([
  { path: '' },

  {
    path: '',
    element: <BaseComponent />,
    children: [{ path: 'dashboard' }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
