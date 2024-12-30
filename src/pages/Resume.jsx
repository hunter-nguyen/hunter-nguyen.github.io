import React, { useEffect } from 'react';
import { RESUME_URL } from '../config/urls';

const Resume = () => {
  useEffect(() => {
    window.location.href = "/Hunter_Nguyen_Resume-27.pdf"; // Redirects to the PDF in public
  }, []);
  return null; // Return null because we just want the redirect
};

export default Resume;
