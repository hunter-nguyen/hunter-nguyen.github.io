import { useState, useEffect, useCallback } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const applyDarkMode = useCallback((isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, []);

  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode, applyDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-500 hover:rotate-45"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;
