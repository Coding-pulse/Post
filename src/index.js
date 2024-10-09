import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Item from "./Components/Item";
import Textbox from "./Components/Textbox";
import Postdis from "./Components/Postdis";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Item />,
    children: [
      {
        path: "/",
        element: <Textbox />,
      },
      {
        path: "/show-post",
        element: <Postdis />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
