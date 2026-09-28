import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, MapPin, CheckCircle, ArrowRight, Video, Sparkles, Tag, ArrowUpRight } from 'lucide-react';
import { Campaign, CampaignModelType } from '../types';
import { SAMPLE_CAMPAIGNS } from '../data/mockData';

interface CampaignsExplorerProps {
  onSelectCampaignForApply: (campaign: Campaign) => void;
  onOpenBrandRegister: () => void;
}

export const CampaignsExplorer: React.FC<CampaignsExplorerProps> = ({
  onSelectCampaignForApply,
  onOpenBrandRegister,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [onlyRemote, setOnlyRemote] = useState<boolean>(false);

  const categories = ['All', 'Beauty & Skincare', 'Fintech & SaaS', 'Fashion & Lifestyle', 'Food & Hospitality', 'Real Estate & Hospitality'];
  const compensationModels = ['All', 'fixed', 'performance', 'commission', 'hybrid'];
  const platforms = ['All', 'tiktok', 'instagram', 'youtube'];

  const filteredCampaigns = useMemo(() => {
    return SAMPLE_CAMPAIGNS.filter((camp) => {
      // Search
      const matchesSearch =
        camp.campaignTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camp.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        camp.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const matchesCategory = selectedCategory === 'All' || camp.brandCategory === selectedCategory;

      // Model
      const matchesModel = selectedModel === 'All' || camp.compensationType === selectedModel;

      // Platform
      const matchesPlatform = selectedPlatform === 'All' || camp.platform.includes(selectedPlatform as any);

      // Remote
      const matchesRemote = !onlyRemote || camp.remote;

      return matchesSearch && matchesCategory && matchesModel && matchesPlatform && matchesRemote;
    });
  }, [searchQuery, selectedCategory, selectedModel, selectedPlatform, onlyRemote]);

  return (
    <section id="campaigns" className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <p className="text-xs font-semibold tracking-wider text-emerald-400">CAMPAIGN MARKETPLACE</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
              Active Brand Briefs
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              Browse verified commercial opportunities. Filter by industry, payout model, and deliverables, then apply with your pitch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBrandRegister}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Post a Campaign Brief
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search campaigns, brands, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Remote Checkbox */}
            <label className="flex items-center gap-2 text-xs text-slate-300 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={onlyRemote}
                onChange={(e) => setOnlyRemote(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer"
              />
              <span>Remote Only</span>
            </label>
          </div>

          {/* Filter Pills / Buttons (Functional interactive controls) */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-800/80 text-xs">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-medium mr-1">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-400 text-slate-950 font-semibold'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Compensation Model Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-medium mr-1">Payout:</span>
              {compensationModels.map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModel(mod)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-colors cursor-pointer ${
                    selectedModel === mod
                      ? 'bg-emerald-400 text-slate-950 font-semibold'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>

            {/* Platform Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-medium mr-1">Platform:</span>
              {platforms.map((plat) => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-colors cursor-pointer ${
                    selectedPlatform === plat
                      ? 'bg-emerald-400 text-slate-950 font-semibold'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count & Status */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <div>
            Showing <span className="font-mono text-white tabular-nums font-semibold">{filteredCampaigns.length}</span> active campaign briefs
          </div>
          <span className="font-mono">Demonstration Marketplace</span>
        </div>

        {/* Campaign Cards Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Brand & Category Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">{camp.brandName}</h3>
                    <p className="text-[11px] text-slate-400">{camp.brandCategory}</p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {camp.compensationType}
                  </span>
                </div>

                {/* Campaign Title & Description */}
                <h4 className="mt-3 text-base font-bold text-white font-display leading-snug">
                  {camp.campaignTitle}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {camp.description}
                </p>

                {/* Deliverables */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Deliverables</span>
                  <ul className="space-y-1 text-slate-200">
                    {camp.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation & Bonus */}
                <div className="mt-3.5 space-y-1 text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-400">Compensation:</span>
                    <span className="font-mono font-semibold text-emerald-400 tabular-nums">
                      {camp.payoutDetails}
                    </span>
                  </div>
                  {camp.bonusDetails && (
                    <div className="flex items-baseline justify-between text-[11px]">
                      <span className="text-slate-400">Bonus:</span>
                      <span className="font-mono text-cyan-300 tabular-nums">{camp.bonusDetails}</span>
                    </div>
                  )}
                </div>

                {/* Key Metadata (unboxed text discipline) */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Usage Rights:</span>
                    <span className="text-slate-200">{camp.usageRights}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Deadline:</span>
                    <span className="text-slate-200">{camp.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Location:</span>
                    <span className="text-slate-200">{camp.location} {camp.remote && '(Remote OK)'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 font-mono">
                  {camp.slotsRemaining} of {camp.slotsTotal} slots open
                </span>
                <button
                  onClick={() => onSelectCampaignForApply(camp)}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="mt-8 p-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <p className="text-sm font-semibold text-white">No campaigns found matching your filters</p>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting &quot;All&quot; categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedModel('All');
                setSelectedPlatform('All');
                setOnlyRemote(false);
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/40 rounded-lg hover:bg-emerald-950/30"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
