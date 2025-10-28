import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer, slideIn } from "../../../variant";
import aboutHeroImg from "../../../assets/Frame expert-team.png";

const AboutCompany = ({ companyDetails }) => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          variants={slideIn("left", 0.3)}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2"
        >
          <img
            src={aboutHeroImg}
            alt="Brekket Labs Team"
            className="w-full h-auto rounded-xl drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-gray-900 leading-tight"
          >
            About
            <br />
            <span className="text-cyan-700">{companyDetails.name}</span>
          </motion.h1>
          <motion.p
            variants={textVariant(0.3)}
            className="text-xl md:text-2xl mb-6 font-semibold text-gray-900"
          >
            {companyDetails.tagline}
          </motion.p>
          <motion.p
            variants={fadeIn(0.4)}
            className="text-sm md:text-base leading-relaxed text-gray-700 mb-8"
          >
            {companyDetails.description}
          </motion.p>
          <motion.div
            variants={fadeIn(0.5)}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#mission"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors shadow-lg text-center"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCompany;
