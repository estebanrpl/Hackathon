import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BaseComponent from './pages/BaseComponent';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  { path: '' },

  {
    path: '',
    element: <BaseComponent />,
    children: [{ path: 'main', element: <MainPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
