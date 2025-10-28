import React from "react";
import { useLoaderData } from "react-router";
import Service from "../Services/Service/Service";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../variant";

const ServicesPage = () => {
  const allServicesData = useLoaderData();
  //console.log(allServicesData);

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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What services do we offer
          </motion.h2>
          <motion.p
            variants={fadeIn(0.4)}
            className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Building software solutions can be challenging. Opting for Cinnamon
            means receiving guidance from experts who cover the entire product
            lifecycle, from ideation to deployment.
          </motion.p>
        </motion.div>
        <div className="space-y-24">
          {allServicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
