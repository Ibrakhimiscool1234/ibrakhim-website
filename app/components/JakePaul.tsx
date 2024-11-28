"use client"

import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';

const CringeButton: React.FC = () => {
  const [cringeCount, setCringeCount] = useState(0);
  const [isConfetti, setIsConfetti] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const handleClick = () => {
    setCringeCount(prev => prev + 1);
    setIsConfetti(true);
    
    // Reset confetti after a short delay
    setTimeout(() => {
      setIsConfetti(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="text-center p-8 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
        <button 
          onClick={handleClick}
          className="mb-4 px-6 py-3 bg-red-500 text-white font-bold rounded-lg 
                     hover:bg-red-600 transition-all transform hover:scale-110 
                     active:scale-95 shadow-lg"
        >
          Jake Paul is Cringe
        </button>
        
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <Confetti active={isConfetti} config={confettiConfig} />
        </div>
        
        <p className="text-2xl font-semibold text-gray-800">
          {cringeCount} People Think Jake Paul is Cringe
        </p>
      </div>
    </div>
  );
};

export default CringeButton;