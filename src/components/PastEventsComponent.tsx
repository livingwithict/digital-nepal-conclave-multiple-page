import React, { useState, useEffect, useCallback } from "react";
import { Award, Download, Calendar, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { EVENTS_DATA, EventYear } from "../eventData";
import ReactMarkdown from 'react-markdown';

interface PastEventsProps {
  initialYear?: EventYear;
}

export default function PastEventsComponent({ initialYear = "2025" }: PastEventsProps) {
  const [activeYear, setActiveYear] = useState<EventYear>(initialYear);
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const event = EVENTS_DATA[activeYear];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + event.galleryImages.length) % event.galleryImages.length : null), [event.galleryImages.length]);
  const showNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % event.galleryImages.length : null), [event.galleryImages.length]);

  useEffect(() => {
    const header = document.getElementById("app-header");
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      if (header) header.style.display = "none";
    } else {
      document.body.style.overflow = "";
      if (header) header.style.display = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (header) header.style.display = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Helper to extract clean ID from links
  const getEmbedUrl = (url: string) => {
    if (url.includes("playlist?list=")) {
      const listId = url.split("playlist?list=")[1];
      return `https://www.youtube.com/embed/videoseries?list=${listId}`;
    }
    if (url.includes("live/")) {
      const liveId = url.split("live/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${liveId}`;
    }
    return "";
  };

  const handleVideoSelect = (vid: { title: string; url: string }) => {
    const embedUrl = getEmbedUrl(vid.url);
    setSelectedVideo({ title: vid.title, url: embedUrl });
  };

  useEffect(() => {
    if (event.videoPlaylists.length > 0 && !selectedVideo) {
      handleVideoSelect(event.videoPlaylists[0]);
    }
  }, [event.videoPlaylists, selectedVideo]);

    return (
    <section className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Title and Year Selector */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-dnc-blue/5 border border-dnc-blue/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-dnc-orange" />
            <span className="text-sm font-semibold text-dnc-blue">Historic Archives & Milestones</span>
          </div> */}

          <h1 className="text-4xl md:text-5xl font-bold text-slate-950 mb-3 tracking-tight">
            Our Preceding Editions Overview
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            See summaries, expert keynote guidelines, photolinks, and playlists of Nepal's digital revolution over the years
          </p>

          {/* Year Toggle Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {(["2025", "2024", "2023", "2022"] as const).map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setSelectedVideo(null);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeYear === year
                    ? "bg-dnc-blue text-white shadow-lg shadow-dnc-blue/20 scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-dnc-blue/30 hover:text-dnc-blue"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="space-y-12">
          {/* Event Header Card with Logo and Info */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid md:grid-cols-4 gap-8 items-center mb-8 pb-4 border-b border-dnc-blue/10">
              {/* Logo */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={event.logo}
                  alt={`${event.year} Logo`}
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </div>

              {/* Title and Tagline */}
              <div className="md:col-span-3">
                <div className="text-base font-bold text-dnc-orange uppercase tracking-widest mb-2">
                  Digital Nepal Conclave {event.year}
                </div>
                <h2 className="text-3xl font-bold text-slate-950 mb-2">{event.theme}</h2>
                <p className="text-lg text-slate-600">{event.tagline}</p>
              </div>
            </div>

            {/* Overview Text */}
            <div className="space-y-4 mb-8">
              {event.overviewParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed text-justify">
                  <ReactMarkdown>
                    {paragraph}
                  </ReactMarkdown>
                </p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={event.agendaDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-dnc-blue text-white font-semibold rounded-xl hover:bg-dnc-blue/90 transition-colors duration-300 shadow-lg shadow-dnc-blue/20"
              >
                <Calendar className="w-5 h-5" />
                See Agenda
              </a>

              <a
                href={event.reportDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-dnc-orange text-white font-semibold rounded-xl hover:bg-dnc-orange/90 transition-colors duration-300 shadow-lg shadow-dnc-orange/20"
              >
                <Download className="w-5 h-5" />
                Download Report
              </a>
            </div>
          </div>

          {/* Photo Gallery - Bento Grid Style */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <span className="w-1 h-8 bg-dnc-orange rounded-full"></span>
              Photo Gallery
            </h3>
            
            {/* Desktop: Bento Grid | Mobile: Simple Grid */}
            <div className="hidden md:grid grid-cols-4 gap-1 auto-rows-[220px]">
              {event.galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative rounded-xs overflow-hidden border border-dnc-blue/10 shadow-sm hover:shadow-lg hover:border-dnc-blue/30 transition-all duration-300 group cursor-pointer ${
                    // Bento grid pattern: alternate larger items
                    index === 0 ? "col-span-2 row-span-2" :
                    index === 3 ? "col-span-2 row-span-2" :
                    index === 6 ? "col-span-2 row-span-2" :
                    "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Simple 2-column grid */}
            <div className="md:hidden grid grid-cols-2 gap-1 auto-rows-[150px] sm:auto-rows-[180px]">
              {event.galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setLightboxIndex(index)}
                  className="relative rounded-xs overflow-hidden border border-dnc-blue/10 shadow-sm hover:shadow-lg hover:border-dnc-blue/30 transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                onClick={closeLightbox}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  className="absolute left-2 sm:left-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 sm:p-3 transition-colors z-10"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>

                <div
                  className="flex flex-col items-center w-full px-12 sm:px-20 max-w-5xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={event.galleryImages[lightboxIndex].src}
                    alt={event.galleryImages[lightboxIndex].alt || `Gallery image ${lightboxIndex + 1}`}
                    className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
                  />
                  {event.galleryImages[lightboxIndex].alt && (
                    <p className="mt-3 text-white text-sm sm:text-base font-semibold text-center px-4 drop-shadow">
                      {event.galleryImages[lightboxIndex].alt}
                    </p>
                  )}
                  <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {event.galleryImages.length}</p>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  className="absolute right-2 sm:right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 sm:p-3 transition-colors z-10"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>
            )}
          </div>

          {/* Video Playlists Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-950 flex items-center gap-2">
              <span className="w-1 h-8 bg-dnc-orange rounded-full"></span>
              Session Videos
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Video Player */}
              <div className={`transition-all duration-300 ${selectedVideo ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
                {selectedVideo && selectedVideo.url ? (
                  <div className="rounded-xl overflow-hidden border-1 border-dnc-blue/20 shadow-lg bg-black">
                    <iframe
                      title={selectedVideo.title}
                      src={selectedVideo.url}
                      className="w-full aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-dashed border-dnc-blue/20 aspect-video flex flex-col items-center justify-center bg-dnc-blue/5 text-slate-500">
                    <Play className="w-12 h-12 mb-2 opacity-30" />
                    <p className="font-semibold">Select a video to watch</p>
                  </div>
                )}
              </div>

              {/* Video List */}
              <div className="space-y-3 overflow-y-auto max-h-[calc(9/16*100vw)] md:max-h-[350px]">
                {event.videoPlaylists.map((video, idx) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                      selectedVideo?.title === video.title
                        ? "bg-dnc-blue/5 border-dnc-blue shadow-md"
                        : "bg-white border-slate-200 hover:border-dnc-blue/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                          selectedVideo?.title === video.title
                            ? "bg-dnc-blue text-white"
                            : "bg-slate-100 text-slate-600 group-hover:bg-dnc-orange/20 group-hover:text-dnc-orange"
                        }`}
                      >
                        <Play className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-950 group-hover:text-dnc-blue transition-colors">
                          {video.title}
                        </p>
                        {/* {video.description && (
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {video.description}
                          </p>
                        )} */}
                      </div>
                      <div className="text-xl text-dnc-orange group-hover:scale-110 transition-transform">→</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}