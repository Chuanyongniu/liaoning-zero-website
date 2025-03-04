import { motion } from "framer-motion";

const team = [
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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{opacity:0,y:20}} 
                    whileInView={{opacity:1,y:0}} 
                    viewport={{once:true}} 
                    transition={{duration:0.6}} 
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">核心团队</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div 
                            key={member.name}
                            initial={{opacity:0,y:20}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}}
                            transition={{duration:0.6,delay:index*0.1}}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="aspect-w-1 aspect-h-1">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-primary font-medium mb-2">{member.position}</p>
                                <p className="text-gray-600 mb-4">{member.expertise}</p>
                                <p className="text-sm text-gray-500 whitespace-pre-line">{member.achievements}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
