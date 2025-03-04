'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/images/product-1.jpg",
    alt: "便携式压痕仪正面图"
  },
  {
    id: 2,
    src: "/images/product-2.jpg",
    alt: "便携式压痕仪侧面图"
  }
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden"
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="object-contain w-full h-full"
        />
      </motion.div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
              selectedImage.id === image.id ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
