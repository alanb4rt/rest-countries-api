import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import IconMoon from "./icons/IconMoon";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <header className="w-full p-4 shadow">
        <div className="container mx-auto flex justify-between items-center gap-4 py-4 md:py-0">
          <h1 className="text-lg font-bold sm:text-2xl">Where in the world?</h1>
          <button
            className="flex items-center gap-2 font-semibold color-white"
            onClick={handleDarkMode}
          >
            <IconMoon />
            Dark Mode
          </button>
        </div>
      </header>
    </>
  );
}
