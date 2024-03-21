import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CeciliaPic from "../assets/images/Scan_Pic0001 (2).jpeg";
import "../css/AboutUs.css"; 

const imageSrc = 'src/assets/images/equipo-cover.png';

function AboutUs() {
  return (
    <>
      <Header />
      <div>
      <img className="cover-img" src={imageSrc} alt="Equipo Cover" />
      </div>

      <h1 className="title1 text-3xl font-bold mb-4">Producciones RCI</h1>

      <div className="about-container">
        <div className="description-container">
          <p className="text-description">
            Una productora audiovisual dedicada a temas sociales, históricos y arqueológicos. Nuestro enfoque es la visibilización de desigualdades a través de diversos géneros audiovisuales, incluyendo ficción, documentales, publicitarios y programas de televisión.
          </p>
        </div>

        <div className="divider"></div>

        <div className="card-container">
          <div className="ceci-container">
            <img src={CeciliaPic} alt="Cecilia Ibáñez" className="img" />
          </div>

          <div className="cv-container flex flex-col justify-center rounded-none">
            <h1>Cecilia Ibáñez</h1>
            <p className="text-gray-700">
              Directora, guionista y productora con una destacada carrera en la creación de obras audiovisuales. Inició sus estudios en Dirección de Cine en Madrid y se formó con reconocidos profesionales del sector. Su experiencia abarca desde largometrajes hasta cortometrajes, documentales y programas de televisión.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
