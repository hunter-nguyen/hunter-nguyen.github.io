import React, { useEffect } from 'react';
import { LINKEDIN_URL } from '../config/urls';

const LinkedIn = () => {
  useEffect(() => {
    window.location.href = LINKEDIN_URL; // Redirects to the LINKED_IN URL
  }, []);

  return null; // Return null because we just want the redirect
};

export default LinkedIn;
