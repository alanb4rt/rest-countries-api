import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {
  children?: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkScheme.matches);
  }, []);

  return (
    <>
      <ThemeContext value={{ isDarkMode, setIsDarkMode }}>
        <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
          {children}
        </div>
      </ThemeContext>
    </>
  );
}
