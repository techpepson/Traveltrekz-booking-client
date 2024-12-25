import React, { useState } from "react";
import { FaGift } from "react-icons/fa";

const Birthday = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
  };

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6">
        Happy Birthday Sis! 🎉
      </h1>
      <p className="text-lg md:text-2xl text-pink-700 text-center max-w-xl">
        Wishing you a day filled with love, laughter, and endless joy. You are
        the best sister ever!
      </p>

      <button
        onClick={handleShowPopup}
        className="mt-10 bg-pink-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg hover:bg-pink-600 shadow-lg transition-transform transform hover:scale-110"
      >
        <FaGift /> Open Surprise
      </button>

      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">
              🎂 Surprise! 🎂
            </h2>
            <p className="text-lg text-pink-700 mb-6">
              May this year bring you happiness and success. Love you always! 💖
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  🌸
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Birthday;
