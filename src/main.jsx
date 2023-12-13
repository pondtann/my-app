import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";
import Games from "./routes/Games.jsx";
import Home from "./routes/Home.jsx";
import HireMe from "./routes/HireMe.jsx";
import NewGame from "./routes/NewGame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "hire-me", element: <HireMe /> },
      {
        path: "games",
        element: <Games />,
        children: [{ path: "create-game", element: <NewGame /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
