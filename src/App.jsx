import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Resume from './pages/Resume.jsx';
import {LinkedIn, GitHub} from './pages/Links.jsx';
import { FaLinkedinIn, FaFileAlt, FaGithub  } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import "./index.css"

const Layout = () => (

  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

    <header className="text-black">
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
              <button className="bg-gray-600 hover:bg-blue-900 font-bold py-7 px-7 rounded-full ml-4" title="Connect on LinkedIn!">
                <FaLinkedinIn size={24}/>
              </button>
            </Link>
            <Link to="/resume" className="text-white" target='_blank'>
              <button className="bg-gray-600 hover:bg-blue-900 font-bold py-7 px-7 rounded-full ml-4" title="View my Resume!">
                <FaFileAlt size={24}/>
              </button>
            </Link>
            <Link to="/github" className="text-white" target='_blank'>
              <button className="bg-gray-600 hover:bg-blue-900 font-bold py-7 px-7 rounded-full ml-4" title="Look at my projects!">
                <FaGithub size={24}/>
              </button>
            </Link>
        </div>

      </nav>
    </header>
    <Outlet />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/linkedin" element={<LinkedIn />} />
      <Route path="/github" element={<GitHub />} />
      <Route path="/" element={<Layout />}>
    </Route>
    </Routes>
  );
}

export default App;
