import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = () => {
  const [isRestarting, setIsRestarting] = useState(false);
  
  // 将标题文字分成多个部分
  const titleParts = [
    "TikTok",
    "Wrapped:",
    "Discover",
    "and",
    "Relive",
    "Your",
    "Top",
    "TikTok",
    "Moments"
  ];

  // 每个单词的随机颜色
  const colors = [
    'text-[#FF0050]', // TikTok红
    'text-[#00F2EA]', // TikTok青
    'text-[#7C19FF]', // 紫色
    'text-[#FF3B5C]', // 粉红
    'text-[#25F4EE]', // 青绿
  ];

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsRestarting(true);
      setTimeout(() => setIsRestarting(false), 100);
    }, 5000); // 每5秒重启动画

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.h1 
      className="text-4xl md:text-5xl font-bold text-center mb-8 flex flex-wrap justify-center gap-x-3 gap-y-2"
      variants={containerVariants}
      initial="hidden"
      animate={isRestarting ? "hidden" : "visible"}
    >
      {titleParts.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`
            ${colors[index % colors.length]}
            ${word.length > 5 ? 'text-5xl' : 'text-4xl'}
            hover:scale-110 transition-transform
            cursor-default
            ${index === 0 || index === 7 ? 'font-extrabold' : 'font-bold'}
          `}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        variants={wordVariants}
        className="w-full text-2xl md:text-3xl text-gray-600 mt-4"
      >
        Wrapped for TikTok
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedTitle;