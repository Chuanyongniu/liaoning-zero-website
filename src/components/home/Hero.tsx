'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            智能制造的引领者
          </h1>
          <p className="text-xl text-white mb-8">
            辽宁壹零致力于为企业提供先进的自动化设备和智能化系统解决方案
          </p>
          <div className="flex space-x-4">
            <Link
              href="/product"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              了解产品
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
