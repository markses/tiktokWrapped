"use client";
import Wrapped from "@/lib/Wrapped";
import React from "react";
import dynamic from "next/dynamic";
import FileUpload from "@/components/Preparation/FileUpload";
import WrappedCreator from "@/lib/WrappedCreator";
import WrappedContainer from "@/components/Wrapped/WrappedContainer";
import FatHeading from "@/components/Wrapped/FatHeading";
import { ArrowRight, PlugZap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotifyFramePlayer from "@/lib/Spotify/FramePlayer";
import SpotifyPlayer from "@/components/Wrapped/SpotifyPlayer";
import InfoText from "@/components/Wrapped/InfoText";
import MutedText from "@/components/Wrapped/MutedText";
import Faq from "@/components/Preparation/Faq";
import { Clock, MessageCircle, Heart, Share, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { trackEvent } from "@/lib/analytics";
import HideForTime from "@/components/Wrapped/HideForTime";
import SpotifyInfoText from "@/components/Wrapped/SpotifyInfoText";
import AnimatedTitle from '@/components/AnimatedTitle';

const WrappedPlayerComponent = dynamic(
  () => import("@/components/Wrapped/WrappedPlayerComponent"),
  {
    ssr: false,
  }
);

function TikTokWrappedAppPage() {
  const [page, setPageRaw] = React.useState("intro");
  const setPage = (page: string) => {
    setPageRaw(page);
    window.scrollTo(0, 0);
    trackEvent("page_" + page);
  };
  const [wrapped, setWrapped] = React.useState<Wrapped | null>(null);
  const [spotify, setSpotify] = React.useState<SpotifyFramePlayer | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[rgb(var(--muted))]">
      <SpotifyPlayer />

      {page === "intro" && (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <AnimatedTitle />

          <div className="flex flex-col items-center space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] hover:opacity-90 
                         text-white font-medium text-lg px-8 py-3 min-w-[200px]
                         group relative overflow-hidden"
                onClick={() => setPage("upload")}
              >
                Start Now
                <ArrowRight className="ml-2" size={16} />
              </Button>
              
              <Button 
                variant="outline"
                className="font-medium text-lg px-8 py-3 min-w-[200px]
                         group relative overflow-hidden border-2"
                onClick={async () => {
                  trackEvent("demo");
                  setPage("loading");

                  const creator = new WrappedCreator();
                  const wrapped = creator.forDemoMode();
                  setWrapped(wrapped);

                  const spotify = new SpotifyFramePlayer();
                  await spotify.loadLibrary();
                  setSpotify(spotify);

                  trackEvent("demo_ready");
                  setPage("demo");
                }}
              >
                Show Demo
                <PlugZap className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="overflow-hidden">
                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[#FF6B81]" />
                    <p className="text-2xl font-bold">Watch Sessions</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Videos</span>
                      <span className="font-semibold">81,737</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Watch Time</span>
                      <span className="font-semibold">29 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sessions</span>
                      <span className="font-semibold">1,823</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Session</span>
                      <span className="font-semibold">120 min</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-[#70E1E1]" />
                    <p className="text-2xl font-bold">Comments</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Comments</span>
                      <span className="font-semibold">712</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Length</span>
                      <span className="font-semibold">29 chars</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Emoji</span>
                      <span className="font-semibold">😂 (521)</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-[#FF6B81]" />
                    <p className="text-2xl font-bold">Likes</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Likes</span>
                      <span className="font-semibold">8,237</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Most Active Day</span>
                      <span className="font-semibold">92 likes</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Share className="w-6 h-6 text-[#70E1E1]" />
                    <p className="text-2xl font-bold">Shares</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Shares</span>
                      <span className="font-semibold">293</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Most Active Day</span>
                      <span className="font-semibold">12 shares</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Radio className="w-6 h-6 text-[#FF6B81]" />
                    <p className="text-2xl font-bold">Live</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lives Viewed</span>
                      <span className="font-semibold">823</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Live Comments</span>
                      <span className="font-semibold">121</span>
                    </div>
                  </div>
                </Card>
              </Carousel>
            </div>
          </div>

          <section className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6 gradient-text">How to Use TikTok Wrapped</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="grid gap-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Request Your Data</h3>
                    <p className="text-gray-600">Open TikTok Settings → Privacy → Request Data Download</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Select Format</h3>
                    <p className="text-gray-600">Choose <strong className="text-[rgb(var(--primary))]">'JSON - Machine-readable file'</strong> format</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Wait for Email</h3>
                    <p className="text-gray-600">TikTok will send you an email when your data is ready (usually within 24 hours)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Upload and Enjoy</h3>
                    <p className="text-gray-600">Upload your data file here and discover your personalized TikTok Wrapped!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              Explore your most memorable TikTok moments with TikTok Wrapped. Dive into your top videos, favorite trends, and relive the highlights. Join the journey of your TikTok memories today with Wrapped for TikTok!
            </p>
  
   <div className="text-center mt-8">
              <Button 
                className="bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] hover:opacity-90 
                         text-white font-medium text-lg px-8 py-3 min-w-[200px]
                         group relative overflow-hidden"
                onClick={() => setPage("upload")}
              >
                Start Now
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>

</section>




      
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Faq />
          </section>

        </main>
      )}

      {page === "upload" && (
        <FileUpload
          onFileSelect={async (file) => {
            setPage("loading");
            trackEvent("file_selected");

            if (file.name.endsWith(".txt")) {
              setPage("text");
              trackEvent("text_error");
              return;
            }

            if (!file.name.endsWith(".json") && !file.name.endsWith(".zip")) {
              setPage("unknown_file");
              trackEvent("unknown_file_error");
              trackEvent("unknown_file_error_" + file.name.split(".").pop());
              return;
            }

            const creator = new WrappedCreator();
            let wrapped: Wrapped;
            try {
              wrapped = await creator.fromFile(file);
              setWrapped(wrapped);

              trackEvent("file_loaded");
            } catch (e) {
              trackEvent("load_error");
              console.error(e);
              setPage(creator.isTextExport ? "text" : "error");
              return;
            }

            try {
              console.log("stats", wrapped?.getStatistics());
            } catch (e) {
              console.error(e);
            }

            try {
              wrapped?.getPersona();
            } catch (e) {
              console.error(e);
            }

            const spotify = new SpotifyFramePlayer();
            await spotify.loadLibrary();
            setSpotify(spotify);
            trackEvent("spotify_loaded");

            if (wrapped.possiblyEmptyExport) {
              trackEvent("possibly_empty");
              setPage("possibly_empty");
            } else if (spotify.canPlaySongs) {
              trackEvent("spotify_ready");
              setPage("ready");
            } else {
              trackEvent("spotify_error");
              setPage("spotify");
            }
          }}
        />
      )}

      {page === "error" && (
        <WrappedContainer>
          <FatHeading>Something doesn't look right</FatHeading>
          <MutedText>
            We couldn't read your TikTok data export. Please make sure you
            selected the correct file format and try again.
          </MutedText>
          <Button
            onClick={() => {
              setPage("upload");
              trackEvent("try_again");
            }}
          >
            Try again
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "possibly_empty" && (
        <WrappedContainer>
          <FatHeading>Missing data in export</FatHeading>
          <MutedText className="mx-auto max-w-xl">
            The TikTok data export you uploaded doesn't contain any data about
            videos watched. This might be because of the country you are using
            TikTok in or your privacy settings in the app. While we can still
            show you some statistics, data about your watch history will be
            blank.
            <br />
            We're working on finding a workaround for this issue and will
            release an update as soon as possible.
          </MutedText>
          <Button
            onClick={() => {
              setPage("ready");
              trackEvent("possibly_empty_continue");
            }}
          >
            Continue anyway
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "text" && (
        <WrappedContainer>
          <FatHeading>Text data exports are not supported yet</FatHeading>
          <MutedText className="max-w-lg mx-auto">
            It looks like you selected "TXT - Easy-to-read text file" as your
            file format when requesting your TikTok data export. Unfortunately,
            Wrapped for TikTok does not support this format yet as it cannot
            analyze the data inside.
            <br />
            <br />
            Please follow the instructions on the start page to request your
            data export again and be sure to select "
            <strong>JSON - Machine-readable</strong>" as the file format.
            <br />
            If you modified the file, make sure your file has the correct file
            extension.
          </MutedText>
          <Button
            onClick={() => {
              setPage("intro");
              trackEvent("text_error_go_back");
            }}
          >
            Go back
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "unknown_file" && (
        <WrappedContainer>
          <FatHeading>Unknown file format</FatHeading>
          <MutedText className="max-w-lg mx-auto">
            It looks like you selected an unknown file format. Please make sure
            you select a ".json" or ".zip" file. Make sure you selected "JSON -
            Machine-readable" as the file format when requesting your TikTok
            data export.
            <br />
            If you modified the file, make sure your file has the correct file
            extension.
          </MutedText>
          <Button
            onClick={() => {
              setPage("intro");
              trackEvent("text_error_go_back");
            }}
          >
            Go back
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "demo" && (
        <WrappedContainer>
          <FatHeading>View Demo Wrapped</FatHeading>
          <MutedText className="max-w-xl mx-auto">
            You can view a demo of Wrapped for TikTok with sample data if you
            want to.
            <br />
            <strong>
              This is NOT your Wrapped, but a demo of what it could look like.
              <br />
              It does not use your TikTok data export.
            </strong>
            <br />
            <br />
            The data is randomly generated and does not represent any real
            TikTok user - if you want to see your own Wrapped, you can reload
            the page at any time and upload your own data export.
          </MutedText>
          <Button
            onClick={() => {
              setPage("play");
              trackEvent("play_demo_click");
            }}
          >
            Play demo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "loading" && (
        <WrappedContainer>
          <Loader2 size={32} className="animate-spin" />
          <InfoText className="text-base">
            We're preparing your Wrapped...
          </InfoText>
          <HideForTime time={8000}>
            <MutedText className="text-sm">
              Uh oh, this is taking longer than expected...
            </MutedText>
          </HideForTime>
          <HideForTime time={15000}>
            <MutedText className="text-sm text-center">
              This should've been done by now...
              <br />
              If it doesn't start soon try reloading
              <br />
              the page and uploading your TikTok data export again.
            </MutedText>
          </HideForTime>
        </WrappedContainer>
      )}

      {page === "spotify" && (
        <SpotifyInfoText
          onContinue={() => {
            setPage("ready");
            trackEvent("continue_without_spotify");
          }}
        />
      )}

      {page === "ready" && (
        <WrappedContainer>
          <FatHeading>Your Wrapped is ready!</FatHeading>
          <InfoText>
            We've crunched the numbers and found some...interesting insights.
            <br />
            Are you ready to see them?
          </InfoText>

          <Button
            onClick={() => {
              setPage("play");
              trackEvent("play");
            }}
          >
            Show me!
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "play" && (
        <WrappedPlayerComponent
          statistics={wrapped!.getStatistics()}
          persona={wrapped!.getPersona()}
          spotify={spotify}
          isDemo={wrapped!.demoMode}
        />
      )}

      {page === "play" && wrapped?.demoMode && (
        <div className="fixed bottom-12 left-12 right-12 z-0 opacity-60 text-zinc-500 break-words">
          <h2 className="text-2xl md:text-4xl font-bold">Demo Mode</h2>
          <p className="text-sm">
            This is a demo of Wrapped for TikTok. It does not use your real
            TikTok data.
            <br />
            To see your own Wrapped, reload the page and upload your TikTok
            data.
          </p>
        </div>
      )}
    </div>
  );
}

export default TikTokWrappedAppPage;
