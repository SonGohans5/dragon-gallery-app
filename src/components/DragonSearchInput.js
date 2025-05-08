import React, { useState } from 'react';

const DragonSearchInput = ({ onSearch }) => {
  const [character, setCharacter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(character);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="flex items-center border-b-2 border-yellow-500 py-2">
        <input
          type="text"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          placeholder="Escribe un personaje de Dragon Ball..."
          className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-sm text-black font-bold py-1 px-4 rounded transition-colors"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default DragonSearchInput;