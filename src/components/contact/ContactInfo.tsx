import { motion } from "framer-motion";

const contactInfo = {
    address: "辽宁省沈阳市浑南区新隆街2甲号第5幢1202号12249",
    mobile: "17064555559",
    email: "lnylszjs@163.com",
    workingHours: "周一至周五 9:00-18:00"
};

export default function ContactInfo() {
    return (
        <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">公司地址</h3>
                        <p className="mt-1 text-gray-600">{contactInfo.address}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">联系电话</h3>
                        <p className="mt-1 text-gray-600">{contactInfo.mobile}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">电子邮箱</h3>
                        <p className="mt-1 text-gray-600">{contactInfo.email}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">工作时间</h3>
                        <p className="mt-1 text-gray-600">{contactInfo.workingHours}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
