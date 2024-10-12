import React from "react";
import { FaInstagram, FaFacebookSquare, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <div className="w-full h-auto py-16 bg-[#f0f4f8] flex justify-center items-center">
      <div className="w-[90vw] lg:w-[80vw] flex flex-col justify-center items-center gap-8">
        
        {/* Contact Us Heading */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-700 mt-4 text-lg lg:text-xl max-w-2xl mx-auto">
            If you have any questions or inquiries, please don't hesitate to get in touch. Fill out the form, and we'll get back to you shortly.
          </p>
        </div>

        {/* Main Content: Contact Info + Form */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-0 lg:h-full">
          
          {/* Contact Info Section */}
          <div className="bg-[#1a73e8] text-white p-8 lg:w-[30%] w-full rounded-lg shadow-lg flex flex-col justify-between lg:min-h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaPhoneAlt className="text-2xl lg:text-3xl" />
                <span className="text-lg font-semibold">+92 97524 11120</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MdEmail className="text-2xl lg:text-3xl" />
                <span className="text-lg font-semibold">contact@company.com</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MdLocationOn className="text-4xl lg:text-[70px]" />
                <span className="text-lg font-semibold">128 S.R Compound, Lasudiya Mori, Devas Naka, Mangalya , Inodre, Madhya Pardesh</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-3xl lg:text-4xl">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <form className="bg-white p-8 w-full lg:w-[70%] rounded-lg shadow-lg flex flex-col gap-6 lg:min-h-full">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-[50%] flex flex-col">
                <label className="text-lg font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border-2 border-gray-300 rounded-lg h-10 px-4"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col">
                <label className="text-lg font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border-2 border-gray-300 rounded-lg h-10 px-4"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-[50%] flex flex-col">
                <label className="text-lg font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-2 border-gray-300 rounded-lg h-10 px-4"
                  placeholder="Email"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col">
                <label className="text-lg font-semibold" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border-2 border-gray-300 rounded-lg h-10 px-4"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="border-2 border-gray-300 rounded-lg h-32 px-4 py-2"
                placeholder="Your Message"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
