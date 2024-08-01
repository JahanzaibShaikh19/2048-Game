import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const notify = () => {
    console.log("Social media login clicked");
  };

  const handleLogin = () => {
    // Add your login logic here
    navigate("/dashboard"); // Example: Navigate to the dashboard after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 text-center bg-gray-800 rounded-lg shadow-xl md:w-2/3 lg:w-1/2 m-8"
      >
        <h1 className="mb-6 text-3xl font-extrabold text-white">
          Sign In To Portal
        </h1>
        <div className="flex items-center justify-center mb-6 space-x-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={notify}
            className="cursor-pointer w-12 h-12 p-2 text-white bg-blue-500 rounded-full shadow-md hover:shadow-lg"
          >
            <FaTwitter className="w-full h-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={notify}
            className="cursor-pointer w-12 h-12 p-2 text-white bg-blue-700 rounded-full shadow-md hover:shadow-lg"
          >
            <FaFacebook className="w-full h-full" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={notify}
            className="cursor-pointer w-12 h-12 p-2 text-white bg-red-500 rounded-full shadow-md hover:shadow-lg"
          >
            <FaGoogle className="w-full h-full" />
          </motion.div>
        </div>
        <h6 className="mb-4 text-sm text-gray-400">or use your email account</h6>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 mb-4 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          name="email"
          placeholder="Email"
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 mb-6 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Password"
        />
        <a href="#" className="block mb-6 text-xs text-gray-500">
          Forgot your Password?
        </a>
        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          SIGN IN
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;
