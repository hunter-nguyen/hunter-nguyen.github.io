import { useEffect } from 'react';

const Resume: React.FC = () => {
  useEffect(() => {
    window.location.href = "/Hunter_Nguyen_Resume.pdf";
  }, []);

  return null;
};

export default Resume;
