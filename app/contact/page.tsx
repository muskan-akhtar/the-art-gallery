"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); 
    setIsSubmitted(true); 
  };

  return (
    <div className="bg-custom-image min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-6 text-white bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-md shadow-lg" data-aos="flip-down">
          Contact Us
        </h1>
        <p className="text-center mb-6 text-gray-700 bg-white shadow-md p-4 rounded-md" data-aos="flip-up">
          We would love to hear from you! Please fill out the form below or
          reach out via the provided contact details.
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md">
            <p className="font-bold">Thank you!</p>
            <p>We will get back to you shortly.</p>
          </div>
        ) : (
          <form
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                id="phone"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Contact Details</h2>
          <p className="mb-4">
            <strong>Address:</strong> 123 Art Street, Karachi, Pakistan
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +92-3226207888
          </p>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:theartgallery26@gmail.com"
              className="text-blue-600 underline"
            >
              theartgallery26@gmail.com
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.180134123556!2d67.03416907577484!3d24.861462679052633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5160d1b6f1%3A0x505387c061cd6a43!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1697799887999!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
