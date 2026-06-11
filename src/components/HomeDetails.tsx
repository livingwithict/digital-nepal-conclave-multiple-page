import React from "react";
import { Users, Image, Video, Newspaper, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { STATS_COUNTERS, SPEAKERS_LIST, NEWS_ARTICLES } from "../data";
import VideoCard from "./videocard";
import NewsCard from "./NewsCard";

const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/watch?v=8PEwm-s5Ze0",
  "https://www.youtube.com/watch?v=dJ07TEPiyd4",
  // "https://www.youtube.com/watch?v=jJmOXihX-Jc",
  "https://www.youtube.com/watch?v=VrZ_jsP7n3U",
];

export default function HomeDetails() {
  const navigate = useNavigate();
  return (
    <div id="home-details-section" className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* STATS COUNT GRID */}
        <div id="stats-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {STATS_COUNTERS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs text-center flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-dnc-black mb-1">
                  {stat.count}
                </p>
                <p className="text-sm font-bold text-dnc-blue font-sans tracking-wide uppercase mb-3">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PREVIOUS SPEAKERS HORIZONTAL GALLERY */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs mb-20 overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                  <Users className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                    Our Previous Speakers
                  </h3>
                </div>
              </div>
            </div>
            <Link
              to="/speakers"
              className="shrink-0 self-start text-sm font-bold text-dnc-blue hover:text-dnc-orange flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              See All Speakers &amp; Full Bios
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/20 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...SPEAKERS_LIST, ...SPEAKERS_LIST].map((spk, idx) => (
                <div
                  key={`${spk.id}-${idx}`}
                  onClick={() => navigate("/speakers")}
                  className="inline-flex flex-col items-center bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-5 rounded-3xl w-48 sm:w-52 text-center transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer select-none group"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-100 mb-3 relative mx-auto border-2 border-slate-200">
                    <img
                      src={spk.avatarUrl}
                      alt={spk.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* {spk.isKeynote && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-dnc-orange text-white text-[7.5px] font-sans font-bold rounded uppercase tracking-wider whitespace-nowrap">
                        Keynote
                      </span>
                    )} */}
                  </div>
                  <span className="font-display font-bold text-sm text-slate-850 group-hover:text-dnc-blue transition-colors line-clamp-1 block whitespace-normal break-words">
                    {spk.name}
                  </span>
                  <span className="text-[10px] text-dnc-blue font-sans font-bold mt-1 line-clamp-1 block whitespace-normal">
                    {spk.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAST CONCLAVES */}
        <div className="grid grid-cols-1 gap-8 mb-20 items-stretch">
          <div className="bg-white text-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-slate-100">
            <div className="max-w-full mb-4">
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Our Past Conclaves
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                From the inception of the Digital Nepal framework in 2019, our yearly summits have solidified cross-border payment protocols, digital health structures, and national software exports strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { year: "2025", title: "Empowering Digital Nepal Together", logo: "/images/logos/DNC_25.png" },
                { year: "2024", title: "Harmonizing Digitalization and Development", logo: "/images/logos/DNC_24.png" },
                { year: "2023", title: "Fostering Digitally Sakshyam Nepal", logo: "/images/logos/DNC_23.png" },
                { year: "2022", title: "Digital Nepal Framework Collaboration", logo: "/images/logos/DNC_22.png" }
              ].map((conclave) => (
                <div
                  key={conclave.year}
                  onClick={() => navigate(`/past-events/${conclave.year}`)}
                  className="group cursor-pointer p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    {/* Logo Placeholder */}
                    <div className="mb-3">
                      <img
                        src={conclave.logo}
                        alt={`DNC ${conclave.year} Logo`}
                        className="w-36 object-contain items-center py-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <h4 className="font-display font-bold text-xl text-dnc-blue group-hover:text-dnc-orange transition-colors duration-300">
                      DNC {conclave.year}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">{conclave.title}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-xs">Learn More</span>
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-xs">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONCLAVE INTEL & NEWS */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <Newspaper className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                  Latest Conclave News & Blogs
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {NEWS_ARTICLES.slice(0, 4).map((articleUrl, idx) => (
              <NewsCard
                key={idx}
                url={articleUrl}
                onError={(error) => console.error(`Article ${idx + 1} error:`, error)}
              />
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center">
            <Link
              to="/news-media"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dnc-blue text-white font-bold text-sm sm:text-base rounded-xl hover:bg-dnc-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              See More News &amp; Blogs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CONCLAVE MOMENTS & PHOTO GALLERY */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-red-50 text-dnc-red rounded-xl border border-red-100">
              <Image className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Conclave Moments & Photo Gallery
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[180px] sm:auto-rows-[220px]">
            {[
              { title: "Inaugural Plenary Debate", url: "/images/gallery/2025/25-1.jpg", gridClass: "md:col-span-2 md:row-span-2" },
              { title: "Startup Pitch Showcase", url: "/images/gallery/2025/25-2.jpg", gridClass: "md:col-span-1 md:row-span-1" },
              { title: "Digital Public Goods Panel", url: "/images/gallery/2025/25-3.jpg", gridClass: "md:col-span-1 md:row-span-1" },
              { title: "Provincial Exhibition Booths", url: "/images/gallery/2025/25-4.jpg", gridClass: "md:col-span-2 md:row-span-1" },
              { title: "B2B Strategic Cooperation Launch", url: "/images/gallery/2025/25-5.jpg", gridClass: "md:col-span-1 md:row-span-1" },
              { title: "Valedictory Networking & Reception", url: "/images/gallery/2025/25-7.jpg", gridClass: "md:col-span-2 md:row-span-1" },
              { title: "Academic & Research Symposium", url: "/images/gallery/2025/25-6.jpg", gridClass: "md:col-span-1 md:row-span-1" },
            ].map((photo, pIdx) => (
              <div key={pIdx} className={`group relative rounded-s overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 ${photo.gridClass}`}>
                <img
                  src={`${photo.url}?auto=format&fit=crop&q=80&w=800`}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* YOUTUBE VIDEOS SECTION */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-red-50 text-dnc-red rounded-xl border border-red-100">
              <Video className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Videos & Event Highlights
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YOUTUBE_VIDEOS.map((videoUrl, idx) => (
              <VideoCard
                key={idx}
                youtubeUrl={videoUrl}
                onError={(error) => console.error(`Video ${idx + 1} error:`, error)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/news-media"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dnc-blue text-white font-bold text-sm sm:text-base rounded-xl hover:bg-dnc-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            See More Videos &amp; Highlights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-20">
          <div className="mb-8">
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
              Our Other Initiatives & Programs
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Digital Samvad", desc: "Weekly policy talk-show broadcasts", logo: "/images/logos/digital-samvad.jpg" },
              { name: "Digital Nepal Conclave", desc: "Flagship central business summit", logo: "/images/logos/dnc-logo.png" },
              { name: "Digital Karnali Conclave", desc: "Decentralized state policy forums", logo: "/images/logos/dkc-logo.png" },
              { name: "Digital Madhesh Conclave", desc: "Regional smart-services seminars", logo: "/images/logos/dmc-logo.png" },
              { name: "AI Summit", desc: "The ultimate accolade for tech champions", logo: "/images/logos/naic.png" },
              { name: "Startup & Idea Fest", desc: "National ecosystem pitching events", logo: "/images/logos/snif.png" },
              { name: "ICT Gyan", desc: "Centralized analytical tech encyclopedia", logo: "/images/logos/ict-gyan.png" },
              { name: "Digital Leadership Dialogue", desc: "Corporate-regulator interactions", logo: "/images/logos/dld-logo.png" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:border-dnc-blue transition-all duration-200">
                {/* Logo Placeholder */}
                <div className="h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.logo} 
                    alt={`${item.name} logo`}
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                {/* <h4 className="font-display font-bold text-base text-slate-900 mb-1 leading-tight">{item.name}</h4> */}
                {/* <p className="text-[11px] text-slate-500">{item.desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation Block */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}