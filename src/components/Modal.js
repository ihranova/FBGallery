import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <motion.div
          class="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
          aria-hidden="true"
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          class="inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-20 relative"
        >
          <div class="bg-white p-2">
            <img src={selectedImg} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
