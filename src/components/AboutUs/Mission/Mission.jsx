import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../../variant";
import {
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaStar,
  FaHandshake,
  FaPalette,
  FaHeart,
} from "react-icons/fa";

const Mission = ({ missionAndVision }) => {
  const icons = [
    <FaLightbulb className="text-5xl text-yellow-500" />,
    <FaStar className="text-5xl text-yellow-500" />,
    <FaHandshake className="text-5xl text-green-500" />,
    <FaPalette className="text-5xl text-green-500" />,
    <FaHeart className="text-5xl text-red-500" />,
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p
          variants={fadeIn(0.3)}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          Guiding principles that drive everything we do
        </motion.p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-linear-to-br from-[#66d8fe]/10 to-[#cff3d5]/20 p-8 rounded-2xl hover:shadow-xl transition-all"
        >
          <div className="mb-6">
            <h3 className="flex items-center text-2xl font-bold text-gray-900 mb-4 gap-3">
              <FaBullseye className="text-3xl text-cyan-700" />
              Our Mission
            </h3>
            <div className="w-16 h-1 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full"></div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {missionAndVision.mission}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-linear-to-br from-[#cff3d5]/10 to-[#fdffc4]/20 p-8 rounded-2xl hover:shadow-xl transition-all"
        >
          <div className="mb-6">
            <h3 className="flex items-center text-2xl font-bold text-gray-900 mb-4 gap-3">
              <FaEye className="text-3xl text-green-600" />
              Our Vision
            </h3>
            <div className="w-16 h-1 bg-linear-to-r from-[#cff3d5] to-[#fdffc4] rounded-full"></div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {missionAndVision.vision}
          </p>
        </motion.div>
      </div>

      {/* Core Values*/}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16"
      >
        <motion.h3
          variants={textVariant(0.2)}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4"
        >
          Our Core Values
        </motion.h3>
        <motion.p
          variants={fadeIn(0.3)}
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12"
        >
          The principles that guide everything we do
        </motion.p>
        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          className="grid md:grid-cols-2 gap-8"
        >
          {missionAndVision.coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn(0.2)}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-0">{icons[index]}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
