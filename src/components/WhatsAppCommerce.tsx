import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';

export const WhatsAppCommerce: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'chat_demo'>('chat_demo');

  return (
    <section className="py-20 bg-slate-950/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Conceptual & African Reality Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>AFRICAN COMMERCE REALITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
              Turn creator attention <br />
              <span className="text-emerald-400">into conversations.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              In African markets, customers don’t always want to navigate high-friction foreign web checkouts, fill out 10 form fields, or risk card drop-offs.
              They want to speak to someone, confirm stock, discuss delivery, and pay directly.
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-mono font-semibold text-emerald-400 mb-2">
                THE CONVERSATIONAL ATTRIBUTION PATH
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="px-2.5 py-1 bg-slate-800 rounded-md">Customer</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                <span className="px-2.5 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 rounded-md">WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                <span className="px-2.5 py-1 bg-slate-800 rounded-md">Brand</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                <span className="px-2.5 py-1 bg-slate-800 rounded-md">Purchase</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 rounded-md">Creator Commission</span>
              </div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                When a customer clicks a creator’s link, they are instantly redirected to WhatsApp with a pre-filled message token. When the brand confirms the order, the system attributes the sale and credits the creator.
              </p>
            </div>

            {/* Future Roadmap Disclaimer Box */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-semibold text-slate-200 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Roadmap Capabilities in Development (Post-MVP)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                While current MVP campaigns utilize verified referral tokens and direct conversation links, our future roadmap includes automated WhatsApp product catalogues, automated AI lead qualification, in-chat order collection, automated payment settlement, and structured customer follow-ups.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp UI Simulation */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0b141a] border border-slate-800 shadow-2xl overflow-hidden max-w-sm mx-auto">
              {/* WhatsApp Simulated Header */}
              <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-700/80 flex items-center justify-center font-display font-bold text-white text-sm">
                    G
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Glow Skin Africa</h4>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      <span>Official Brand Account</span>
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400">Attributed</div>
              </div>

              {/* Chat Canvas */}
              <div className="p-4 space-y-3 bg-[#0b141a] min-h-[340px] flex flex-col justify-end text-xs">
                {/* System notification */}
                <div className="mx-auto bg-[#182229] text-slate-400 text-[10px] px-3 py-1 rounded-md text-center max-w-[280px]">
                  Referral code authenticated: <span className="text-emerald-400 font-mono">#BLISS-BLESSING-GLOW</span>
                </div>

                {/* Inbound Customer Message (Pre-filled from Creator's link) */}
                <div className="self-end bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                  <p>
                    Hello Glow Skin! I saw Blessing’s video on TikTok and I want to order the Radiance Vitamin C Serum set.
                  </p>
                  <div className="mt-1.5 pt-1.5 border-t border-emerald-700/50 flex items-center justify-between text-[10px] text-emerald-200 font-mono">
                    <span>Ref: #BLISS-BLESSING-GLOW</span>
                    <span>14:32 ✓✓</span>
                  </div>
                </div>

                {/* Brand Reply */}
                <div className="self-start bg-[#202c33] text-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                  <p>
                    Hi Amina! Welcome. We have reserved your set with Blessing’s 10% founding discount (₦22,500 instead of ₦25,000). Delivery in Lagos is tomorrow.
                  </p>
                  <p className="mt-1 text-slate-300 font-medium">
                    Shall we dispatch to your address in Lekki Phase 1?
                  </p>
                  <span className="block text-[10px] text-slate-400 text-right mt-1 font-mono">14:34</span>
                </div>

                {/* System Verification Tag */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 flex items-center gap-2 text-[11px] text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Order Confirmed · ₦2,250 Creator Commission automatically logged to Blessing</span>
                </div>
              </div>

              {/* Bottom WhatsApp bar */}
              <div className="bg-[#1f2c34] p-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span className="text-slate-400">Type a message...</span>
                <span className="font-mono text-emerald-400 text-[11px]">Direct Attribution ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
