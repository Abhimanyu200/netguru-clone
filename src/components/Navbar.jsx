import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-green-500">
          <img src=" https://www.netguru.com/hubfs/_N23/assets/logos/netguru.svg
               " alt="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li className="relative group">
            <Link to="/services" className="text-gray-700 hover:text-green-500">
              Services
            </Link>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md py-4 px-6 w-[600px] mt-2 z-50">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ideation</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Rapid Prototyping</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Research & Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">User Research & Testing</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Product Strategy</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Software Development</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Web Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Mobile Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">MVPs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-green-500">Cloud Strategy</a></li>
                  </ul>
                </div>
              </div>
              <a href="#" className="text-green-500 mt-4 block text-right">All services</a>
            </div>
          </li>
          <li><Link to="/industries" className="text-gray-700 hover:text-green-500">Industries</Link></li>
          <li><Link to="/clients" className="text-gray-700 hover:text-green-500">Clients</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-green-500">About Us</Link></li>
          <li><Link to="/insights" className="text-gray-700 hover:text-green-500">Insights</Link></li>
        </ul>

        {/* CTA Button */}
        <Link
          to="/estimateproject"
          className="hidden md:inline-block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
        >
          Get in touch ➔
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/services" className="block text-gray-700 hover:text-green-500">Services</Link>
          <Link to="/industries" className="block text-gray-700 hover:text-green-500">Industries</Link>
          <Link to="/clients" className="block text-gray-700 hover:text-green-500">Clients</Link>
          <Link to="/about" className="block text-gray-700 hover:text-green-500">About Us</Link>
          <Link to="/insights" className="block text-gray-700 hover:text-green-500">Insights</Link>
          <Link to="/estimateproject" className="block bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 text-center">Get in touch</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
