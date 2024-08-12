import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <header className="w-full p-4 shadow">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <h1 className="text-2xl font-black">Where in the world?</h1>
          <button onClick={handleDarkMode}>Dark Mode</button>
        </div>
      </header>
    </>
  );
}
