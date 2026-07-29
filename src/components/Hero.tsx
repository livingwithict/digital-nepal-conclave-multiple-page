import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PARALLAX_IMAGES = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Handle crossfade slideshow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % PARALLAX_IMAGES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // Countdown timer to August 27th, 2026 (Nepal Time coordinate Zone GST+5:45)
  useEffect(() => {
    const targetDate = new Date("2026-08-27T09:00:00+05:45").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-parallax-section"
      className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden bg-[#0d0f2b] flex items-center justify-center select-none"
    >
      {/* BACKGROUND LAYER: Crossfade carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {PARALLAX_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentBg ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Himalayan Summit backdrop ${idx + 1}`}
              className="w-full h-full object-cover filter brightness-[0.7] saturate-[0.85]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Futuristic Grid Map overlay on top of mountains */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,41,146,0.3)_0%,transparent_100%)] opacity-35" />
      </div>

      {/* MIDGROUND LAYER: Linear Gradient Falloffs to assure flawless text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0d0f2b]/55 via-[#0d0f2b]/70 to-[#0d0f2b]" />

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">

        <div className="mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/[0.05] border border-white/15 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 text-white font-sans text-sm sm:text-base font-extrabold tracking-wider">
            <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#eb0000]" />
            <span>27 AUGUST 2026</span>
          </div>
          <span className="hidden sm:inline text-white/30 text-sm">|</span>
          <div className="flex items-center gap-2 text-slate-100 font-sans text-sm sm:text-base font-semibold tracking-wide">
            <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#eb0000]" />
            <span>THE PLAZA, PULCHOWK</span>
          </div>
        </div>

        {/* Highlighted Digital Nepal Conclave Title only */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white tracking-tight leading-none drop-shadow-2xl">
          Digital Nepal Conclave <span className="text-[#eb0000]">2026</span>
        </h1>
        <div className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dnc-orange leading-none drop-shadow-2xl mt-4 mb-4">
          "Shaping Nepal’s Digital Future"
        </div>

        {/* Primary Call to Action Controls in Centered Layout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            id="desktop-register-button"
            to="/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-2xl shadow-lg shadow-red-950/20 uppercase tracking-widest text-[11px] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center"
          >
            Register Now
          </Link>

          <Link
            to="/agenda"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold rounded-2xl uppercase tracking-widest text-[11px] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer backdrop-blur-md"
          >
            Explore Schedule
            <ArrowRight className="w-4 h-4 text-dnc-orange-light" />
          </Link>
        </div>

        {/* Dynamic Countdown Block */}
        <div className="mt-14 w-full max-w-lg bg-white/[0.04] backdrop-blur-md rounded-3xl p-5.5 sm:p-6 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-4 gap-3.5 text-center">
            <div className="bg-slate-900/40 p-2.5 rounded-2xl border border-white/5">
              <p className="font-display font-black text-2xl sm:text-3xl text-white">{String(timeLeft.days).padStart(2, '0')}</p>
              <p className="text-[9px] text-slate-400 uppercase font-sans mt-1 font-bold">Days</p>
            </div>

            <div className="bg-slate-900/40 p-2.5 rounded-2xl border border-white/5">
              <p className="font-display font-black text-2xl sm:text-3xl text-white">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-[9px] text-slate-400 uppercase font-sans mt-1 font-bold">Hours</p>
            </div>

            <div className="bg-slate-900/40 p-2.5 rounded-2xl border border-white/5">
              <p className="font-display font-black text-2xl sm:text-3xl text-white">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-[9px] text-slate-400 uppercase font-sans mt-1 font-bold">Mins</p>
            </div>

            <div className="bg-slate-900/40 p-2.5 rounded-2xl border border-white/5">
              <p className="font-display font-black text-2xl sm:text-3xl text-dnc-orange">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-[9px] text-slate-400 uppercase font-sans mt-1 font-bold">Secs</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scenic mountain outline path for smooth transition to layout body */}
      <div className="absolute bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-[#0d0f2b] to-transparent pointer-events-none z-10" />
    </section>
  );
}