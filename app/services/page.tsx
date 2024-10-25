import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "Art Exhibitions",
    description:
      "We host a range of exhibitions showcasing the works of both emerging and established artists.",
  },
  {
    title: "Workshops",
    description:
      "Join our hands-on workshops to learn about various art techniques from professional artists.",
  },
  {
    title: "Art Consultation",
    description:
      "Our experts provide personalized consultation to help you choose the perfect artwork for your space.",
  },
  {
    title: "Art Sales",
    description:
      "Purchase unique and captivating art pieces directly from our gallery.",
  },
  {
    title: "Custom Framing",
    description:
      "We offer custom framing services to ensure your artwork is beautifully presented.",
  },
  {
    title: "Online Store",
    description:
      "Explore our online store for a selection of artworks, prints, and merchandise.",
  },
];

const Services = () => {
  return (
    <div className="bg-custom-image min-h-screen flex flex-col">
      <Navbar />
      <div className="container px-7 py-8">
        <h1 className="font-bold font-serif text-center bg-gradient-to-r from-teal-400 pt-2 pl-2 pb-2 sm:text-4xl md:text-4xl lg:text-5xl mt-5 mb-5 mr-5 italic hover:not-italic" data-aos="flip-down">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12 text-3xl bg-white p-3 italic" data-aos="flip-down">
          At The Art Gallery, we offer a variety of services to enhance your
          artistic journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-xl relative z-10"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
