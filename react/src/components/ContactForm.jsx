import React, { useState } from "react";
import "../css/Contact.css";


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
      <div className="main-container">
            <h1 className="title1 text-3xl font-bold">Amamos las historias.</h1>
            <h1 className="title2 text-3xl font-bold">¡Cuéntanos la tuya!</h1>
            
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
      </div>
    </div>
  );
};

export default ContactForm;
