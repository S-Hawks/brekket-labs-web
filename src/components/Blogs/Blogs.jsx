import React from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../variant";

const Blogs = () => {
  const blogsData = useLoaderData();

  if (!blogsData || blogsData.length === 0) return null;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="py-20 px-6 md:px-10 xl:px-40 bg-linear-to-br from-[#fefefe] via-[#f9fafb] to-[#e9f9ff] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h1
              variants={textVariant(0.2)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Our Blog & Insights
            </motion.h1>
            <motion.p
              variants={fadeIn(0.4)}
              className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Stay updated with the latest trends, best practices, and insights
              from our team of experts. Explore articles on web development,
              cloud computing, AI, and more.
            </motion.p>
          </motion.div>
        </div>

      </div>
              <div className="bg-linear-to-r from-[#66d8fe] via-[#cff3d5] to-[#fdffc4] py-20 px-6 md:px-10 xl:px-40">
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
              Want to Stay Updated?
            </motion.h2>
            <motion.p
              variants={fadeIn(0.2)}
              className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Subscribe to our newsletter and get the latest insights,
              tutorials, and industry news delivered straight to your inbox.
            </motion.p>
            <motion.div
              variants={fadeIn(0.3)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-gray-900 shadow-md"
              />
              <button className="w-full sm:w-auto bg-gray-900 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
    </div>
  );
};

export default Blogs;
