import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandRegistrationData } from '../types';

interface BrandRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BrandRegistrationData) => void;
}

export const BrandRegistrationModal: React.FC<BrandRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<BrandRegistrationData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: 'Beauty & Skincare',
    website: '',
    productDescription: '',
    objective: 'Drive Direct Sales & Revenue',
    budgetRange: '₦500,000 - ₦2,000,000',
    creatorPreferences: ['UGC Creators', 'Micro-influencers'],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.contactName.trim()) errs.contactName = 'Contact person name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp is required';
    if (!formData.productDescription.trim()) errs.productDescription = 'Please tell us what product/service you want to promote';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
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
                BRAND ONBOARDING & PILOT
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                Start a Creator Campaign
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect your product with verified African creators who drive measurable content, qualified leads, and tracked customer sales.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Company & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Brand Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Glow Skin Africa"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Contact Person Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tunde Adebayo"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.contactName && <p className="text-[11px] text-rose-400 mt-1">{errors.contactName}</p>}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="tunde@glowskin.africa"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Industry & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Industry / Sector</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Beauty & Skincare">Beauty & Skincare</option>
                    <option value="Fashion & Apparel">Fashion & Apparel</option>
                    <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                    <option value="Food & Hospitality">Food & Hospitality</option>
                    <option value="Fintech & SaaS">Fintech & SaaS</option>
                    <option value="Real Estate & Living">Real Estate & Living</option>
                    <option value="Fitness & Wellness">Fitness & Wellness</option>
                    <option value="Education & Coaching">Education & Coaching</option>
                    <option value="Lifestyle & Personal Brand">Lifestyle & Personal Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Website or Social URL</label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com or @instagram"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Product / Service Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Product or Service Being Promoted <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Launching our new Vitamin C glow serum with pan-African shipping..."
                  value={formData.productDescription}
                  onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                {errors.productDescription && <p className="text-[11px] text-rose-400 mt-1">{errors.productDescription}</p>}
              </div>

              {/* Campaign Objective & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Primary Campaign Objective</label>
                  <select
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Drive Direct Sales & Revenue">Direct Sales & Revenue</option>
                    <option value="Generate WhatsApp Customer Inquiries">WhatsApp Inquiries & Conversations</option>
                    <option value="Acquire App Downloads or Registrations">App Signups & User Registrations</option>
                    <option value="High-Converting UGC Video Library">UGC Video Library for Paid Ads</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Approximate Budget</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer font-mono"
                  >
                    <option value="₦150,000 - ₦500,000">₦150,000 - ₦500,000 (Starter Pilot)</option>
                    <option value="₦500,000 - ₦2,000,000">₦500,000 - ₦2,000,000 (Growth Campaign)</option>
                    <option value="₦2,000,000 - ₦5,000,000">₦2,000,000 - ₦5,000,000 (Scale Cohort)</option>
                    <option value="₦5,000,000+">₦5,000,000+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Note on payment processing */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  No upfront charge today. Our campaign strategists will review your brief and design a creator roster with tailored attribution links.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Submit Campaign Brief</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Campaign Brief Received!</h3>
            <p className="mt-2 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong>. Our campaign strategist will review <strong>{formData.companyName}</strong>’s objectives and provide a curated shortlist of verified African creators with performance track records.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1.5">
              <div className="text-slate-400">Industry: <span className="text-white">{formData.industry}</span></div>
              <div className="text-slate-400">Objective: <span className="text-white">{formData.objective}</span></div>
              <div className="text-slate-400">Budget Range: <span className="text-emerald-400 font-mono">{formData.budgetRange}</span></div>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
