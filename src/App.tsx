/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PerformanceFunnel } from './components/PerformanceFunnel';
import { WhatsAppCommerce } from './components/WhatsAppCommerce';
import { CampaignModels } from './components/CampaignModels';
import { BrandSection } from './components/BrandSection';
import { CreatorSection } from './components/CreatorSection';
import { HowItWorks } from './components/HowItWorks';
import { CreatorLevels } from './components/CreatorLevels';
import { CampaignsExplorer } from './components/CampaignsExplorer';
import { WaitlistSection } from './components/WaitlistSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CampaignApplyModal } from './components/CampaignApplyModal';
import { CreatorRegistrationModal } from './components/CreatorRegistrationModal';
import { BrandRegistrationModal } from './components/BrandRegistrationModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { UserRole, Campaign, CreatorApplication, CreatorRegistrationData, BrandRegistrationData } from './types';
import { SAMPLE_CAMPAIGNS } from './data/mockData';

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>('brand');
  const [brandRegisterOpen, setBrandRegisterOpen] = useState(false);
  const [creatorRegisterOpen, setCreatorRegisterOpen] = useState(false);
  const [selectedCampaignForApply, setSelectedCampaignForApply] = useState<Campaign | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast dispatch helper
  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Section smooth scrolling navigation
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Hash on mount or change
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 150);
    }
  }, []);

  const handleApplicationSubmit = (app: CreatorApplication) => {
    addToast(
      'Application Submitted Successfully',
      `Your pitch for ${app.campaignTitle} has been submitted for brand review.`
    );
  };

  const handleCreatorRegistrationSubmit = (data: CreatorRegistrationData) => {
    addToast(
      'Creator Profile Registered',
      `Welcome ${data.fullName}! Your profile has been added to our verified talent registry.`
    );
  };

  const handleBrandRegistrationSubmit = (data: BrandRegistrationData) => {
    addToast(
      'Campaign Brief Received',
      `Thank you ${data.contactName}. A creator strategist will reach out with a candidate roster.`
    );
  };

  // Demo apply trigger from CreatorSection dashboard
  const handleApplyDemoCampaign = () => {
    const glowSkinCamp = SAMPLE_CAMPAIGNS.find((c) => c.id === 'camp-glow-skin') || SAMPLE_CAMPAIGNS[0];
    setSelectedCampaignForApply(glowSkinCamp);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 3-Zone Navigation Contract */}
      <Navbar
        onOpenBrandRegister={() => setBrandRegisterOpen(true)}
        onOpenCreatorRegister={() => setCreatorRegisterOpen(true)}
        onNavigateSection={scrollToSection}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          userRole={userRole}
          onChangeUserRole={setUserRole}
          onOpenBrandRegister={() => setBrandRegisterOpen(true)}
          onOpenCreatorRegister={() => setCreatorRegisterOpen(true)}
          onNavigateSection={scrollToSection}
        />

        {/* 2. The Problem Section */}
        <ProblemSection onNavigateSection={scrollToSection} />

        {/* 3. Performance Differentiator (Funnel & Attribution) */}
        <PerformanceFunnel />

        {/* 4. WhatsApp Commerce Section */}
        <WhatsAppCommerce />

        {/* 5. Campaign Payment Models (with interactive simulator) */}
        <CampaignModels onOpenBrandRegister={() => setBrandRegisterOpen(true)} />

        {/* 6. For Brands Section (Capabilities & Dashboard Preview) */}
        <BrandSection onOpenBrandRegister={() => setBrandRegisterOpen(true)} />

        {/* 7. For Creators Section (Benefits, Dashboard Preview & Blessing's Profile Card) */}
        <CreatorSection
          onOpenCreatorRegister={() => setCreatorRegisterOpen(true)}
          onApplyDemoCampaign={handleApplyDemoCampaign}
        />

        {/* 8. How It Works (Brand & Creator Pathways) */}
        <HowItWorks
          initialRole={userRole}
          onOpenBrandRegister={() => setBrandRegisterOpen(true)}
          onOpenCreatorRegister={() => setCreatorRegisterOpen(true)}
        />

        {/* 9. Creator Levels (Career Progression) */}
        <CreatorLevels />

        {/* 10. Campaigns Marketplace */}
        <CampaignsExplorer
          onSelectCampaignForApply={(camp) => setSelectedCampaignForApply(camp)}
          onOpenBrandRegister={() => setBrandRegisterOpen(true)}
        />

        {/* 11. Founding Waitlist Experience */}
        <WaitlistSection onSuccessToast={addToast} />

        {/* 12. Social Proof & Pilot Program Placeholders */}
        <SocialProofSection />

        {/* 13. Contact & Direct Inquiries */}
        <ContactSection onSuccessToast={addToast} />
      </main>

      {/* 14. Compliant Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenBrandRegister={() => setBrandRegisterOpen(true)}
        onOpenCreatorRegister={() => setCreatorRegisterOpen(true)}
      />

      {/* Interactive Modals */}
      <CampaignApplyModal
        campaign={selectedCampaignForApply}
        isOpen={selectedCampaignForApply !== null}
        onClose={() => setSelectedCampaignForApply(null)}
        onSubmitApplication={handleApplicationSubmit}
      />

      <CreatorRegistrationModal
        isOpen={creatorRegisterOpen}
        onClose={() => setCreatorRegisterOpen(false)}
        onSubmit={handleCreatorRegistrationSubmit}
      />

      <BrandRegistrationModal
        isOpen={brandRegisterOpen}
        onClose={() => setBrandRegisterOpen(false)}
        onSubmit={handleBrandRegistrationSubmit}
      />

      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
