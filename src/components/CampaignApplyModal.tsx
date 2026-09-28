import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { Campaign, CreatorApplication } from '../types';

interface CampaignApplyModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitApplication: (app: CreatorApplication) => void;
}

export const CampaignApplyModal: React.FC<CampaignApplyModalProps> = ({
  campaign,
  isOpen,
  onClose,
  onSubmitApplication,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [pitch, setPitch] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen || !campaign) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email';
    if (!phone.trim()) errs.phone = 'Please provide a WhatsApp contact';
    if (!portfolioUrl.trim()) errs.portfolioUrl = 'Please provide a portfolio or recent video link';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmitApplication({
      campaignId: campaign.id,
      campaignTitle: campaign.campaignTitle,
      creatorName: name,
      email,
      phone,
      portfolioUrl,
      pitch,
      submittedAt: new Date().toISOString(),
    });

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="pb-4 border-b border-slate-800">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wide">
                Campaign Application
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {campaign.campaignTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {campaign.brandName} · {campaign.payoutDetails}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Blessing Eke"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="blessing@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Portfolio / Best Video URL <span className="text-rose-400">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://tiktok.com/@handle or Google Drive link"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                {errors.portfolioUrl && <p className="text-[11px] text-rose-400 mt-1">{errors.portfolioUrl}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Creative Pitch / Hook Idea (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your concept or angle for this campaign..."
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Application Received!</h3>
            <p className="mt-2 text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your application for <strong>{campaign.campaignTitle}</strong> has been logged to the review queue. The brand team will review your portfolio and outreach via WhatsApp.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs">
              <div className="text-slate-400">Applicant: <span className="text-white font-medium">{name}</span></div>
              <div className="text-slate-400 mt-1">Deliverables: <span className="text-white">{campaign.deliverables.join(' + ')}</span></div>
              <div className="text-slate-400 mt-1">Payout: <span className="text-emerald-400 font-mono">{campaign.payoutDetails}</span></div>
            </div>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
            >
              Back to Campaigns
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
