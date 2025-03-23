import React from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import Header from '../components/Header';
import NavButtons from '../components/NavButtons';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center relative transition-colors duration-500">
    <DarkModeToggle />
    <header className="text-black dark:text-white">
      <Header />
      <NavButtons />
    </header>
    <Outlet />
  </div>
);

export default Layout;