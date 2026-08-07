import React from "react";
import { Calendar, MapPin, Globe, Shield, Database, TrendingUp, CheckCircle2 } from "lucide-react";

export default function ThemeDateVenue() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Digital Nepal Conclave 2026");
    const dates = "20260827T031500Z/20260827T121500Z"; // UTC bounds
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

      {/* SECTION 2: EVENT DATE & VENUE */}
      <section className="relative bg-gradient-to-b from-[#121652] to-[#111332] py-16 text-white overflow-hidden border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="mb-3 text-sm text-dnc-orange font-bold uppercase tracking-wider">EVENT DETAILS</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-8">
            When &amp; Where
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="w-11 h-11 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-dnc-orange">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-lg text-white leading-snug">Thursday, August 27, 2026</p>
                    <p className="mt-1 text-sm text-slate-300 font-sans">Bhadra 11, 2083</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-11 h-11 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-dnc-orange">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-lg text-white leading-snug">The Plaza</p>
                    <p className="mt-1 text-sm text-slate-300 font-sans">Pulchowk, Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCalendar}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#eb0000] hover:bg-[#c20000] text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  Add to Calendar
                </button>
                <button
                  onClick={handleOpenMap}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Globe className="w-4 h-4 text-dnc-orange" />
                  View on Map
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden relative group min-h-[16rem]">
              <img
                src="/images/plaza.jpg"
                alt="The Plaza, Pulchowk, Lalitpur"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}