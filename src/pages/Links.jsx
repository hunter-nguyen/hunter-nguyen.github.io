import { useEffect } from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '../config/urls';

const LinkedIn = () => {
  useEffect(() => {
    window.location.href = LINKEDIN_URL; // Redirects to the LINKED_IN URL
  }, []);

  return null; // Return null because we just want the redirect
};

const GitHub = () => {
  useEffect(() => {
    window.location.href = GITHUB_URL;
  }, []);

  return null;
}

export { LinkedIn, GitHub };
