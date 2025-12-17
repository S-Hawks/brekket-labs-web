import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  fadeIn,
  scaleIn,
} from "../../../variant";
import { Link } from "react-router";

const ServicePage = ({ service }) => {
  //console.log(service);

  return (
    <div className="mb-16">
      <div
        className={`flex flex-col ${
          service.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-8 lg:gap-12`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-md rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* Text Section */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div>
            <motion.h3
              variants={textVariant(0.2)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight"
            >
              {service.title}
            </motion.h3>
            <motion.div
              variants={fadeIn(0.4)}
              className="w-20 h-1 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full mb-6"
            ></motion.div>
          </div>

          <motion.p
            variants={textVariant(0.5)}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            {service.details}
          </motion.p>

          <motion.div variants={scaleIn(0.7)} className="pt-4">
            <Link
              to={`/service-details/${service.id}`}
              className="bg-linear-to-r from-[#66d8fe] to-[#cff3d5] text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
