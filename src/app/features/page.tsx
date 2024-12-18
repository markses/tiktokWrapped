"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Clock, Share2, Lock, BarChart2, Smartphone } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: BarChart2,
      title: "Comprehensive Analytics",
      description: "Deep insights into your TikTok activity, viewing habits, and engagement patterns"
    },
    {
      icon: Clock,
      title: "Year in Review",
      description: "See your most watched videos, favorite creators, and trending topics of the year"
    },
    {
      icon: Sparkles,
      title: "Beautiful Visuals",
      description: "Stunning charts and animations to showcase your TikTok journey"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "All data processing happens locally in your browser - nothing is uploaded"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your wrapped insights with friends on social media"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Optimized experience for both desktop and mobile devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[rgb(var(--muted))] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Features
            </CardTitle>
            <p className="text-gray-600">
              Discover everything TikTok Wrapped has to offer
            </p>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <feature.icon className="w-8 h-8 text-[rgb(var(--primary))] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 