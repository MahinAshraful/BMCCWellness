import React, { useState } from "react";
import './App.css';

function Bar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`w-48 bg-black text-white fixed top-0 left-0 h-full flex flex-col ${isCollapsed ? 'collapsed' : ''}`}> 
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-lg font-bold namee">BMCC Wellness</h1>
        </div>
        <div>
                      <button onClick={handleToggle}>
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <ul className="py-4">

            <li className="px-6 py-3 mb-6 hover:bg-gray-800 hover:text-white">
                <a href="#about" className="block">About Us</a>
            </li>
            <li className="px-6 py-3 mb-6 hover:bg-gray-800 hover:text-white">
                <a href="#CALVIN" className="block">Talk to Calvin</a>
            </li>
            <li className="px-6 py-3 mb-6 hover:bg-gray-800 hover:text-white">
                <a href="#Resources" className="block">Resources</a>
            </li>
            <li className="px-6 py-3 mb-6 hover:bg-gray-800 hover:text-white">
                <a href="#Contact" className="block">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bar;

