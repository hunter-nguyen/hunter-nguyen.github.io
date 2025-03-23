import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header: React.FC = () => (
  <div className="text-center">
    <h1 className="text-5xl font-bold">
      Nice to meet you!👋<br />
      <p className="text-4xl">I'm Hunter,</p>
    </h1>
    <h2 className="text-3xl pt-1 font-semibold">
      a{' '}
      <TypeAnimation
        sequence={[
          'full-stack developer',
          2200,
          'software engineer',
          2200,
          'computer science student',
          2200,
          'coder',
          1500,
        ]}
        wrapper="span"
        speed={60}
        repeat={Infinity}
      />
    </h2>
  </div>
);

export default Header;
