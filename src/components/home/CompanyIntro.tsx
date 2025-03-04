'use client';

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4">关于我们</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            辽宁壹零是一家专注于工业智能化解决方案的高科技企业，致力于为制造业企业提供先进的技术支持和服务。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">创新技术</h3>
            <p className="text-gray-600">
              采用最新的数字孪生和虚拟仿真技术，为客户提供创新的解决方案。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">专业团队</h3>
            <p className="text-gray-600">
              拥有经验丰富的技术团队，为客户提供专业的技术支持和服务。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">行业经验</h3>
            <p className="text-gray-600">
              深耕工业领域多年，积累了丰富的项目经验和行业知识。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
