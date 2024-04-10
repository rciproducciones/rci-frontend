import React from 'react';
import CatalogGrid from './CatalogGrid.jsx';
import "../css/CatalogPage.css"

const posters = [
  { imageUrl: '../assets/images/postermigas.png'},
  { imageUrl: '../assets/images/defaultimg.png'},
  { imageUrl: '../assets/images/defaultimg.png'},
  { imageUrl: '../assets/images/defaultimg.png'},
  { imageUrl: '../assets/images/defaultimg.png'},
  
];

const CatalogPage = () => {
  return (
    <div className='catalog-page'>
      <CatalogGrid posters={posters} />
    </div>
  );
};

export default CatalogPage;
