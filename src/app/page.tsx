"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaBuilding,
  FaHome,
  FaRulerCombined,
  FaQuoteLeft,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1685266325664-8875f82926a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1625722702359-a7e2d3f64382?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Archimun transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations.",
      name: "John Adekunle",
      title: "CEO, Jk Holdings",
      image:
        "https://images.unsplash.com/photo-1663497823484-a72c173ca04a?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      quote:
        "The team delivered our corporate headquarters ahead of schedule while maintaining exceptional quality standards.",
      name: "Janet Okafor",
      title: "Director, Innov88",
      image:
        "https://plus.unsplash.com/premium_photo-1681398607734-da974926c02b?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      quote:
        "Working with Archimun was a game-changer for our residential project. Their innovative solutions saved us costs.",
      name: "Qudus Abdullah",
      title: "CEO, E-gat Limited",
      image:
        "https://images.unsplash.com/photo-1637684666587-91e51b10a555?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="min-h-screen">
      {/* === Navbar === */}
      <Navbar />

      {/* === Hero Section with Carousel === */}
      <section className="pt-24 pb-16 px-6 h-screen flex items-center bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Architecture ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building <span className="text-blue-400">Dream Spaces</span>{" "}
                with Precision
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                We deliver innovative architectural solutions tailored to your
                vision. From concept to completion, we build excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  Our Projects <FaArrowRight />
                </button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                  About Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === About Us Section === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-6 bg-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Crafting exceptional spaces since 2010
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="About Archimun"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-gray-500 text-2xl font-semibold mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                At Archimun, we are a civil engineering and construction agency
                dedicated to helping businesses and individuals bring their
                visions to life through innovative design and strategic
                implementation. With years of experience, our team of skilled
                engineers, architects, and project managers works
                collaboratively to deliver high-quality, efficient, and
                sustainable solutions tailored to each client's unique needs. We
                emphasize the importance of well-crafted plans and precise
                execution to ensure every project achieves its intended goals.
              </p>
              <p className="text-gray-600 mb-6">
                Our services include Structural Design, Site Analysis,
                Construction Project Management, Feasibility Studies, Renovation
                and Remodeling, Cost Estimation, and more. Every project is
                unique, but our commitment to innovation, efficiency, and
                quality craftsmanship remains constant. At Archimun, our mission
                is to transform ideas into reality and help our clients build
                lasting, impactful structures that stand the test of time.
              </p>
              <div className="flex items-center text-blue-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>Alapere Estate, Ketu, Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* === Services === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-3xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions for residential and commercial
              projects.
            </p>
          </div>
          <div className="md:px-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaHome size={40} className="text-blue-600" />,
                title: "Building Construction",
                desc: "We bring your vision to life with quality-driven building construction services.",
              },
              {
                icon: <FaHome size={40} className="text-blue-600" />,
                title: "Architectural Design",
                desc: "Our brilliant team craft architectural designs that blend creativity, functionality, and sustainability.",
              },
              {
                icon: <FaBuilding size={40} className="text-blue-600" />,
                title: "Structural Design",
                desc: "We have a team of experts who provide robust and reliable structural design solutions tailored to ensure safety, stability, and longevity.",
              },
              {
                icon: <FaRulerCombined size={40} className="text-blue-600" />,
                title: "Road Construction",
                desc: "We specialize in delivering durable and well engineered road construction solutions for both urban and rural developments.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-gray-500 text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === Featured Projects === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-6 bg-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-3xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest architectural masterpieces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Modern Villa",
                category: "Residential",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                id: 2,
                title: "Office Complex",
                category: "Commercial",
                image:
                  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                id: 3,
                title: "Luxury Penthouse",
                category: "Interior",
                image:
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-blue-300">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* === Testimonials Carousel === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-3xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600">What our clients say about us.</p>
          </div>

          <div className="relative">
            {/* Testimonial Items */}
            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: `-${currentTestimonial * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                      <p className="text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="text-gray-500 font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-[-12] top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-[-12] top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FaArrowRight className="text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* === Location Map === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-6 bg-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-500 text-3xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-gray-600">
              Visit us at our office in Alapere Estate
            </p>
          </div>
          <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.379295415393845!3d6.5970926452783825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9237f5e7a8a9%3A0x7e9a9a9a9a9a9a9a!2sAlapere%20Estate%2C%20Ketu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* === Footer === */}
      <Footer />
    </main>
  );
}
