import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../../../variant";
import {
  FaReact,
  FaCloud,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiDotnet,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiKubernetes,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiScikitlearn,
} from "react-icons/si";

const techIcons = {
  React: FaReact,
  "Vue.js": FaVuejs,
  Angular: FaAngular,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": FaNodeJs,
  Python: FaPython,
  Java: FaJava,
  PHP: FaPhp,
  ".NET": SiDotnet,
  "React Native": FaReact,
  Flutter: SiFlutter,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Firebase: SiFirebase,
  AWS: FaAws,
  Azure: FaCloud,
  "Google Cloud": SiGooglecloud,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  OpenAI: SiOpenai,
  "Scikit-learn": SiScikitlearn,
};

const Technologies = ({ technologies }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allCategories = [
    "All",
    ...technologies.categories.map((c) => c.category),
  ];

  const handleFilterCategory = (category) => {
    setSelectedCategory(category);
  };

  const allTech = technologies.categories.flatMap((cat) =>
    cat.technologies.map((tech) => ({ ...tech, category: cat.category }))
  );
  const allTechnologies =
    selectedCategory === "All"
      ? allTech
      : allTech.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
        >
          Technologies We{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">
            Master
          </span>
        </motion.h2>
        <motion.p
          variants={fadeIn(0.3)}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {technologies.overview}
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {allCategories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => handleFilterCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
              selectedCategory === category
                ? "bg-cyan-700 text-white shadow-md animate-pulse"
                : "bg-white shadow-sm border border-gray-200"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        key={selectedCategory}
        variants={staggerContainer(0.02, 0.05)}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {allTechnologies.map((tech, index) => {
          const TechIcon = techIcons[tech.name];
          return (
            <motion.div
              key={index}
              variants={fadeIn(0.1)}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 border border-gray-200 hover:border-cyan-300"
            >
              {TechIcon && (
                <div className="w-16 h-16 flex items-center justify-center">
                  <TechIcon className="text-4xl text-cyan-600" />
                </div>
              )}
              <span className="font-medium text-gray-700 text-center text-sm">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
