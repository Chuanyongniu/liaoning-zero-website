'use client';

const businesses = [
  {
    id: 1,
    title: "三维动态展示",
    description: "通过先进的三维建模和动画技术，为客户提供生动直观的产品展示解决方案。",
    video: "/videos/3d-demo.mp4",
    features: [
      "高精度三维建模",
      "流畅动态演示",
      "交互式体验",
      "多平台兼容"
    ]
  },
  {
    id: 2,
    title: "数字孪生开发",
    description: "构建数字化工厂，实现生产过程的实时监控和优化。",
    video: "/videos/digital-twin.mp4",
    features: [
      "实时数据采集",
      "可视化监控",
      "预测性维护",
      "智能决策支持"
    ]
  }
];

export default function BusinessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">业务领域</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <video
                  src={business.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{business.title}</h3>
                <p className="text-gray-600 mb-6">{business.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {business.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
