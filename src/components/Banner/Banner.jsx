import React from "react";
import bannerImg from "../../assets/Gemini_Generated_Image_8lwcp68lwcp68lwc-Photoroom.png";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn, scaleIn } from "../../variant";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#fdffc4] via-[#cff3d5] to-[#66d8fe] px-5 md:px-10 xl:px-40 pt-6 pb-12 flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate="show"
        className="w-full xl:w-2/5 flex flex-col space-y-6"
      >
        <motion.h1
          variants={textVariant(0.2)}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
        >
          We Build <br />
          <span className="text-cyan-700">Experiences</span>
          <br /> For Your Clients
        </motion.h1>
        <motion.p
          variants={textVariant(0.4)}
          className="text-sm lg:text-base text-gray-700 leading-relaxed"
        >
          Transform your digital presence with our innovative software
          solutions. We create powerful, scalable applications tailored to your
          business needs.
        </motion.p>
        <motion.input
          variants={slideIn("right", 0.6)}
          type="email"
          placeholder="example@gmail.com"
          className="border-0 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-gray-900 py-2 text-gray-900 placeholder:text-gray-600"
        />
        <Link
          to="/contact"
          className="bg-gray-900 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 w-fit hover:scale-105"
        >
          Contact us
        </Link>
      </motion.div>
      <motion.div
        variants={slideIn("left", 0.3)}
        initial="hidden"
        animate="show"
        className="w-full xl:w-3/5"
      >
        <motion.img
          src={bannerImg}
          alt="banner"
          className="w-full h-auto"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
