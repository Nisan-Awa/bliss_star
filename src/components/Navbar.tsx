import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBrandRegister: () => void;
  onOpenCreatorRegister: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrandRegister,
  onOpenCreatorRegister,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'For Brands', id: 'for-brands' },
    { label: 'For Creators', id: 'for-creators' },
    { label: 'Campaigns', id: 'campaigns' },
    { label: 'Attribution', id: 'attribution' },
    { label: 'Waitlist', id: 'waitlist' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left font-display text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors cursor-pointer"
        >
          Bliss Star
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-white transition-colors cursor-pointer relative py-1 text-slate-300 hover:text-emerald-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary action controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBrandRegister}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Start a Campaign
          </button>
          <button
            onClick={onOpenCreatorRegister}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>Become a Creator</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-5 pt-3 pb-6 flex flex-col gap-4 animate-in fade-in">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
            >
              Contact
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenBrandRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              For Brands — Start a Campaign
            </button>
            <button
              onClick={() => {
                onOpenCreatorRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Become a Creator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
