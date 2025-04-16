import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
  
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here (e.g., send the message to a backend)
    alert('Message sent successfully!');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-darkText mb-6">
        We would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to drop us a message.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-darkText">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={()=>handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>\
        <p>Testing Demo app</p>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-darkText">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={()=>handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold text-darkText">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={()=>handleChange}
            rows={4}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white py-3 px-6 rounded-md hover:bg-lightGreen transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};
