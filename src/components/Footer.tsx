import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBrandRegister: () => void;
  onOpenCreatorRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenBrandRegister,
  onOpenCreatorRegister,
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigateSection('hero')}
              className="text-left font-display text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Bliss Star Media
            </button>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              A creator-powered customer acquisition platform for African businesses.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Stop paying for content alone. Start paying for measurable business results.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBrandRegister}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                For Brands
              </button>
              <button
                onClick={onOpenCreatorRegister}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                For Creators
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('attribution')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Attribution Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('campaigns')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Campaigns Marketplace
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('waitlist')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Audience</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('for-brands')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  For Brands
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('for-creators')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  For Creators
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCreatorRegister}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Creator Registration
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBrandRegister}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Brand Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Placeholders */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Network & Social</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Desk
                </button>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-default">
                  <span>TikTok</span>
                  <span className="text-[10px] text-slate-500 font-mono">@blissstarmedia</span>
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-default">
                  <span>Instagram</span>
                  <span className="text-[10px] text-slate-500 font-mono">@blissstarmedia</span>
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-default">
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-slate-500 font-mono">Bliss Star Media</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Bliss Star Media. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Creator Commerce Infrastructure for Africa</span>
            <span>·</span>
            <span className="text-slate-400">Lagos · Nairobi · Accra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
