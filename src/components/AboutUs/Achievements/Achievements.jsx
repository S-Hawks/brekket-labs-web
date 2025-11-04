import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../../variant";

const Achievements = ({ achievements }) => {
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
          Our <span className="text-cyan-700">Achievements</span>
        </motion.h2>
        <motion.p
          variants={fadeIn(0.3)}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          {achievements.overview}
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {achievements.statistics.map((data, index) => (
          <motion.div
            key={index}
            variants={fadeIn(0.2)}
            whileHover={{ y: -5 }}
            className="bg-white flex flex-col p-6 rounded-2xl border-2 border-gray-100 hover:border-[#66d8fe] transition-all group"
          >
            <div className="mb-3">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-700">
                {data.number}
              </h3>
            </div>
            <div className="mb-2">
              <p className="text-sm md:text-base font-bold text-gray-900 mb-2">
                {data.label}
              </p>
              <div className="w-12 h-1 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full"></div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mt-3">
              {data.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
