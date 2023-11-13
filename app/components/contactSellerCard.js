import React, { useState } from "react";

export default function ContactSeller() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes agregar la lógica para manejar el envío del formulario aquí
    console.log("Message:", message);
    console.log("Email:", email);
  };

  return (
    <div className="page-container">
      <form
        className="md:w-full w-full p-10 m-10 border border-gray-300 rounded-md md:max-w-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Seller</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="md:flex md:justify-around">
          <div className="flex-col">
            <div className="pt-3">
              <button className="btn w-full max-w-xs" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
