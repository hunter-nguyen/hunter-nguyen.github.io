import React, { useEffect } from 'react';
import { RESUME_URL } from '../config/urls';

const Resume = () => {
  useEffect(() => {
    window.location.href = RESUME_URL; // Redirects to the resume URL
  }, []);

  return null; // Return null because we just want the redirect
};

export default Resume;
  