import React, { useState } from "react";
import { Search } from "lucide-react";
import { PUBLICATIONS_DATA, Publication } from "../data";

export default function PublicationsComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPubs = PUBLICATIONS_DATA.filter(pub =>
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.year.includes(searchQuery) ||
    pub.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="publications-page" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Publications & Reports
          </h1>
        </div>

        {/* Filter Input */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Reports by keyword or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue focus:bg-white"
            />
            <Search className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
          </div>
        </div>

        {/* Publication grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredPubs.map((pub: Publication) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-md border border-slate-100 shadow-2xs hover:shadow-md hover:border-dnc-blue/30 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-3/4 bg-slate-100 overflow-hidden">
                <img
                  src={pub.coverUrl}
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex flex-col grow">
                <h3 className="font-display font-bold text-sm text-slate-900 leading-snug line-clamp-2">
                  {pub.title}
                </h3>
                <span className="text-[12px] text-dnc-blue font-bold mt-auto pt-3 group-hover:underline">
                  View Report →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
