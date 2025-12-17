import React, { useEffect, useRef } from "react";

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

// ========================
// ALL ICONS WITH BRAND COLORS
// ========================
const techIcons = {
  React: { icon: FaReact, color: "#61DAFB" },
  "Vue.js": { icon: FaVuejs, color: "#4FC08D" },
  Angular: { icon: FaAngular, color: "#DD0031" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  Python: { icon: FaPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#ED8B00" },
  PHP: { icon: FaPhp, color: "#777BB4" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "React Native": { icon: FaReact, color: "#61DAFB" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Swift: { icon: SiSwift, color: "#F05138" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Azure: { icon: FaCloud, color: "#0078D4" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenAI: { icon: SiOpenai, color: "#412991" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
};

const LogoLoop = ({ size = 55, speed = 30 }) => {
  const containerRef = useRef(null);
  const entries = Object.entries(techIcons);

  useEffect(() => {
    const container = containerRef.current;
    let position = 0;

    const animate = () => {
      position -= 1;
      const resetAt = container.scrollWidth / 2;

      if (position <= -resetAt) position = 0;

      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="overflow-hidden py-20 px-5 md:px-10 xl:px-40 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Technologies We {""}
          <span className="text-cyan-900 animate-pulse">Use</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          We use the latest and greatest technologies to build our products.
        </p>
      </div>
      <div
        ref={containerRef}
        className="flex gap-12 whitespace-nowrap items-center"
      >
        {[...entries, ...entries].map(
          ([name, { icon: Icon, color }], index) => (
            <div
              key={name + index}
              className="flex flex-col items-center text-center group cursor-pointer"
              style={{ minWidth: size + 30 }}
            >
              <div
                className="p-4 rounded-2xl bg-white shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                style={{
                  border: `2px solid ${color}20`,
                }}
              >
                <Icon
                  size={size}
                  style={{ color }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span
                className="mt-3 text-sm font-medium text-gray-700 group-hover:font-semibold transition-all duration-300"
                style={{ color: "inherit" }}
              >
                {name}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LogoLoop;
