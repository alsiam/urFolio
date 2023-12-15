'use client';

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };


  return (
    <div className="theme">
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};
 export default ThemeSwitch;