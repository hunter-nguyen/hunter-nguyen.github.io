import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Resume from './pages/Resume';
import LinkedIn from './pages/LinkedIn';
import { FaLinkedinIn, FaFileAlt, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import "./index.css";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center relative transition-colors duration-500">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-500 hover:rotate-45"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>
        <header className="text-black dark:text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Nice to meet you!👋<br></br> <p className='text-4xl'>I'm Hunter,</p></h1>
            <h2 className="text-3xl pt-1 font-semibold">a {' '}
              <TypeAnimation
                sequence={[
                  'full-stack developer',
                  2200,
                  'software engineer',
                  2200,
                  'computer science student',
                  2200,
                  'coder',
                  1500
                ]}
                wrapper='span'
                speed={60}
                repeat={Infinity}
              />
            </h2>
          </div>
          <nav className="mt-4 flex flex-col items-center">
            <div className="inline-flex pt-5">
              <Link to="/linkedin" className="text-white" target='_blank'>
                <button className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4" title="Connect on LinkedIn!">
                  <FaLinkedinIn size={24} />
                </button>
              </Link>
              <Link to="/resume" className="text-white" target='_blank'>
                <button className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4" title="View my Resume!">
                  <FaFileAlt size={24}/>
                </button>
              </Link>
              <a href="https://www.github.com/hunter-nguyen" className="text-white" target='_blank' rel="noopener noreferrer">
                <button className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4" title="Look at my projects!">
                  <FaGithub size={24}/>
                </button>
              </a>
            </div>
          </nav>
        </header>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="resume" element={<Resume />} />
        <Route path="linkedin" element={<LinkedIn />} />
      </Route>
    </Routes>
  );
}


export default App;
