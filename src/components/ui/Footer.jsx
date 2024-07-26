import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className=" bg-gray-800 bg-opacity-100 backdrop-blur-lg shadow-lg w-full py-6"
      // style={{ backgroundColor: 'rgb(17 24 39 / 80%)' }} // Added inline style for debugging
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="text-white text-xl font-semibold mb-4"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            yoyo: Infinity,
            ease: 'easeInOut'
          }}
        >
          <p>
            &copy; {currentYear}{' '}
            <motion.span
              className="text-red-700 font-extrabold text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
            >
              2048
            </motion.span>{' '}
            Game. All Rights Reserved.
          </p>
        </motion.div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/" className="text-gray-300 hover:text-gray-100 transition duration-300">
            Home
          </Link>
          <Link to="/game" className="text-gray-300 hover:text-gray-100 transition duration-300">
            Game
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-gray-100 transition duration-300">
            About
          </Link>
        </div>
        <div className="text-gray-400 text-sm">
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
