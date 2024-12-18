"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

function IntroInformation() {
  const steps = [
    {
      title: "Request Your Data",
      description: "Go to TikTok Settings > Privacy > Request Data > Select 'JSON format'",
    },
    {
      title: "Wait for Processing",
      description: "TikTok will prepare your data within 24-48 hours",
    },
    {
      title: "Download Your File",
      description: "Once ready, download your data from TikTok",
    },
    {
      title: "Upload and Generate",
      description: "Upload your JSON file here to generate your personalized Wrapped",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-4">
          <CardTitle className="text-2xl md:text-3xl text-center gradient-text">
            How to Use
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[rgb(var(--primary))] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-[rgb(var(--primary))]">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy notice */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Privacy First</h4>
                <p className="text-gray-600 text-sm">
                  Your data stays private and secure. All processing happens locally in your browser - 
                  nothing is uploaded to any server. TikTok Wrapped is open-source, so you can verify 
                  this yourself.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IntroInformation;
