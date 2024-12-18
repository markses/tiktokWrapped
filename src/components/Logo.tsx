"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Logo = () => {
  const router = useRouter();

  return (
    <motion.div
      className="cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push('/')}
    >
      <p className="text-2xl md:text-3xl font-bold">
        <span className="bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--accent))] 
                     text-transparent bg-clip-text 
                     animate-gradient-x">
          TikTok
        </span>{" "}
        <span className="relative inline-block">
          Wrapped
          <motion.span
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[rgb(var(--primary))]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </p>
    </motion.div>
  );
};

export default Logo; 