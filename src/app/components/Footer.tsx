import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Archimun</h3>
            <p className="text-gray-400">
              The first agency you should have called when you thought of
              building. The last agency you will need for your building and
              construction.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contactUs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Alapere Estate, Ketu, Lagos</p>
            <p className="text-gray-400">archimundsg@gmail.com</p>
            <p className="text-gray-400">+234 904 378 4653</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Archimun. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
