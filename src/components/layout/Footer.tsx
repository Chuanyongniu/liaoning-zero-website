export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">辽宁壹零</h3>
            <p className="text-gray-400">
              专注于工业智能化解决方案，为企业提供全方位的技术支持和服务。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>地址：辽宁省沈阳市浑南区</li>
              <li>电话：024-XXXXXXXX</li>
              <li>邮箱：contact@example.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/product" className="text-gray-400 hover:text-white transition-colors">
                  产品中心
                </a>
              </li>
              <li>
                <a href="/business" className="text-gray-400 hover:text-white transition-colors">
                  业务范围
                </a>
              </li>
              <li>
                <a href="/cases" className="text-gray-400 hover:text-white transition-colors">
                  成功案例
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 辽宁壹零. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
} 