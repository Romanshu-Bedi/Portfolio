// src/components/Tech.jsx
import React from "react";
import { motion } from "framer-motion"; // <--- ADDED
import { technologies } from "../constants"; // adjust path as needed
import Ball from "./Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28 flex flex-col items-center" key={tech.name}>
          <Ball icon={tech.icon} />

          {/* Changed <p> to <motion.p> and added whileHover property */}
          <motion.p
            className="text-center mt-2 text-white"
            whileHover={{ scale: 1.1 }}
          >
            {tech.name}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
