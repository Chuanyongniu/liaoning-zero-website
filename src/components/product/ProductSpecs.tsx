'use client';

const defaultSpecs = [
  { name: "测量范围", value: "0-100mm" },
  { name: "精度", value: "±0.01mm" },
  { name: "分辨率", value: "0.001mm" },
  { name: "工作温度", value: "10-40℃" },
  { name: "电源", value: "可充电锂电池" },
  { name: "重量", value: "约500g" }
];

interface Spec {
  name: string;
  value: string;
}

interface ProductSpecsProps {
  specs?: Spec[];
}

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

export default function ProductSpecs({ specs = defaultSpecs }: ProductSpecsProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">产品规格</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec) => (
          <div
            key={spec.name}
            className="p-4 bg-gray-50 rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className="font-medium text-gray-900">{spec.name}</div>
            <div className="mt-1 text-gray-500">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
