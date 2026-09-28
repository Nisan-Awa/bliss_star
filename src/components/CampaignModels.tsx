import React, { useState } from 'react';
import { DollarSign, Percent, Zap, Layers, Calculator, ArrowRight } from 'lucide-react';

interface CampaignModelsProps {
  onOpenBrandRegister: () => void;
}

export const CampaignModels: React.FC<CampaignModelsProps> = ({ onOpenBrandRegister }) => {
  // Interactive mini calculator states
  const [productPrice, setProductPrice] = useState<number>(25000);
  const [estimatedSales, setEstimatedSales] = useState<number>(40);
  const [selectedModel, setSelectedModel] = useState<'fixed' | 'performance' | 'commission' | 'hybrid'>('hybrid');

  const models = [
    {
      id: 'fixed',
      name: 'Fixed Payment',
      tagline: 'Guaranteed content deliverables',
      example: '₦50,000 flat per creator',
      description: 'Ideal for brand launch assets, high-production UGC videos, and initial awareness campaigns where content usage rights are paramount.',
      suitability: 'High-production video, product launches, lookbooks',
      icon: DollarSign,
      color: 'text-blue-400',
      borderHover: 'hover:border-blue-500/60',
    },
    {
      id: 'performance',
      name: 'Performance Payment',
      tagline: 'Earn on verified inquiries & leads',
      example: '₦500 per verified lead',
      description: 'Pay creators strictly when their content drives measurable user actions, such as qualified WhatsApp chats, app downloads, or store inquiries.',
      suitability: 'Fintech signups, service bookings, real estate leads',
      icon: Zap,
      color: 'text-amber-400',
      borderHover: 'hover:border-amber-500/60',
    },
    {
      id: 'commission',
      name: 'Sales Commission',
      tagline: 'Share in direct revenue created',
      example: '10% on every verified order',
      description: 'Zero upfront risk for brands. Creators earn a clear percentage on every verified purchase made through their unique referral link or promo code.',
      suitability: 'E-commerce, skincare, fashion, digital products',
      icon: Percent,
      color: 'text-emerald-400',
      borderHover: 'hover:border-emerald-500/60',
    },
    {
      id: 'hybrid',
      name: 'Hybrid Model',
      tagline: 'Base stipend + performance upside',
      example: '₦20,000 base + 10% commission',
      description: 'The preferred model for top African creators. Guarantees production costs while incentivizing energetic long-tail sales generation.',
      suitability: 'High-growth brands scaling reliable monthly revenue',
      icon: Layers,
      color: 'text-purple-400',
      borderHover: 'hover:border-purple-500/60',
    },
  ];

  // Calculations
  const grossRevenue = productPrice * estimatedSales;
  let estimatedCreatorCost = 0;
  if (selectedModel === 'fixed') {
    estimatedCreatorCost = 50000;
  } else if (selectedModel === 'performance') {
    // assume 1 sale per 3 leads
    estimatedCreatorCost = estimatedSales * 3 * 500;
  } else if (selectedModel === 'commission') {
    estimatedCreatorCost = grossRevenue * 0.10;
  } else {
    estimatedCreatorCost = 20000 + (grossRevenue * 0.10);
  }
  const netBrandMargin = grossRevenue - estimatedCreatorCost;

  return (
    <section className="py-20 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-emerald-400">FLEXIBLE COMMERCIAL STRUCTURES</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
            Four ways to structure creator compensation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business has different margins and growth objectives. Bliss Star supports flexible structures so you can align creator incentives directly with your business goals.
          </p>
        </div>

        {/* 4 Models Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {models.map((model) => {
            const Icon = model.icon;
            const isSelected = selectedModel === model.id;
            return (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model.id as any)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800">
                      <Icon className={`w-5 h-5 ${model.color}`} />
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                        Selected in Calc
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">{model.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{model.tagline}</p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono font-bold text-emerald-400 tabular-nums">
                    {model.example}
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Best for: </span>
                  {model.suitability}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Campaign Model Simulator */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE PAYOUT SIMULATOR</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                Estimate Creator Compensation vs Revenue
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Adjust variables to test unit economics
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders on Left */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-slate-300">Average Product Price</span>
                  <span className="text-emerald-400 font-mono font-bold tabular-nums">₦{productPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  value={productPrice}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>₦5,000</span>
                  <span>₦50,000</span>
                  <span>₦100,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-slate-300">Projected Monthly Sales (from Creator)</span>
                  <span className="text-emerald-400 font-mono font-bold tabular-nums">{estimatedSales} Orders</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={estimatedSales}
                  onChange={(e) => setEstimatedSales(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>10 orders</span>
                  <span>75 orders</span>
                  <span>150 orders</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-slate-400">Active Model:</span>
                <span className="text-xs font-semibold text-white px-2.5 py-1 bg-slate-800 rounded-md border border-slate-700 capitalize">
                  {selectedModel}
                </span>
                <span className="text-[11px] text-slate-400">(Click any card above to switch)</span>
              </div>
            </div>

            {/* Results Snapshot on Right */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">Gross Revenue</span>
                <div className="text-lg font-bold text-white font-mono mt-1 tabular-nums">
                  ₦{grossRevenue.toLocaleString()}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">From {estimatedSales} customer orders</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">Creator Payout</span>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1 tabular-nums">
                  ₦{estimatedCreatorCost.toLocaleString()}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Based on {selectedModel} model</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-900/40">
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">Net Brand Margin</span>
                <div className="text-lg font-bold text-cyan-300 font-mono mt-1 tabular-nums">
                  ₦{netBrandMargin.toLocaleString()}
                </div>
                <p className="text-[10px] text-cyan-400/80 mt-1">Pre-product fulfillment</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              These are illustrative calculations to assist with campaign planning. Actual terms are established during campaign creation.
            </span>
            <button
              onClick={onOpenBrandRegister}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Build Campaign with This Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
