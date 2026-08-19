import React, { useState } from "react";
import {
  Clock,
  MapPin,
  Zap,
  Briefcase,
  Brain,
  TrendingUp,
  Coffee,
  ArrowRight
} from "lucide-react";
import { AGENDA_DATA, AgendaItem, getSessionSlug } from "../agendaData";
import AgendaDetailModal from "./AgendaDetailModal";

export default function AgendaComponent() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Inaugural" | "Governance" | "Data" | "Economy" | "Break">("All");
  const [selectedItem, setSelectedItem] = useState<AgendaItem | null>(null);

  const filteredAgenda = activeFilter === "All"
    ? AGENDA_DATA
    : AGENDA_DATA.filter(item => item.category === activeFilter);

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case "Inaugural":
        return {
          color: "text-slate-700",
          bgColor: "bg-gradient-to-br from-slate-100/50 to-slate-50/50",
          borderColor: "border-slate-200/70",
          badgeColor: "bg-slate-700 text-white",
          accentColor: "from-slate-300 to-slate-400",
          icon: Zap,
        };
      case "Governance":
        return {
          color: "text-blue-700",
          bgColor: "bg-gradient-to-br from-blue-50/50 to-blue-25/50",
          borderColor: "border-blue-200/60",
          badgeColor: "bg-dnc-blue text-white",
          accentColor: "from-blue-0 to-dnc-blue",
          icon: Briefcase,
        };
      case "Data":
        return {
          color: "text-orange-700",
          bgColor: "bg-gradient-to-br from-orange-50/50 to-orange-25/50",
          borderColor: "border-orange-200/60",
          badgeColor: "bg-dnc-orange text-white",
          accentColor: "from-orange-0 to-dnc-orange",
          icon: Brain,
        };
      case "Economy":
        return {
          color: "text-red-700",
          bgColor: "bg-gradient-to-br from-red-50/50 to-red-25/50",
          borderColor: "border-red-200/60",
          badgeColor: "bg-dnc-red text-white",
          accentColor: "from-red-0 to-dnc-red",
          icon: TrendingUp,
        };
      case "Break":
        return {
          color: "text-green-700",
          bgColor: "bg-gradient-to-br from-green-50/50 to-green-25/50",
          borderColor: "border-green-200/60",
          badgeColor: "bg-green-700 text-white",
          accentColor: "from-green-0 to-green-700",
          icon: Coffee,
        };
      default:
        return {
          color: "text-slate-600",
          bgColor: "bg-slate-50/50",
          borderColor: "border-slate-200/60",
          badgeColor: "bg-slate-700 text-white",
          accentColor: "from-slate-300 to-slate-400",
          icon: Clock,
        };
    }
  };

  const getCategoryBadgeLabel = (category: string) => {
    if (category === "Break") return "Tea & Networking";
    if (category === "Economy") return "Economy & Startup Track";
    if (category === "Governance") return "Governance & DPI Track";
    if (category === "Data") return "Data, AI & Security";
    return category;
  };

  const filters = ["All", "Inaugural", "Governance", "Data", "Economy"] as const;

  return (
    <section id="agenda-section" className="bg-slate-50 py-20 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-br from-slate-100/60 to-slate-50/60 rounded-2xl border border-slate-200/70">
            <Clock className="w-5 h-5 text-slate-600 mr-2" />
            <span className="text-sm font-sans font-bold text-slate-700 uppercase tracking-wider">
              Thursday, 27th August 2026
            </span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Schedule of Tracks & Sessions
          </h1>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const config = filter !== "All" ? getCategoryConfig(filter) : null;
              
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2.5 rounded-xl font-sans font-semibold text-sm whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? filter === "All"
                        ? "bg-slate-800 to-slate-800 text-white border-slate-800 shadow-lg shadow-slate-400/20 scale-105"
                        : `${config?.badgeColor} border-transparent shadow-md shadow-slate-300/20`
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {filter === "All" ? `All Programs (${AGENDA_DATA.length})` : getCategoryBadgeLabel(filter)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Agenda List */}
        <div className="space-y-4">
          {filteredAgenda.map((item, index) => {
            const config = getCategoryConfig(item.category);
            const IconComponent = config.icon;
            const showSessionHeader =
              index === 0 || filteredAgenda[index - 1].session !== item.session;

            return (
              <React.Fragment key={index}>
                {showSessionHeader && (
                  <div id={getSessionSlug(item.session)} className="pt-6 first:pt-0 scroll-mt-24">
                    <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 tracking-tight border-l-4 border-slate-300 pl-4">
                      {item.session}
                    </h2>
                  </div>
                )}
                <div
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
                }}
                className={`group relative overflow-hidden rounded-2xl border-2 ${config.borderColor} bg-white transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/40 hover:scale-[1.01] cursor-pointer`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${config.accentColor}`}></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 pl-6 md:pl-8">
                  {/* Left Column: Time, Location & Category */}
                  <div className="md:w-1/4 shrink-0">
                    <div className="mb-4">
                      <div className="flex items-center gap-2.5 mb-1">
                        <Clock className="w-5 h-5 text-slate-500" />
                        <span className="font-display font-black text-2xl text-slate-900">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {item.room && (
                      <div className="mb-5 flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wider">
                          {item.room}
                        </span>
                      </div>
                    )}

                    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${config.badgeColor} border border-white/30`}>
                      <IconComponent className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {item.category === "Break" ? "Break" : item.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Title & Learn More */}
                  <div className="md:w-3/4 flex flex-col justify-center">
                    <h3 className={`font-display font-bold text-xl sm:text-2xl leading-snug mb-2 text-slate-900`}>
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-sm sm:text-base font-sans font-semibold text-slate-700 mb-4 leading-relaxed">
                        {item.subtitle}
                      </p>
                    )}

                    <span className={`inline-flex items-center gap-1.5 text-sm font-sans font-bold ${config.color} group-hover:gap-2.5 transition-all duration-200`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
                </div>
              </React.Fragment>
            );
          })}

          {filteredAgenda.length === 0 && (
            <div className="py-16 text-center">
              <Coffee className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-sans">No sessions found for this track.</p>
            </div>
          )}
        </div>

      </div>

      <AgendaDetailModal
        item={selectedItem}
        config={selectedItem ? getCategoryConfig(selectedItem.category) : null}
        categoryLabel={selectedItem ? getCategoryBadgeLabel(selectedItem.category) : ""}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}