import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../../variant";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Have a project in mind? Let's talk about how we can help bring your
            ideas to life.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Section */}
          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div
              variants={fadeIn(0.3)}
              className="bg-linear-to-br from-[#66d8fe] to-[#cff3d5] rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="text-gray-900 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Email Us
                    </p>
                    <a
                      href=""
                      className="text-gray-900 font-medium hover:underline"
                    >
                      hello@brekketlabs.com
                    </a>
                    <p className="text-xs text-gray-700 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                    <FaPhone className="text-gray-900 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Call Us
                    </p>
                    <a
                      href=""
                      className="text-gray-900 font-medium hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-xs text-gray-700 mt-1">
                      Sun-Thu from 9am to 6pm
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-gray-900 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Visit Us
                    </p>
                    <p className="text-gray-900 font-medium">
                      123 Tech Street
                      <br />
                      Digital City, DC 12345
                    </p>
                    <p className="text-xs text-gray-700 mt-1">
                      Open to visitors by appointment
                    </p>
                  </div>
                </div>
              </div>
              {/* Social Media Section */}
              <div className="border-t border-gray-900/10 pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Follow Our Journey
                </h4>
                <p className="text-sm text-gray-800 mb-4">
                  Stay updated with our latest projects and tech insights
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="w-11 h-11 bg-[#1877F2] rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    <FaFacebookF size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="w-11 h-11 bg-[#0A66C2] rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-600/50 transition-all"
                  >
                    <FaLinkedinIn size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="w-11 h-11 bg-black rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-gray-500/50 transition-all"
                  >
                    <FaTwitter size={18} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="w-11 h-11 bg-linear-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              variants={fadeIn(0.5)}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Quick Info
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#66d8fe] rounded-full"></span>
                  Average response time: 2 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#66d8fe] rounded-full"></span>
                  Free consultation available
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#66d8fe] focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#66d8fe] focus:outline-none transition-colors"
                    placeholder="Example@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#66d8fe] focus:outline-none transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#66d8fe] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-[#66d8fe] to-[#cff3d5] text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
