import React from 'react';

const Resume: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <object
        data="/Hunter_Nguyen_Resume.pdf"
        type="application/pdf"
        style={{ height: '100%', width: '100%' }}
      >
        <a href="/Hunter_Nguyen_Resume.pdf" download>Download Resume</a>
      </object>
    </div>
  );
};

export default Resume;
