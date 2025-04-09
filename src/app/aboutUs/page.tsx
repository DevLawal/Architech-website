"use client";

import { FaUsers, FaLightbulb, FaAward, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Architectural model"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              About Archimun
            </h1>
            <p className="mt-3 text-xl text-gray-300">
              Crafting exceptional spaces that inspire and endure
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                {`
                Archimun began as a small design studio with a big vision: to
                transform Nigeria's architectural and construction landscape
                through innovative, sustainable designs that reflect our
                clients' aspirations while respecting our cultural heritage.`}
              </p>
              <p className="text-gray-600 mb-6">
                {`
                Over the past decade, we've grown into a full-service building
                and construction firm, completing over 200 projects across
                residential, commercial, and institutional sectors. Our journey
                has been marked by a commitment to excellence and a passion for
                creating spaces that stand the test of time.`}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-gray-800 italic">
                  {`
                  "Architecture should speak of its time and place, but yearn
                  for timelessness."`}
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our office"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These principles guide every project we undertake and every
                decision we make
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We believe the best designs and construction emerge from
                  teamwork with our clients and partners
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace new technologies and creative solutions to solve
                  design challenges
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  {`
                  We're committed to the highest standards in design, materials,
                  and craftsmanship`}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We build trust through transparency, honesty, and ethical
                  business practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
                <p className="mb-6 opacity-90">
                  We follow a meticulous, client-centered approach to ensure
                  every project reflects your vision while meeting functional
                  requirements and budget constraints.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>Initial Consultation & Needs Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Concept Development & Preliminary Designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      3
                    </span>
                    <span>Design Refinement & Client Feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      4
                    </span>
                    <span>Construction Documentation & Permitting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      5
                    </span>
                    <span>Construction Administration & Project Closeout</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl text-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Why Choose Archimun?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Over 200 successfully completed projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Nigerian Institute of Architects certified professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Client-focused approach with transparent communication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Sustainable design practices for eco-friendly solutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
