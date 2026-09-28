import React, { useState } from 'react';
import { ShieldCheck, Award, TrendingUp, Star, UserPlus } from 'lucide-react';
import { CREATOR_LEVELS_INFO } from '../data/mockData';

export const CreatorLevels: React.FC = () => {
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(1); // Default on Verified

  const levelIcons = [UserPlus, ShieldCheck, Award, TrendingUp, Star];

  return (
    <section className="py-20 bg-[#090D16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-emerald-400">MERITOCRATIC ADVANCEMENT</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
            The Creator Progression Model
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Follower counts can be purchased or manipulated. Customer acquisition results cannot.
            Bliss Star’s progression model is anchored on transparent, documented platform delivery, conversion consistency, and brand satisfaction.
          </p>
        </div>

        {/* 5 Levels Pipeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {CREATOR_LEVELS_INFO.map((item, idx) => {
            const Icon = levelIcons[idx];
            const isSelected = activeLevelIndex === idx;
            return (
              <div
                key={item.level}
                onClick={() => setActiveLevelIndex(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-slate-400">Stage 0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${item.statusColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{item.level}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.summary}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Status</span>
                  <span className={`text-xs font-semibold ${item.statusColor}`}>
                    {idx === 0 ? 'Open to All' : idx <= 2 ? 'Standard Track' : 'High Performance'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Level Detail Spotlight Card */}
        {CREATOR_LEVELS_INFO[activeLevelIndex] && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold font-mono ${CREATOR_LEVELS_INFO[activeLevelIndex].badgeBg} ${CREATOR_LEVELS_INFO[activeLevelIndex].statusColor}`}>
                  {CREATOR_LEVELS_INFO[activeLevelIndex].level} Creator Tier
                </span>
                <span className="text-xs text-slate-400">
                  Stage 0{activeLevelIndex + 1} of 05
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Future Roadmap Qualification Framework
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Evaluation & Progression Criteria</h4>
                <p className="mt-2 text-slate-200 leading-relaxed">
                  {CREATOR_LEVELS_INFO[activeLevelIndex].criteria}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Commercial Unlocks & Campaign Access</h4>
                <p className="mt-2 text-emerald-400 leading-relaxed">
                  {CREATOR_LEVELS_INFO[activeLevelIndex].access}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              Note: Complex ranking algorithms are part of our post-MVP intelligence roadmap. Initial tiers are verified manually through submitted portfolio credentials and active campaign records.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
