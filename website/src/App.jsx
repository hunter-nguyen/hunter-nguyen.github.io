import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Image from './Components/Image/Image.jsx'
import profilepicture from './assets/profilepicture.jpg'
import Card from './Components/Card.jsx'
import Resume from './pages/Resume.jsx'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <Image imgReference={profilepicture} imgAlt="Profile Picture"></Image>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<div>Home Content</div>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer className="footer">
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
      </footer>
    </div>
  )
}

export default App
