import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  youtubeUrl: string;
  onError?: (error: string) => void;
}

interface VideoData {
  videoId: string;
  title: string;
  thumbnailUrl: string;
}

export default function VideoCard({ youtubeUrl, onError }: VideoCardProps) {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractVideoData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract video ID from various YouTube URL formats
        let videoId: string | null = null;

        // Match patterns: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID
        const patterns = [
          /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
          /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
        ];

        for (const pattern of patterns) {
          const match = youtubeUrl.match(pattern);
          if (match) {
            videoId = match[1];
            break;
          }
        }

        if (!videoId) {
          throw new Error("Invalid YouTube URL format");
        }

        // Use YouTube's public oEmbed API to get video information
        const oembed_url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

        const response = await fetch(oembed_url);

        if (!response.ok) {
          throw new Error("Video not found or inaccessible");
        }

        const data = await response.json();

        // Get high-quality thumbnail
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        setVideoData({
          videoId,
          title: data.title,
          thumbnailUrl,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load video data";
        setError(errorMessage);
        onError?.(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (youtubeUrl.trim()) {
      extractVideoData();
    }
  }, [youtubeUrl, onError]);

  if (loading) {
    return (
      <div className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 aspect-video flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-3 border-slate-200 border-t-dnc-blue rounded-full animate-spin"></div>
          <span className="text-xs text-slate-400 font-sans">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !videoData) {
    return (
      <div className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 aspect-video flex items-center justify-center p-4">
        <div className="text-center flex flex-col gap-2">
          <span className="text-xs text-slate-400 font-sans">
            {error || "Failed to load video"}
          </span>
        </div>
      </div>
    );
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoData.videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xs overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 block transition-all duration-300 hover:shadow-md"
    >
      {/* Thumbnail Container */}
      <div className="aspect-video relative overflow-hidden bg-slate-100">
        <img
          src={videoData.thumbnailUrl}
          alt={videoData.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            // Fallback to standard quality if maxresdefault fails
            const img = e.currentTarget;
            if (img.src.includes("maxresdefault")) {
              img.src = `https://img.youtube.com/vi/${videoData.videoId}/hqdefault.jpg`;
            }
          }}
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 p-3 rounded-full shadow-lg">
            <Play className="w-5 h-5 text-dnc-blue fill-dnc-blue" />
          </div>
        </div>

        {/* Video Duration Badge (if available) */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded font-sans">
          YOUTUBE
        </div>
      </div>

      {/* Title Section */}
      <div className="p-4 flex flex-col gap-2">
        <h4 className="font-display font-bold text-slate-900 group-hover:text-dnc-blue transition-colors text-sm leading-snug line-clamp-2">
          {videoData.title}
        </h4>
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100/50">
          <span className="text-xs font-bold text-dnc-blue font-sans">
            Watch on YouTube
          </span>
          <span className="text-dnc-blue group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
