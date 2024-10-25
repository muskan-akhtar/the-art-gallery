"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const images = [
    {
      src: "/art120.jpg",
      alt: "Art 1",
      desc: "An emotional portrayal of love and loss.",
    },
    {
      src: "/art110.jpg",
      alt: "Art 2",
      desc: "An abstract expression of emotions. A surreal piece evoking dreams and fantasies.",
    },
    {
      src: "/art5.jpg",
      alt: "Art 3",
      desc: "A captivating art piece with vibrant colors.",
    },
    {
      src: "/art40.jpeg",
      alt: "Art 4",
      desc: "An art piece that blends nature and modernity.",
    },
    {
      src: "/art50.jpg",
      alt: "Art 5",
      desc: "A minimalist approach to contemporary art.",
    },
    {
      src: "/art60.jpg",
      alt: "Art 6",
      desc: "A fusion of traditional and modern art.",
    },
    {
      src: "/art70.jpg",
      alt: "Art 7",
      desc: "An intricate design reflecting cultural heritage.",
    },
    {
      src: "/art80.jpg",
      alt: "Art 8",
      desc: "A masterpiece representing human connection.",
    },
    {
      src: "/art90.jpg",
      alt: "Art 9",
      desc: "A vibrant painting inspired by nature.",
    },
    {
      src: "/art100.jpg",
      alt: "Art 10",
      desc: "An artistic representation of urban life.",
    },
    {
      src: "/art2.jpg",
      alt: "Art 11",
      desc: "An abstract expression of emotions.",
    },
    { src: "/art4.jpg", alt: "Art 12", desc: "A stunning modern art piece." },
  ];

  return (
    <div className="bg-custom-image min-h-screen flex flex-col font-serif">
      <Header />
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <section className="portfolio-section text-center mt-11">
          <h1
            className="font-semibold font-serif text-center bg-gradient-to-r from-Muskan hover:from-pink-500 hover:to-orange-500 pt-2 pl-2 pb-2 sm:text-1xl md:text-1xl lg:text-2xl italic hover:not-italic"
            data-aos="fade-left"
            data-aos-easing="ease-in"
          >
            Note: Click on a picture to see its detailed description.
          </h1>
          <h2
            className="font-bold font-serif text-center bg-gradient-to-r from-Akhtar hover:from-pink-500 hover:to-orange-500 pt-2 pl-2 pb-2 sm:text-4xl md:text-4xl lg:text-7xl mt-5 mr-5 italic hover:not-italic"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Art Gallery Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-6 justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group flex justify-center items-center"
                onMouseEnter={() => setDescription(image.desc)}
                onMouseLeave={() => setDescription("")}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-[400px] h-[300px] rounded-lg object-cover border-4 border-blue-600"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {description === image.desc ? image.desc : ""}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
