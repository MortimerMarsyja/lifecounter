import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import CenteredLayout from "./layouts/CenteredLayout/CenteredLayout";
import Game from "@views/Game";

// if (process.env.NODE_ENV === 'development') {
//   import('@welldone-software/why-did-you-render').then(whyDidYouRender => {
//     whyDidYouRender.default(React, {
//       trackAllPureComponents: true,
//     });
//   });
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CenteredLayout>
        <Home />
      </CenteredLayout>
    ),
  },
  {
    path: "/game",
    element: (
      <CenteredLayout>
        <Game />
      </CenteredLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
