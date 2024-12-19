"use client";

import React from 'react';
import Link from 'next/link';
import { Book, Clock, ChevronLeft, Share2 } from 'lucide-react';

const HowToUseTikTokWrapped = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ 
        title: 'How to Use TikTok Wrapped',
        url: window.location.href 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE1E1] to-[#E1F4F4]">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          {/* 文章内容卡片 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-[#FF6B81]" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">How to Use TikTok Wrapped</h1>
            </div>

            {/* 文章元信息 */}
            <div className="flex items-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
              <button 
                className="flex items-center hover:text-[#FF6B81] transition-colors"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* 文章主体 */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                TikTok Wrapped is an annual recap feature that provides insights into your TikTok activity, including the number of videos watched and the total time spent on the app. This feature is not available within the TikTok app itself but can be accessed through third-party websites like Wrapped for TikTok.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#FF6B81] rounded-full"></div>
                Downloading Your TikTok Data
              </h2>
              <p className="text-gray-600 mb-4">To use Wrapped for TikTok, you first need to download your TikTok data. Follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Open the TikTok app and go to your profile.</li>
                <li>Tap on the three lines in the top right corner to access settings.</li>
                <li>Select "Privacy and Settings".</li>
                <li>Scroll down and tap on "Download your data".</li>
                <li>Choose the "JSON – Machine-readable file" format and request the download. This process may take up to three days.</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#FF6B81] rounded-full"></div>
                Using Wrapped for TikTok
              </h2>
              <p>Once your data file is ready, follow these steps to use Wrapped for TikTok:</p>
              <ol>
                <li>Visit the Wrapped for TikTok website.</li>
                <li>Click on the "Upload Data" button.</li>
                <li>Select your downloaded TikTok data file and click "Open".</li>
                <li>The website will process your data and generate a report summarizing your TikTok activity for the year.</li>
              </ol>

              <h2>What Does the Report Include?</h2>
              <p>The report will display various statistics such as:</p>
              <ul>
                <li>Most-watched videos</li>
                <li>Most-followed creators</li>
                <li>Most-used sounds</li>
                <li>Number of times you opened the app</li>
                <li>Total time spent watching videos</li>
                <li>Longest watching session</li>
                <li>Days and times of highest usage</li>
                <li>Most used hashtags and challenges participated in</li>
              </ul>

              <h2>Data Privacy</h2>
              <p>
                Wrapped for TikTok is a third-party website, and it claims that user data is only processed in the browser and not uploaded to any server. Users are encouraged to review the source code for security verification.
              </p>

              <h2>Conclusion</h2>
              <p>
                Using Wrapped for TikTok allows users to better understand their engagement on TikTok, helping them to better comprehend their activities on the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseTikTokWrapped;