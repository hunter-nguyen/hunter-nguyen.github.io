import React from 'react';
import Projects from '../components/Projects';
import Research from '../components/Research';
import Experience from '../components/Experience';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Hunter Nguyen</h1>

      <div style={{ marginTop: '2rem' }}>
        <h2>About</h2>
        <p style={{ marginBottom: '0.5rem' }}>
          Hi, I'm Hunter, a CS student at SJSU. I'm passionate about engineering with AI/ML, and software engineering in general.
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          I love meeting new people and having great conversations. If you're reaching out about an opportunity, a collaboration, or just want to chat, feel free to get in touch.
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          See more on my <a href="/resume" target="_blank" rel="noopener noreferrer">resume</a> or contact me at <a href="mailto:hunter.nguyen@sjsu.edu">hunter.nguyen@sjsu.edu</a>.
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Experience />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Projects />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Research />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:hunter.nguyen@sjsu.edu">hunter.nguyen@sjsu.edu</a></p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://linkedin.com/in/hunterhnguyen">LinkedIn</a>
          <a href="https://x.com/hunterhnguyen">X/Twitter</a>
          <a href="https://github.com/hunter-nguyen">GitHub</a>
          <a href="/resume">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;