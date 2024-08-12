import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ThemeProvider from "./components/ThemeProvider.jsx";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import CountryPage from "./pages/country-page.jsx";
import ErrorPage from "./pages/error-page.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <ThemeProvider>
            <Header />
            <App />
          </ThemeProvider>
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/:countryName",
      element: (
        <>
          <ThemeProvider>
            <Header />
            <CountryPage />
          </ThemeProvider>
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
