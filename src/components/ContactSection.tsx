import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onSuccessToast: (title: string, desc: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Brand Partnership');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    if (!message.trim()) {
      setError('Please provide your message or inquiry');
      return;
    }
    setError('');
    setIsSubmitted(true);
    onSuccessToast('Message Received', 'Our leadership team will respond within 24 business hours.');
  };

  return (
    <section id="contact" className="py-20 bg-[#090D16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Hubs */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-emerald-400">DIRECT COMMUNICATION</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
              Connect with Bliss Star
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Whether you are an enterprise brand planning a multi-country product launch, a creator agency representing talent, or an investor tracking African creator commerce, we want to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Email Inquiries</strong>
                  <span className="text-slate-400 font-mono">partnerships@blissstarmedia.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Official WhatsApp Desk</strong>
                  <span className="text-slate-400 font-mono">+234 810 000 2547 (Lagos Commercial Hub)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Regional Hubs</strong>
                  <span className="text-slate-400">Lagos, Nigeria · Nairobi, Kenya · Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white font-display pb-3 border-b border-slate-800">
                    Send an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Adeola Williams"
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
                        placeholder="adeola@brand.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Purpose</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                    >
                      <option value="Brand Partnership">Brand Pilot / Campaign Inquiry</option>
                      <option value="Creator Representation">Creator Talent / Agency Pilot</option>
                      <option value="Strategic Partnership">Platform & Payment Partner</option>
                      <option value="Press & Media">Press & Media</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand, campaign goals, or question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {error && <p className="text-xs text-rose-400">{error}</p>}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Inquiry Dispatched</h3>
                  <p className="mt-2 text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your message regarding <strong>{inquiryType}</strong> has reached our partner desk. We will respond directly to <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-6 px-5 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
