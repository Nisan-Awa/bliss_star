import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { CreatorRegistrationData } from '../types';

interface CreatorRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreatorRegistrationData) => void;
}

export const CreatorRegistrationModal: React.FC<CreatorRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CreatorRegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: 'Nigeria',
    primaryPlatform: 'TikTok',
    primaryHandle: '',
    niche: 'Beauty & Skincare',
    creatorType: 'UGC Creator',
    typicalViews: '10K - 50K',
    portfolioUrl: '',
    preferredModel: 'Hybrid (Stipend + Commission)',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp is required';
    if (!formData.primaryHandle.trim()) errs.primaryHandle = 'Handle is required (e.g. @yourhandle)';
    if (!formData.portfolioUrl.trim()) errs.portfolioUrl = 'Portfolio link is required';
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
                CREATOR ONBOARDING
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                Join the Creator Network
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect with verified African brands looking for creators who drive measurable content, clicks, and sales.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Blessing Eke"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="blessing@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Contact <span className="text-rose-400">*</span>
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

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos / Nairobi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Other Africa">Other Africa</option>
                    <option value="Diaspora (UK/US/CA)">Diaspora (UK/US/CA)</option>
                  </select>
                </div>
              </div>

              {/* Platform & Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Primary Social Platform</label>
                  <select
                    value={formData.primaryPlatform}
                    onChange={(e) => setFormData({ ...formData, primaryPlatform: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Handle / Profile Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="@yourhandle"
                    value={formData.primaryHandle}
                    onChange={(e) => setFormData({ ...formData, primaryHandle: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  {errors.primaryHandle && <p className="text-[11px] text-rose-400 mt-1">{errors.primaryHandle}</p>}
                </div>
              </div>

              {/* Niche & Creator Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Content Niche</label>
                  <select
                    value={formData.niche}
                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Beauty & Skincare">Beauty & Skincare</option>
                    <option value="Tech & Gadgets">Tech & Gadgets</option>
                    <option value="Fashion & Streetwear">Fashion & Streetwear</option>
                    <option value="Food & Culinary">Food & Culinary</option>
                    <option value="Fitness & Wellness">Fitness & Wellness</option>
                    <option value="Lifestyle & Vlog">Lifestyle & Vlog</option>
                    <option value="Business & Finance">Business & Finance</option>
                    <option value="Hospitality & Travel">Hospitality & Travel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Creator Type</label>
                  <select
                    value={formData.creatorType}
                    onChange={(e) => setFormData({ ...formData, creatorType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="UGC Creator">UGC Creator (User Generated Content)</option>
                    <option value="Micro-influencer">Micro-influencer (5k–25k)</option>
                    <option value="Influencer">Influencer (25k–100k+)</option>
                    <option value="Affiliate Marketer">Affiliate Marketer</option>
                    <option value="Video Editor / Clipper">Video Editor / Clipper</option>
                    <option value="Voice-over Artist">Voice-over Artist</option>
                  </select>
                </div>
              </div>

              {/* Typical Views & Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Typical Video Views</label>
                  <select
                    value={formData.typicalViews}
                    onChange={(e) => setFormData({ ...formData, typicalViews: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="1K - 10K">1K - 10K average views</option>
                    <option value="10K - 50K">10K - 50K average views</option>
                    <option value="50K - 200K">50K - 200K average views</option>
                    <option value="200K+">200K+ viral reach</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Compensation</label>
                  <select
                    value={formData.preferredModel}
                    onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Hybrid (Stipend + Commission)">Hybrid (Stipend + Commission)</option>
                    <option value="Fixed Payment per Deliverable">Fixed Payment per Deliverable</option>
                    <option value="Performance Pay per Lead">Performance Pay per Lead</option>
                    <option value="Sales Commission Only">Sales Commission Only</option>
                  </select>
                </div>
              </div>

              {/* Portfolio URL */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Portfolio / Best Content Link <span className="text-rose-400">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://tiktok.com/@yourhandle or Google Drive folder"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                {errors.portfolioUrl && <p className="text-[11px] text-rose-400 mt-1">{errors.portfolioUrl}</p>}
              </div>

              {/* Note on Google Form roadmap integration */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  For MVP, profile submissions are verified directly by our team. Creators can also submit via our direct onboarding Google Form upon request.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Submit Creator Profile</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Welcome to Bliss Star, {formData.fullName}!</h3>
            <p className="mt-2 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your creator profile has been logged in our founding creator directory. Our talent curation team will inspect your content channels and reach out to you via WhatsApp ({formData.phone}).
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1.5">
              <div className="text-slate-400">Handle: <span className="text-white font-mono">{formData.primaryHandle}</span> ({formData.primaryPlatform})</div>
              <div className="text-slate-400">Niche: <span className="text-white">{formData.niche} · {formData.creatorType}</span></div>
              <div className="text-slate-400">Preferred Payout: <span className="text-emerald-400">{formData.preferredModel}</span></div>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              Close & Browse Open Campaigns
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
