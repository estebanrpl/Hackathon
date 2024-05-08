import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '' },

  {
    path: '',
    children: [{ path: 'dashboard' }, { path: '*' }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Router>
);
