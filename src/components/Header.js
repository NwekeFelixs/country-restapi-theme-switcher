import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <>
      <header className="w-full flex items-center justify-between mx-auto py-5 px-2 bg-white  dark:bg-gray-800 shadow lg:px-10 lg:py-10">
        <h1 className="md:text-3xl font-bold text-gray-800 dark:text-white text-md">
          Where in the world?
        </h1>

        <button
          onClick={toggleDarkMode}
          className="dark:text-white flex items-center gap-1 md:text-xl text-sm font-semibold"
        >
          {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </>
  );
}

export default Header;
