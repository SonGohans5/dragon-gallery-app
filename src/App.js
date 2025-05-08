import React, { useState } from 'react';
import DragonHeader from './components/DragonHeader';
import DragonSearchInput from './components/DragonSearchInput';
import DragonCharacterGallery from './components/DragonCharacterGallery';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <DragonHeader />
      <main className="container mx-auto px-4 py-8">
        <DragonSearchInput onSearch={setSearchTerm} />
        <DragonCharacterGallery character={searchTerm} />
      </main>
      <footer className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        Sólo con fines educativos - No afiliado a Dragon Ball
      </footer>
    </div>
  );
};

export default App;

// DONE