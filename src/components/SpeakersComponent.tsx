import React, { useState } from "react";
import { Search, MapPin, X, Award, Globe, Linkedin, Twitter, Shield, RefreshCw } from "lucide-react";
import { SPEAKERS_LIST, Speaker } from "../data";

export default function SpeakersComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Gather unique tags
  const allTags = ["All", "Keynotes", "Fintech", "Policy", "Governance", "Big Tech"];

  const filteredSpeakers = SPEAKERS_LIST.filter((spk) => {
    const matchesSearch = spk.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (spk.company && spk.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      spk.title.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTag === "All") return matchesSearch;
    if (activeTag === "Keynotes") return matchesSearch && spk.isKeynote;
    return matchesSearch && spk.tags?.includes(activeTag);
  });

  return (
    <section id="speakers-page" className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center mb-12">
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-dnc-blue text-sm font-sans font-bold rounded-lg uppercase tracking-wider mb-3 border border-blue-100">
            <Award className="w-4 h-4 text-dnc-orange" />
            Vanguard of Digital Innovation
          </span> */}
          <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Previous Speakers
          </h1>
          {/* <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            The conclave is graced by regional policy visionaries, Google South Asia directors, fin-tech pioneers, and central planners pushing technical protocols to implement paperless digital ecosystems.
          </p> */}
        </div>

        {/* Search and Filters bar */}
        <div className="bg-slate-50 border border-slate-200/65 rounded-3xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search speakers, titles, entities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue focus:border-dnc-blue shadow-2xs"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          </div>

          {/* Tag filters list */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold tracking-wide transition uppercase cursor-pointer ${activeTag === tag
                    ? "bg-dnc-blue text-white shadow-2xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Speakers Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredSpeakers.map((spk) => (
            <div
              key={spk.id}
              onClick={() => setSelectedSpeaker(spk)}
              className="bg-white rounded-3xl border border-slate-100 p-5 shadow-2xs hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Spectrum Accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Image layout container */}
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
                  <img
                    src={spk.avatarUrl}
                    alt={spk.name}
                    className="w-full h-full object-cover grayscale-xs group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* {spk.isKeynote && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-dnc-orange text-white text-[9px] font-sans font-extrabold rounded-md shadow-sm uppercase tracking-wider">
                      Keynote Speaker
                    </span>
                  )} */}

                  {/* Social media quick overlay container */}
                  {/* <div className="absolute bottom-3 right-3 flex gap-1.5 bg-white/95 backdrop-blur-xs px-2 py-1.5 rounded-xl shadow-xs opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    {spk.linkedinUrl && (
                      <a
                        href={spk.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-600 hover:text-dnc-blue transition-colors p-0.5"
                        title={`View ${spk.name} on LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {spk.twitterUrl && (
                      <a
                        href={spk.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-600 hover:text-dnc-blue transition-colors p-0.5"
                        title={`View ${spk.name} on Twitter / X`}
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div> */}
                </div>

                <div className="space-y-1 text-center">
                  <h3 className="font-display font-bold text-slate-900 group-hover:text-dnc-blue transition-colors text-sm sm:text-base leading-tight">
                    {spk.name}
                  </h3>
                  <p className="text-sm text-dnc-orange font-sans font-bold leading-tight">
                    {spk.title}
                  </p>
                  {spk.company && (
                    <p className="text-[11px] text-slate-500 font-sans tracking-wide">
                      {spk.company}
                    </p>
                  )}
                </div>
              </div>

              {/* <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-dnc-blue font-bold hover:underline">
                  Read Bio & Detail →
                </span>

                <div className="flex gap-1">
                  {spk.tags?.slice(0, 1).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-semibold rounded font-sans uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          ))}

          {/* Empty search results state */}
          {filteredSpeakers.length === 0 && (
            <div className="col-span-1 sm:col-span-2 md:col-span-4 py-16 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <RefreshCw className="w-8 h-8 text-slate-300 animate-spin mx-auto mb-3" />
              <p className="text-sm font-semibold">No speakers met your filters & match criteria.</p>
              <p className="text-sm text-slate-400 mt-1">Try resetting search keywords or selecting other tracks.</p>
            </div>
          )}
        </div>
        
        {/* DETAIL BIOGRAPHY MODAL TRIGGER */}
        {selectedSpeaker && (
          <div id="speaker-detail-modal" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4" onClick={() => setSelectedSpeaker(null)}>
            <div
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200 animate-fade-in relative transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition shadow-2xs z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">

                {/* Left block profile image */}
                <div className="md:col-span-5 bg-slate-50 aspect-square md:aspect-auto h-full min-h-[250px] relative">
                  <img
                    src={selectedSpeaker.avatarUrl}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* {selectedSpeaker.isKeynote && (
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-dnc-orange text-white text-[10px] font-sans font-extrabold rounded-md shadow-md uppercase tracking-wider">
                      Keynote Speaker
                    </span>
                  )} */}
                </div>

                {/* Right block profile details */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-dnc-blue font-sans tracking-widest block mb-1">Speaker Tech Panelist</span>
                    <h3 className="font-display font-extrabold text-xl text-slate-950 tracking-tight leading-tight mb-1">
                      {selectedSpeaker.name}
                    </h3>

                    <p className="text-sm font-sans text-dnc-orange font-bold leading-tight mb-2">
                      {selectedSpeaker.title}
                    </p>

                    {selectedSpeaker.company && (
                      <p className="text-sm text-slate-500 font-sans tracking-wide pb-4 border-b border-slate-100 mb-4">
                        {selectedSpeaker.company}
                      </p>
                    )}

                    <div className="max-h-48 overflow-y-auto pr-2 mb-6">
                      <p className="text-sm text-slate-600 leading-relaxed font-sans text-justify">
                        {selectedSpeaker.bio}
                      </p>
                    </div>

                    {/* Social links block inside Modal */}
                    {/* <div className="mb-6 flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] text-slate-400 font-sans uppercase tracking-wider mr-1">Social Links:</span>
                      {selectedSpeaker.linkedinUrl && (
                        <a
                          href={selectedSpeaker.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 hover:border-dnc-blue hover:text-dnc-blue rounded-xl text-sm font-semibold text-slate-700 transition duration-150"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-dnc-blue" />
                          LinkedIn
                        </a>
                      )}
                      {selectedSpeaker.twitterUrl && (
                        <a
                          href={selectedSpeaker.twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 hover:border-dnc-blue hover:text-dnc-blue rounded-xl text-sm font-semibold text-slate-700 transition duration-150"
                        >
                          <Twitter className="w-3.5 h-3.5 text-sky-500" />
                          Twitter / X
                        </a>
                      )}
                    </div> */}
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
