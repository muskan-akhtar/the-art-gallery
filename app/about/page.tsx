import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-custom-image">
      <Navbar />

      <div className="text-black text-left font-semibold text-4xl font-serif p-4 m-4 bg-gradient-to-r from-blue-400 to-indigo-600 shadow-md">
        ABOUT OUR JOURNEY:
      </div>

      <div className="text-black text-left font-semibold text-4xl font-serif p-4 m-4 bg-white shadow-md">
        Welcome to The Art Gallery, where creativity meets passion!
      </div>

      <div className="container mx-auto px-4 py-8">
        <header>
          <h1 className="font-bold font-serif text-left bg-gradient-to-r from-teal-400 hover:from-pink-500 hover:to-orange-500 pt-2 pl-2 pb-2 sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 mr-5 italic hover:not-italic">
            About Us
          </h1>
        </header>

        <main>
          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Our Story</h2>
            <p>
              Welcome to The Art Gallery, where creativity thrives! Founded in
              2024 by Muskan Akhtar, we aim to showcase a diverse collection of
              contemporary and traditional artworks from both emerging and
              established artists.
            </p>
          </section>

          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
            <p>
              Our mission is to foster a community that appreciates and supports
              the arts. We provide a platform for artists to display their work
              and connect with art lovers, collectors, and enthusiasts.
            </p>
          </section>

          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Artist Spotlight</h2>
            <p>
              We are proud to feature talented artists such as Muskan, whose
              works reflect the nature of this beautiful world.
            </p>
            <div className="flex justify-center">
              <Image
                src="/artist.jpg"
                alt="Muskan Akhtar"
                width={800} 
                height={450} 
                className="rounded-md object-cover w-full max-w-xl" 
              />
            </div>
          </section>

          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Upcoming Events</h2>
            <ul className="list-disc pl-5">
              <li>
                Art Workshop: 26-02-2022 - Join us for an interactive session.
              </li>
              <li>
                Exhibition Opening: 26-02-2022 - Do not miss our latest
                exhibition.
              </li>
            </ul>
          </section>

          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Customer Testimonials</h2>
            <blockquote className="italic border-l-4 border-blue-500 pl-4">
            &quot;An amazing experience! I found the perfect piece for my home.&quot; -
              Bill Gates
            </blockquote>
          </section>

          <section className="my-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Contact Us</h2>
            <p>
              For contacting us go to our official contact page.
              <Link href="/contact" className="text-blue-500 underline">
                Contact Page
              </Link>
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default About;
