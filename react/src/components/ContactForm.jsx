import React, { useState } from 'react';
import "../css/Contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contact-form">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
          Nombre y apellidos
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
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
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
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
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
        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mt-2 border rounded"
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

      <button type="submit" className="w-full py-2 bg-gray-400 text-white rounded hover:bg-gray-600">
        Enviar
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
