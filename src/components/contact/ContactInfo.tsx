'use client';

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: "地址",
    content: "辽宁省沈阳市和平区南京北街206号"
  },
  {
    icon: PhoneIcon,
    title: "电话",
    content: "024-12345678"
  },
  {
    icon: EnvelopeIcon,
    title: "邮箱",
    content: "contact@liaoning-zero.com"
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">联系方式</h2>
      <div className="space-y-6">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start space-x-4"
            >
              <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="mt-1 text-gray-600">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
