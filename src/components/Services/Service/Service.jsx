import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../../variant";
import { Link } from "react-router";
import * as HiIcons from "react-icons/hi2";

const Service = ({ service }) => {
  const IconComponent = HiIcons[service.icon];
  return (
    <motion.div
      variants={textVariant(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Link
        to={`/service-details/${service.id}`}
        className="block h-full bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-cyan-900 hover:border-cyan-900 transition-all hover:scale-105 duration-300 hover:shadow-xl hover:shadow-cyan-900/35"
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-5 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-[#66d8fe] group-hover:text-[#66d8fe] transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 group-hover:text-gray-300">
          {service.shortDescription || service.details}
        </p>

        {/* Learn More Link */}
        <span className="inline-flex items-center gap-2 text-cyan-700 text-sm font-medium group-hover:text-[#66d8fe] transition-colors duration-300">
          Learn More
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
};

export default Service;
