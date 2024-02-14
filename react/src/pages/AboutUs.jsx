import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CeciliaPic from "../assets/images/Scan_Pic0001 (2).png";
import "../css/AboutUs.css"; // Estilos específicos para esta página

function AboutUs() {
  return (
    <>
      <Header />

      <div className="about-container">
        <div className="description-container bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h1 className="title">Producciones Imaginarias RCI</h1>
          <br></br>
          <p>
            Una productora audiovisual dedicada a temas sociales, históricos y arqueológicos. Nuestro enfoque es la visibilización de desigualdades a través de diversas obras audiovisuales, incluyendo ficción, documentales, publicitarios y programas de televisión.
          </p>
        </div>

        <div className="card-container flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="ceci-container mb-4 lg:mb-0 lg:mr-4">
            <img src={CeciliaPic} alt="Cecilia Ibáñez" className="w-full h-auto rounded-lg" />
          </div>

          <div className="cv-container flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Cecilia Ibáñez</h1>
            <p className="text-gray-700">
              Directora, guionista y productora con una destacada carrera en la creación de obras audiovisuales. Inició sus estudios en Dirección de Cine en Madrid y se formó con reconocidos profesionales del sector. Su experiencia abarca desde largometrajes hasta cortometrajes, documentales y programas de televisión.
            </p>
            {/* Puedes agregar más información sobre el CV según tus necesidades */}
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
