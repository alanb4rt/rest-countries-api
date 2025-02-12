import { createContext } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
