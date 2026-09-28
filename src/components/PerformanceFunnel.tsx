import React, { useState } from 'react';
import { Link2, Tag, MessageCircle, MousePointerClick, UserCheck, CreditCard, ArrowDown, ShieldCheck } from 'lucide-react';

export const PerformanceFunnel: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<number>(2); // WhatsApp by default

  const attributionFeatures = [
    {
      id: 'links',
      name: 'Unique Creator Links',
      icon: Link2,
      summary: 'Dynamic smart redirection with cookie-less session parameter matching.',
      detail: 'Every creator receives unique trackable URLs with automated fallback to the brand storefront, landing page, or WhatsApp portal.',
      metricLabel: 'Click Accuracy',
      metricValue: '99.4%',
    },
    {
      id: 'codes',
      name: 'Unique Promo Codes',
      icon: Tag,
      summary: 'Custom brand discount codes attributed directly to each creator’s account.',
      detail: 'Even when buyers switch devices or order offline via WhatsApp, entering the creator’s promo code triggers instant sales credit.',
      metricLabel: 'Code Redemptions',
      metricValue: 'Attributable',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Attribution',
      icon: MessageCircle,
      summary: 'Conversational chat tracking engineered specifically for African customer behavior.',
      detail: 'Pre-fills WhatsApp inquiries with verified creator referral tokens (e.g. #BLISS-BLESSING-GLOW), making chat orders fully trackable.',
      metricLabel: 'African Market Fit',
      metricValue: 'Native',
    },
    {
      id: 'clicks',
      name: 'Real-Time Click Tracking',
      icon: MousePointerClick,
      summary: 'Instant telemetry on outbound audience engagement and geographic origin.',
      detail: 'Monitors unique clicks, device types, top geographic clusters (Lagos, Nairobi, Accra, London diaspora), and referral platforms.',
      metricLabel: 'Telemetry Speed',
      metricValue: '< 50ms',
    },
    {
      id: 'leads',
      name: 'Lead Qualification Tracking',
      icon: UserCheck,
      summary: 'Verification of customer signups, form fills, and WhatsApp consultations.',
      detail: 'Distinguishes between raw traffic and qualified buyers, powering our performance-per-lead payment models.',
      metricLabel: 'Lead Filtering',
      metricValue: 'Fraud-Resistant',
    },
    {
      id: 'sales',
      name: 'Direct Sales Attribution',
      icon: CreditCard,
      summary: 'Verified transaction settlement matched back to individual creators.',
      detail: 'Automates creator commissions, calculates true campaign ROI, and updates creator performance ratings transparently.',
      metricLabel: 'Payout Reconciliation',
      metricValue: 'Automated',
    },
  ];

  const funnelSteps = [
    { name: 'Creator', desc: 'Verified African content partner produces high-converting UGC' },
    { name: 'Audience', desc: 'Targeted TikTok, Instagram, or YouTube followers engage with content' },
    { name: 'Click', desc: 'Customer taps unique link or accesses WhatsApp with pre-tagged code' },
    { name: 'Lead', desc: 'Prospect inquires on WhatsApp, completes form, or browses product' },
    { name: 'Purchase', desc: 'Customer completes bank transfer, card payment, or verified delivery' },
    { name: 'Commission', desc: 'Performance fee or sales commission automatically credited to creator' },
  ];

  return (
    <section id="attribution" className="py-20 bg-[#090D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-emerald-400">THE PERFORMANCE DIFFERENTIATOR</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
            Know which creators actually drive results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate subjective influencer fees. Bliss Star equips every campaign with end-to-end attribution tools built for the way African consumers browse, chat, and buy.
          </p>
        </div>

        {/* Funnel Pipeline Visualization */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-emerald-400">Attribution Pipeline Architecture</span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                The Verified Conversion Chain
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full cryptographic tracking token on every customer touchpoint</span>
            </div>
          </div>

          {/* Vertical on Mobile, Horizontal on Desktop */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-3 relative">
            {funnelSteps.map((step, idx) => (
              <div
                key={step.name}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative group hover:border-emerald-500/60 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 mb-2">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white font-display">{step.name}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>

                {/* Arrow indicator */}
                {idx < funnelSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-400 pointer-events-none">
                    →
                  </div>
                )}
                {idx < funnelSteps.length - 1 && (
                  <div className="md:hidden mt-3 text-emerald-400">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Attribution Mechanisms Bento Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white font-display">
              Six Built-In Attribution Capabilities
            </h3>
            <span className="text-xs text-slate-400">Select any card to inspect mechanism</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attributionFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = selectedTech === idx;
              return (
                <div
                  key={feat.id}
                  onClick={() => setSelectedTech(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 tabular-nums">
                      {feat.metricValue}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display">{feat.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.summary}</p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                    {feat.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
