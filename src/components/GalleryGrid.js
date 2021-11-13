import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function GalleryGrid({ gallery, setSelectedImg }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-40 transform transition-all">
      {gallery &&
        gallery.map((image) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            className="rounded shadow-lg overflow-hidden relative cursor-pointer opacity-80 transform transition-all"
            onClick={() => setSelectedImg(image.link)}
          >
            <motion.img
              className="object-cover w-full h-80 relative"
              src={image.link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
