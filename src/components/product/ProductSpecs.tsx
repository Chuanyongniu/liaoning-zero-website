import { motion } from "framer-motion";

const specifications = {
    基本参数: {
        "测量范围": "0-500N",
        "分辨率": "0.1N",
        "显示方式": "7寸彩色触摸屏"
    },
    技术特点: {
        "便携性": "轻巧便携，适合现场测试",
        "操作简便": "触摸屏操作，界面友好",
        "数据处理": "自动计算、存储、导出",
        "电池续航": "8小时持续工作"
    },
    应用领域: [
        "金属材料硬度测试",
        "复合材料性能评估",
        "工业产品质量控制",
        "科研实验室研究"
    ]
};

export default function ProductSpecs() {
    return (
        <div className="space-y-8">
            {Object.entries(specifications).map(([category, specs], index) => (
                <motion.div 
                    key={category}
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:index*0.1}}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{category}</h2>
                    {Array.isArray(specs) ? (
                        <ul className="grid grid-cols-2 gap-4">
                            {specs.map((spec) => (
                                <li key={spec} className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-600">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <dl className="grid grid-cols-2 gap-4">
                            {Object.entries(specs).map(([key, value]) => (
                                <div key={key}>
                                    <dt className="text-gray-600">{key}</dt>
                                    <dd className="font-medium text-gray-900">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </motion.div>
            ))}
            <motion.div 
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.4}}
                className="pt-8"
            >
                <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    咨询详情
                </a>
            </motion.div>
        </div>
    );
}
