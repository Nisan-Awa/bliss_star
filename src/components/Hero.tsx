import React, { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Check, Users, ShoppingBag, MessageSquare, ArrowUpRight } from 'lucide-react';
import { UserRole } from '../types';

interface HeroProps {
  userRole: UserRole;
  onChangeUserRole: (role: UserRole) => void;
  onOpenBrandRegister: () => void;
  onOpenCreatorRegister: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  userRole,
  onChangeUserRole,
  onOpenBrandRegister,
  onOpenCreatorRegister,
  onNavigateSection,
}) => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default on Sales

  const journeySteps = [
    {
      title: 'Content',
      subtitle: 'Creator Production',
      metric: '34 Video Assets',
      detail: 'High-converting TikToks & Instagram Reels crafted for your specific product.',
      icon: Users,
    },
    {
      title: 'Clicks',
      subtitle: 'Attributed Traffic',
      metric: '12,480 Clicks',
      detail: 'Unique bio links, pinned story URLs, and promo code attribution.',
      icon: TrendingUp,
    },
    {
      title: 'Leads',
      subtitle: 'WhatsApp & Web',
      metric: '1,284 Inquiries',
      detail: 'Direct conversational WhatsApp chats pre-tagged with creator tracking codes.',
      icon: MessageSquare,
    },
    {
      title: 'Sales',
      subtitle: 'Measurable Revenue',
      metric: '₦2,400,000 Generated',
      detail: 'Verified customer orders with automated creator commission calculation.',
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden">
      {/* Background architectural glow elements (subtle, non-distracting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Positioning tag & role switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">CREATOR-POWERED CUSTOMER ACQUISITION FOR AFRICAN BUSINESSES</span>
          </div>

          {/* Interactive Role Switcher */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => onChangeUserRole('brand')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                userRole === 'brand'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              I&apos;m a Brand
            </button>
            <button
              onClick={() => onChangeUserRole('creator')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                userRole === 'creator'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              I&apos;m a Creator
            </button>
          </div>
        </div>

        {/* Hero headline and supporting text */}
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
            Turn Creators <br className="hidden sm:inline" />
            <span className="text-emerald-400">Into Customers.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {userRole === 'brand'
              ? 'Connect with creators who don’t just create content — they drive measurable results. Stop paying for content alone. Start paying for business growth.'
              : 'Find verified campaigns, create compelling content, and build a performance track record based on the actual clicks, leads, and sales you generate.'}
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={userRole === 'brand' ? onOpenBrandRegister : () => onNavigateSection('for-brands')}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-500/15 flex items-center gap-2"
            >
              <span>For Brands</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={userRole === 'creator' ? onOpenCreatorRegister : () => onNavigateSection('for-creators')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Become a Creator</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              onClick={() => onNavigateSection('how-it-works')}
              className="px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Explore How It Works
            </button>
          </div>
        </div>

        {/* The Core Journey Visualizer: Content -> Clicks -> Leads -> Sales */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-slate-400">THE PERFORMANCE PIPELINE</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Content → Clicks → Leads → Sales
              </h2>
            </div>
            <span className="text-xs text-slate-400 self-start md:self-auto">
              Click any stage below to inspect the attribution mechanism
            </span>
          </div>

          {/* 4 Interactive Journey Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-900/95 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-slate-400">
                      Step 0{idx + 1}
                    </span>
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{step.subtitle}</p>

                  <div className="mt-4 pt-3 border-t border-slate-800/70">
                    <div className="text-sm font-semibold font-mono text-emerald-400 tabular-nums">
                      {step.metric}
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Micro active explanation banner */}
          <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>
                <strong>Active Attribution Path:</strong> Creator video content directly drives trackable WhatsApp inquiries & merchant orders across Nigeria, Kenya, and Ghana.
              </span>
            </div>
            <button
              onClick={() => onNavigateSection('attribution')}
              className="text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap self-end sm:self-auto cursor-pointer"
            >
              See Attribution Architecture →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
