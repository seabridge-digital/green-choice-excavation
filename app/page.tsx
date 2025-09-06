"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

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
    "/treeremoval1.jpg"
  ]
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
    <main className="p-6 bg-gradient-to-b from-green-50 to-amber-50 font-sans">
      <header className={`fixed top-0 w-full z-20 transition-colors ${scrolled ? "bg-white shadow-md text-black" : "bg-gradient-to-b from-green-900/60 to-transparent text-white"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center py-4 px-6">
          <div className="flex items-center">
            <img src="/logo-svg.svg" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:block text-center font-bold text-lg cursor-pointer">
            <a href="#home">Green Choice Excavation</a>
          </div>
          <nav className="flex justify-end">
            <ul className="flex space-x-8 font-semibold">
              <li>
                <a href="#home" className="hover:text-amber-700">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-700">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-700">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="relative h-[80vh] pt-20 flex items-center justify-center text-center text-white">
        <img src="/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-100/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex justify-center w-full">
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">Green Choice Excavation</h1>
            <p className="text-2xl md:text-3xl text-white">Professional excavation & site services</p>
            <p className="text-lg md:text-xl mt-2 text-white">Based out of Lancaster, SC — proudly serving both North and South Carolina.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:7042906688" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-center">Call 704-290-6688</a>
              <a href="mailto:gce10@gmail.com" className="bg-white text-amber-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mb-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/treeremoval1.jpg" alt="Land Clearing" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Land Clearing</h3>
              <p className="text-lg text-gray-700">Efficient land clearing services to ready your property for construction or landscaping.</p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/grading2.jpg" alt="Grading" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Grading</h3>
              <p className="text-lg text-gray-700">Precision grading services to ensure proper leveling, drainage, and site preparation.</p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/grading5.jpg" alt="Site Prep" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Site Prep</h3>
              <p className="text-lg text-gray-700">Comprehensive site preparation including grading, leveling, and soil stabilization.</p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/gravel3.jpg" alt="Gravel Driveways" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Gravel Driveways</h3>
              <p className="text-lg text-gray-700">Durable gravel driveway installation and maintenance for residential and commercial properties.</p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/excavating1.jpeg" alt="Excavation" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Excavation</h3>
              <p className="text-lg text-gray-700">Professional excavation services for any project size, ensuring safety and precision.</p>
            </a>
            <a
              href="#contact"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border border-amber-100 transition-transform transform hover:-translate-y-1"
            >
              <img src="/skid-steer2.jpg" alt="Skid Steer Services" className="w-full h-80 object-cover rounded-xl mb-4 px-2" />
              <h3 className="text-2xl font-bold text-black mb-2">Skid Steer Services</h3>
              <p className="text-lg text-gray-700">Versatile skid steer services for grading, material handling, and site cleanup to support your project needs.</p>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="tel:7042906688" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-center">Call 704-290-6688</a>
            <a href="mailto:gce10@gmail.com" className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-center">Email Us</a>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 rounded-full"></div>
      </div>

      <section id="about" className="mb-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <div className="overflow-hidden flex flex-col md:flex-row">
            {/* Left: Photo */}
            <div className="md:w-1/2 w-full">
              <img
                src="/gary-headshot.jpg"
                alt="Excavating equipment at work"
                className="rounded-xl shadow-md object-cover h-80 w-full md:h-full"
              />
            </div>
            {/* Right: Text Content */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="p-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Green Choice Excavation is a locally owned and operated company specializing in excavation, grading, land clearing, gravel driveways, and site preparation. We pride ourselves on delivering direct customer service with a focus on trust and reliability.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our team is committed to providing competitive pricing without compromising quality, ensuring that every project meets your expectations and budget. Whether you need professional excavation or meticulous grading, we bring expertise and dedication to every job.
                </p>
                <p className="text-lg text-gray-700 mb-4">We are proudly based out of Lancaster, South Carolina, and serve customers throughout both North Carolina and South Carolina.</p>
                <p className="text-lg text-gray-700">
                  Choose Green Choice Excavation for fair pricing, personalized service, and a trusted local partner for all your site preparation needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a href="tel:7042906688" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-center">Call 704-290-6688</a>
                  <a href="mailto:gce10@gmail.com" className="bg-white text-amber-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center">Email gce10@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 rounded-full"></div>
      </div>

      <section id="gallery">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8">Gallery</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="rounded-xl shadow-md w-full h-96 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-4 py-2 rounded-r-md"
              aria-label="Previous Image"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-4 py-2 rounded-l-md"
              aria-label="Next Image"
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center">
            <a href="mailto:gce10@gmail.com" className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold">Contact Us Today</a>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-12 max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-8">Contact</h2>
          {/* Call/Email Card */}
          <div className="bg-gradient-to-r from-green-700 to-amber-600 text-white rounded-xl shadow-md p-6 mb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:7042906688"
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
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-red-600">*</span></label>
                <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone<span className="text-red-600">*</span></label>
                <input type="tel" id="phone" name="phone" required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" id="address" name="address" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" id="city" name="city" required className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget for Project</label>
                <select id="budget" name="budget" required className="w-full p-3 border border-gray-300 rounded-lg">
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
            </div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-1">Services Needed</legend>
              <div className="space-y-2">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Land Clearing" className="mr-2" />
                    Land Clearing
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Grading" className="mr-2" />
                    Grading
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Site Prep" className="mr-2" />
                    Site Prep
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Gravel Driveways" className="mr-2" />
                    Gravel Driveways
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Excavation" className="mr-2" />
                    Excavation
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Skid Steer Services" className="mr-2" />
                    Skid Steer Services
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="servicesNeeded" value="Other" className="mr-2" />
                    Other
                  </label>
                </div>
              </div>
            </fieldset>
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
              <textarea id="comments" name="comments" rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            </div>
            <div className="flex items-start space-x-2 text-sm text-gray-700 mt-4">
              <input type="checkbox" id="acknowledge" name="acknowledge" required />
              <label htmlFor="acknowledge">I understand there is a minimum $500 project cost requiring heavy equipment</label>
            </div>
            <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-bold mt-4">Submit</button>
          </form>
        </div>
      </section>
    </main>
  )
}