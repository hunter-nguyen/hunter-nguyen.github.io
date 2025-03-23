import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFileAlt, FaGithub } from 'react-icons/fa';

const NavButtons: React.FC = () => (
  <nav className="mt-4 flex flex-col items-center">
    <div className="inline-flex pt-5">
      <Link to="/linkedin" className="text-white" target="_blank">
        <button
          className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4"
          title="Connect on LinkedIn!"
        >
          <FaLinkedinIn size={24} />
        </button>
      </Link>
      <Link to="/resume" className="text-white" target="_blank">
        <button
          className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4"
          title="View my Resume!"
        >
          <FaFileAlt size={24} />
        </button>
      </Link>
      <a
        href="https://www.github.com/hunter-nguyen"
        className="text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-gray-600 hover:bg-blue-900 dark:bg-gray-700 dark:hover:bg-blue-800 font-bold py-7 px-7 rounded-full ml-4"
          title="Look at my projects!"
        >
          <FaGithub size={24} />
        </button>
      </a>
    </div>
  </nav>
);

export default NavButtons;
