'use client';

import { useState } from "react";
import CaseCard from "./CaseCard";

const cases = [
  {
    id: 1,
    title: "大型钢铁企业数字孪生项目",
    category: "数字孪生",
    description: "为某大型钢铁企业打造全流程数字孪生系统",
    image: "/images/case-1.jpg",
    videoUrl: "https://example.com/case-1-video"
  },
  {
    id: 2,
    title: "汽车制造工艺仿真优化",
    category: "工艺仿真",
    description: "通过汽车仿真技术优化工艺流程",
    image: "/images/case-2.jpg",
    videoUrl: "https://example.com/case-2-video"
  }
];

const categories = ["全部", "数字孪生", "工艺仿真", "三维展示"];

export default function CaseGrid() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredCases = selectedCategory === "全部"
    ? cases
    : cases.filter(c => c.category === selectedCategory);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((case_, index) => (
            <div 
              key={case_.id} 
              className="w-full transform transition-transform duration-300 hover:scale-105"
            >
              <CaseCard {...case_} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
