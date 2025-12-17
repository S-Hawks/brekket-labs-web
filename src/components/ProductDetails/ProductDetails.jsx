import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn, scaleIn } from "../../variant";
import { FaCheckCircle, FaArrowLeft, FaCog } from "react-icons/fa";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { productId } = useParams();
  //console.log(productData, productId);
  const [isProduct, setIsProduct] = useState({});

  useEffect(() => {
    const productDetail = productData.find((data) => data.id == productId);
    setIsProduct(productDetail);
  }, [productData, productId]);

  return (
    <div className="bg-white">
      <div className="py-20 px-6 md:px-10 xl:px-40 bg-linear-to-br from-[#fefefe] via-[#f9fafb] to-[#e9f9ff] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <FaArrowLeft />
              <span>Back</span>
            </Link>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-3 rounded-2xl bg-linear-to-r from-[#66d8fe]/30 to-[#cff3d5]/30 blur-lg opacity-70 group-hover:opacity-100 transition-all"></div>
                <img
                  src={isProduct.image}
                  alt={isProduct.name}
                  className="relative rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="w-full lg:w-1/2 space-y-6"
            >
              <motion.span
                variants={fadeIn(0.1)}
                className="inline-block text-sm font-semibold text-[#009ddc] uppercase tracking-wider"
              >
                {isProduct.category}
              </motion.span>
              <motion.h1
                variants={textVariant(0.2)}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
              >
                {isProduct.name}
              </motion.h1>
              <motion.p
                variants={fadeIn(0.3)}
                className="text-gray-700 text-base leading-relaxed"
              >
                {isProduct.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-24 px-6 md:px-10 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {isProduct.features && (
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={textVariant(0.1)} className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Key Features
                </h2>
                <div className="h-1 w-20 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full"></div>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {isProduct.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn(0.2 + i * 0.05)}
                    className="flex items-start gap-3 bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-[#66d8fe]/40 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-cyan-500 text-xl mt-1 shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          {isProduct.technologies && (
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={textVariant(0.1)} className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Technologies
                </h2>
                <div className="h-1 w-20 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full"></div>
              </motion.div>
              <div className="flex flex-wrap gap-4">
                {isProduct.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn(0.2 + i * 0.05)}
                    className="flex items-start gap-3 bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#66d8fe]/40 transition-all duration-300"
                  >
                    <FaCog className="text-cyan-600 text-lg" />
                    <span className="text-gray-800 font-medium text-sm">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* How to Use */}
          {isProduct.howToUse && (
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={textVariant(0.2)} className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Getting Started
                </h2>
                <div className="h-1 w-20 bg-linear-to-r from-[#66d8fe] to-[#cff3d5] rounded-full"></div>
              </motion.div>
              <div className="space-y-4">
                {isProduct.howToUse.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn(0.3 + i * 0.05)}
                    className="flex items-start gap-4 bg-[#f9fafb] border border-gray-100 p-5 rounded-xl hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 bg-cyan-500 text-white font-semibold flex items-center justify-center rounded-full shadow-sm">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/*  CTA = Call to Action part */}
      <div className="bg-linear-to-r from-[#66d8fe] via-[#cff3d5] to-[#fdffc4] py-20 px-5 md:px-10 xl:px-40">
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
            Let's discuss how {isProduct.name} can transform your business.
            Contact us today for more information and pricing.
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
              to="/products"
              className="bg-white text-gray-900 text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold border-2 border-gray-900"
            >
              View All Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
