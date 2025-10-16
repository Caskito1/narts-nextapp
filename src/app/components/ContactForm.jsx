"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Mensaje enviado con éxito ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar ❌");
      }
    } catch (err) {
      setStatus("Error de conexión ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
      >
        Enviar
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
