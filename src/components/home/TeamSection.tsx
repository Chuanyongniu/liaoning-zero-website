'use client';

import Image from 'next/image';

const teamMembers = [
    {
        name: "张峰",
        position: "技术总监",
        expertise: "虚拟仿真",
        image: "/images/team-1.jpg",
        achievements: "日本室兰工业大学博士后/辽宁省高级人才/苏州市崇本人才/宿迁市高层次人才/发表高水平论文（SCI）7篇/授权专利3项/主持国家项目1项/主要从事多物理场耦合仿真分析研究工作。"
    },
    {
        name: "杨蒙蒙",
        position: "技术专家",
        expertise: "数字孪生",
        image: "/images/team-2.jpg",
        achievements: "日本室兰工业大学博士/发表高水平论文（SCI）2篇/主持JST国际项目1项/主要从事机械加工、复杂件成型工艺等方面的数字孪生研发工作。"
    },
    {
        name: "王赛",
        position: "技术专家",
        expertise: "仿真计算",
        image: "/images/team-3.jpg",
        achievements: "东北大学博士/发表高水平论文（SCI）3篇/授权专利2项/主持国家项目2项/主要从事铸造、锻压、塑性加工和热处理等方面的数值模拟与工艺研发工作。"
    },
    {
        name: "席通",
        position: "技术专家",
        expertise: "仿真计算",
        image: "/images/team-4.jpg",
        achievements: "中科院金属研究所博士/辽宁省高级人才/发表高水平论文（SCI） 10篇/授权专利4项/主持国家项目2项/主要研究材料本构模型的开发与嵌入式有限元计算。"
    }
];

export default function TeamSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">我们的团队</h2>
                    <p className="text-gray-600">
                        专业的团队是我们最大的优势
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-blue-600 mb-4">{member.position}</p>
                                <p className="text-gray-600">{member.achievements}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
