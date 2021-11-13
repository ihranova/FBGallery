import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function ProgressBar({ progress }) {
  return (
    <div className="relative pt-1 mt-14 z-10 lg:w-1/2 mx-auto">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></motion.div>
      </div>
    </div>
  );
}
