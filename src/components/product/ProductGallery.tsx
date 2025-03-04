'use client';

import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/images/product-1.jpg",
    alt: "产品图片 1"
  },
  {
    id: 2,
    src: "/images/product-2.jpg",
    alt: "产品图片 2"
  }
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid gap-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ${
              selectedImage.id === image.id ? "ring-2 ring-blue-600 scale-105" : "hover:scale-105"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
