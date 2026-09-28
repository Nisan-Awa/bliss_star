import React, { useState } from 'react';
import { ArrowRight, Search, PlusCircle, CheckSquare, BarChart3, ShieldCheck, Users, Eye, ShoppingCart, TrendingUp } from 'lucide-react';
import { DEMO_BRAND_CAMPAIGN } from '../data/mockData';

interface BrandSectionProps {
  onOpenBrandRegister: () => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ onOpenBrandRegister }) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'roster'>('metrics');

  const capabilities = [
    {
      title: 'Find Creators',
      desc: 'Discover verified African creators filtered by niche, engagement quality, audience geography, and conversion history.',
      icon: Search,
    },
    {
      title: 'Launch Campaigns',
      desc: 'Publish clear deliverable briefs with defined objectives, usage rights, deadlines, and tailored compensation structures.',
      icon: PlusCircle,
    },
    {
      title: 'Manage Content',
      desc: 'Review submitted video drafts, request edits, and approve final assets inside a streamlined workflow before public posting.',
      icon: CheckSquare,
    },
    {
      title: 'Track Results',
      desc: 'Monitor real-time views, unique clicks, WhatsApp conversations initiated, customer leads, and confirmed checkouts.',
      icon: BarChart3,
    },
    {
      title: 'Pay for Performance',
      desc: 'Seamlessly disburse base stipends and automated performance bonuses to creators based on verified outcomes.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="for-brands" className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-emerald-400">FOR AFRICAN BRANDS & BUSINESSES</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
              Launch creator campaigns that drive business.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Stop guessing if influencer marketing works. Deploy creators with clear briefs, track real customer conversions, and scale the partnerships that generate revenue.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBrandRegister}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center gap-2"
            >
              <span>Start a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">{cap.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
                  Capability 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Dashboard Mockup / Preview */}
        <div className="mt-16 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
          {/* Dashboard Top Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white font-display">
                    Campaign: {DEMO_BRAND_CAMPAIGN.campaignName}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    Active Pilot
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Budget: <span className="font-mono text-white tabular-nums">{DEMO_BRAND_CAMPAIGN.budget}</span> · Spent: <span className="font-mono text-white tabular-nums">{DEMO_BRAND_CAMPAIGN.spent}</span>
                </p>
              </div>
            </div>

            {/* View Selector & Demo Label */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-900/60 px-2.5 py-1 rounded-md">
                UI Demonstration Data
              </span>
              <div className="flex p-1 bg-slate-950 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1 text-xs font-medium rounded cursor-pointer ${
                    activeTab === 'metrics' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview Metrics
                </button>
                <button
                  onClick={() => setActiveTab('roster')}
                  className={`px-3 py-1 text-xs font-medium rounded cursor-pointer ${
                    activeTab === 'roster' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Creator Roster ({DEMO_BRAND_CAMPAIGN.creatorsCount})
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'metrics' ? (
              <div className="space-y-6">
                {/* 5 Core Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium">Total Views</span>
                    <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
                      {DEMO_BRAND_CAMPAIGN.views}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">Across 34 video assets</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium">Attributed Clicks</span>
                    <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
                      12,480
                    </div>
                    <span className="text-[10px] text-emerald-400 mt-1 block font-mono">3.0% CTR</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium">WhatsApp Leads</span>
                    <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
                      1,284
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">Inquiries logged</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium">Confirmed Sales</span>
                    <div className="text-2xl font-bold text-emerald-400 font-mono mt-1 tabular-nums">
                      {DEMO_BRAND_CAMPAIGN.sales}
                    </div>
                    <span className="text-[10px] text-emerald-400 mt-1 block font-mono">24.3% Lead Close</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-900/40 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-400 font-medium">Verified Revenue</span>
                    <div className="text-2xl font-bold text-cyan-300 font-mono mt-1 tabular-nums">
                      {DEMO_BRAND_CAMPAIGN.revenue}
                    </div>
                    <span className="text-[10px] text-cyan-400 mt-1 block font-mono">
                      ROI: {DEMO_BRAND_CAMPAIGN.roi}
                    </span>
                  </div>
                </div>

                {/* Core Affirmation Banner */}
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">
                      Don&apos;t just measure reach. Measure business.
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Views build awareness, but attributed orders keep African businesses running. With Bliss Star, every creator dollar connects directly to an acquisition record.
                    </p>
                  </div>
                  <button
                    onClick={onOpenBrandRegister}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg whitespace-nowrap cursor-pointer"
                  >
                    Launch a Pilot Campaign
                  </button>
                </div>
              </div>
            ) : (
              /* Creator Roster Breakdown View */
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono">
                      <th className="pb-3 font-medium">Creator</th>
                      <th className="pb-3 font-medium">Content Delivered</th>
                      <th className="pb-3 font-medium text-right">Orders Generated</th>
                      <th className="pb-3 font-medium text-right">Revenue Driven</th>
                      <th className="pb-3 font-medium text-right">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {DEMO_BRAND_CAMPAIGN.topPerformers.map((perf) => (
                      <tr key={perf.name} className="hover:bg-slate-800/30">
                        <td className="py-3.5 pr-4">
                          <div className="font-semibold text-white">{perf.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono">{perf.handle}</div>
                        </td>
                        <td className="py-3.5 text-slate-300">{perf.content}</td>
                        <td className="py-3.5 text-right font-mono font-semibold text-emerald-400 tabular-nums">
                          {perf.sales} orders
                        </td>
                        <td className="py-3.5 text-right font-mono font-semibold text-white tabular-nums">
                          {perf.revenue}
                        </td>
                        <td className="py-3.5 text-right font-mono text-cyan-400 tabular-nums">
                          {perf.convRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-[11px] text-slate-400 text-right">
                  *Demonstration preview data. Real campaign dashboards connect to live creator links.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
