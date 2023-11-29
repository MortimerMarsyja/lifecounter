import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home/Home';
import CenteredLayout from './layouts/CenteredLayout/CenteredLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CenteredLayout><Home /></CenteredLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
