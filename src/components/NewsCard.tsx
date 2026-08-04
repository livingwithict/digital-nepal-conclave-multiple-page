import React, { useState, useEffect } from "react";
import { ExternalLink, Globe } from "lucide-react";

interface NewsCardProps {
  url: string;
  customTitle?: string;
  customImage?: string;
  onError?: (error: string) => void;
}

interface NewsData {
  title: string;
  description: string;
  imageUrl: string;
  domain: string;
}

export default function NewsCard({ 
  url, 
  customTitle,
  customImage,
  onError 
}: NewsCardProps) {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractNewsData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Validate URL
        let validUrl: URL;
        try {
          validUrl = new URL(url);
        } catch {
          throw new Error("Invalid URL format");
        }

        const domain = validUrl.hostname.replace("www.", "");
        let title = customTitle || "Article";
        let description = "Click to read the full article";
        let imageUrl = customImage || "";

        // If custom data provided, use it
        if (customTitle && customImage) {
          setNewsData({
            title: customTitle,
            description: description,
            imageUrl: customImage,
            domain: domain,
          });
          setLoading(false);
          return;
        }

        // No custom title/image supplied — fall back to microlink at runtime.
        // Prefer adding { url, title, thumbnail } to NEWS_ARTICLES in data.ts
        // and running `node scripts/fetch-media-metadata.mjs` instead, since
        // that scrapes once at author time and never hits microlink's daily limit.
        try {
          const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
          if (response.ok) {
            const data = await response.json();
            title = data.data?.title || title;
            description = data.data?.description || description;
            imageUrl = data.data?.image?.url || data.data?.logo?.url || "";
          }
        } catch {
          // ignore — fallback image generated below
        }

        // Generate fallback image if we still don't have one
        if (!imageUrl) {
          imageUrl = generateFallbackImage(domain, title);
        }

        setNewsData({
          title: title,
          description: description,
          imageUrl: imageUrl,
          domain: domain,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load article data";
        setError(errorMessage);
        onError?.(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (url.trim()) {
      extractNewsData();
    }
  }, [url, customTitle, customImage, onError]);

  const generateFallbackImage = (domain: string, title: string): string => {
    // Create a colorful gradient fallback image
    const colors = [
      "gradient-to-br from-blue-500 to-purple-600",
      "gradient-to-br from-orange-500 to-red-600",
      "gradient-to-br from-green-500 to-teal-600",
      "gradient-to-br from-pink-500 to-rose-600",
      "gradient-to-br from-indigo-500 to-blue-600",
      "gradient-to-br from-cyan-500 to-blue-600",
    ];

    const colorIndex = domain.charCodeAt(0) % colors.length;
    const color = colors[colorIndex];
    const initials = title.substring(0, 2).toUpperCase();

    // Use a simple SVG as fallback
    const svg = `
      <svg width="400" height="225" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#${domain.charCodeAt(0) % 256}${domain.charCodeAt(1) % 256}${domain.charCodeAt(2) % 256};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#${domain.charCodeAt(3) % 256}${domain.charCodeAt(4) % 256}${domain.charCodeAt(5) % 256};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#grad)"/>
        <text x="50%" y="50%" font-size="72" font-weight="bold" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif">${initials}</text>
      </svg>
    `;

    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  if (loading) {
    return (
      <div className="group relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 flex flex-col justify-between h-full">
        <div className="h-44 bg-slate-100 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-3 border-slate-200 border-t-dnc-blue rounded-full animate-spin"></div>
            <span className="text-xs text-slate-400 font-sans">Loading...</span>
          </div>
        </div>
        <div className="p-6 space-y-2 flex-grow">
          <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-3 bg-slate-200 rounded animate-pulse w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="group relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xs bg-slate-50">
        <div className="h-44 bg-slate-100 flex items-center justify-center p-4">
          <div className="text-center flex flex-col gap-2">
            <span className="text-xs text-slate-400 font-sans">
              {error || "Failed to load article"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white  border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full"
    >
      {/* Thumbnail Container */}
      <div className="flex-shrink-0">
        <div className="h-44 bg-slate-100 relative overflow-hidden shrink-0">
          <img
            src={newsData.imageUrl}
            alt={newsData.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback - hide image and show placeholder
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.style.backgroundColor = "#f1f5f9";
                const placeholder = document.createElement("div");
                placeholder.className = "w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400";
                placeholder.innerHTML = `<span class="text-4xl font-bold text-white">${newsData.title.substring(0, 2).toUpperCase()}</span>`;
                parent.appendChild(placeholder);
              }
            }}
          />
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-dnc-black text-white text-[9px] font-sans font-bold rounded-md uppercase tracking-wider line-clamp-1">
            {newsData.domain.substring(0, 20)}
          </span>
        </div>

        <div className="p-6 space-y-2">
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-sans font-bold">
            {/* <Globe className="w-3 h-3 flex-shrink-0" /> */}
            {/* <span className="line-clamp-1">{newsData.domain}</span> */}
          </div>

          <h3 className="font-display font-bold text-sm sm:text-sm text-slate-900 tracking-tight leading-snug group-hover:text-dnc-blue transition-colors line-clamp-2">
            {newsData.title}
          </h3>

          {/* <p className="text-sm text-slate-500 leading-relaxed font-sans text-justify pt-1 line-clamp-2">
            {newsData.description}
          </p> */}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <div className="inline-flex items-center gap-1 text-sm font-bold text-dnc-blue group-hover:text-dnc-orange transition-colors">
          Read full article
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}
