import React,{ useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      

           
          <h1 className="text-2xl md:text-3xl italic text-white-700 font-bold tracking-wide">
            Paash Tours & Travels
          </h1>

         
<div className="hidden md:flex space-x-6 text-lg font-medium text-white">
  <Link to="/" className="text-2xl hover:text-black transition">
    Home
  </Link>
  <Link to="/footer" className="text-2xl hover:text-black transition">
    ContactUs
  </Link>
</div>

         
          <button
            className="md:hidden text-violet-700 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-[#ffd6a7] text-center space-y-2 py-3 text-violet-700">
            <a href="#" className="block hover:text-yellow-300">
              Home
            </a>
            <a href="#" className="block hover:text-yellow-300">
              About
            </a>
            <a href="#" className="block hover:text-yellow-300">
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
