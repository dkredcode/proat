import type React from 'react';

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  auth?: boolean; // True if only for authenticated users
  guest?: boolean; // True if only for guest users
};

export type FinancingOption = {
  id: string;
  crypto: string; // e.g., "USDT"
  duration: string; // e.g., "30 Days", "Flexible"
  yieldPercentage: number;
  minInvestment?: number;
  maxInvestment?: number;
  popular?: boolean;
};

export type MarketQuote = {
  id: string;
  pair: string; // e.g., "BTC/USDT"
  price: number;
  dailyChange: number; // percentage, e.g., 1.25 for +1.25%
};

export type PlatformActivity = {
  id: string;
  username: string; // Masked, e.g., "H****K"
  amount: number; // USDT
  date: string; // e.g., "2024-07-15"
  type: 'deposit' | 'withdrawal' | 'yield' | 'transfer'; // For potential icon/color coding
};

export type VipLevel = {
  id: string;
  name: string; // e.g., "VIP1"
  icon?: React.ComponentType<{ className?: string }>;
  benefits: string[];
  requirement: number; // Deposit amount in USDT
  validity: string; // e.g., "60 Days"
  color?: string; // Optional specific color for the VIP level card/badge
};

export type UserProfile = {
  username: string;
  email?: string;
  vipLevel: string; // e.g., "VIP0"
  balance: number; // USDT
  dailyTransferLimit: number; // USDT
  monthlyTransferLimit: number; // USDT
};

export type ServiceLink = {
  id: string;
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
};

// For AI Advisor from src/ai/flows/investment-advisor.ts
export type InvestmentRecommendation = {
  financingOption: string;
  duration: string;
  yieldPercentage: number;
  reasoning: string;
};

export type InvestmentAdvisorInput = {
  riskTolerance: 'low' | 'medium' | 'high';
  investmentGoals: string;
  investmentAmount: number;
};
