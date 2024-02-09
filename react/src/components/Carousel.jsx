import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../css/Carousel.css";


const images = [
  'src/assets/images/migasdepancover.jpeg',
  'src/assets/images/feminismo-en-murcia.webp'
];

const CustomCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <FontAwesomeIcon icon={faArrowLeft} />,
      nextArrow: <FontAwesomeIcon icon={faArrowRight} />,
    };
  
    return (
      <div className="custom-carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  
  export default CustomCarousel;
