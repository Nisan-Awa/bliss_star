import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Copy, Check, Users, Building } from 'lucide-react';
import { UserRole, WaitlistSubmission } from '../types';

interface WaitlistSectionProps {
  onSuccessToast: (title: string, desc: string) => void;
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ onSuccessToast }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('creator');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState(''); // social handle or company name
  const [submittedData, setSubmittedData] = useState<WaitlistSubmission | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }
    if (!identifier.trim()) {
      setError(selectedRole === 'creator' ? 'Please provide your social handle' : 'Please provide your company name');
      return;
    }
    setError('');

    // Generate meaningful founding queue number
    const baseQueue = selectedRole === 'creator' ? 1042 : 318;
    const randomOffset = Math.floor(Math.random() * 20) + 1;
    const queueNumber = baseQueue + randomOffset;

    const submission: WaitlistSubmission = {
      id: `w-${Date.now()}`,
      email,
      name,
      role: selectedRole,
      primaryHandleOrCompany: identifier,
      createdAt: new Date().toISOString(),
      queueNumber,
    };

    setSubmittedData(submission);
    onSuccessToast(
      'Founding Network Invitation Reserved',
      `Welcome to the founding community! Your queue ID is ${selectedRole === 'creator' ? 'FC' : 'FP'}-${queueNumber}`
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="waitlist" className="py-20 bg-[#090D16] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDING COMMUNITY INITIATIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance">
            Be part of the future of creator commerce in Africa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join the founding network of creators and brands helping shape Bliss Star before launch.
          </p>
        </div>

        {/* Founding Community Switcher & Form */}
        <div className="mt-10 p-6 sm:p-9 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          {!submittedData ? (
            <div>
              {/* Role selector tabs */}
              <div className="grid grid-cols-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedRole('creator')}
                  className={`py-3 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedRole === 'creator'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Join as a Founding Creator</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedRole('brand')}
                  className={`py-3 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedRole === 'brand'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Join as a Founding Brand Partner</span>
                </button>
              </div>

              {/* Founding Member Perks Explanation */}
              <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                <span className="font-semibold text-white block mb-1">
                  {selectedRole === 'creator'
                    ? 'Founding Creator Benefits:'
                    : 'Founding Brand Partner Benefits:'}
                </span>
                <p className="text-slate-400 leading-relaxed">
                  {selectedRole === 'creator'
                    ? 'Guaranteed inclusion in our private alpha cohort, priority access to high-budget hybrid campaigns, and direct input on platform payment features.'
                    : 'Zero platform matching fee on your first 3 campaigns, dedicated talent matching strategist, and custom WhatsApp attribution token integration.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Blessing Eke"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {selectedRole === 'creator' ? 'Primary Social Handle / Portfolio URL' : 'Company Name & Website'} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={selectedRole === 'creator' ? '@handle or link to TikTok/Instagram' : 'Brand Name (e.g. Glow Skin Africa)'}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {error && <p className="text-xs text-rose-400">{error}</p>}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
                  >
                    <span>
                      {selectedRole === 'creator'
                        ? 'Reserve Spot as Founding Creator'
                        : 'Register as Founding Brand Partner'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                {submittedData.role === 'creator' ? 'Founding Creator Reserved' : 'Founding Brand Partner Reserved'}
              </span>

              <h3 className="text-2xl font-bold text-white font-display mt-1">
                You&apos;re On the Founding Roster
              </h3>

              <div className="mt-4 inline-block p-4 rounded-2xl bg-slate-950 border border-emerald-500/40">
                <span className="text-xs text-slate-400 block font-mono">Founding Queue Token:</span>
                <span className="text-2xl font-bold font-mono text-emerald-400 mt-0.5 block tabular-nums">
                  #{submittedData.role === 'creator' ? 'FC' : 'FB'}-{submittedData.queueNumber}
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                We have reserved your invitation for <strong>{submittedData.email}</strong>. As an early founding member, you will receive our closed alpha onboarding packet before public launch.
              </p>

              {/* Share Referral Link */}
              <div className="mt-6 pt-5 border-t border-slate-800 max-w-sm mx-auto flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="https://blissstarmedia.com"
                  className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-300 font-mono focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="mt-6 text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Register another founding account
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
