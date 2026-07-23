import React from "react";
import { 
  Calendar, 
  MapPin, 
  Compass, 
  Lightbulb, 
  Sparkles, 
  Clock, 
  Globe, 
  Shield, 
  Database, 
  TrendingUp, 
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function ThemeDateVenue() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Digital Nepal Conclave 2026");
    const dates = "20260703T031500Z/20260703T121500Z"; // UTC bounds
    const details = encodeURIComponent("Reimagining Governance, Data and the Digital Economy.");
    const location = encodeURIComponent("The Plaza Hotel, Pulchowk, Lalitpur, Nepal");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const handleOpenMap = () => {
    const coords = "27.6756,85.3151"; 
    const url = `https://maps.app.goo.gl/ivnTe9m2cAai8x3g6`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: THE EVENT PLENARY THEME & THREE STRATEGIC PILLARS */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Soft floating grids */}
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-dnc-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-dnc-orange/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header detailing Theme intent */}
          <div className="max-w-full mb-16">
            <p className="mb-4 text-sm sm:text-xl text-dnc-blue font-bold uppercase tracking-wider">THIS YEAR'S THEME:</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none mb-6">
              Reimagining Digital <span className="text-dnc-blue">Governance</span>, <span className="text-dnc-blue">Data</span> & the <span className="text-dnc-blue">Digital Economy</span>
            </h2>
            
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans max-w-full text-justify">
              Digital Nepal Conclave is an open platform for facilitating the effective dialogue to implement Digital Nepal Framework. It features keynotes from various renowned national and international experts and domain champions. It also highlights the issues of digital capability through various power panel samvad sessions, lightning talks, thematic presentations, feedback, and opinions from the domain champions and the audience.            
            </p>
          </div>

          {/* Core Strategic Pillars Sub-Grid */}
          <div className="mt-12">
            {/* 3 Pillar Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* PILLAR 1: GOVERNANCE & DPI */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-dnc-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-dnc-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-dnc-blue/10 flex items-center justify-center text-dnc-blue mb-6 border border-dnc-blue/10 group-hover:scale-105 transition-transform duration-300">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-dnc-blue transition-colors mb-4">
                    Governance & Digital Public Infrastructure
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-blue shrink-0 mt-0.5" />
                      <span>Institutional digital reform and transformative public service delivery.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-blue shrink-0 mt-0.5" />
                      <span>Citizen-centric smart services and integrated Digital ID frameworks.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-blue shrink-0 mt-0.5" />
                      <span>Strategic policy innovation and evidence-based decision making through data-centric governance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PILLAR 2: DATA, AI & CYBERSECURITY */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-dnc-orange/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#eb0000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#eb0000]/10 flex items-center justify-center text-[#eb0000] mb-6 border border-[#eb0000]/10 group-hover:scale-105 transition-transform duration-300">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#eb0000] transition-colors mb-4">
                    Data, AI & Cybersecurity
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#eb0000] shrink-0 mt-0.5" />
                      <span>Establishing national data sovereignty and robust governance frameworks.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#eb0000] shrink-0 mt-0.5" />
                      <span>Ethical AI integration and responsible technology adoption.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#eb0000] shrink-0 mt-0.5" />
                      <span>Building digital trust, cybersecurity resilience, and cross-sectoral data interoperability.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PILLAR 3: DIGITAL ECONOMY */}
              <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:border-dnc-orange/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-dnc-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-dnc-orange/10 flex items-center justify-center text-dnc-orange mb-6 border border-dnc-orange/10 group-hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-dnc-orange transition-colors mb-4">
                    Digital Economy & Innovation
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-orange shrink-0 mt-0.5" />
                      <span>Advancing fintech ecosystems and digital payment architecture.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-orange shrink-0 mt-0.5" />
                      <span>Fostering startup acceleration and optimizing digital trade and e-commerce expansion.</span>
                    </li>
                    <li className="flex gap-2.5 items-start text-sm text-slate-600 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-dnc-orange shrink-0 mt-0.5" />
                      <span>Cultivating a future-ready digital workforce and investment prospects within the innovation economy.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE NEXT SESSION - COGNITIVE EVENT DATE & VENUE */}
      {/* <section className="relative bg-gradient-to-b from-[#0d0f2b] to-[#111332] py-24 text-white overflow-hidden border-t border-white/[0.04]">
        
        <div className="absolute inset-x-0 bottom-0 h-44 opacity-25 pointer-events-none select-none z-0">
          <svg viewBox="0 0 1440 120" className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
            <path d="M0,80 L200,30 L400,90 L600,20 L800,100 L1000,40 L1200,90 L1440,50 L1440,120 L0,120 Z" fill="rgba(46, 49, 146, 0.4)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,0,0,0.06),transparent_60%)] z-0 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Event Details
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            <div className="bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#eb0000]/10 via-dnc-blue/5 to-transparent pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start text-center sm:text-left">
                  <Calendar className="w-6 h-6 text-dnc-orange shrink-0" />
                  <span className="text-2xl font-bold text-white">July 3, 2026 | Asar 19, 2083</span>
                </div>

                <hr className="border-white/[0.08]" />

                <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start text-center sm:text-left">
                  <MapPin className="w-6 h-6 text-dnc-orange shrink-0" />
                  <span className="text-2xl font-bold text-white">The Plaza, Pulchowk, Lalitpur</span>
                </div>

              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.08] relative z-10">
                <button
                  onClick={handleAddToCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#eb0000] hover:bg-[#c20000] text-white text-[10.5px] font-bold font-sans uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Sync to Calendar
                </button>
              </div>

            </div>

            <div className="bg-slate-800 rounded-3xl border border-white/10 overflow-hidden relative group shadow-2xl flex flex-col justify-end min-h-[300px]">
              <img
                src="/images/plaza.jpg" 
                alt="The Plaza Hotel, Pulchowk"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f2b] via-[#0d0f2b]/10 to-transparent opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dnc-blue/10 mix-blend-overlay" />

              <div className="relative z-10 p-8 sm:p-10 flex flex-col items-start w-full">
                <button
                  onClick={handleOpenMap}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 text-[10.5px] font-bold font-sans uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-dnc-orange" />
                  Open Google Maps
                </button>
              </div>
            </div>

          </div>

        </div>
      </section> */}

    </div>
  );
}