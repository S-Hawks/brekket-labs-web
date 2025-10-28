import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn, scaleIn } from "../../variant";
import { FaCheckCircle, FaArrowLeft, FaCode } from "react-icons/fa";

const ServiceDetails = () => {
  const allServiceData = useLoaderData();
  const { serviceId } = useParams();
  const [isService, setIsService] = useState({});

  useEffect(() => {
    const serviceDetail = allServiceData.find((data) => data.id == serviceId);
    setIsService(serviceDetail);
  }, [allServiceData, serviceId]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#66d8fe] via-[#cff3d5] to-[#fdffc4] py-16 px-5 md:px-10 xl:px-40">
        {/* Banner */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors duration-300 font-medium"
            >
              <FaArrowLeft className="text-lg" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#66d8fe] to-[#fdffc4] rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src={isService.image}
                  alt={isService.title}
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer(0.15, 0.2)}
              initial="hidden"
              animate="show"
              className="w-full lg:w-1/2 space-y-6"
            >
              <div>
                <motion.h1
                  variants={textVariant(0.2)}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
                >
                  {isService.title}
                </motion.h1>
              </div>
              <motion.p
                variants={textVariant(0.4)}
                className="text-gray-700 text-lg md:text-xl leading-relaxed"
              >
                {isService.shortDescription}
              </motion.p>
              <motion.div variants={scaleIn(0.5)}>
                <Link
                  to="/contact"
                  className="inline-block bg-gray-900 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-20 px-5 md:px-10 xl:px-40 bg-white">
        {/* About Service Details */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.1, 0.2)}
            className="space-y-12"
          >
            <div>
              <motion.h2
                variants={textVariant(0.1)}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                About This Service
              </motion.h2>
              <motion.p
                variants={fadeIn(0.2)}
                className="text-gray-700 text-lg"
              >
                {isService.details}
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                variants={scaleIn(0.3)}
                className="bg-gradient-to-br from-[#cff3d5]/30 to-[#66d8fe]/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#66d8fe] to-[#cff3d5] rounded-xl">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Key Features
                  </h3>
                </div>
                <ul className="space-y-4">
                  {isService.features &&
                    isService.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn(0.1 * index)}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="text-green-500 text-xl mt-1" />
                        <span className="text-gray-800 text-lg font-medium">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                </ul>
              </motion.div>
              <motion.div
                variants={scaleIn(0.4)}
                className="bg-gradient-to-br from-[#fdffc4]/40 to-[#cff3d5]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#fdffc4] to-[#66d8fe] rounded-xl">
                    <FaCode className="text-gray-900 text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {isService.technologies &&
                    isService.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        variants={scaleIn(0.1 * index)}
                        className="px-5 py-3 bg-white rounded-full shadow-md text-gray-800 font-semibold text-base hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*  CTA = Call to Action part */}
      <div className="bg-gradient-to-r from-[#66d8fe] via-[#cff3d5] to-[#fdffc4] py-20 px-5 md:px-10 xl:px-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.2, 0.1)}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h2
            variants={textVariant(0.1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            variants={fadeIn(0.2)}
            className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Let's discuss how our {isService.title} can transform your business.
            Contact us today for a free consultation.
          </motion.p>
          <motion.div
            variants={scaleIn(0.3)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="bg-gray-900 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              Contact Us Now
            </Link>
            <Link
              to="/"
              className="bg-white text-gray-900 text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold border-2 border-gray-900"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
