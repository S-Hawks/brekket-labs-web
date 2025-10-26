import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variant";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-20 py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          <motion.div variants={fadeIn(0.2)}>
            <h3 className="text-2xl font-bold text-white mb-4">Brekket Labs</h3>
            <p className="text-sm leading-relaxed mb-4">
              Building innovative software solutions that transform businesses.
              From web to mobile, we create experiences that matter.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <FaFacebookF size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-600/50 transition-all"
              >
                <FaLinkedinIn size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-gray-500/50 transition-all"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                className="w-10 h-10 bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn(0.3)}>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeIn(0.4)}>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#66d8fe] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeIn(0.5)}>
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MdMarkEmailUnread size={20} color="#66d8fe" />
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  hello@brekketlabs.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MdPhone size={20} color="#66d8fe" />
                <a href="" className="hover:text-[#66d8fe] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MdLocationPin size={20} color="#66d8fe" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700 my-8 origin-center"
        ></motion.div>
        {/* Copyright */}
        <motion.div
          variants={fadeIn(0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Brekket Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href=""
              className="text-gray-400 hover:text-[#66d8fe] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-[#66d8fe] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-[#66d8fe] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
