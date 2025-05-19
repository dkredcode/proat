import type { NavItem, FinancingOption, MarketQuote, PlatformActivity, VipLevel, UserProfile, ServiceLink } from '@/types';
import { Home, LineChart, ShieldCheck, UserCircle, Briefcase, LogIn, UserPlus, Settings, HelpCircle, Wallet, MessageSquare, Download, Upload, Send } from 'lucide-react';

export const APP_NAME = "TetherVest";
export const LOGO_COLOR = "text-yellow-400"; // #FFD700 is gold, approx yellow-400/500

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Financing', href: '/financing', icon: LineChart },
  { label: 'VIP', href: '/vip', icon: ShieldCheck },
  { label: 'Account', href: '/account', icon: UserCircle, auth: true },
  { label: 'Advisor', href: '/advisor', icon: Briefcase },
];

export const AUTH_NAV_LINKS: NavItem[] = [
  { label: 'Login', href: '/login', icon: LogIn, guest: true },
  { label: 'Register', href: '/register', icon: UserPlus, guest: true },
];

export const USER_NAV_LINKS: (user: UserProfile) => NavItem[] = (user) => [
    // { label: user.username, href: '/profile', icon: UserCircle2 },
    // { label: 'Settings', href: '/account/settings', icon: Settings },
    // { label: 'Logout', href: '/logout', icon: LogOut }, // Action, not link
];


export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Help Center', href: '/help' },
    { label: 'API Documentation', href: '/api-docs' },
  ],
};

export const PLACEHOLDER_FINANCING_OPTIONS: FinancingOption[] = [
  { id: '1', crypto: 'USDT', duration: '30 Days', yieldPercentage: 5.5, popular: true, minInvestment: 100, maxInvestment: 10000 },
  { id: '2', crypto: 'USDT', duration: '60 Days', yieldPercentage: 6.2, popular: true, minInvestment: 500, maxInvestment: 50000 },
  { id: '3', crypto: 'USDT', duration: '90 Days', yieldPercentage: 7.0, popular: false, minInvestment: 1000, maxInvestment: 100000 },
  { id: '4', crypto: 'USDT', duration: 'Flexible', yieldPercentage: 3.1, popular: true, minInvestment: 50 },
  { id: '5', crypto: 'USDT', duration: '180 Days', yieldPercentage: 8.5, minInvestment: 5000, maxInvestment: 250000 },
  { id: '6', crypto: 'USDT', duration: '15 Days', yieldPercentage: 4.0, minInvestment: 100, maxInvestment: 5000 },
];

export const PLACEHOLDER_MARKET_QUOTES: MarketQuote[] = [
  { id: '1', pair: 'BTC/USDT', price: 60000.00, dailyChange: 1.25 },
  { id: '2', pair: 'ETH/USDT', price: 3000.00, dailyChange: -0.50 },
  { id: '3', pair: 'USDT/USD', price: 1.00, dailyChange: 0.01 },
  { id: '4', pair: 'SOL/USDT', price: 150.00, dailyChange: 2.75 },
];

export const PLACEHOLDER_PLATFORM_ACTIVITY: PlatformActivity[] = [
  { id: '1', username: 'J***n', amount: 5000, date: '2024-07-28', type: 'deposit' },
  { id: '2', username: 'A***e', amount: 120, date: '2024-07-28', type: 'yield' },
  { id: '3', username: 'M***k', amount: 10000, date: '2024-07-27', type: 'transfer' },
  { id: '4', username: 'S***h', amount: 2500, date: '2024-07-27', type: 'withdrawal' },
  { id: '5', username: 'L***a', amount: 800, date: '2024-07-26', type: 'deposit' },
];

export const PLACEHOLDER_VIP_LEVELS: VipLevel[] = [
  { id: 'vip0', name: 'VIP0', benefits: ['Basic access', 'Standard limits'], requirement: 0, validity: 'Perpetual', color: 'bg-slate-700' },
  { id: 'vip1', name: 'VIP1', benefits: ['Increased transfer limits (Daily: 10,000 USDT)', 'Priority support L1'], requirement: 1000, validity: '60 Days', color: 'bg-sky-700' },
  { id: 'vip2', name: 'VIP2', benefits: ['Higher limits (Daily: 50,000 USDT)', 'Dedicated account manager', 'Early access to new products'], requirement: 5000, validity: '90 Days', color: 'bg-indigo-700' },
  { id: 'vip3', name: 'VIP3', benefits: ['Premium limits (Daily: 200,000 USDT)', 'Exclusive events', 'Custom financial advice'], requirement: 20000, validity: '120 Days', color: 'bg-purple-700' },
];

export const PLACEHOLDER_USER_PROFILE: UserProfile = {
  username: 'CryptoUser123',
  email: 'user@example.com',
  vipLevel: 'VIP1',
  balance: 12500.75,
  dailyTransferLimit: 10000,
  monthlyTransferLimit: 100000,
};

// Mock authentication state for Header
export const MOCK_IS_AUTHENTICATED = true;
export const MOCK_USER = PLACEHOLDER_USER_PROFILE;


export const ACCOUNT_QUICK_ACTIONS: ServiceLink[] = [
  { id: 'deposit', title: 'Deposit', href: '/account/deposit', icon: Download },
  { id: 'withdraw', title: 'Withdraw', href: '/account/withdraw', icon: Upload },
  { id: 'transfer', title: 'Transfer', href: '/account/transfer', icon: Send },
];

export const ACCOUNT_OTHER_SERVICES: ServiceLink[] = [
  { id: 'wallet', title: 'Wallet Details', href: '/account/wallet', icon: Wallet },
  { id: 'security', title: 'Security Settings', href: '/account/security', icon: Settings },
  { id: 'messages', title: 'Messages', href: '/account/messages', icon: MessageSquare },
  { id: 'help', title: 'Help/FAQ', href: '/faq', icon: HelpCircle },
];

export const COUNTRY_CODES = [
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+86', label: 'China (+86)' },
  { value: '+91', label: 'India (+91)' },
  // Add more as needed
];

export const RISK_TOLERANCE_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];
