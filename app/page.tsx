"use client"

import { useState, useEffect } from "react"
import Header from "./header"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showGravelDropdown, setShowGravelDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  ].filter(Boolean)

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <main className="bg-gradient-to-b from-green-50 to-amber-50 font-sans overflow-x-hidden">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-100/70 to-transparent" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex justify-center w-full">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Green Choice Excavation
            </h1>
            <p className="text-2xl md:text-3xl text-white">
              Professional excavation & site services
            </p>
            <p className="text-lg md:text-xl mt-2 text-white">
              Based out of Lancaster, SC — proudly serving both North and South Carolina.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:7042906688"
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
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img
                src="/treeremoval1.jpg"
                alt="Land Clearing"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <h3 className="text-2xl font-bold text-black mb-2">Land Clearing</h3>
              <p className="text-lg text-gray-700">
                Efficient land clearing services to ready your property for construction or
                landscaping.
              </p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img
                src="/grading2.jpg"
                alt="Grading"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <h3 className="text-2xl font-bold text-black mb-2">Grading</h3>
              <p className="text-lg text-gray-700">
                Precision grading services to ensure proper leveling, drainage, and site
                preparation.
              </p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img
                src="/grading5.jpg"
                alt="Site Prep"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <h3 className="text-2xl font-bold text-black mb-2">Site Prep</h3>
              <p className="text-lg text-gray-700">
                Comprehensive site preparation including grading, leveling, and soil
                stabilization.
              </p>
            </a>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1">
              <img
                src="/gravel3.jpg"
                alt="Gravel Driveways"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <button
                type="button"
                onClick={() => setShowGravelDropdown(!showGravelDropdown)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-2xl font-bold text-black mb-2">Gravel Driveways</h3>
                <span
                  className={`transform transition-transform ${
                    showGravelDropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <p className="text-lg text-gray-700">
                Durable gravel driveway installation and maintenance for residential and
                commercial properties.
              </p>
              {showGravelDropdown && (
                <div className="mt-3 p-3 bg-green-50 rounded-md text-gray-700 text-sm">
                  Optional Add-On: <strong>Geo Matting</strong> — improves driveway
                  stability.
                  <br />
                  <a
                    href="https://www.ndspro.com"
                    target="_blank"
                    className="text-green-700 underline"
                  >
                    Learn more at NDS Pro
                  </a>
                </div>
              )}
            </div>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img
                src="/excavating1.jpeg"
                alt="Excavation"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <h3 className="text-2xl font-bold text-black mb-2">Excavation</h3>
              <p className="text-lg text-gray-700">
                Professional excavation services for any project size, ensuring safety and
                precision.
              </p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img
                src="/skid-steer2.jpg"
                alt="Skid Steer Services"
                className="w-full h-80 object-cover rounded-xl mb-4 px-2"
              />
              <h3 className="text-2xl font-bold text-black mb-2">Skid Steer Services</h3>
              <p className="text-lg text-gray-700">
                Versatile skid steer services for grading, material handling, and site
                cleanup.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8">
            Gallery
          </h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="rounded-xl shadow-md w-full h-96 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-4 py-2 rounded-r-md"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-4 py-2 rounded-l-md"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-12 max-w-4xl mx-auto scroll-mt-24">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">
            Contact
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              const res = await fetch("https://formspree.io/f/mpwovyle", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
              })
              if (res.ok) {
                form.reset()
                window.location.href = "/thank-you"
              }
            }}
            className="space-y-6"
          >
            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Email + Street Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select State</option>
                
                  <option value="NC">North Carolina</option>
                  <option value="SC">South Carolina</option>
                </select>
              </div>
            </div>

            {/* Budget (full width) */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Budget for Project
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option>No Set Budget</option>
                <option>$0–$2,500</option>
                <option>$2,500–$5,000</option>
                <option>$5,000–$10,000</option>
                <option>$10,000–$15,000</option>
                <option>$15,000–$30,000</option>
                <option>$30,000–$50,000</option>
                <option>$50,000–$75,000</option>
                <option>$75,000–$100,000</option>
                <option>$100,000+</option>
              </select>
            </div>

            {/* Services Needed */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-1">
                Services Needed
              </legend>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Land Clearing",
                  "Grading",
                  "Site Prep",
                  "Gravel Driveways",
                  "Excavation",
                  "Skid Steer Services",
                  "Other",
                ].map((service) => (
                  <label key={service} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="services[]"
                      value={service}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            {/* Acknowledgement */}
            <div className="flex items-start space-x-2 text-sm text-gray-700 mt-4">
              <input type="checkbox" id="acknowledge" name="acknowledge" required />
              <label htmlFor="acknowledge">
                I understand there is a minimum $650 project cost requiring heavy
                equipment
              </label>
            </div>

            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-bold mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
