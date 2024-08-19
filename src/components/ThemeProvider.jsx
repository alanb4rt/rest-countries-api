import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkScheme.matches);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
          {children}
        </div>
      </ThemeContext.Provider>
    </>
  );
}
