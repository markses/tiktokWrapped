import Link from 'next/link';
import { Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
              <li>
                <a 
                  href="https://github.com/vantezzen/wrapped" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </li>
            </ul>
          </div>

          {/* Legal链接 */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://freshemojis.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  TikTok Emojis
                </a>
              </li>
                  <li>
                <a 
                  href="https://twitterwrapped.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Twitter Wrapped
                </a>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:merssmerso@gmail.com" 
                 className="text-gray-600 hover:text-primary transition-colors group flex items-center gap-2"
                 title="Contact Us">
                <Mail className="w-6 h-6" />
                <span className="group-hover:underline">Contact Us</span>
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
