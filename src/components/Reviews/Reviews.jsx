import React, { use } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../variant";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  //console.log(reviewsData);
  if (!reviewsData || reviewsData.length === 0) return null;

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeIn(0.4)}
            className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Building software solutions can be challenging. Opting for Brekket
            Labs means receiving guidance from experts who cover the entire
            product lifecycle, from ideation to deployment.
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <motion.div
              key={review.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn(0.2)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(Number(review.rating))].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed relative z-10">
                "{review.review}"
              </p>

              {/* Project Badge */}
              {review.project && (
                <div className="mb-4">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200">
                    📁 {review.project}
                  </span>
                </div>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600">{review.position}</p>
                  {review.company && (
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      {review.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Decorative Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
