import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            <span className="font-medium text-white">+91 99999 99999</span>
          </p>
          <p className="text-gray-300">info@paashtravels.com</p>
        </div>

       
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Paash Tours & Travels</h2>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

       
        <div className="flex justify-center md:justify-end gap-6">
          <FaFacebook
            size={24}
            className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
          />
          <FaInstagram
            size={24}
            className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
          />
          <FaTwitter
            size={24}
            className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
          />
          <FaLinkedin
            size={24}
            className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
