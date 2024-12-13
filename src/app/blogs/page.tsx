import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Use TikTok Wrapped',
      slug: 'how-to-use-tiktok-wrapped',
      summary: 'Learn how to get the most out of TikTok Wrapped with our detailed guide.',
      imageUrl: '/tiktokwrapped.jpg',
    },
    // 添加更多博客文章
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">TikTok Wrapped Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={400}
              height={300}
              layout="responsive"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <Link href={`/blogs/${blog.slug}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;