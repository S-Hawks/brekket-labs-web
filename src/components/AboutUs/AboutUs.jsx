import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../variant";
import AboutCompany from "./AboutCompany/AboutCompany";
import Achievements from "./Achievements/Achievements";
import Mission from "./Mission/Mission";
import Technologies from "./Technologies/Technologies";

const AboutUs = () => {
  const aboutUsData = useLoaderData();
  const { companyDetails, missionAndVision, achievements, technologies } =
    aboutUsData;

  return (
    <div className="bg-white">
      {/* About Company Section */}
      <div className="relative bg-linear-to-r from-[#fdffc4] via-[#cff3d5] to-[#66d8fe] py-16 md:py-20 px-5 md:px-10 xl:px-40 overflow-hidden">
        <AboutCompany companyDetails={companyDetails}></AboutCompany>
      </div>
      {/* Achievements Section */}
      <div className="py-20 px-5 md:px-10 xl:px-40 bg-white">
        <Achievements achievements={achievements}></Achievements>
      </div>
      {/* Mission & Vision Section */}
      <div id="mission" className="py-20 px-5 md:px-10 xl:px-40">
        <Mission missionAndVision={missionAndVision}></Mission>
      </div>
      {/* Technologies Section */}
      <div className="py-20 px-5 md:px-10 xl:px-40">
        <Technologies technologies={technologies}></Technologies>
      </div>
      {/* Contact CTA */}
      <div className="py-20 px-5 md:px-10 xl:px-40 bg-linear-to-r from-[#fdffc4] via-[#cff3d5] to-[#66d8fe]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={textVariant(0.2)}
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p
              variants={fadeIn(0.3)}
              className="text-xl mb-8 text-gray-700"
            >
              Let's discuss how we can help transform your ideas into reality
            </motion.p>
            <motion.div
              variants={fadeIn(0.4)}
              className="flex flex-col md:flex-row justify-center gap-4"
            >
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Get in Touch
              </Link>
              <a
                href={`tel:${companyDetails.phone}`}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-colors shadow-lg"
              >
                Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
