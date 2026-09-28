import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Briefcase, Users, FileCheck, LineChart, CreditCard, Sparkles, UserPlus, Compass, Send, Video, MousePointerClick, Wallet } from 'lucide-react';
import { UserRole } from '../types';

interface HowItWorksProps {
  initialRole?: UserRole;
  onOpenBrandRegister: () => void;
  onOpenCreatorRegister: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  initialRole = 'brand',
  onOpenBrandRegister,
  onOpenCreatorRegister,
}) => {
  const [activePathway, setActivePathway] = useState<UserRole>(initialRole);

  const brandSteps = [
    {
      step: '01',
      title: 'Create a campaign',
      desc: 'Define your product or service, campaign objective (awareness, leads, or sales), target audience, budget, and creators needed.',
      icon: Briefcase,
    },
    {
      step: '02',
      title: 'Select creators',
      desc: 'Discover verified African creators and evaluate their past campaign performance, engagement quality, and audience alignment.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Manage content',
      desc: 'Review video concepts, approve drafts, coordinate revisions, and manage deliverables inside one unified dashboard.',
      icon: FileCheck,
    },
    {
      step: '04',
      title: 'Track performance',
      desc: 'Monitor real-time views, unique clicks, WhatsApp conversations, qualified leads, and confirmed customer sales.',
      icon: LineChart,
    },
    {
      step: '05',
      title: 'Pay for results',
      desc: 'Compensate creators automatically according to your agreed model: fixed stipend, verified pay-per-lead, or sales commission.',
      icon: CreditCard,
    },
  ];

  const creatorSteps = [
    {
      step: '01',
      title: 'Join',
      desc: 'Create your creator profile with social handles, content niche, past portfolio, and verified audience demographics.',
      icon: UserPlus,
    },
    {
      step: '02',
      title: 'Discover',
      desc: 'Browse open commercial briefs from verified African brands across beauty, tech, fashion, food, lifestyle, and services.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Apply',
      desc: 'Submit your creative concept, deliverable timeline, portfolio links, and preferred compensation terms with one click.',
      icon: Send,
    },
    {
      step: '04',
      title: 'Create',
      desc: 'Produce high-converting TikToks, Instagram Reels, and UGC videos following the brand’s approved creative brief.',
      icon: Video,
    },
    {
      step: '05',
      title: 'Convert',
      desc: 'Share unique creator links, discount promo codes, or tagged WhatsApp inquiries to direct your audience into action.',
      icon: MousePointerClick,
    },
    {
      step: '06',
      title: 'Earn',
      desc: 'Receive guaranteed fixed payments, performance bonuses, or uncapped sales commissions directly into your local bank account.',
      icon: Wallet,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Pathway Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <p className="text-xs font-semibold tracking-wider text-emerald-400">CLEAR WORKFLOW & PATHWAYS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
              How It Works
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              A transparent, predictable process designed for commercial accountability and creator independence.
            </p>
          </div>

          {/* Interactive Pathway Selector */}
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActivePathway('brand')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activePathway === 'brand'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Brands (5 Steps)
            </button>
            <button
              onClick={() => setActivePathway('creator')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activePathway === 'creator'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Creators (6 Steps)
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mt-12">
          {activePathway === 'brand' ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {brandSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-emerald-400">{item.step}</span>
                          <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Ready to acquire customers with verified creators?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Define your campaign objective and launch a pilot with qualified creators.</p>
                </div>
                <button
                  onClick={onOpenBrandRegister}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Start a Campaign
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {creatorSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-emerald-400">{item.step}</span>
                          <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Ready to turn your content into predictable earnings?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Submit your onboarding profile and get matched with commercial briefs.</p>
                </div>
                <button
                  onClick={onOpenCreatorRegister}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Join the Creator Network
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
