import React, { useState } from "react";
import { Video, ExternalLink, Globe, Play, Image as ImageIcon, Heart, ArrowUpRight, Award } from "lucide-react";
import NewsCard from "./NewsCard";
import {NEWS_ARTICLES } from "../data";

export default function MediaComponent() {
  const [activeMediaTab, setActiveMediaTab] = useState<"news" | "videos">("news");
  const [selectedVideo, setSelectedVideo] = useState({
    title: "Digital Nepal Conclave 2025 - Special Plenary Session",
    id: "v25_1",
    url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv"
  });

  const alternativeVideos = [
    { title: "Governance & DPI (DNC 2025 Plenary)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv", label: "DNC 2025" },
    { title: "IT Decade Target Framework (DNC 2024 Day 1)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS", label: "DNC 2024" },
    { title: "Empowering Local Startups Pitch (DNC 2024 Session)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qCpoWJ79pUxkCP49tE423J", label: "DNC 2024" },
    { title: "Inaugural Speech PM Dahal (DNC 2024 Opening)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS", label: "DNC 2024" },
    { title: "Fostering Digitally Sakshyam Nepal Keynotes (DNC 2023 Live)", url: "https://www.youtube.com/embed/dv-CsOcIojQ", label: "DNC 2023" }
  ];

  return (
    <section id="media-page" className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-sm font-sans font-bold rounded-full uppercase tracking-wider mb-3">
            <Video className="w-4 h-4 text-dnc-orange" />
            Press Room & YouTube highlights
          </span> */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            News & Multimedia
          </h1>
          {/* <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Follow articles from major publishing lines, stream high-fidelity speeches, panel recordings, and download official press assets.
          </p> */}

          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setActiveMediaTab("news")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-bold border transition ${
                activeMediaTab === "news"
                  ? "bg-dnc-blue border-dnc-blue text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
              }`}
            >
              Latest Press Articles
            </button>
            <button
              onClick={() => setActiveMediaTab("videos")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-bold border transition ${
                activeMediaTab === "videos"
                  ? "bg-dnc-orange border-dnc-orange text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
              }`}
            >
              Session Videos & Highlights
            </button>
          </div>
        </div>

        {activeMediaTab === "news" ? (
          /* Press articles section */
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {NEWS_ARTICLES.map((article, idx) => (
                <NewsCard
                  key={idx}
                  url={article.url}
                  customTitle={article.title}
                  customImage={article.thumbnail}
                  onError={(error) => console.error(`Article ${idx + 1} error:`, error)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Speeches and playlist streams tab */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Embedded Iframe Player Box left */}
            <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 rounded-3xl p-0 overflow-hidden border border-slate-800 shadow-2xl relative">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xs bg-black">
                  <iframe
                    title={selectedVideo.title}
                    src={selectedVideo.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-2xs">
                <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                  Nepal&apos;s Digital Dialogues Catalogued
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  The videos include historical live streams hosted by ICT Foundation Nepal since the inception of regional conclaves, detailing digital security protocols, cloud sovereignty, global IT outsourcing margins, and financial inclusive structures.
                </p>
              </div> */}
            </div>

            {/* List Selection on right */}
            <div className="lg:col-span-4 bg-slate-100 text-white rounded-3xl p-6 border border-slate-0 shadow-xs flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-dnc-blue-light font-sans tracking-widest block">
                  SELECT SESSIONS FOR FOOTAGE
                </span>

                <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-2">
                  {alternativeVideos.map((vid, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo({ title: vid.title, url: vid.url, id: `vid_${idx}` })}
                      className={`p-3 rounded-xl border transition cursor-pointer flex gap-3 text-left items-center group ${
                        selectedVideo.title === vid.title ? "border-dnc-blue-light bg-slate-50 " : "border-slate-800 bg-slate-50/40 hover:bg-slate-300"
                      }`}
                    >
                      <Play className="w-4.5 h-4.5 shrink-0 text-dnc-blue-light" />
                      <div>
                        <p className="text-[11px] font-bold text-black leading-snug line-clamp-2">{vid.title}</p>
                        <span className="inline-block mt-1 px-1.5 py-0.5 text-dnc-blue text-[8px] font-sans rounded">
                          {vid.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 mt-4 text-center">
                <p className="text-[10px] text-slate-500 font-sans">
                  All rights reserved to ICT Foundation Nepal © 2026.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
