import React, { useEffect, useState } from 'react';

const DragonCharacterGallery = ({ character }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (character) {
      setLoading(true);
      const searchTerm = `${character} dragon ball character`;
      
      // Usamos un proxy CORS para evitar problemas
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.google.com/search?q=${searchTerm}&tbm=isch`)}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.contents) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const imgElements = doc.querySelectorAll('img');
            const urls = Array.from(imgElements).map(img => img.src);
            setImages(urls.filter(url => url.startsWith('http')));
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [character]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p>Ingresa un personaje de Dragon Ball para comenzar tu búsqueda</p>
        <p className="text-sm mt-2">Ejemplo: Goku, Vegeta, Gohan...</p>
      </div>
    );
  }

  if (images.length === 0 && !loading) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p>No se encontraron imágenes para: {character}</p>
        <p className="text-sm mt-2">Intenta con otro nombre o revisa la ortografía</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {images.map((image, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img
            src={image}
            alt={`${character} (${index + 1})`}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity">
            <a 
              href={image} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              Ver imagen completa
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragonCharacterGallery;