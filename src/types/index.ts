export type UserRole = 'brand' | 'creator';

export type CampaignModelType = 'fixed' | 'performance' | 'commission' | 'hybrid';

export interface Campaign {
  id: string;
  brandName: string;
  brandCategory: string;
  campaignTitle: string;
  description: string;
  deliverables: string[];
  compensationType: CampaignModelType;
  payoutDetails: string;
  bonusDetails?: string;
  platform: ('tiktok' | 'instagram' | 'youtube' | 'x')[];
  usageRights: string;
  deadline: string;
  slotsTotal: number;
  slotsRemaining: number;
  location: string;
  remote: boolean;
  minCreatorLevel: 'New' | 'Verified' | 'Proven' | 'Performance' | 'Elite';
  tags: string[];
}

export interface CreatorProfileDemo {
  name: string;
  handle: string;
  avatarInitials: string;
  niches: string[];
  followers: string;
  averageViews: string;
  engagementRate: string;
  campaignsCompleted: number;
  salesGenerated: string;
  completionRate: string;
  verified: boolean;
  location: string;
}

export interface WaitlistSubmission {
  id: string;
  email: string;
  role: 'creator' | 'brand';
  name: string;
  primaryHandleOrCompany: string;
  createdAt: string;
  queueNumber: number;
}

export interface CreatorApplication {
  campaignId: string;
  campaignTitle: string;
  creatorName: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  pitch: string;
  submittedAt: string;
}

export interface BrandRegistrationData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  website: string;
  productDescription: string;
  objective: string;
  budgetRange: string;
  creatorPreferences: string[];
}

export interface CreatorRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  primaryPlatform: string;
  primaryHandle: string;
  niche: string;
  creatorType: string;
  typicalViews: string;
  portfolioUrl: string;
  preferredModel: string;
}
