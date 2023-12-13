import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home/Home';
import CenteredLayout from './layouts/CenteredLayout/CenteredLayout';
import GameContextProvider from '@contexts/GameContext/gameContextProvider';
import Game from '@views/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CenteredLayout><Home /></CenteredLayout>,
  },
  {
    path: "/game",
    element: <CenteredLayout><Game /></CenteredLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>
  </React.StrictMode>,
)
