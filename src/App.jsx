import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App = () => (
  <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-5 text-white">
    <header className="mb-10 text-center">
      <h1 className="text-6xl font-extrabold text-indigo-400 animate-pulse mb-5 mt-14">2048 Game Dashboard</h1>
      <Link to="/game" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
        Start Game
      </Link>
    </header>
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Welcome to 2048 Game</h2>
          <p className="text-gray-300 mb-3">
            This project showcases a modern implementation of the classic 2048 game using MERN stack technologies.
          </p>
          <p className="text-gray-300">
            Enjoy smooth animations, responsive design, and a sleek user interface as you merge tiles to reach the coveted 2048 tile!
          </p>
        </div>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>MongoDB for database management</li>
            <li>Express.js for backend framework</li>
            <li>React for frontend library</li>
            <li>Node.js for server-side runtime</li>
            <li>Tailwind CSS for styling</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Intuitive and responsive UI</li>
            <li>Smooth animations and transitions</li>
            <li>Real-time game state persistence</li>
            <li>Leaderboard to track high scores</li>
            <li>Mobile-friendly design</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">About the Developer</h2>
          <p className="text-gray-300 mb-3">
            Hi, I'm Jahanzaib Shaikh, a passionate web developer specialized in full-stack development using the MERN stack. This project is part of my portfolio to showcase my skills in creating interactive and dynamic web applications.
          </p>
          <p className="text-gray-300 mb-5">
            Feel free to reach out to me on my social media or via email.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourprofile" className="text-gray-300 hover:text-white transition">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-300 hover:text-white transition">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
