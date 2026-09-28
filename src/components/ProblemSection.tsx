import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onNavigateSection }) => {
  return (
    <section className="py-20 bg-slate-950/70 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-emerald-400">THE SHIFT IN AFRICAN COMMERCE</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
            Content is easy to buy. <br />
            <span className="text-slate-400">Results are harder to find.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Your customers are already watching creators every single day on TikTok, Instagram, and YouTube.
            We help you turn that attention into content, clicks, leads, and sales — with zero guesswork.
          </p>
        </div>

        {/* Transition Comparison: The Old Way vs The Bliss Star Way */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: The Old Way (Influencer Vanity Marketing) */}
          <div className="p-7 rounded-2xl bg-slate-900/40 border border-rose-900/30 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold tracking-wider text-rose-400">THE CONVENTIONAL WAY</span>
              <span className="text-xs text-slate-400">Generic Influencer Marketing</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white font-display">
              Paying upfront for hope and vanity reach
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Vanity impressions over sales:</strong> Brands pay expensive upfront fees for view counts that never translate to bank alerts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero attribution clarity:</strong> No unique links, no promo tracking, no WhatsApp attribution to identify top-performing creators.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Creators unrewarded for high conversions:</strong> Creators who drive millions in customer revenue get the same flat fee as those who drive none.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Friction-heavy checkout links:</strong> Forcing African consumers through complex foreign web checkouts instead of trusted chat channels.
                </span>
              </li>
            </ul>

            <div className="mt-8 p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs text-rose-200/90">
              Outcome: Unmeasured marketing spend, burnt budgets, and zero reusable performance data.
            </div>
          </div>

          {/* Card 2: The Bliss Star Way (Performance Creator Commerce) */}
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-emerald-500/50 relative overflow-hidden shadow-xl shadow-emerald-950/20">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold tracking-wider text-emerald-400">THE BLISS STAR WAY</span>
              <span className="text-xs text-emerald-400/90 font-medium">Performance Creator Commerce</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white font-display">
              Paying for verified results and business growth
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Trackable customer funnel:</strong> Every creator uses dedicated links, promo codes, and tagged WhatsApp routing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Flexible performance models:</strong> Choose between fixed payouts, verified pay-per-lead, or sales commissions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Creators build a track record:</strong> High-converting creators unlock higher tier campaigns and recurring revenue splits.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Native WhatsApp attribution:</strong> Direct conversation flows that respect African purchasing behavior and close sales faster.
                </span>
              </li>
            </ul>

            <div className="mt-8 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-xs text-emerald-300">
              Outcome: Predictable customer acquisition cost, high ROI, and verified creator earnings.
            </div>
          </div>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base font-bold text-white font-display">The Bliss Star Attribution Formula</h4>
            <p className="text-xs text-slate-400 mt-1">Measurable progression across every campaign dollar spent</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Creator Content</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Attributed Click</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">WhatsApp Lead</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-700/80">Verified Sale</span>
          </div>

          <button
            onClick={() => onNavigateSection('how-it-works')}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Learn How It Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
