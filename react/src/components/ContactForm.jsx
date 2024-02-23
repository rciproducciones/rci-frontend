import React, { useState } from "react";
import "../css/Contact.css";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div>
      <h1 className="title1 text-3xl font-bold mb-4">Amamos las historias. ¡Cuéntanos la tuya!</h1>
      <div className="main-container flex h-full">
        <div className="contact-form-container items-center">
          <form
            onSubmit={handleSubmit}
            className="contact-form p-12 bg-gray-100 shadow-md rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="flex-grow block text-sm font-semibold text-gray-600"
              >
                Nombre y Apellidos
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-600"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-12 mt-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                Aceptar términos y política de privacidad
              </label>
            </div>

            <button
              type="submit"
              className="submit-btn w-full py-2 transition duration-300"
            >
              Enviar
            </button>
          </form>
          </div>

          <div className="location-container">
            <div className="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.7221798741098!2d-1.129565323537498!3d37.98361240010181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638205353bda9f%3A0xd68f756203c739e5!2sC.%20Pintor%20Villacis%2C%204%2C%2030003%20Murcia!5e0!3m2!1ses!2ses!4v1708103389435!5m2!1ses!2ses"
                width="600"
                height="500"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-info">
              <p>
                <FaPhone className="inline-block mr-2" />
                <a href="tel:+34630374129">+34 630 37 41 29</a>
              </p>
              <p>
                <FaMapMarkerAlt className="inline-block mr-2" />
                C/ Pintor Villacis, 4, PP OF.11
              </p>
              <p>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Murcia, 30003
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
