import React, { use } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../variant";

const WhyBrekket = ({ featuresPromise }) => {
  const features = use(featuresPromise);

  return (
    <div className="bg-linear-to-br from-[#66d8fe] via-[#cff3d5] to-[#fdffc4] py-20 px-5 md:px-10 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose Brekket?
          </motion.h2>
          <motion.p
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg text-gray-800 max-w-3xl mx-auto"
          >
            We have built our team and processes with care. Focused completely
            around client satisfaction and delivering exceptional results.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeIn(0.2)}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-center mb-4 flex-1">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center pt-4 border-t border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyBrekket;
