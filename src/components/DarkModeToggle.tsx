import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-500 hover:rotate-45"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;
