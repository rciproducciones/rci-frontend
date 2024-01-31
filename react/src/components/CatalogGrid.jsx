import React from 'react';
import '../css/CatalogGrid.css'; 
const CatalogGrid = ({ posters }) => {
  return (
    <div className="catalog-grid">
      {posters.map((poster, index) => (
        <div key={index} className="catalog-item">
          <img src={poster.imageUrl} alt={`Poster ${index + 1}`} />
          {/* Puedes agregar más detalles o información del poster aquí */}
        </div>
      ))}
    </div>
  );
};

export default CatalogGrid;