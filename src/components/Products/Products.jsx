import React from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../variant";

const Products = () => {
  const productsData = useLoaderData();
  //console.log(productsData);
  if (!productsData || productsData.length === 0) return null;

  return (
    <div className="py-20 px-6 sm:px-10 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our Products
        </motion.h2>
        <motion.p
          variants={fadeIn(0.2)}
          className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Discover powerful digital products crafted to empower your business —
          from intelligent AI tools to scalable cloud solutions.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeIn(0.1)}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#66d8fe]/60 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <span className="inline-block text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                {product.category}
              </span>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 line-clamp-3">
                {product.description}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/products-details/${product.id}`}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
