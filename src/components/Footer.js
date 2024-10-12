import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Logo and Contact Info */}
        <div className="flex flex-col items-center">
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-2">Email: info@example.com</p>
          <p className="mb-2">Address: 123 Street, City, Country</p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-center">
            <li className="mb-2 hover:text-gray-400"><a href="#home">Home</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#about">About Us</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#services">Services</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
