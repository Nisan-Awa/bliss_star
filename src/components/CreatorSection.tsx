import React from 'react';
import { ArrowUpRight, CheckCircle2, Award, Wallet, TrendingUp, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { DEMO_CREATOR, DEMO_CREATOR_DASHBOARD } from '../data/mockData';

interface CreatorSectionProps {
  onOpenCreatorRegister: () => void;
  onApplyDemoCampaign: () => void;
}

export const CreatorSection: React.FC<CreatorSectionProps> = ({
  onOpenCreatorRegister,
  onApplyDemoCampaign,
}) => {
  const creatorBenefits = [
    { title: 'Discover Campaigns', desc: 'Browse active commercial briefs from legitimate African brands across beauty, tech, fashion, food, and lifestyle.' },
    { title: 'Apply to Opportunities', desc: 'Submit tailored pitch ideas, pricing, and showcase relevant past content in seconds.' },
    { title: 'Create Authentic Content', desc: 'Produce high-converting TikToks, Instagram Reels, and UGC videos in your own creative voice.' },
    { title: 'Drive Clicks & Conversions', desc: 'Share unique bio links, custom discount promo codes, or tagged WhatsApp inquiries with your audience.' },
    { title: 'Build Performance History', desc: 'Every verified click, lead, and sale adds to your permanent creator reputation score.' },
    { title: 'Earn Fixed Payments', desc: 'Receive guaranteed upfront production compensation for approved deliverables on schedule.' },
    { title: 'Earn Uncapped Commissions', desc: 'Generate long-tail recurring revenue with transparent percentage splits on customer orders.' },
    { title: 'Credibility Beyond Follower Count', desc: 'Get hired based on actual customer acquisition power, not vanity metrics or purchased followers.' },
  ];

  return (
    <section id="for-creators" className="py-20 bg-[#090D16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-emerald-400">FOR AFRICAN CONTENT CREATORS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
              Create. Convert. Earn.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Find campaigns, create content and build a track record based on the results you generate. You don’t need 100,000 followers to earn serious income — you just need an audience that trusts your recommendations.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenCreatorRegister}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center gap-2"
            >
              <span>Join the Creator Network</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Creator Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {creatorBenefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-emerald-400">0{idx + 1}</span>
                <h3 className="text-sm font-bold text-white font-display mt-1">{benefit.title}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Previews: Creator Dashboard Mockup & Professional Creator Profile Card */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Creator Dashboard Preview (Col span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-emerald-400">CREATOR PORTAL DEMO</span>
                  <h3 className="text-lg font-bold text-white font-display">Earnings & Campaign Ledger</h3>
                </div>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-900/60 px-2.5 py-0.5 rounded-md">
                  UI Demonstration Data
                </span>
              </div>

              {/* Balances & Stats Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400">Available Balance</span>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1 tabular-nums">
                    {DEMO_CREATOR_DASHBOARD.availableBalance}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Instant bank payout</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400">Pending</span>
                  <div className="text-xl font-bold text-amber-300 font-mono mt-1 tabular-nums">
                    {DEMO_CREATOR_DASHBOARD.pendingBalance}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">In deliverable escrow</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400">Total Earned</span>
                  <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">
                    {DEMO_CREATOR_DASHBOARD.totalEarned}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Platform lifetime</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400">Campaigns Participated</span>
                  <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">
                    {DEMO_CREATOR_DASHBOARD.campaignsParticipated}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">100% completed</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-950/80 col-span-2">
                  <span className="text-[11px] text-slate-400">Sales Generated</span>
                  <div className="text-xl font-bold text-cyan-300 font-mono mt-1 tabular-nums">
                    {DEMO_CREATOR_DASHBOARD.salesGenerated}
                  </div>
                  <span className="text-[10px] text-cyan-400 mt-1 block">Verified customer acquisition</span>
                </div>
              </div>

              {/* Available Campaign Opportunity Card */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white font-display">
                      {DEMO_CREATOR_DASHBOARD.activeCampaign.brand}
                    </span>
                    <span className="text-[11px] text-slate-400">· {DEMO_CREATOR_DASHBOARD.activeCampaign.type}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono font-semibold text-emerald-400">
                      {DEMO_CREATOR_DASHBOARD.activeCampaign.fixedPayout}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="font-mono text-cyan-300">
                      {DEMO_CREATOR_DASHBOARD.activeCampaign.commission}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onApplyDemoCampaign}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                >
                  Apply to Campaign
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
              *Real creator dashboard connects directly to local bank accounts (Naira, Kenyan Shilling, Ghanaian Cedi).
            </div>
          </div>

          {/* Professional Creator Profile Card (Col span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">CREATOR PROFILE CARD</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Creator ✓</span>
                </span>
              </div>

              {/* Creator Headshot Avatar & Identity */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-800 p-0.5 shadow-md shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center font-display text-xl font-bold text-emerald-300">
                    {DEMO_CREATOR.avatarInitials}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white font-display">{DEMO_CREATOR.name}</h3>
                    <span className="text-xs text-emerald-400 font-semibold">✓</span>
                  </div>
                  <p className="text-xs font-mono text-slate-400">{DEMO_CREATOR.handle}</p>
                  <p className="text-xs text-slate-300 mt-1">
                    {DEMO_CREATOR.niches.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Creator Audience & Historical Engagement */}
              <div className="mt-6 grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block">Followers</span>
                  <span className="text-sm font-bold text-white font-mono tabular-nums">{DEMO_CREATOR.followers}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Avg Views</span>
                  <span className="text-sm font-bold text-white font-mono tabular-nums">{DEMO_CREATOR.averageViews}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Engagement</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono tabular-nums">{DEMO_CREATOR.engagementRate}</span>
                </div>
              </div>

              {/* Performance Record (The Key Differentiator) */}
              <div className="mt-5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-2">
                  Performance Track Record
                </span>
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60">
                  <span className="text-slate-300">Campaigns Participated:</span>
                  <span className="font-mono font-bold text-white tabular-nums">{DEMO_CREATOR.campaignsCompleted}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60">
                  <span className="text-slate-300">Sales Generated:</span>
                  <span className="font-mono font-bold text-cyan-300 tabular-nums">{DEMO_CREATOR.salesGenerated}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-300">Campaign Completion Rate:</span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{DEMO_CREATOR.completionRate}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Location: {DEMO_CREATOR.location}</span>
              <span className="text-amber-400/80 font-mono">Demo Profile Card</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
