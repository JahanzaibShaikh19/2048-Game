import React from "react";
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-5">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-600 animate-bounce">2048 Game Dashboard</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Welcome to 2048 Game</h2>
            <p className="text-gray-700 mb-3">
              This project showcases a modern implementation of the classic 2048 game using MERN stack technologies.
            </p>
            <p className="text-gray-700">
              Enjoy smooth animations, responsive design, and a sleek user interface as you merge tiles to reach the coveted 2048 tile!
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>MongoDB for database management</li>
              <li>Express.js for backend framework</li>
              <li>React for frontend library</li>
              <li>Node.js for server-side runtime</li>
              <li>Tailwind CSS for styling</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Intuitive and responsive UI</li>
              <li>Smooth animations and transitions</li>
              <li>Real-time game state persistence</li>
              <li>Leaderboard to track high scores</li>
              <li>Mobile-friendly design</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">About the Developer</h2>
            <p className="text-gray-700 mb-3">
              Hi, I'm [Your Name], a passionate web developer specialized in full-stack development using the MERN stack. This project is part of my portfolio to showcase my skills in creating interactive and dynamic web applications.
            </p>
            <p className="text-gray-700">
              Feel free to reach out to me on [Your Contact Information].
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
