import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPaperPlane, FaUser, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //console.log(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,formData.name,formData.email,formData.message,process.env.REACT_APP_PUBLIC_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccessMessage("Your message has been sent!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email send failed:", error);
          setErrorMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div name="contact" className="bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white w-full relative overflow-hidden min-h-screen">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-6000"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative py-8 z-10 px-4">
        {/* Enhanced Section Title matching About/Projects/Skills components */}
        <div className="pb-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main title with advanced animations */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text animate-gradient-x bg-300% hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-500">
                Get In
              </span>
              {" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-gradient-x bg-300% hover:from-green-400 hover:via-teal-500 hover:to-cyan-500 transition-all duration-500 delay-200">
                Touch
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-20 md:w-24 animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light animate-fadeInUp delay-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Let's <span className="text-orange-400 font-semibold">collaborate</span> and bring your 
              <span className="text-cyan-400 font-semibold"> ideas to life</span>. Drop me a message!
            </p>
            
            {/* Floating particles */}
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -top-4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl w-full md:w-4/5 lg:w-3/5 xl:w-1/2 relative group overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500">
            {/* Enhanced glowing effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 -z-10"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 -z-20"></div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 relative z-10">
              {/* Name Input */}
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 group-focus-within/input:text-cyan-300 transition-colors duration-200">
                  <FaUser className="text-lg" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/70 focus:bg-gray-700/50 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm group-hover/input:border-gray-500/70"
                />
              </div>

              {/* Email Input */}
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 group-focus-within/input:text-purple-300 transition-colors duration-200">
                  <FaEnvelope className="text-lg" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/70 focus:bg-gray-700/50 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm group-hover/input:border-gray-500/70"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative group/input">
                <div className="absolute left-4 top-6 text-orange-400 group-focus-within/input:text-orange-300 transition-colors duration-200">
                  <FaCommentDots className="text-lg" />
                </div>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400/70 focus:bg-gray-700/50 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm resize-none group-hover/input:border-gray-500/70"
                ></textarea>
              </div>

              {/* Enhanced Submit Button */}
              <button
                type="submit"
                className="group/btn bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 flex items-center justify-center gap-3 text-base sm:text-lg relative overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  <FaPaperPlane className="text-lg group-hover/btn:animate-bounce" />
                  Send Message
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ping transition-all duration-300"></div>
              </button>
            </form>
          </div>
        </div>
        {/* Enhanced Success/Error Messages */}
        {successMessage && (
          <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-xl text-center backdrop-blur-sm">
            <p className="text-green-300 font-medium text-lg flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {successMessage}
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </p>
          </div>
        )}
        {errorMessage && (
          <div className="mt-8 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 rounded-xl text-center backdrop-blur-sm">
            <p className="text-red-300 font-medium text-lg flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              {errorMessage}
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
