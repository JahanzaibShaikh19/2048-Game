import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg w-full py-6 mt-10"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="text-white text-lg font-medium mb-4">
          <p>&copy; 2024 2048 Game. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/" className="text-gray-300 hover:text-gray-100 transition duration-300">Home</Link>
          <Link to="/game" className="text-gray-300 hover:text-gray-100 transition duration-300">Game</Link>
          <Link to="/about" className="text-gray-300 hover:text-gray-100 transition duration-300">About</Link>
        </div>
        <div className="text-gray-400 text-sm">
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
