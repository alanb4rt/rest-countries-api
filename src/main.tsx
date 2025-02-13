import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ThemeProvider from "./components/ThemeProvider";
import App from "./App";
import Header from "./components/Header";
import CountryPage from "./pages/country-page";
import ErrorPage from "./pages/error-page";

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
      path: "/:numericCodeOfCountry",
      element: (
        <>
          <ThemeProvider>
            <Header />
            <CountryPage />
          </ThemeProvider>
        </>
      ),
      errorElement: <ErrorPage />,
    }
  ],
  {
    basename: "/rest-countries-api/",
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
