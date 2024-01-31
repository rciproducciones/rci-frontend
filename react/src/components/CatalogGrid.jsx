import React from 'react';
import '../css/CatalogGrid.css'; 
import { Link } from "react-router-dom";

const CatalogGrid = ({ posters }) => {
  return (
    <div className="catalog-grid">
      {posters.map((poster, index) => (
        <Link to="/filmId">
        <div key={index} className="catalog-item">
          <img src={poster.imageUrl} alt={`Poster ${index + 1}`} />
          {/* Puedes agregar más detalles o información del poster aquí */}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogGrid;