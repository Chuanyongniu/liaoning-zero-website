'use client';

import { useState } from "react";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl: string;
}

export default function CaseCard({
  title,
  category,
  description,
  image,
  videoUrl
}: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-white shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9">
        {isHovered ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
