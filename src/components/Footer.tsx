import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌区域 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">
              TikTok Wrapped
            </h3>
            <p className="text-gray-600 max-w-md">
              Discover your TikTok journey with detailed insights and beautiful visualizations. 
              Your data stays private, your experience stays amazing.
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 社交链接 */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" 
                 className="text-gray-600 hover:text-primary transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/yourusername"
                 className="text-gray-600 hover:text-primary transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} TikTok Wrapped. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;