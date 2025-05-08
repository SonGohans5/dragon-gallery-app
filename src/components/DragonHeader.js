import React from 'react';

const DragonHeader = () => {
  return (
    <header className="bg-gradient-to-b from-gray-800 to-gray-900 text-center py-8 shadow-md">
      <h1 className="text-4xl font-bold text-yellow-400 mb-2 animate-pulse">
        DragonSearch
      </h1>
      <p className="text-gray-300">
        Buscador de personajes de Dragon Ball
      </p>
      <div className="flex justify-center mt-4">
        <div className="h-1 w-16 bg-yellow-500 rounded-full"></div>
      </div>
    </header>
  );
};

export default DragonHeader;