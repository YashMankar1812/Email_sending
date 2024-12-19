// src/components/EmailForm.js

import React, { useState } from 'react';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Email sent successfully!');
      } else {
        setResponseMessage('Error sending email');
      }
    } catch (error) {
      setResponseMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="flex w-full max-w-5xl">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center md:text-left'>
            Your Message here ..
          </h1>
          <form
            className="bg-white p-8 rounded-lg shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
            {responseMessage && (
              <p
                className={`mt-4 text-center text-sm ${
                  responseMessage.includes('Error') ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        </div>

        {/* Right Side: Image with Heading */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center md:items-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Email Sending Application
          </h1>
          <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gmail-organize.width-1600.format-webp.webp" // Replace this with your image
            alt="Email Sending Illustration"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
