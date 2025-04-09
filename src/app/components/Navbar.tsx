"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Arch<span className="text-blue-600">imun</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-black hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            href="/aboutUs"
            className="text-black hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="text-black hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/contactUs"
            className="text-black hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </nav>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-70">
          <Link href="/contactUs">Get a Quote</Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-black hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-black hover:text-blue-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-black hover:text-blue-600 transition"
            >
              Projects
            </Link>
            <Link
              href="/contactUs"
              className="text-black hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
