import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Resume from './pages/Resume.jsx';
import LinkedIn from './pages/LinkedIn.jsx'; // Import the LinkedIn component

const Layout = () => (
  <div className="container">
    <header className="header">
      <h1>hi! i'm hunter, a CS student @ SJSU</h1>
      <h2>this website is a work in progress</h2>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/resume">Resume</Link>
        <br />
        <Link to="/linkedin">LinkedIn</Link>
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
      <Route path="/" element={<Layout />}>
    </Route>
    </Routes>
  );
}

export default App;
