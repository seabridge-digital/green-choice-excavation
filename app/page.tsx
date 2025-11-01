"use client";

import { useState, useEffect } from "react";
import Header from "./header";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGravelDropdown, setShowGravelDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Google Ads phone conversion handler
  const handlePhoneClick = () => {
    window.gtag?.("event", "conversion", {
      send_to: "AW-17696412769/UMIBCOvQlLgbEOGop_ZB",
    });
  };

  const galleryImages = [
    "/excavating1.jpeg",
    "/grading1.jpg",
    "/grading2.jpg",
    "/grading3.jpg",
    "/grading4.jpg",
    "/grading5.jpg",
    "/grading6.jpg",
    "/gravel1.jpg",
    "/gravel2.jpg",
    "/gravel3.jpg",
    "/gravel4.jpg",
    "/gravel5.jpg",
    "/gravel6.jpg",
    "/gravel7.jpg",
    "/level8.jpg",
    "/leveling1.jpg",
    "/leveling2.jpg",
    "/leveling3.jpg",
    "/leveling4.jpg",
    "/leveling5.jpg",
    "/leveling6.jpg",
    "/treeremoval1.jpg",
  ].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="bg-gradient-to-b from-green-50 to-amber-50 font-sans overflow-x-hidden">
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center text-center text-white m-0 p-0"
      >
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-100/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex justify-center w-full">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Green Choice Excavation
            </h1>
            <p className="text-2xl md:text-3xl text-white">
              Professional excavation & site services
            </p>
            <p className="text-lg md:text-xl mt-2 text-white">
              Based out of Lancaster, SC — proudly serving both North and South
              Carolina.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:7042906688"
                onClick={handlePhoneClick}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                Call 704-290-6688
              </a>
              <a
                href="mailto:gce10@gmail.com"
                className="bg-white text-amber-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mb-12 scroll-mt-24">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cards omitted for brevity — same content as your original */}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="tel:7042906688"
              onClick={handlePhoneClick}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-center"
            >
              Call 704-290-6688
            </a>
            <a
              href="mailto:gce10@gmail.com"
              className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-900 to-green-400 rounded-full"></div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mb-12 scroll-mt-24">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          {/* content omitted for brevity */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="tel:7042906688"
              onClick={handlePhoneClick}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Call 704-290-6688
            </a>
            <a
              href="mailto:gce10@gmail.com"
              className="bg-white text-amber-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center"
            >
              Email gce10@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-900 to-green-400 rounded-full"></div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="mt-12 max-w-4xl mx-auto scroll-mt-24">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">
            Contact
          </h2>
          <div className="bg-gradient-to-r from-green-900 to-green-400 text-white rounded-xl shadow-md p-6 mb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:7042906688"
                onClick={handlePhoneClick}
                className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-md text-center"
              >
                Call 704-290-6688
              </a>
              <a
                href="mailto:gce10@gmail.com"
                className="bg-white text-amber-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-md text-center"
              >
                Email gce10@gmail.com
              </a>
            </div>
          </div>

          {/* form code unchanged */}
        </div>
      </section>
    </main>
  );
}
