import { useEffect } from 'react';

const LinkedIn: React.FC = () => {
  useEffect(() => {
    window.location.href = "https://linkedin.com/in/hunterhnguyen";
  }, []);

  return null;
};

export default LinkedIn;
