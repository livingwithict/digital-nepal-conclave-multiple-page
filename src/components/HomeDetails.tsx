import { useState, useEffect, useCallback } from "react";
import { Users, Image, Video, Newspaper, ArrowRight, X, ChevronLeft, ChevronRight, CalendarDays, Briefcase, Brain, TrendingUp, CheckCircle2, Sparkles, Zap, Clock, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { STATS_COUNTERS, SPEAKERS_LIST, NEWS_ARTICLES, SPONSOR_GROUPS, PUBLICATIONS_DATA } from "../data";
import { AGENDA_DATA, getSessionSlug } from "../agendaData";
import { SPONSORS } from "../sponsordata"; // <-- Imported the new data
import VideoCard from "./videocard";
import NewsCard from "./NewsCard";

function SponsorLogo({ sponsor }: { sponsor: { name: string; logoUrl: string; url?: string } }) {
  const box = "flex items-center justify-center bg-white border border-slate-100 rounded-xl p-4 w-44 h-28";
  const img = (
    <img src={sponsor.logoUrl} alt={sponsor.name} className="max-h-20 w-auto object-contain" />
  );
  if (!sponsor.url) return <div className={box}>{img}</div>;
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      title={sponsor.name}
      className={`${box} hover:border-dnc-blue/40 hover:shadow-md transition-all duration-300`}
    >
      {img}
    </a>
  );
}

const YOUTUBE_VIDEOS = [
  "https://www.youtube.com/watch?v=8PEwm-s5Ze0",
  "https://www.youtube.com/watch?v=dJ07TEPiyd4",
  // "https://www.youtube.com/watch?v=jJmOXihX-Jc",
  "https://www.youtube.com/watch?v=VrZ_jsP7n3U",
];

// Helper component to render a sponsor block cleanly
const SponsorBox = ({ sponsor, className = "w-40 h-20" }: { sponsor?: { name: string; logoUrl: string }; className?: string }) => {
  if (!sponsor || !sponsor.name || !sponsor.logoUrl) {
    return (
      <div className={`bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-2 flex items-center justify-center text-center ${className}`}>
        <span className="text-[10px] font-semibold text-slate-400">TBA</span>
      </div>
    );
  }
  return (
    <div className={`bg-white rounded-xl shadow-xs border border-slate-100 p-3 flex items-center justify-center hover:scale-105 transition-transform text-center overflow-hidden ${className}`}>
      <img 
        src={sponsor.logoUrl} 
        alt={sponsor.name} 
        className="w-full h-full object-contain" 
        onError={(e) => { 
          e.currentTarget.style.display = 'none'; 
          const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (sibling) sibling.style.display = 'block';
        }} 
      />
      <span className="font-bold text-slate-600 text-xs hidden">{sponsor.name}</span>
    </div>
  );
};

const GALLERY_PHOTOS = [
  { title: "DNC 2025", url: "/images/gallery/2025/25-1.jpg", gridClass: "md:col-span-2 md:row-span-2" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-2.jpg", gridClass: "md:col-span-1 md:row-span-1" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-3.jpg", gridClass: "md:col-span-1 md:row-span-1" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-4.jpg", gridClass: "md:col-span-2 md:row-span-1" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-5.jpg", gridClass: "md:col-span-1 md:row-span-1" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-7.jpg", gridClass: "md:col-span-2 md:row-span-1" },
  { title: "DNC 2025", url: "/images/gallery/2025/25-6.jpg", gridClass: "md:col-span-1 md:row-span-1" },
];

const HOME_AGENDA_SESSIONS = [
  {
    session: "Session 0: Inaugural Session",
    time: "9:00 AM – 10:30 AM",
    icon: Zap,
    color: "text-slate-700",
    bg: "bg-slate-100",
    border: "border-slate-200",
  },
  {
    session: "Session 1: Governance & Digital Public Infrastructure",
    time: "10:50 AM – 12:30 PM",
    icon: Briefcase,
    color: "text-dnc-blue",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    session: "Session 2: Data, AI & Innovation",
    time: "2:30 PM – 4:30 PM",
    icon: Brain,
    color: "text-dnc-orange",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    session: "Session 3: Digital Economy & Innovation",
    time: "4:30 PM – 7:00 PM",
    icon: TrendingUp,
    color: "text-dnc-red",
    bg: "bg-red-50",
    border: "border-red-100",
  },
].map((group) => ({
  ...group,
  titles: AGENDA_DATA.filter((item) => item.session === group.session).map((item) => item.title),
}));

export default function HomeDetails() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : null), []);
  const showNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % GALLERY_PHOTOS.length : null), []);

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

  return (
    <div id="home-details-section" className="bg-slate-50 pt-16 border-t border-slate-100">
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

        {/* AGENDA HIGHLIGHTS */}
        <div className="mb-20">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <CalendarDays className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                What's on the Agenda
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {HOME_AGENDA_SESSIONS.map((group, idx) => {
              const IconComponent = group.icon;
              return (
                <Link
                  to={`/agenda#${getSessionSlug(group.session)}`}
                  key={idx}
                  className={`group flex flex-col bg-white rounded-2xl border ${group.border} shadow-xs p-6 hover:shadow-md transition-all duration-300`}
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-5 h-5 shrink-0 ${group.color}`} />
                      <h4 className="font-display font-bold text-lg sm:text-xl text-slate-800">
                        {group.session}
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1.5 mt-1 text-sm sm:text-base font-sans font-semibold text-slate-500">
                      <Clock className="w-4 h-4" />
                      {group.time}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5 pl-1">
                    {group.titles.map((title, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-sm text-slate-900 font-sans leading-snug">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${group.color} opacity-70`} />
                        {title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end mt-auto">
                    <span className={`inline-flex items-center text-sm font-sans font-bold ${group.color} pt-5 group-hover:translate-x-1 transition-transform duration-200`}>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dnc-blue text-white font-bold text-sm sm:text-base rounded-xl hover:bg-dnc-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              See Full Schedule
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* PREVIOUS SPEAKERS HORIZONTAL GALLERY */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <Users className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Our Previous Speakers
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
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
                  </div>
                  <span className="font-display font-bold text-base text-slate-850 group-hover:text-dnc-blue transition-colors line-clamp-1 block whitespace-normal break-words">
                    {spk.name}
                  </span>
                  <span className="text-xs text-dnc-blue font-sans font-bold mt-1 line-clamp-1 block whitespace-normal">
                    {spk.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-sans font-bold mt-1 line-clamp-1 block whitespace-normal">
                    {spk.company}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/speakers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dnc-blue text-white font-bold text-sm sm:text-base rounded-xl hover:bg-dnc-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              See All Speakers &amp; Full Bios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS AND SPONSORS */}
      <section className="w-full bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <Users className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Partners &amp; Sponsors
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
          </div>

          <div className="space-y-6">
            {SPONSOR_GROUPS.slice(0, 2).map((group) => (
              <div key={group.title} className="text-center">
                <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.sponsors.map((sponsor) => (
                    <SponsorLogo key={sponsor.name} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap justify-center gap-8">
              {SPONSOR_GROUPS.slice(2).map((group) => (
                <div key={group.title} className="text-center">
                  <h4 className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-3">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {group.sponsors.map((sponsor) => (
                      <SponsorLogo key={sponsor.name} sponsor={sponsor} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAST CONCLAVES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 items-stretch">
          <div className="text-slate-900 flex flex-col justify-between">
            <div className="max-w-full mb-4">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                    <Clock className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                    Our Past Conclaves
                  </h3>
                </div>
                <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
              </div>
              {/* <p className="text-slate-500 text-base leading-relaxed">
                From the inception of the Digital Nepal framework in 2019, our yearly summits have solidified cross-border payment protocols, digital health structures, and national software exports strategy.
              </p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { year: "2025", title: "Empowering Digital Nepal Together", logo: "/images/logos/DNC_25.png" },
                { year: "2024", title: "Harmonizing Digitalization and Development", logo: "/images/logos/DNC_24.png" },
                { year: "2023", title: "Fostering Digitally Sakshyam Nepal", logo: "/images/logos/DNC_23.png" },
                { year: "2022", title: "Digital Nepal Framework Collaboration", logo: "/images/logos/DNC_22.png" }
              ].map((conclave) => {
                const report = PUBLICATIONS_DATA.find(
                  (p) => p.type === "Report" && p.year === conclave.year && p.url
                );
                return (
                <div key={conclave.year} className="flex flex-col gap-2">
                <div
                  onClick={() => navigate(`/past-events/${conclave.year}`)}
                  className="group cursor-pointer h-full p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
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

                {report && (
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-dnc-blue hover:bg-dnc-blue/90 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </a>
                )}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONCLAVE INTEL & NEWS */}
      <section className="w-full bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <Newspaper className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                News & Updates
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {NEWS_ARTICLES.slice(0, 4).map((article, idx) => (
              <NewsCard
                key={idx}
                url={article.url}
                customTitle={article.title}
                customImage={article.thumbnail}
                onError={(error) => console.error(`Article ${idx + 1} error:`, error)}
              />
            ))}
          </div>

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
      </section>

      {/* CONCLAVE MOMENTS & PHOTO GALLERY */}
      {/* <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-red-50 text-dnc-red rounded-xl border border-red-100">
                <Image className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Gallery & Moments
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[180px] sm:auto-rows-[220px]">
            {GALLERY_PHOTOS.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setLightboxIndex(pIdx)}
                className={`group relative rounded-s overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 cursor-pointer ${photo.gridClass}`}
              >
                <img
                  src={`${photo.url}?auto=format&fit=crop&q=80&w=800`}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold drop-shadow leading-tight">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>

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
                  src={GALLERY_PHOTOS[lightboxIndex].url}
                  alt={GALLERY_PHOTOS[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain"
                />
                <p className="mt-3 text-white text-sm sm:text-base font-semibold text-center px-4 drop-shadow">
                  {GALLERY_PHOTOS[lightboxIndex].title}
                </p>
                <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {GALLERY_PHOTOS.length}</p>
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
      </section> */}

      {/* YOUTUBE VIDEOS SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-red-50 text-dnc-red rounded-xl border border-red-100">
                <Video className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Featured Videos
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
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
            to="https://www.youtube.com/playlist?list=PL65nmC8zjA6rzbCSe_pheJEONkjI_fUyK"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dnc-blue text-white font-bold text-sm sm:text-base rounded-xl hover:bg-dnc-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            See More Videos &amp; Highlights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        </div>
      </section>

      {/* OUR OTHER INITIATIVES SECTION */}
      {/* <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
                <Sparkles className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Additional Initiatives
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></span>
          </div>

          <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[
              { name: "Digital Samvad", desc: "Weekly policy talk-show broadcasts", logo: "/images/logos/digital-samvad.jpg" },
              { name: "Digital Karnali Conclave", desc: "Decentralized state policy forums", logo: "/images/logos/dkc-logo.png" },
              { name: "Digital Madhesh Conclave", desc: "Regional smart-services seminars", logo: "/images/logos/dmc-logo.png" },
              { name: "AI Summit", desc: "The ultimate accolade for tech champions", logo: "/images/logos/naic.png" },
              { name: "Startup & Idea Fest", desc: "National ecosystem pitching events", logo: "/images/logos/snif.png" },
              { name: "ICT Gyan", desc: "Centralized analytical tech encyclopedia", logo: "/images/logos/ict-gyan.png" },
              { name: "Digital Leadership Dialogue", desc: "Corporate-regulator interactions", logo: "/images/logos/dld-logo.png" },
              // Duplicate the array to make the marquee loop seamless
              { name: "Digital Samvad", desc: "Weekly policy talk-show broadcasts", logo: "/images/logos/digital-samvad.jpg" },
              { name: "Digital Karnali Conclave", desc: "Decentralized state policy forums", logo: "/images/logos/dkc-logo.png" },
              { name: "Digital Madhesh Conclave", desc: "Regional smart-services seminars", logo: "/images/logos/dmc-logo.png" },
              { name: "AI Summit", desc: "The ultimate accolade for tech champions", logo: "/images/logos/naic.png" },
              { name: "Startup & Idea Fest", desc: "National ecosystem pitching events", logo: "/images/logos/snif.png" },
              { name: "ICT Gyan", desc: "Centralized analytical tech encyclopedia", logo: "/images/logos/ict-gyan.png" },
              { name: "Digital Leadership Dialogue", desc: "Corporate-regulator interactions", logo: "/images/logos/dld-logo.png" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-xs hover:border-dnc-blue transition-all duration-200 shrink-0">
                <div className="h-30 w-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.logo} 
                    alt={`${item.name} logo`}
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section> */}

      {/* Marquee Animation Block */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}