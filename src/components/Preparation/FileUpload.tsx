"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Upload } from "lucide-react";

export default function FileUpload({ onFileSelect }: { onFileSelect: (file: File) => void }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center gradient-text">
            Select your TikTok data to get started
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center text-gray-600">
            <p className="mb-4">
              Wrapped for TikTok needs your TikTok data to generate your statistics.
            </p>
            <p className="text-sm">
              Your data will not be uploaded to any server, all statistics are generated locally in your browser.
              <br />
              Wrapped for TikTok is open-source if you want to verify this.
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[rgb(var(--primary))] transition-colors">
            <input
              type="file"
              accept=".json"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFileSelect(file);
              }}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center gap-4"
            >
              <Upload className="w-10 h-10 text-gray-400" />
              <span className="text-gray-600">
                Click to upload or drag and drop your file here
              </span>
            </label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Button
            variant="outline"
            className="w-full sm:w-auto min-w-[160px] border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
            onClick={() => {
              const input = document.getElementById('file-upload') as HTMLInputElement;
              input?.click();
            }}
          >
            I have my TikTok file
          </Button>
          
          <Button
            className="w-full sm:w-auto min-w-[160px] bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] hover:opacity-90 text-white"
            onClick={() => window.open('https://www.tiktok.com/setting/download-your-data', '_blank')}
          >
            Download TikTok data
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
