import React from "react";
import { X, Clock, MapPin, Users, Mic, Star, Lectern, LucideIcon } from "lucide-react";
import { AgendaItem } from "../agendaData";

interface CategoryConfig {
  color: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  accentColor: string;
  icon: LucideIcon;
}

interface AgendaDetailModalProps {
  item: AgendaItem | null;
  config: CategoryConfig | null;
  categoryLabel: string;
  onClose: () => void;
}

export default function AgendaDetailModal({ item, config, categoryLabel, onClose }: AgendaDetailModalProps) {
  if (!item || !config) return null;

  const IconComponent = config.icon;

  const renderPersonnelGroup = (roleLabel: string, Icon: any, people?: string[]) => {
    if (!people || people.length === 0) return null;

    return (
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-2 mr-1">
          <div className="p-1.5 bg-slate-100/80 rounded-md">
            <Icon className="w-3.5 h-3.5 text-slate-600" />
          </div>
          <span className="text-xs font-sans font-bold text-slate-600 uppercase tracking-widest">
            {roleLabel}
          </span>
        </div>

        {people.map((person, idx) => (
          <div
            key={`${roleLabel}-${idx}`}
            className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-300/60 rounded-lg text-sm font-medium text-slate-800"
          >
            {person}
          </div>
        ))}
      </div>
    );
  };

  const hasPersonnel = (item.speakers?.length || 0) > 0 ||
                        (item.panelists?.length || 0) > 0 ||
                        (item.moderators?.length || 0) > 0 ||
                        (item.sessionChairs?.length || 0) > 0;

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 animate-slide-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${config.accentColor}`}></div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${config.badgeColor} border border-white/30 mb-4`}>
              <IconComponent className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2">
              <Clock className="w-5 h-5 text-slate-500" />
              <span className="font-display font-black text-xl text-slate-900">
                {item.time}
              </span>
            </div>

            {item.room && (
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wider">
                  {item.room}
                </span>
              </div>
            )}

            <h2 className="font-display font-bold text-2xl sm:text-3xl leading-snug text-slate-900 mb-2">
              {item.title}
            </h2>

            {item.subtitle && (
              <p className="text-base font-sans font-semibold text-slate-700 leading-relaxed">
                {item.subtitle}
              </p>
            )}
          </div>

          {item.description && (
            <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed border-t border-slate-200 pt-5">
              {item.description}
            </p>
          )}

          {hasPersonnel && (
            <div className="flex flex-col gap-3.5 pt-5 border-t border-slate-200">
              {renderPersonnelGroup("Speaker", Lectern, item.speakers)}
              {renderPersonnelGroup("Panelist", Users, item.panelists)}
              {renderPersonnelGroup("Moderator", Mic, item.moderators)}
              {renderPersonnelGroup("Chair", Star, item.sessionChairs)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
