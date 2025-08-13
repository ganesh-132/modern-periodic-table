import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 mt-10 bg-surface text-textSecondary flex flex-col items-center justify-center rounded-t-xl shadow-inner">
      <p className="text-sm md:text-base mb-2">Created by Ganesh Upadhyay</p>
      <div className="flex space-x-4 mb-2">
        <a
          href="https://www.linkedin.com/in/ganesh-upadhyay-663299263"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-primary transition-colors duration-200"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a
          href="https://www.instagram.com/ganesh.11_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition-colors duration-200"
          aria-label="Instagram Profile"
        >
          <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </div>
      <p className="text-xs md:text-sm opacity-70">Connect above</p>
    </footer>
  );
};

export default Footer;
