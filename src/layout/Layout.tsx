import { useEffect, useState, useCallback } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Header from '../components/Header';
import NavButtons from '../components/NavButtons';
import InteractiveBackground from '../components/InteractiveBackground';
import { Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  // Memoized observer callback to reduce rerenders
  const handleDarkModeChange = useCallback((mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const darkModeEnabled = document.documentElement.classList.contains('dark');
        setIsDarkMode(darkModeEnabled);
      }
    });
  }, []);

  // Setup observer for dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [handleDarkModeChange]);

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center relative transition-colors duration-500 ${isResumePage ? 'overflow-hidden' : ''}`}>
      <InteractiveBackground isDarkMode={isDarkMode} />
      {!isResumePage && (
        <>
          <DarkModeToggle />
          <header className="text-black dark:text-white relative z-10">
            <Header />
            <NavButtons />
          </header>
        </>
      )}
      <div className={`relative z-10 ${isResumePage ? 'w-full h-full' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;