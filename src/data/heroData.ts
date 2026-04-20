// Types and mock data for the Hero section

export interface CelebrityEndorsement {
  id: string;
  name: string;
  title: string;
  tagline: string;
  image: string;
}

export interface CardVisual {
  type: 'platinum' | 'gold' | 'signature' | 'business';
  gradient: string;
  features: string[];
  chipColor: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  cardVisual: CardVisual;
  celebrity: CelebrityEndorsement;
  stats: {
    badge1: { value: string; label: string };
    badge2: { value: string; label: string };
  };
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  cta: { primary: string; secondary: string };
  features: string[];
  badge?: { text: string; color: string };
  interestRate?: string;
  processingTime?: string;
  applyUrl? : string; 
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  offerings: ServiceOffering[];
}


export interface AmbassadorQuote {
  text: string;
  attribution: string;
  role: string;
}

export interface Ambassador {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  pose: 'presenting-card' | 'confident-portrait' | 'holding-card';
  quote: AmbassadorQuote;
  backgroundGradient: string;
  frameAccent: 'red' | 'gold' | 'emerald';
}

export interface CardConfig {
  type: 'platinum' | 'gold' | 'signature' | 'business';
  name: string;
  gradient: string;
  features: string[];
  chipColor: 'gold' | 'silver';
  number: string;
  holderName: string;
  tiltDegree: number;
  floatAnimation: boolean;
  hoverResponse: 'enhanced' | 'subtle' | 'disabled';
  position: 'in-hand' | 'floating-beside' | 'floating-front' | 'overlay';
  scale: number;
  rotation: { x: number; y: number; z: number };
}

export interface VisualBadge {
  id: string;
  value: string;
  label: string;
  icon: string;
  position: 'top-left' | 'top-right' | 'left-middle' | 'bottom-left' | 'bottom-right';
  color: 'primary' | 'accent' | 'gold' | 'emerald';
}

export interface ParticleConfig {
  colors: string[];
  density: 'light' | 'medium' | 'heavy';
  speed: 'slow' | 'medium' | 'fast';
  size: 'small' | 'medium' | 'large';
}

export interface VisualComposition {
  type: 'ambassador-card-presentation' | 'card-hero-ambassador-support' | 'dual-showcase';
  ambassador: Ambassador;
  card: CardConfig;
  badges: VisualBadge[];
  particles: ParticleConfig;
}


export const heroSlides: HeroSlide[] = [
  {
    id: 'credit-cards',
    title: 'Premium Credit Cards',
    subtitle: 'Unlock Exclusive Rewards',
    description: 'Experience luxury banking with our Platinum card. Earn 5X rewards on travel, dining, and entertainment with zero annual fees for the first year.',
    primaryCTA: { text: 'Apply Now', href: 'contact' },
    secondaryCTA: { text: 'Compare Cards', href: 'creditCards' },
    cardVisual: {
      type: 'platinum',
      gradient: 'from-slate-700 via-slate-600 to-slate-800',
      features: ['Contactless', 'Global Access', '5X Rewards'],
      chipColor: 'gold',
    },
    celebrity: {
      id: 'celeb-1',
      name: 'Rajat Gupt',
      title: 'Brand Ambassador',
      tagline: '"My trusted partner for financial excellence"',
      image: './IMG_5731.JPG',
    },
    stats: {
      badge1: { value: '₹50L+', label: 'Credit Limit' },
      badge2: { value: '0%', label: 'First Year Fee' },
    },
  },
  {
    id: 'personal-loans',
    title: 'Instant Personal Loans',
    subtitle: 'Dreams Made Affordable',
    description: 'Get approved in minutes with our AI-powered lending. Competitive rates starting at 10.49% p.a. with flexible tenures up to 60 months.',
    primaryCTA: { text: 'Get Quote', href: 'contact' },
    secondaryCTA: { text: 'Compare Loans', href: 'loans' },
    cardVisual: {
      type: 'gold',
      gradient: 'from-amber-600 via-yellow-500 to-amber-700',
      features: ['Quick Approval', 'No Collateral', 'Flexible EMI'],
      chipColor: 'silver',
    },
    celebrity: {
      id: 'celeb-2',
      name: 'Rajat Gupta',
      title: 'Brand Ambassador',
      tagline: '"Smart financing for smart dreams"',
      image: './IMG_5747.JPG',
    },
    stats: {
      badge1: { value: '10.49%', label: 'Starting Rate' },
      badge2: { value: '2 Min', label: 'Approval Time' },
    },
  },
  {
    id: 'insurance',
    title: 'Comprehensive Insurance',
    subtitle: 'Protect What Matters Most',
    description: 'Secure your future with our comprehensive insurance plans. Life, health, and motor coverage with cashless claims across 10,000+ hospitals.',
    primaryCTA: { text: 'Get Quote', href: 'contact' },
    secondaryCTA: { text: 'View Plans', href: 'insurance' },
    cardVisual: {
      type: 'signature',
      gradient: 'from-emerald-600 via-teal-500 to-emerald-700',
      features: ['Cashless Claims', '24/7 Support', 'Family Cover'],
      chipColor: 'gold',
    },
    celebrity: {
      id: 'celeb-3',
      name: 'Rajat Gupta',
      title: 'Brand Ambassador',
      tagline: '"Security that never lets you down"',
      image: './IMG_5731.JPG',
    },
    stats: {
      badge1: { value: '₹1 Cr', label: 'Max Coverage' },
      badge2: { value: '10K+', label: 'Hospitals' },
    },
  },
];

export const services: Service[] = [
  {
    id: 'popular',
    name: 'Popular',
    icon: 'Flame',
    offerings: [
      {
        id: 'pop-1',
        title: 'Credgrow Platinum',
        subtitle: 'Most Loved Card',
        description: 'Unlimited cashback, airport lounge access, and premium rewards',
        icon: 'CreditCard',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Know More' },
        features: ['5X Rewards', 'Zero Forex', 'Lounge Access'],
        badge: { text: 'Bestseller', color: 'primary' },
      },
      {
        id: 'pop-2',
        title: 'Instant Loan',
        subtitle: '2-Min Approval',
        description: 'Get up to ₹25 Lakhs with minimal documentation',
        icon: 'Banknote',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Check Offer', secondary: 'Learn More' },
        features: ['No Collateral', 'Flexible EMI', 'Pre-approved'],
        interestRate: '10.49%',
      },
      {
        id: 'pop-3',
        title: 'Health Insurance',
        subtitle: 'Family Protection',
        description: 'Comprehensive coverage for your entire family',
        icon: 'Shield',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Get Quote', secondary: 'Compare' },
        features: ['Cashless', '₹1Cr Cover', 'No Waiting'],
        badge: { text: 'New', color: 'accent' },
      },
      {
        id: 'pop-4',
        title: 'Fixed Deposit',
        subtitle: 'Highest Returns',
        description: 'Earn up to 8.5% p.a. with flexible tenure options',
        icon: 'PiggyBank',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Invest Now', secondary: 'Calculate' },
        features: ['8.5% Returns', 'Senior Bonus', 'Auto-Renew'],
        interestRate: '8.5%',
      },
    ],
  },
  {
    id: 'credit-cards',
    name: 'Credit Cards',
    icon: 'CreditCard',
    offerings: [
      {
        id: 'cc-1',
        title: 'Platinum Card',
        subtitle: 'Premium Lifestyle',
        description: 'Exclusive benefits for premium spenders with unlimited rewards',
        icon: 'Crown',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Compare' },
        features: ['Unlimited Rewards', 'Concierge', 'Golf Access'],
        badge: { text: 'Premium', color: 'primary' },
      },
      {
        id: 'cc-2',
        title: 'Travel Card',
        subtitle: 'Jet-Set Rewards',
        description: 'Miles on every purchase, free flights, and zero forex markup',
        icon: 'Plane',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Get Card', secondary: 'Benefits' },
        features: ['3X Miles', 'Zero Forex', 'Free Flights'],
      },
      {
        id: 'cc-3',
        title: 'Cashback Card',
        subtitle: 'Save on Everything',
        description: 'Flat 5% cashback on all online spends',
        icon: 'Percent',
        gradient: 'from-green-500 to-emerald-600',
        cta: { primary: 'Apply', secondary: 'Details' },
        features: ['5% Cashback', 'No Cap', 'Instant Credit'],
      },
      {
        id: 'cc-4',
        title: 'Business Card',
        subtitle: 'For Entrepreneurs',
        description: 'Higher limits and expense management tools',
        icon: 'Building2',
        gradient: 'from-orange-500 to-red-600',
        cta: { primary: 'Apply', secondary: 'Learn More' },
        features: ['High Limit', 'GST Benefits', 'Team Cards'],
      },
    ],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: 'Shield',
    offerings: [
      {
        id: 'ins-1',
        title: 'Health Shield',
        subtitle: 'Complete Care',
        description: 'Comprehensive health coverage with cashless claims',
        icon: 'Heart',
        gradient: 'from-red-500 to-rose-600',
        cta: { primary: 'Get Quote', secondary: 'Plans' },
        features: ['₹1Cr Cover', 'Cashless', 'Family Float'],
        badge: { text: 'Popular', color: 'primary' },
      },
      {
        id: 'ins-2',
        title: 'Life Secure',
        subtitle: 'Future Protection',
        description: 'Term insurance with maximum coverage at minimal cost',
        icon: 'Users',
        gradient: 'from-blue-500 to-indigo-600',
        cta: { primary: 'Calculate', secondary: 'Compare' },
        features: ['₹2Cr Cover', 'Low Premium', 'Tax Benefits'],
      },
      {
        id: 'ins-3',
        title: 'Motor Guard',
        subtitle: 'Complete Vehicle Care',
        description: 'Comprehensive car and bike insurance',
        icon: 'Car',
        gradient: 'from-amber-500 to-yellow-600',
        cta: { primary: 'Get Quote', secondary: 'Features' },
        features: ['Cashless', 'NCB Protect', '24/7 RSA'],
      },
      {
        id: 'ins-4',
        title: 'Travel Safe',
        subtitle: 'Journey Protection',
        description: 'International travel insurance coverage',
        icon: 'Globe',
        gradient: 'from-teal-500 to-cyan-600',
        cta: { primary: 'Buy Now', secondary: 'Coverage' },
        features: ['Medical Cover', 'Trip Cancel', 'Baggage'],
      },
    ],
  },
  {
    id: 'loans',
    name: 'Loans',
    icon: 'Banknote',
    offerings: [
      {
        id: 'loan-1',
        title: 'Personal Loan',
        subtitle: 'Quick Disbursal',
        description: 'Instant approval with minimal documentation',
        icon: 'User',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'EMI Calc' },
        features: ['₹25L Limit', '2-Min Approval', 'Flexible EMI'],
        interestRate: '10.49%',
        badge: { text: 'Low Rate', color: 'accent' },
      },
      {
        id: 'loan-2',
        title: 'Home Loan',
        subtitle: 'Dream Home',
        description: 'Lowest interest rates for your dream home',
        icon: 'Home',
        gradient: 'from-emerald-500 to-green-600',
        cta: { primary: 'Check Rate', secondary: 'Calculate' },
        features: ['₹5Cr Limit', '8.5% Rate', '30Yr Tenure'],
        interestRate: '8.5%',
      },
      {
        id: 'loan-3',
        title: 'Business Loan',
        subtitle: 'Grow Your Business',
        description: 'Collateral-free loans for MSMEs',
        icon: 'Briefcase',
        gradient: 'from-orange-500 to-amber-600',
        cta: { primary: 'Apply', secondary: 'Details' },
        features: ['₹50L Limit', 'No Collateral', 'Quick Process'],
        interestRate: '12%',
      },
      {
        id: 'loan-4',
        title: 'Education Loan',
        subtitle: 'Invest in Future',
        description: 'Fund your education dreams abroad or in India',
        icon: 'GraduationCap',
        gradient: 'from-blue-500 to-sky-600',
        cta: { primary: 'Apply', secondary: 'Eligibility' },
        features: ['₹1Cr Limit', 'Moratorium', 'Tax Benefits'],
        interestRate: '9.5%',
      },
    ],
  },
  {
    id: 'accounts',
    name: 'Accounts',
    icon: 'Wallet',
    offerings: [
      {
        id: 'acc-1',
        title: 'Salary Account',
        subtitle: 'Premium Banking',
        description: 'Zero balance salary account with premium benefits',
        icon: 'Wallet',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Open Now', secondary: 'Benefits' },
        features: ['Zero Balance', 'Free Cards', 'Insurance'],
        badge: { text: 'Most Popular', color: 'primary' },
      },
      {
        id: 'acc-2',
        title: 'Savings Account',
        subtitle: 'High Interest',
        description: 'Earn up to 7% interest on your savings',
        icon: 'PiggyBank',
        gradient: 'from-green-500 to-emerald-600',
        cta: { primary: 'Open', secondary: 'Compare' },
        features: ['7% Interest', 'Instant Open', 'UPI'],
        interestRate: '7%',
      },
      {
        id: 'acc-3',
        title: 'Current Account',
        subtitle: 'For Business',
        description: 'Feature-rich account for businesses',
        icon: 'Building',
        gradient: 'from-slate-500 to-zinc-600',
        cta: { primary: 'Open', secondary: 'Features' },
        features: ['Free NEFT', 'Overdraft', 'API Access'],
      },
      {
        id: 'acc-4',
        title: 'NRI Account',
        subtitle: 'Global Banking',
        description: 'Seamless banking for Non-Resident Indians',
        icon: 'Globe',
        gradient: 'from-indigo-500 to-violet-600',
        cta: { primary: 'Apply', secondary: 'Guide' },
        features: ['Multi-Currency', 'Repatriation', '24/7 Support'],
      },
    ],
  },
  {
    id: 'deposits',
    name: 'Deposits',
    icon: 'Landmark',
    offerings: [
      {
        id: 'dep-1',
        title: 'Fixed Deposit',
        subtitle: 'Guaranteed Returns',
        description: 'Earn up to 8.5% with our FD plans',
        icon: 'Lock',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Invest', secondary: 'Rates' },
        features: ['8.5% Returns', 'Flexible Tenure', 'Auto-Renew'],
        interestRate: '8.5%',
        badge: { text: 'Best Rate', color: 'accent' },
      },
      {
        id: 'dep-2',
        title: 'Recurring Deposit',
        subtitle: 'Monthly Savings',
        description: 'Build wealth with systematic monthly deposits',
        icon: 'RefreshCw',
        gradient: 'from-blue-500 to-cyan-600',
        cta: { primary: 'Start', secondary: 'Calculate' },
        features: ['₹500 Min', '8% Returns', 'Auto-Debit'],
        interestRate: '8%',
      },
      {
        id: 'dep-3',
        title: 'Tax Saver FD',
        subtitle: 'Save Tax, Earn More',
        description: '5-year tax saving deposit under 80C',
        icon: 'Receipt',
        gradient: 'from-green-500 to-teal-600',
        cta: { primary: 'Invest', secondary: 'Benefits' },
        features: ['Tax Free', '₹1.5L Limit', '8% Returns'],
        interestRate: '8%',
      },
      {
        id: 'dep-4',
        title: 'Senior Citizen FD',
        subtitle: 'Extra Benefits',
        description: 'Additional 0.5% interest for senior citizens',
        icon: 'Heart',
        gradient: 'from-rose-500 to-pink-600',
        cta: { primary: 'Apply', secondary: 'Rates' },
        features: ['9% Returns', 'Quarterly Payout', 'Bonus Rate'],
        interestRate: '9%',
      },
    ],
  },
  {
    id: 'investments',
    name: 'Investments',
    icon: 'TrendingUp',
    offerings: [
      {
        id: 'inv-1',
        title: 'Mutual Funds',
        subtitle: 'Smart Investing',
        description: 'Curated funds with zero commission',
        icon: 'BarChart3',
        gradient: 'from-emerald-500 to-green-600',
        cta: { primary: 'Invest', secondary: 'Explore' },
        features: ['Zero Commission', 'SIP Ready', 'Top Funds'],
        badge: { text: 'Trending', color: 'primary' },
      },
      {
        id: 'inv-2',
        title: 'Stocks & ETFs',
        subtitle: 'Direct Equity',
        description: 'Trade stocks with low brokerage',
        icon: 'LineChart',
        gradient: 'from-blue-500 to-indigo-600',
        cta: { primary: 'Open Demat', secondary: 'Pricing' },
        features: ['Low Brokerage', 'Research', 'Instant KYC'],
      },
      {
        id: 'inv-3',
        title: 'Digital Gold',
        subtitle: '24K Pure Gold',
        description: 'Buy gold starting from ₹1',
        icon: 'Gem',
        gradient: 'from-yellow-500 to-amber-600',
        cta: { primary: 'Buy Gold', secondary: 'Rates' },
        features: ['24K Gold', '₹1 Start', 'Free Locker'],
      },
      {
        id: 'inv-4',
        title: 'NPS',
        subtitle: 'Retirement Planning',
        description: 'Build your retirement corpus with tax benefits',
        icon: 'Umbrella',
        gradient: 'from-cyan-500 to-sky-600',
        cta: { primary: 'Open NPS', secondary: 'Benefits' },
        features: ['Tax Benefits', 'Govt Backed', 'Low Cost'],
      },
    ],
  },
  {
    id: 'offers',
    name: 'Offers',
    icon: 'Gift',
    offerings: [
      {
        id: 'off-1',
        title: 'Amazon Cashback',
        subtitle: 'Limited Time',
        description: 'Get 10% cashback on Amazon purchases',
        icon: 'ShoppingCart',
        gradient: 'from-orange-500 to-red-600',
        cta: { primary: 'Activate', secondary: 'T&C' },
        features: ['10% Cashback', 'Max ₹500', 'Valid Till Mar'],
        badge: { text: 'Hot Deal', color: 'primary' },
      },
      {
        id: 'off-2',
        title: 'Flight Booking',
        subtitle: 'Travel Offer',
        description: 'Flat ₹1000 off on domestic flights',
        icon: 'Plane',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Book Now', secondary: 'Details' },
        features: ['₹1000 Off', 'No Min', 'All Airlines'],
      },
      {
        id: 'off-3',
        title: 'Fuel Cashback',
        subtitle: 'Daily Savings',
        description: '5% cashback at all fuel stations',
        icon: 'Fuel',
        gradient: 'from-green-500 to-emerald-600',
        cta: { primary: 'Link Card', secondary: 'Stations' },
        features: ['5% Cashback', 'Max ₹250', 'Monthly'],
      },
      {
        id: 'off-4',
        title: 'Refer & Earn',
        subtitle: 'Share the Love',
        description: 'Earn ₹500 for every successful referral',
        icon: 'Users',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Refer Now', secondary: 'How It Works' },
        features: ['₹500 Each', 'Unlimited', 'Instant Credit'],
        badge: { text: 'Popular', color: 'accent' },
      },
    ],
  },
];

// export const updatedServices: Service[] = [
//   {
//     id: 'popular',
//     name: 'Popular',
//     icon: 'Flame',
//     offerings: [
//       {
//         id: 'hdfc-infinia', 
//         title: 'HDFC INFINIA Metal',
//         subtitle: 'Ultra Premium',
//         description: 'Unlimited Global Lounge, 5 RP/₹150',
//         icon: 'Crown',
//         gradient: 'from-primary to-accent',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Unlimited Lounge', 'Metal Card', 'Low Forex'],
//         badge: { text: 'Elite', color: 'primary' }, 
//         applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
//       },
//       {
//         id: 'hdfc-pl',
//         title: 'HDFC Personal Loan',
//         subtitle: 'Pre-approved',
//         description: 'Disbursal in 10 seconds for select customers',
//         icon: 'Banknote',
//         gradient: 'from-slate-600 to-slate-800',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~9.99%', 'Max ₹50L', '10 Sec Disbursal'],
//         badge: { text: 'Fastest', color: 'primary' },
//         interestRate: '9.99%', 
//         applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
//       },
//       {
//         id: 'health-ins',
//         title: 'HDFC ERGO Health',
//         subtitle: 'Optima Secure',
//         description: '4X coverage benefit automatically',
//         icon: 'Heart',
//         gradient: 'from-amber-500 to-orange-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Cashless', 'Restoration', 'No Room Rent Cap'],
//         badge: { text: 'Recommended', color: 'accent' }, 
//         applyUrl: 'https://www.hdfcergo.com/health-insurance',
//       },
//       {
//         id: 'sbi-cashback',
//         title: 'CASHBACK SBI Card',
//         subtitle: 'Online Shopping',
//         description: '5% Cashback on all online spends',
//         icon: 'ShoppingCart',
//         gradient: 'from-emerald-500 to-teal-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['5% Online Cashback', 'No Merchant Restriction', 'Auto-Credit'],
//         badge: { text: 'Bestseller', color: 'accent' },
//         applyUrl: 'https://www.sbicard.com/',

//       },
//       {
//         id: 'axis-pl',
//         title: 'Axis Personal Loan',
//         subtitle: 'Quick Approval',
//         description: 'Loans up to ₹40L with no collateral',
//         icon: 'Banknote',
//         gradient: 'from-violet-500 to-purple-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~9.99%', 'Max ₹40L', 'Quick Disbursal'],
//         interestRate: '9.99%',
//         applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',

//       },
//       {
//         id: 'icici-amazon',
//         title: 'Amazon Pay ICICI',
//         subtitle: 'Lifetime Free',
//         description: '5% Cashback for Prime members',
//         icon: 'ShoppingCart',
//         gradient: 'from-sky-500 to-blue-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Lifetime Free', '5% Amazon Cashback', '1% All Spends'], 
//         applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
//       },
//       {
//         id: 'life-ins',
//         title: 'LIC Term Life',
//         subtitle: 'Jeevan Umang',
//         description: 'Whole life coverage till 100 years',
//         icon: 'Users',
//         gradient: 'from-pink-500 to-rose-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Life Cover', 'Tax Benefits', 'Loan Facility'], 
//         applyUrl: 'https://licindia.in/',
//       },
//       {
//         id: 'off-8',
//         title: 'Welcome Bonus',
//         subtitle: 'Amex',
//         description: 'Get 4,000 bonus points on joining',
//         icon: 'Gift',
//         gradient: 'from-indigo-500 to-cyan-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['High Value', 'Redeem for Travel', 'No Expiry']
//       }
//     ]
//   },
//   {
//     id: 'credit-cards',
//     name: 'Credit Cards',
//     icon: 'CreditCard',
//     offerings: [
//       {
//         id: 'hdfc-infinia',
//         title: 'HDFC INFINIA Metal',
//         subtitle: 'Ultra Premium',
//         description: 'Unlimited Global Lounge, 5 RP/₹150',
//         icon: 'Crown',
//         gradient: 'from-primary to-accent',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Unlimited Lounge', 'Metal Card', 'Low Forex'],
//         badge: { text: 'Elite', color: 'primary' }
//       },
//       {
//         id: 'sbi-cashback',
//         title: 'CASHBACK SBI Card',
//         subtitle: 'Online Shopping',
//         description: '5% Cashback on all online spends',
//         icon: 'CreditCard',
//         gradient: 'from-slate-600 to-slate-800',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['5% Online Cashback', 'No Merchant Restriction', 'Auto-Credit'],
//         badge: { text: 'Bestseller', color: 'accent' }
//       },
//       {
//         id: 'axis-flipkart',
//         title: 'Flipkart Axis Bank',
//         subtitle: 'Co-Branded',
//         description: '5% Unlimited Cashback on Flipkart',
//         icon: 'ShoppingCart',
//         gradient: 'from-amber-500 to-orange-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['5% on Flipkart', 'Lounge Access', 'Welcome Benefits']
//       },
//       {
//         id: 'icici-amazon',
//         title: 'Amazon Pay ICICI',
//         subtitle: 'Lifetime Free',
//         description: '5% Cashback for Prime members',
//         icon: 'ShoppingCart',
//         gradient: 'from-emerald-500 to-teal-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Lifetime Free', '5% Amazon Cashback', '1% All Spends']
//       },
//       {
//         id: 'au-zenith-plus',
//         title: 'AU Zenith+ Metal',
//         subtitle: 'Luxury Travel',
//         description: 'Premium metal card with low forex markup',
//         icon: 'Crown',
//         gradient: 'from-violet-500 to-purple-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['0.99% Forex', 'Taj Epicure', 'Metal Form']
//       },
//       {
//         id: 'idfc-wealth',
//         title: 'IDFC FIRST Wealth',
//         subtitle: 'Premium Lifetime Free',
//         description: 'Interest-free cash withdrawal & 10X rewards',
//         icon: 'CreditCard',
//         gradient: 'from-sky-500 to-blue-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Lifetime Free', 'ATM Withdrawal', 'Golf Access']
//       },
//       {
//         id: 'kotak-pvr',
//         title: 'Kotak PVR Platinum',
//         subtitle: 'Movie Buffs',
//         description: 'Free movie tickets on monthly spends',
//         icon: 'CreditCard',
//         gradient: 'from-pink-500 to-rose-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Free PVR Tickets', 'F&B Discount', 'No Joining Fee']
//       },
//       {
//         id: 'yes-marquee',
//         title: 'YES Marquee',
//         subtitle: 'High Spenders',
//         description: '36 Reward Points per ₹200 on online spends',
//         icon: 'CreditCard',
//         gradient: 'from-indigo-500 to-cyan-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Unlimited Lounge', 'Guest Access', 'BOGO Movies']
//       }
//     ]
//   },
//   {
//     id: 'insurance',
//     name: 'Insurance',
//     icon: 'Shield',
//     offerings: [
//       {
//         id: 'health-ins',
//         title: 'HDFC ERGO Health',
//         subtitle: 'Optima Secure',
//         description: '4X coverage benefit automatically',
//         icon: 'Heart',
//         gradient: 'from-primary to-accent',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Cashless', 'Restoration', 'No Room Rent Cap'],
//         badge: { text: 'Recommended', color: 'accent' }
//       },
//       {
//         id: 'life-ins',
//         title: 'LIC Term Life',
//         subtitle: 'Jeevan Umang',
//         description: 'Whole life coverage till 100 years',
//         icon: 'Users',
//         gradient: 'from-slate-600 to-slate-800',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Life Cover', 'Tax Benefits', 'Loan Facility']
//       },
//       {
//         id: 'motor-ins',
//         title: 'ICICI Lombard Motor',
//         subtitle: 'Car Protect',
//         description: 'Comprehensive coverage with zero depreciation',
//         icon: 'Car',
//         gradient: 'from-amber-500 to-orange-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Cashless Garages', 'Zero Dep', 'RSA']
//       },
//       {
//         id: 'travel-ins',
//         title: 'Tata AIG Travel',
//         subtitle: 'Travel Guard',
//         description: 'International travel insurance coverage',
//         icon: 'Globe',
//         gradient: 'from-emerald-500 to-teal-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Medical Cover', 'Trip Cancel', 'Baggage Loss']
//       },
//       {
//         id: 'home-ins',
//         title: 'Bajaj Allianz Home',
//         subtitle: 'Property Protect',
//         description: 'Covers structure and contents against theft/fire',
//         icon: 'Home',
//         gradient: 'from-violet-500 to-purple-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Theft Cover', 'Natural Calamity', 'Valuables']
//       },
//       {
//         id: 'health-float',
//         title: 'Family Floater',
//         subtitle: 'Total Protection',
//         description: 'One plan for the entire family',
//         icon: 'Shield',
//         gradient: 'from-sky-500 to-blue-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Floater Sum', 'Maternity', 'Newborn Cover']
//       },
//       {
//         id: 'bike-ins',
//         title: 'Two Wheeler',
//         subtitle: 'Bike Insurance',
//         description: 'Third-party and own damage cover',
//         icon: 'Shield',
//         gradient: 'from-pink-500 to-rose-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Instant Policy', 'No Inspection', 'Low Premium']
//       },
//       {
//         id: 'term-life',
//         title: 'Pure Term Plan',
//         subtitle: 'High Coverage',
//         description: 'High sum assured at low premiums',
//         icon: 'Shield',
//         gradient: 'from-indigo-500 to-cyan-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['₹1Cr Cover', 'Critical Illness', 'Accident Rider']
//       }
//     ]
//   },
//   {
//     id: 'loans',
//     name: 'Loans',
//     icon: 'Banknote',
//     offerings: [
//       {
//         id: 'axis-pl',
//         title: 'Axis Personal Loan',
//         subtitle: 'Quick Approval',
//         description: 'Loans up to ₹40L with no collateral',
//         icon: 'Banknote',
//         gradient: 'from-primary to-accent',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~9.99%', 'Max ₹40L', 'Quick Disbursal'],
//         interestRate: '9.99%'
//       },
//       {
//         id: 'bajaj-pl',
//         title: 'Bajaj Finserv PL',
//         subtitle: 'Instant Funds',
//         description: 'Money in bank in 24 hours',
//         icon: 'Banknote',
//         gradient: 'from-slate-600 to-slate-800',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~10%', 'Max ₹55L', 'Flexible Tenures'],
//         interestRate: '10%'
//       },
//       {
//         id: 'hdfc-pl',
//         title: 'HDFC Personal Loan',
//         subtitle: 'Pre-approved',
//         description: 'Disbursal in 10 seconds for select customers',
//         icon: 'Banknote',
//         gradient: 'from-amber-500 to-orange-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~9.99%', 'Max ₹50L', '10 Sec Disbursal'],
//         badge: { text: 'Fastest', color: 'primary' },
//         interestRate: '9.99%'
//       },
//       {
//         id: 'icici-pl',
//         title: 'ICICI Personal Loan',
//         subtitle: 'Digital Process',
//         description: 'Minimal documentation & flexible tenures',
//         icon: 'Banknote',
//         gradient: 'from-emerald-500 to-teal-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~10.45%', 'Max ₹50L', 'Digital Process'],
//         interestRate: '10.45%'
//       },
//       {
//         id: 'sbi-pl',
//         title: 'SBI Xpress Credit',
//         subtitle: 'Low Interest',
//         description: 'Special rates for govt/defence employees',
//         icon: 'Banknote',
//         gradient: 'from-violet-500 to-purple-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~10.05%', 'Max ₹35L', 'Low Processing Fee'],
//         interestRate: '10.05%'
//       },
//       {
//         id: 'tata-pl',
//         title: 'Tata Capital PL',
//         subtitle: 'Easy Eligibility',
//         description: 'Loans for travel, wedding & medical needs',
//         icon: 'Banknote',
//         gradient: 'from-sky-500 to-blue-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: ~10.99%', 'Max ₹35L', 'Overdraft Facility'],
//         interestRate: '10.99%'
//       },
//       {
//         id: 'home-loan',
//         title: 'Home Loan',
//         subtitle: 'Dream Home',
//         description: 'Lowest interest rates for home buying',
//         icon: 'Home',
//         gradient: 'from-pink-500 to-rose-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: 8.50%', 'Max ₹5Cr', '30Yr Tenure'],
//         interestRate: '8.50%'
//       },
//       {
//         id: 'biz-loan',
//         title: 'Business Loan',
//         subtitle: 'Grow Business',
//         description: 'Collateral-free loans for MSMEs',
//         icon: 'Briefcase',
//         gradient: 'from-indigo-500 to-cyan-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Rate: 12%', 'Max ₹50L', 'Quick Process'],
//         interestRate: '12%'
//       }
//     ]
//   },
//   {
//     id: 'offers',
//     name: 'Offers',
//     icon: 'Gift',
//     offerings: [
//       {
//         id: 'off-1',
//         title: 'Amazon 5% Cashback',
//         subtitle: 'ICICI Bank',
//         description: 'Unlimited 5% cashback for Prime members',
//         icon: 'Gift',
//         gradient: 'from-primary to-accent',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Lifetime Free', 'No Cap', 'Instant Credit'],
//         badge: { text: 'Hot Deal', color: 'primary' }
//       },
//       {
//         id: 'off-2',
//         title: 'Flipkart 5% Off',
//         subtitle: 'Axis Bank',
//         description: 'Flat 5% cashback on Flipkart & Myntra',
//         icon: 'Gift',
//         gradient: 'from-slate-600 to-slate-800',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Unlimited', 'Lounge Access', 'Welcome Benefits']
//       },
//       {
//         id: 'off-3',
//         title: 'Free Movie Tickets',
//         subtitle: 'Kotak PVR',
//         description: 'Get 2 free PVR tickets every month',
//         icon: 'Gift',
//         gradient: 'from-amber-500 to-orange-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Spend Based', 'Any Show', 'No Cap']
//       },
//       {
//         id: 'off-4',
//         title: 'Fuel Surcharge Waiver',
//         subtitle: 'All Cards',
//         description: '1% fuel surcharge waiver at all stations',
//         icon: 'Fuel',
//         gradient: 'from-emerald-500 to-teal-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['1% Waiver', 'All Pumps', 'Monthly Cap applies']
//       },
//       {
//         id: 'off-5',
//         title: 'Airport Lounge',
//         subtitle: 'Travel Cards',
//         description: 'Complimentary domestic & international access',
//         icon: 'Gift',
//         gradient: 'from-violet-500 to-purple-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Relax', 'Free Food', 'WiFi']
//       },
//       {
//         id: 'off-6',
//         title: 'Swiggy 10% Off',
//         subtitle: 'HDFC Swiggy',
//         description: 'Flat 10% cashback on food delivery',
//         icon: 'Gift',
//         gradient: 'from-sky-500 to-blue-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Food Orders', 'Instamart', 'Dineout']
//       },
//       {
//         id: 'off-7',
//         title: 'Refer & Earn',
//         subtitle: 'Credgrow',
//         description: 'Earn ₹500 for every successful referral',
//         icon: 'Users',
//         gradient: 'from-pink-500 to-rose-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['Unlimited', 'Instant Cash', 'Bank Transfer']
//       },
//       {
//         id: 'off-8',
//         title: 'Welcome Bonus',
//         subtitle: 'Amex',
//         description: 'Get 4,000 bonus points on joining',
//         icon: 'Gift',
//         gradient: 'from-indigo-500 to-cyan-600',
//         cta: { primary: 'Apply Now', secondary: 'Details' },
//         features: ['High Value', 'Redeem for Travel', 'No Expiry']
//       }
//     ]
//   }
// ];

export const updatedServices: Service[] = [
  {
    id: 'popular',
    name: 'Popular',
    icon: 'Flame',
    offerings: [
      {
        id: 'hdfc-infinia', 
        title: 'HDFC INFINIA Metal',
        subtitle: 'Ultra Premium',
        description: 'Unlimited Global Lounge, 5 RP/₹150',
        icon: 'Crown',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Unlimited Lounge', 'Metal Card', 'Low Forex'],
        badge: { text: 'Elite', color: 'primary' }, 
        applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
      },
      {
        id: 'hdfc-pl',
        title: 'HDFC Personal Loan',
        subtitle: 'Pre-approved',
        description: 'Disbursal in 10 seconds for select customers',
        icon: 'Banknote',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~9.99%', 'Max ₹50L', '10 Sec Disbursal'],
        badge: { text: 'Fastest', color: 'primary' },
        interestRate: '9.99%', 
        applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
      },
      {
        id: 'health-ins',
        title: 'HDFC ERGO Health',
        subtitle: 'Optima Secure',
        description: '4X coverage benefit automatically',
        icon: 'Heart',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Cashless', 'Restoration', 'No Room Rent Cap'],
        badge: { text: 'Recommended', color: 'accent' }, 
        applyUrl: 'https://www.hdfcergo.com/health-insurance',
      },
      {
        id: 'sbi-cashback',
        title: 'CASHBACK SBI Card',
        subtitle: 'Online Shopping',
        description: '5% Cashback on all online spends',
        icon: 'ShoppingCart',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['5% Online Cashback', 'No Merchant Restriction', 'Auto-Credit'],
        badge: { text: 'Bestseller', color: 'accent' },
        applyUrl: 'https://www.sbicard.com/',
      },
      {
        id: 'axis-pl',
        title: 'Axis Personal Loan',
        subtitle: 'Quick Approval',
        description: 'Loans up to ₹40L with no collateral',
        icon: 'Banknote',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~9.99%', 'Max ₹40L', 'Quick Disbursal'],
        interestRate: '9.99%',
        applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',
      },
      {
        id: 'icici-amazon',
        title: 'Amazon Pay ICICI',
        subtitle: 'Lifetime Free',
        description: '5% Cashback for Prime members',
        icon: 'ShoppingCart',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', '5% Amazon Cashback', '1% All Spends'], 
        applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
      },
      {
        id: 'life-ins',
        title: 'LIC Term Life',
        subtitle: 'Jeevan Umang',
        description: 'Whole life coverage till 100 years',
        icon: 'Users',
        gradient: 'from-pink-500 to-rose-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Life Cover', 'Tax Benefits', 'Loan Facility'], 
        applyUrl: 'https://licindia.in/',
      },
      {
        id: 'idfc-wealth',
        title: 'IDFC FIRST Wealth',
        subtitle: 'Premium Lifetime Free',
        description: 'Interest-free cash withdrawal & 10X rewards',
        icon: 'Gift',
        gradient: 'from-indigo-500 to-cyan-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', 'ATM Withdrawal', 'Golf Access'],
        applyUrl: 'https://www.idfcfirst.bank.in/credit-card',
      }
    ]
  },
  {
    id: 'credit-cards',
    name: 'Credit Cards',
    icon: 'CreditCard',
    offerings: [
      {
        id: 'hdfc-infinia',
        title: 'HDFC INFINIA Metal',
        subtitle: 'Ultra Premium',
        description: 'Unlimited Global Lounge, 5 RP/₹150',
        icon: 'Crown',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Unlimited Lounge', 'Metal Card', 'Low Forex'],
        badge: { text: 'Elite', color: 'primary' },
        applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
      },
      {
        id: 'sbi-cashback',
        title: 'CASHBACK SBI Card',
        subtitle: 'Online Shopping',
        description: '5% Cashback on all online spends',
        icon: 'CreditCard',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['5% Online Cashback', 'No Merchant Restriction', 'Auto-Credit'],
        badge: { text: 'Bestseller', color: 'accent' },
        applyUrl: 'https://www.sbicard.com/',
      },
      {
        id: 'axis-flipkart',
        title: 'Flipkart Axis Bank',
        subtitle: 'Co-Branded',
        description: '5% Unlimited Cashback on Flipkart',
        icon: 'ShoppingCart',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['5% on Flipkart', 'Lounge Access', 'Welcome Benefits'],
        applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
      },
      {
        id: 'icici-amazon',
        title: 'Amazon Pay ICICI',
        subtitle: 'Lifetime Free',
        description: '5% Cashback for Prime members',
        icon: 'ShoppingCart',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', '5% Amazon Cashback', '1% All Spends'],
        applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
      },
      {
        id: 'au-zenith-plus',
        title: 'AU Zenith+ Metal',
        subtitle: 'Luxury Travel',
        description: 'Premium metal card with low forex markup',
        icon: 'Crown',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['0.99% Forex', 'Taj Epicure', 'Metal Form'],
        applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
      },
      {
        id: 'idfc-wealth',
        title: 'IDFC FIRST Wealth',
        subtitle: 'Premium Lifetime Free',
        description: 'Interest-free cash withdrawal & 10X rewards',
        icon: 'CreditCard',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', 'ATM Withdrawal', 'Golf Access'],
        applyUrl: 'https://www.idfcfirst.bank.in/credit-card',
      },
      {
        id: 'kotak-pvr',
        title: 'Kotak PVR Platinum',
        subtitle: 'Movie Buffs',
        description: 'Free movie tickets on monthly spends',
        icon: 'CreditCard',
        gradient: 'from-pink-500 to-rose-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Free PVR Tickets', 'F&B Discount', 'No Joining Fee'],
        applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
      },
      {
        id: 'yes-marquee',
        title: 'YES Marquee',
        subtitle: 'High Spenders',
        description: '36 Reward Points per ₹200 on online spends',
        icon: 'CreditCard',
        gradient: 'from-indigo-500 to-cyan-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Unlimited Lounge', 'Guest Access', 'BOGO Movies'],
        applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
      }
    ]
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: 'Shield',
    offerings: [
      {
        id: 'health-ins',
        title: 'HDFC ERGO Health',
        subtitle: 'Optima Secure',
        description: '4X coverage benefit automatically',
        icon: 'Heart',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Cashless', 'Restoration', 'No Room Rent Cap'],
        badge: { text: 'Recommended', color: 'accent' },
        applyUrl: 'https://www.hdfcergo.com/health-insurance',
      },
      {
        id: 'life-ins',
        title: 'LIC Term Life',
        subtitle: 'Jeevan Umang',
        description: 'Whole life coverage till 100 years',
        icon: 'Users',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Life Cover', 'Tax Benefits', 'Loan Facility'],
        applyUrl: 'https://licindia.in/',
      },
      {
        id: 'motor-ins',
        title: 'ICICI Lombard Motor',
        subtitle: 'Car Protect',
        description: 'Comprehensive coverage with zero depreciation',
        icon: 'Car',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Cashless Garages', 'Zero Dep', 'RSA'],
        applyUrl: 'https://www.icicilombard.com/motor-insurance',
      },
      {
        id: 'travel-ins',
        title: 'Tata AIG Travel',
        subtitle: 'Travel Guard',
        description: 'International travel insurance coverage',
        icon: 'Globe',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Medical Cover', 'Trip Cancel', 'Baggage Loss'],
        applyUrl: 'https://www.tataaig.com/travel-insurance',
      },
      {
        id: 'home-ins',
        title: 'Bajaj Allianz Home',
        subtitle: 'Property Protect',
        description: 'Covers structure and contents against theft/fire',
        icon: 'Home',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Theft Cover', 'Natural Calamity', 'Valuables'],
        applyUrl: 'https://www.bajajallianz.com/home-insurance.html',
      },
      {
        id: 'health-float',
        title: 'Family Floater',
        subtitle: 'Total Protection',
        description: 'One plan for the entire family',
        icon: 'Shield',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Floater Sum', 'Maternity', 'Newborn Cover'],
        applyUrl: 'https://www.hdfcergo.com/health-insurance',
      },
      {
        id: 'bike-ins',
        title: 'Two Wheeler',
        subtitle: 'Bike Insurance',
        description: 'Third-party and own damage cover',
        icon: 'Shield',
        gradient: 'from-pink-500 to-rose-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Instant Policy', 'No Inspection', 'Low Premium'],
        applyUrl: 'https://www.icicilombard.com/motor-insurance',
      },
      {
        id: 'term-life',
        title: 'Pure Term Plan',
        subtitle: 'High Coverage',
        description: 'High sum assured at low premiums',
        icon: 'Shield',
        gradient: 'from-indigo-500 to-cyan-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['₹1Cr Cover', 'Critical Illness', 'Accident Rider'],
        applyUrl: 'https://licindia.in/',
      }
    ]
  },
  {
    id: 'loans',
    name: 'Loans',
    icon: 'Banknote',
    offerings: [
      {
        id: 'axis-pl',
        title: 'Axis Personal Loan',
        subtitle: 'Quick Approval',
        description: 'Loans up to ₹40L with no collateral',
        icon: 'Banknote',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~9.99%', 'Max ₹40L', 'Quick Disbursal'],
        interestRate: '9.99%',
        applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',
      },
      {
        id: 'bajaj-pl',
        title: 'Bajaj Finserv PL',
        subtitle: 'Instant Funds',
        description: 'Money in bank in 24 hours',
        icon: 'Banknote',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~10%', 'Max ₹55L', 'Flexible Tenures'],
        interestRate: '10%',
        applyUrl: 'https://www.bajajfinserv.in/personal-loan',
      },
      {
        id: 'hdfc-pl',
        title: 'HDFC Personal Loan',
        subtitle: 'Pre-approved',
        description: 'Disbursal in 10 seconds for select customers',
        icon: 'Banknote',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~9.99%', 'Max ₹50L', '10 Sec Disbursal'],
        badge: { text: 'Fastest', color: 'primary' },
        interestRate: '9.99%',
        applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
      },
      {
        id: 'icici-pl',
        title: 'ICICI Personal Loan',
        subtitle: 'Digital Process',
        description: 'Minimal documentation & flexible tenures',
        icon: 'Banknote',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~10.45%', 'Max ₹50L', 'Digital Process'],
        interestRate: '10.45%',
        applyUrl: 'https://www.icicibank.com/personal-banking/loans/personal-loan',
      },
      {
        id: 'sbi-pl',
        title: 'SBI Xpress Credit',
        subtitle: 'Low Interest',
        description: 'Special rates for govt/defence employees',
        icon: 'Banknote',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~10.05%', 'Max ₹35L', 'Low Processing Fee'],
        interestRate: '10.05%',
        applyUrl: 'https://www.sbi.co.in/web/personal-banking/loans/personal-loans/xpress-credit',
      },
      {
        id: 'tata-pl',
        title: 'Tata Capital PL',
        subtitle: 'Easy Eligibility',
        description: 'Loans for travel, wedding & medical needs',
        icon: 'Banknote',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Rate: ~10.99%', 'Max ₹35L', 'Overdraft Facility'],
        interestRate: '10.99%',
        applyUrl: 'https://www.tatacapital.com/personal-loan.html',
      },
      {
        id: 'axis-fibe',
        title: 'Axis Fibe Card',
        subtitle: 'Digital Credit',
        description: 'Instant digital credit line',
        icon: 'Banknote',
        gradient: 'from-pink-500 to-rose-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Numberless Card', 'RuPay UPI', '3% Cashback'],
        interestRate: '0%',
        applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
      },
      {
        id: 'hdfc-moneyback',
        title: 'HDFC MoneyBack+',
        subtitle: 'Household Spends',
        description: '10X CashPoints on everyday spends',
        icon: 'Briefcase',
        gradient: 'from-indigo-500 to-cyan-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['10X Points', 'Gift Vouchers', 'Low Fee'],
        interestRate: '0%',
        applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
      }
    ]
  },
  {
    id: 'offers',
    name: 'Offers',
    icon: 'Gift',
    offerings: [
      {
        id: 'off-1',
        title: 'Amazon 5% Cashback',
        subtitle: 'ICICI Bank',
        description: 'Unlimited 5% cashback for Prime members',
        icon: 'Gift',
        gradient: 'from-primary to-accent',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', 'No Cap', 'Instant Credit'],
        badge: { text: 'Hot Deal', color: 'primary' },
        applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
      },
      {
        id: 'off-2',
        title: 'Flipkart 5% Off',
        subtitle: 'Axis Bank',
        description: 'Flat 5% cashback on Flipkart & Myntra',
        icon: 'Gift',
        gradient: 'from-slate-600 to-slate-800',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Unlimited', 'Lounge Access', 'Welcome Benefits'],
        applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
      },
      {
        id: 'off-3',
        title: 'Free Movie Tickets',
        subtitle: 'Kotak PVR',
        description: 'Get 2 free PVR tickets every month',
        icon: 'Gift',
        gradient: 'from-amber-500 to-orange-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Spend Based', 'Any Show', 'No Cap'],
        applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
      },
      {
        id: 'off-4',
        title: 'Fuel Surcharge Waiver',
        subtitle: 'IDFC FIRST Power+',
        description: '6.5% savings and waiver at all stations',
        icon: 'Fuel',
        gradient: 'from-emerald-500 to-teal-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['HPCL Benefits', 'Utility Savings', 'Monthly Cap applies'],
        applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=FinsangIndia_HPCL&utm_campaign=SKYJP_Mycard_01',
      },
      {
        id: 'off-5',
        title: 'Airport Lounge',
        subtitle: 'IDFC Ashva Metal',
        description: 'Complimentary domestic & international access',
        icon: 'Gift',
        gradient: 'from-violet-500 to-purple-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Relax', 'Low Forex', 'WiFi'],
        applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/ashva-upgrade?utm_source=Partner&utm_medium=FinsangIndia_Ashva&utm_campaign=SKYJP_Mycard_01',
      },
      {
        id: 'off-6',
        title: 'Swiggy 10% Off',
        subtitle: 'HDFC Swiggy',
        description: 'Flat 10% cashback on food delivery',
        icon: 'Gift',
        gradient: 'from-sky-500 to-blue-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Food Orders', 'Instamart', 'Dineout'],
        applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
      },
      {
        id: 'off-7',
        title: 'AU LIT Card',
        subtitle: 'Customizable',
        description: 'Switch features on and off as needed',
        icon: 'Users',
        gradient: 'from-pink-500 to-rose-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Pay for what you use', 'Customizable', 'Lifetime Free'],
        applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
      },
      {
        id: 'off-8',
        title: 'IDFC FIRST Select',
        subtitle: 'Travel & Lifestyle',
        description: 'Buy 1 Get 1 Movie & Lounge Access',
        icon: 'Gift',
        gradient: 'from-indigo-500 to-cyan-600',
        cta: { primary: 'Apply Now', secondary: 'Details' },
        features: ['Lifetime Free', 'BOGO Movies', 'Lounge'],
        applyUrl: 'https://www.idfcfirst.bank.in/credit-card',
      }
    ]
  }
];

export const bankLogos = [
  { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
  { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/200px-State_Bank_of_India_logo.svg.png' },
  { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg' },
  { name: 'Kotak', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Kotak_Mahindra_Bank_logo.svg' },
  { name: 'Yes Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Yes_Bank_SVG_Logo.svg' },
];


// ----------------------- updated hero slides 

export interface updatedHeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  visualComposition: VisualComposition;
  serviceHighlight: string;
}



export const updatedHeroSlides: updatedHeroSlide[] = [
  {
    id: 'credit-cards',
    title: 'Premium Credit Cards',
    subtitle: 'Unlock Exclusive Rewards',
    description: 'Experience luxury banking with our Platinum card. Earn 5X rewards on travel, dining, and entertainment with zero annual fees for the first year.',
    primaryCTA: { text: 'Apply Now', href: '/apply' },
    secondaryCTA: { text: 'Compare Cards', href: '/cards' },
    serviceHighlight: 'credit-cards',
    visualComposition: {
      type: 'ambassador-card-presentation',
      ambassador: {
        id: 'amb-1',
        name: 'Virat Kohli',
        title: 'Brand Ambassador',
        subtitle: 'Champion of Financial Excellence',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face',
        imageAlt: 'Virat Kohli, Credgrow Brand Ambassador',
        pose: 'presenting-card',
        quote: {
          text: 'Credgrow transformed how I manage my finances. Premium rewards, seamless experience.',
          attribution: 'Virat Kohli',
          role: 'Brand Ambassador • Cricketer',
        },
        backgroundGradient: 'from-slate-900/90 via-slate-800/80 to-slate-900/90',
        frameAccent: 'gold',
      },
      card: {
        type: 'platinum',
        name: 'Credgrow Platinum',
        gradient: 'from-slate-700 via-slate-600 to-slate-800',
        features: ['Contactless', 'Global Access', '5X Rewards'],
        chipColor: 'gold',
        number: '•••• •••• •••• 4521',
        holderName: 'PREMIUM MEMBER',
        tiltDegree: 15,
        floatAnimation: true,
        hoverResponse: 'enhanced',
        position: 'floating-front',
        scale: 0.85,
        rotation: { x: 5, y: -12, z: 2 },
      },
      badges: [
        {
          id: 'credit-limit',
          value: '₹50L+',
          label: 'Credit Limit',
          icon: 'CreditCard',
          position: 'top-left',
          color: 'gold',
        },
        {
          id: 'first-year',
          value: '0%',
          label: 'First Year Fee',
          icon: 'Percent',
          position: 'bottom-right',
          color: 'primary',
        },
      ],
      particles: {
        colors: ['#94a3b8', '#f59e0b', '#ffffff'],
        density: 'medium',
        speed: 'slow',
        size: 'small',
      },
    },
  },
  {
    id: 'personal-loans',
    title: 'Instant Personal Loans',
    subtitle: 'Dreams Made Affordable',
    description: 'Get approved in minutes with our AI-powered lending. Competitive rates starting at 10.49% p.a. with flexible tenures up to 60 months.',
    primaryCTA: { text: 'Check Eligibility', href: '/loans' },
    secondaryCTA: { text: 'Calculate EMI', href: '/calculator' },
    serviceHighlight: 'loans',
    visualComposition: {
      type: 'ambassador-card-presentation',
      ambassador: {
        id: 'amb-2',
        name: 'Deepika Padukone',
        title: 'Brand Ambassador',
        subtitle: 'Smart Financing Advocate',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&crop=face',
        imageAlt: 'Deepika Padukone, Credgrow Brand Ambassador',
        pose: 'confident-portrait',
        quote: {
          text: 'My investment journey became seamless and transparent with Credgrow. Trust redefined.',
          attribution: 'Deepika Padukone',
          role: 'Brand Ambassador • Actor',
        },
        backgroundGradient: 'from-amber-900/80 via-orange-800/70 to-red-900/80',
        frameAccent: 'gold',
      },
      card: {
        type: 'gold',
        name: 'Credgrow Gold',
        gradient: 'from-amber-600 via-yellow-500 to-amber-700',
        features: ['Quick Approval', 'No Collateral', 'Flexible EMI'],
        chipColor: 'gold',
        number: '•••• •••• •••• 7842',
        holderName: 'GOLD MEMBER',
        tiltDegree: 12,
        floatAnimation: true,
        hoverResponse: 'enhanced',
        position: 'floating-beside',
        scale: 0.8,
        rotation: { x: 8, y: -8, z: -2 },
      },
      badges: [
        {
          id: 'approval-time',
          value: '2 Min',
          label: 'Approval Time',
          icon: 'Clock',
          position: 'top-right',
          color: 'accent',
        },
        {
          id: 'rate',
          value: '10.49%',
          label: 'Starting Rate',
          icon: 'TrendingDown',
          position: 'bottom-left',
          color: 'gold',
        },
      ],
      particles: {
        colors: ['#f59e0b', '#ef4444', '#fbbf24'],
        density: 'medium',
        speed: 'slow',
        size: 'small',
      },
    },
  },
  {
    id: 'insurance',
    title: 'Comprehensive Insurance',
    subtitle: 'Protect What Matters Most',
    description: 'Secure your future with our comprehensive insurance plans. Life, health, and motor coverage with cashless claims across 10,000+ hospitals.',
    primaryCTA: { text: 'Get Quote', href: '/insurance' },
    secondaryCTA: { text: 'View Plans', href: '/plans' },
    serviceHighlight: 'insurance',
    visualComposition: {
      type: 'ambassador-card-presentation',
      ambassador: {
        id: 'amb-3',
        name: 'MS Dhoni',
        title: 'Brand Ambassador',
        subtitle: 'Captain of Your Security',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=face',
        imageAlt: 'MS Dhoni, Credgrow Brand Ambassador',
        pose: 'holding-card',
        quote: {
          text: 'Security that never lets you down. Credgrow has my family protected, always.',
          attribution: 'MS Dhoni',
          role: 'Brand Ambassador • Cricketer',
        },
        backgroundGradient: 'from-emerald-900/80 via-teal-800/70 to-emerald-900/80',
        frameAccent: 'emerald',
      },
      card: {
        type: 'signature',
        name: 'Credgrow Shield',
        gradient: 'from-emerald-600 via-teal-500 to-emerald-700',
        features: ['Cashless Claims', '24/7 Support', 'Family Cover'],
        chipColor: 'gold',
        number: '•••• •••• •••• 3156',
        holderName: 'SHIELD MEMBER',
        tiltDegree: 10,
        floatAnimation: true,
        hoverResponse: 'enhanced',
        position: 'floating-front',
        scale: 0.82,
        rotation: { x: 6, y: -10, z: 1 },
      },
      badges: [
        {
          id: 'coverage',
          value: '₹1 Cr',
          label: 'Max Coverage',
          icon: 'Shield',
          position: 'top-left',
          color: 'emerald',
        },
        {
          id: 'hospitals',
          value: '10K+',
          label: 'Network Hospitals',
          icon: 'Building2',
          position: 'bottom-right',
          color: 'primary',
        },
      ],
      particles: {
        colors: ['#10b981', '#14b8a6', '#34d399'],
        density: 'light',
        speed: 'slow',
        size: 'small',
      },
    },
  },
];
