import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/error-page.jsx";
import CountryPage from "./pages/country-page.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/:countryName",
      element: (
        <>
          <CountryPage />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: "/rest-countries-api/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
