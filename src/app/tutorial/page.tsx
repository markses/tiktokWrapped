"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Settings, Download, FileJson, Upload, PieChart, Share } from "lucide-react";

export default function TutorialPage() {
  const steps = [
    {
      icon: Settings,
      title: "Access TikTok Settings",
      description: "Go to TikTok app settings and navigate to 'Privacy'",
      tip: "You can find this in your profile settings"
    },
    {
      icon: Download,
      title: "Request Your Data",
      description: "Select 'Request Data' and choose 'JSON format'",
      tip: "Processing may take 24-48 hours"
    },
    {
      icon: FileJson,
      title: "Download JSON File",
      description: "Once ready, download your data package from TikTok",
      tip: "Make sure to select the JSON format option"
    },
    {
      icon: Upload,
      title: "Upload to Wrapped",
      description: "Upload your JSON file to TikTok Wrapped",
      tip: "Your data stays private and local"
    },
    {
      icon: PieChart,
      title: "Generate Statistics",
      description: "Watch as your personalized statistics are generated",
      tip: "This happens instantly in your browser"
    },
    {
      icon: Share,
      title: "Share Results",
      description: "Share your wrapped insights with friends",
      tip: "You can save images or share directly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[rgb(var(--muted))] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How to Use TikTok Wrapped
            </CardTitle>
            <p className="text-gray-600">
              Follow these simple steps to get your TikTok year in review
            </p>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[rgb(var(--primary))] text-white flex items-center justify-center">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-[rgb(var(--primary))]">
                      💡 Tip: {step.tip}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 