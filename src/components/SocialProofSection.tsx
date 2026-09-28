import React from 'react';
import { ShieldCheck, Lock, Award, FileText, CheckCircle2 } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-emerald-400">PILOT COHORTS & FOUNDING INTEGRITY</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white font-display tracking-tight text-balance">
            Evidence-Based Creator Commerce
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            We do not manufacture fake reviews, invented customer quotes, or unverified vanity statistics.
            Real brand case studies, verified conversion figures, and creator earnings logs will be published here upon completion of our private pilot cohorts.
          </p>
        </div>

        {/* 3 Tasteful Placeholder Cards clearly marked for replacement */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Brand Case Studies Placeholder */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                <span className="text-[10px] font-mono uppercase text-slate-400">Section Slot: Case Studies</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded">
                  Pending Pilot Alpha
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-white font-display">
                Verified Brand ROI Case Studies
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Detailed breakdowns showing campaign budget, creators utilized, unique clicks driven, and net revenue achieved across retail, beauty, and fintech partners.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full audits published with partner consent</span>
            </div>
          </div>

          {/* Card 2: Creator Earnings & Track Records Placeholder */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                <span className="text-[10px] font-mono uppercase text-slate-400">Section Slot: Creator Stories</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded">
                  Pending Pilot Alpha
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-white font-display">
                Documented Creator Payout Logs
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Spotlights on African creators who transitioned from unpaid barter collaborations to recurring fixed retainers and performance sales commissions.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Attributed earnings verified via platform ledger</span>
            </div>
          </div>

          {/* Card 3: Founding Brand Cohort Placeholder */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                <span className="text-[10px] font-mono uppercase text-slate-400">Section Slot: Founding Partners</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded">
                  In Enrolment
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-white font-display">
                Founding Brand Member Roster
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Recognized enterprise brands, forward-thinking direct-to-consumer businesses, and digital agencies participating in our closed launch cohorts across Lagos, Nairobi, and Accra.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Protected under mutual commercial pilot NDA</span>
            </div>
          </div>
        </div>

        {/* Founding Pillars Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block">Commercial Transparency Principle</strong>
              <span>Every metric displayed on Bliss Star dashboards stems from verified digital attribution or customer bank settlements.</span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-slate-400 text-[11px] shrink-0">
            <span>Escrow Protected</span>
            <span>·</span>
            <span>Zero Fake Numbers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
