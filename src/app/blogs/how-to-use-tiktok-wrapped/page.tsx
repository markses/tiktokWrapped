import React from 'react';

const HowToUseTikTokWrapped = () => {
  return (
    <div className="container mx-auto py-8">
      <h1>How to Use TikTok Wrapped</h1>
      <p>
        TikTok Wrapped is an annual recap feature that provides insights into your TikTok activity, including the number of videos watched and the total time spent on the app. This feature is not available within the TikTok app itself but can be accessed through third-party websites like Wrapped for TikTok.
      </p>

      <h2>Downloading Your TikTok Data</h2>
      <p>To use Wrapped for TikTok, you first need to download your TikTok data. Follow these steps:</p>
      <ol>
        <li>Open the TikTok app and go to your profile.</li>
        <li>Tap on the three lines in the top right corner to access settings.</li>
        <li>Select "Privacy and Settings".</li>
        <li>Scroll down and tap on "Download your data".</li>
        <li>Choose the "JSON – Machine-readable file" format and request the download. This process may take up to three days.</li>
      </ol>

      <h2>Using Wrapped for TikTok</h2>
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
  );
};

export default HowToUseTikTokWrapped;