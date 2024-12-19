import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book, Clock, ChevronRight } from 'lucide-react';

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Use TikTok Wrapped',
      slug: 'how-to-use-tiktok-wrapped',
      summary: 'Learn how to get the most out of TikTok Wrapped with our detailed guide.',
      imageUrl: '/tiktokwrapped.jpg',
      readTime: '5 min read',
    },
    // 添加更多博客文章
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE1E1] to-[#E1F4F4]">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Book className="w-8 h-8 text-[#FF6B81]" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">TikTok Wrapped Blogs</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{blog.readTime}</span>
                  </div>
                  <Link 
                    href={`/blogs/${blog.slug}`} 
                    className="flex items-center text-[#FF6B81] hover:text-[#ff8b9d] transition-colors duration-200"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;