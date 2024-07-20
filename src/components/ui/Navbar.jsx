import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg fixed w-full z-10 top-0 flex items-center justify-between p-5"
    >
      <div className="text-2xl font-extrabold text-white">
        <Link to="/">2048 Game</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/"
          className="text-white font-medium text-lg hover:text-gray-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/game"
          className="text-white font-medium text-lg hover:text-gray-400 transition duration-300"
        >
          Game
        </Link>
        <Link
          to="/about"
          className="text-white font-medium text-lg hover:text-gray-400 transition duration-300"
        >
          About
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
