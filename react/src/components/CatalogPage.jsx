import React from 'react';
import CatalogGrid from './CatalogGrid.jsx';
import "../css/CatalogPage.css"

const posters = [
  { imageUrl: '../src/assets/images/postermigas.png'},
  { imageUrl: '../src/assets/images/defaultimg.png'},
  { imageUrl: '../src/assets/images/defaultimg.png'},
  { imageUrl: '../src/assets/images/defaultimg.png'},
  { imageUrl: '../src/assets/images/defaultimg.png'},
  
];

const CatalogPage = () => {
  return (
    <div className='catalog-page'>
      <CatalogGrid posters={posters} />
    </div>
  );
};

export default CatalogPage;
