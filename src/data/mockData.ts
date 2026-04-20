
export interface CreditCard {
  id: string;
  bankName: string;
  cardName: string;
  imageUrl: string;
  joiningFee: number;
  annualFee: number;
  rewardType: 'Cashback' | 'Travel' | 'Shopping' | 'Fuel';
  bestFor: string;
  rewardRate: string;
  features: string[];
  applyUrl: string;
  isFeatured: boolean;
  eligibility: string;
  rating: number;
}

export interface PersonalLoan {
  id: string;
  bankName: string;
  logoUrl: string;
  interestRate: string;
  maxAmount: string;
  tenure: string;
  processingFee: string;
  features: string[];
  applyUrl: string;
  isFeatured: boolean;
  eligibility: string;
  rating: number;
}

export interface InsurancePlan {
  id: string;
  providerName: string; // Equivalent to bankName
  planName: string;     // Equivalent to cardName
  imageUrl: string;
  premium: number;      // Monthly or Yearly premium estimate
  coverAmount: string;  // Sum Insured
  category: 'Health' | 'Life' | 'Motor' | 'Travel' | 'Home';
  type: 'individual' | 'family';
  bestFor: string;
  features: string[];
  applyUrl: string;
  isFeatured: boolean;
  eligibility: string;  // Age or medical criteria
  rating: number;
}



// Mock Data
// export const creditCards: CreditCard[] = [
//   {
//     id: 'hdfc-regalia',
//     bankName: 'HDFC Bank',
//     cardName: 'Regalia Credit Card',
//     imageUrl: 'https://placehold.co/400x250/7c3aed/ffffff?text=HDFC+Regalia',
//     joiningFee: 2500,
//     annualFee: 2500,
//     rewardType: 'Travel',
//     bestFor: 'Travel Enthusiasts',
//     rewardRate: '4 Reward Points per ₹150',
//     features: [
//       'Complimentary airport lounge access worldwide',
//       '1% fuel surcharge waiver',
//       'Golf privileges at select courses',
//       'Milestone benefits up to ₹15,000',
//       'Premium concierge services'
//     ],
//     applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-credit-card',
//     isFeatured: true,
//     eligibility: '₹12L+ annual income',
//     rating: 4.8
//   },
//   {
//     id: 'sbi-cashback',
//     bankName: 'SBI Card',
//     cardName: 'SimplyCLICK Card',
//     imageUrl: 'https://placehold.co/400x250/1e40af/ffffff?text=SBI+SimplyCLICK',
//     joiningFee: 499,
//     annualFee: 499,
//     rewardType: 'Cashback',
//     bestFor: 'Online Shopping',
//     rewardRate: '10X rewards on partner brands',
//     features: [
//       '10X rewards on Amazon, BookMyShow, Cleartrip',
//       '5X rewards on all online spends',
//       'Welcome gift worth ₹500',
//       'Annual fee reversal on ₹1L spend',
//       '1% fuel surcharge waiver'
//     ],
//     applyUrl: 'https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page',
//     isFeatured: true,
//     eligibility: '₹3L+ annual income',
//     rating: 4.5
//   },
//   {
//     id: 'icici-amazon',
//     bankName: 'ICICI Bank',
//     cardName: 'Amazon Pay Card',
//     imageUrl: 'https://placehold.co/400x250/f97316/ffffff?text=ICICI+Amazon',
//     joiningFee: 0,
//     annualFee: 0,
//     rewardType: 'Cashback',
//     bestFor: 'Amazon Shopping',
//     rewardRate: '5% cashback on Amazon',
//     features: [
//       '5% cashback on Amazon.in for Prime members',
//       '3% cashback on Amazon for non-Prime',
//       '2% cashback on paying bills',
//       '1% cashback on all other spends',
//       'No joining or annual fee'
//     ],
//     applyUrl: 'https://www.icicibank.com/card/credit-cards/amazon-pay-credit-card',
//     isFeatured: false,
//     eligibility: '₹2.5L+ annual income',
//     rating: 4.6
//   },
//   {
//     id: 'axis-flipkart',
//     bankName: 'Axis Bank',
//     cardName: 'Flipkart Axis Bank Card',
//     imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Axis+Flipkart',
//     joiningFee: 0,
//     annualFee: 0,
//     rewardType: 'Cashback',
//     bestFor: 'Flipkart Shopping',
//     rewardRate: '5% unlimited cashback on Flipkart',
//     features: [
//       '5% unlimited cashback on Flipkart, Myntra, 2GUD',
//       '4% cashback on preferred partners',
//       '1.5% cashback on all other spends',
//       'Welcome benefits worth ₹500',
//       'Annual fee waived for life'
//     ],
//     applyUrl: 'https://www.axisbank.com/retail/cards/credit-card/flipkart-axis-bank-credit-card',
//     isFeatured: false,
//     eligibility: '₹3L+ annual income',
//     rating: 4.4
//   },
//   {
//     id: 'idfc-millennia',
//     bankName: 'IDFC FIRST Bank',
//     cardName: 'FIRST Millennia Card',
//     imageUrl: 'https://placehold.co/400x250/059669/ffffff?text=IDFC+Millennia',
//     joiningFee: 0,
//     annualFee: 0,
//     rewardType: 'Shopping',
//     bestFor: 'Young Professionals',
//     rewardRate: '10X rewards on online spends',
//     features: [
//       '10X reward points on online spends',
//       '6X reward points on offline spends',
//       'No annual or joining fee',
//       'Welcome vouchers worth ₹500',
//       'Complimentary movie tickets'
//     ],
//     applyUrl: 'https://www.idfcfirstbank.com/credit-card/millennia',
//     isFeatured: true,
//     eligibility: '₹3L+ annual income',
//     rating: 4.7
//   },
//   {
//     id: 'kotak-811',
//     bankName: 'Kotak Mahindra',
//     cardName: '811 Dream Different Card',
//     imageUrl: 'https://placehold.co/400x250/dc2626/ffffff?text=Kotak+811',
//     joiningFee: 0,
//     annualFee: 0,
//     rewardType: 'Fuel',
//     bestFor: 'Fuel & Dining',
//     rewardRate: '2% cashback on fuel',
//     features: [
//       '2% cashback on fuel transactions',
//       '1% cashback on all other spends',
//       'Zero joining & annual fee',
//       'Instant approval with 811 account',
//       'Contactless payments enabled'
//     ],
//     applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards/811-dream-different.html',
//     isFeatured: false,
//     eligibility: '₹2L+ annual income',
//     rating: 4.2
//   },
//   {
//     id: 'au-altura',
//     bankName: 'AU Small Finance',
//     cardName: 'Altura Plus Card',
//     imageUrl: 'https://placehold.co/400x250/7c3aed/ffffff?text=AU+Altura',
//     joiningFee: 199,
//     annualFee: 199,
//     rewardType: 'Travel',
//     bestFor: 'Lounge Access',
//     rewardRate: '2 Reward Points per ₹100',
//     features: [
//       '4 complimentary domestic lounge visits',
//       '2 Reward Points per ₹100 spent',
//       '1% fuel surcharge waiver',
//       'Movie ticket discounts',
//       'Dining offers at partner restaurants'
//     ],
//     applyUrl: 'https://www.aubank.in/credit-card/altura-plus-credit-card',
//     isFeatured: false,
//     eligibility: '₹4L+ annual income',
//     rating: 4.3
//   },
//   {
//     id: 'yes-first-exclusive',
//     bankName: 'YES Bank',
//     cardName: 'YES FIRST Exclusive',
//     imageUrl: 'https://placehold.co/400x250/0891b2/ffffff?text=YES+FIRST',
//     joiningFee: 0,
//     annualFee: 0,
//     rewardType: 'Travel',
//     bestFor: 'Premium Travel',
//     rewardRate: '12 Reward Points per ₹100',
//     features: [
//       'Unlimited domestic lounge access',
//       '12 Reward Points per ₹100 on travel',
//       'Golf privileges worldwide',
//       '1% fuel surcharge waiver',
//       'Complimentary priority pass membership'
//     ],
//     applyUrl: 'https://www.yesbank.in/personal-banking/yes-first/credit-cards/yes-first-exclusive-credit-card',
//     isFeatured: false,
//     eligibility: '₹15L+ annual income',
//     rating: 4.6
//   }
// ];

// export const personalLoans: PersonalLoan[] = [
//   {
//     id: 'hdfc-personal',
//     bankName: 'HDFC Bank',
//     logoUrl: 'https://placehold.co/120x60/dc2626/ffffff?text=HDFC',
//     interestRate: '10.50% - 21.00%',
//     maxAmount: '₹40 Lakhs',
//     tenure: '12 - 60 months',
//     processingFee: 'Up to 2.5% of loan amount',
//     features: [
//       'Quick disbursal within 4 hours',
//       'No collateral required',
//       'Flexible repayment options',
//       'Top-up loan facility',
//       'Part prepayment allowed'
//     ],
//     applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
//     isFeatured: true,
//     eligibility: '₹25,000+ monthly salary',
//     rating: 4.7
//   },
//   {
//     id: 'icici-personal',
//     bankName: 'ICICI Bank',
//     logoUrl: 'https://placehold.co/120x60/f97316/ffffff?text=ICICI',
//     interestRate: '10.75% - 19.00%',
//     maxAmount: '₹50 Lakhs',
//     tenure: '12 - 72 months',
//     processingFee: 'Up to 2.25% of loan amount',
//     features: [
//       'Instant approval for pre-approved customers',
//       'Doorstep document collection',
//       'Zero foreclosure charges after 12 months',
//       'Online account management',
//       'Flexible EMI dates'
//     ],
//     applyUrl: 'https://www.icicibank.com/personal-banking/loans/personal-loan',
//     isFeatured: true,
//     eligibility: '₹20,000+ monthly salary',
//     rating: 4.6
//   },
//   {
//     id: 'sbi-express',
//     bankName: 'SBI',
//     logoUrl: 'https://placehold.co/120x60/1e40af/ffffff?text=SBI',
//     interestRate: '11.00% - 14.50%',
//     maxAmount: '₹35 Lakhs',
//     tenure: '12 - 72 months',
//     processingFee: '1.5% of loan amount',
//     features: [
//       'Lowest interest rates for govt employees',
//       'No guarantor required',
//       'Simple documentation',
//       'Online EMI calculator',
//       'Special rates for women'
//     ],
//     applyUrl: 'https://www.sbi.co.in/web/personal-banking/loans/personal-loans/xpress-credit',
//     isFeatured: false,
//     eligibility: '₹15,000+ monthly salary',
//     rating: 4.4
//   },
//   {
//     id: 'axis-personal',
//     bankName: 'Axis Bank',
//     logoUrl: 'https://placehold.co/120x60/7c3aed/ffffff?text=AXIS',
//     interestRate: '10.49% - 22.00%',
//     maxAmount: '₹40 Lakhs',
//     tenure: '12 - 60 months',
//     processingFee: 'Up to 2% of loan amount',
//     features: [
//       '15-minute approval for existing customers',
//       'Balance transfer facility',
//       'Overdraft option available',
//       'No hidden charges',
//       'Online loan management'
//     ],
//     applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',
//     isFeatured: false,
//     eligibility: '₹15,000+ monthly salary',
//     rating: 4.5
//   },
//   {
//     id: 'bajaj-finserv',
//     bankName: 'Bajaj Finserv',
//     logoUrl: 'https://placehold.co/120x60/0891b2/ffffff?text=BAJAJ',
//     interestRate: '11.00% - 18.00%',
//     maxAmount: '₹35 Lakhs',
//     tenure: '12 - 84 months',
//     processingFee: 'Up to 3% of loan amount',
//     features: [
//       'EMI starting from ₹1,623 per lakh',
//       'Zero prepayment charges for floating rate',
//       'Flexi loan option available',
//       'Instant approval',
//       'Doorstep service'
//     ],
//     applyUrl: 'https://www.bajajfinserv.in/personal-loan',
//     isFeatured: false,
//     eligibility: '₹22,000+ monthly salary',
//     rating: 4.3
//   },
//   {
//     id: 'tata-capital',
//     bankName: 'Tata Capital',
//     logoUrl: 'https://placehold.co/120x60/059669/ffffff?text=TATA',
//     interestRate: '10.99% - 19.00%',
//     maxAmount: '₹35 Lakhs',
//     tenure: '12 - 72 months',
//     processingFee: 'Up to 2.5% of loan amount',
//     features: [
//       'Special rates for TATA employees',
//       'Quick approval in 2 hours',
//       'No collateral required',
//       'Minimal documentation',
//       'Flexible repayment tenure'
//     ],
//     applyUrl: 'https://www.tatacapital.com/personal-loan.html',
//     isFeatured: false,
//     eligibility: '₹20,000+ monthly salary',
//     rating: 4.4
//   }
// ];

export const bankLogos = [
  { name: 'HDFC Bank', url: 'https://placehold.co/120x60/dc2626/ffffff?text=HDFC' },
  { name: 'ICICI Bank', url: 'https://placehold.co/120x60/f97316/ffffff?text=ICICI' },
  { name: 'SBI', url: 'https://placehold.co/120x60/1e40af/ffffff?text=SBI' },
  { name: 'Axis Bank', url: 'https://placehold.co/120x60/7c3aed/ffffff?text=AXIS' },
  { name: 'Kotak', url: 'https://placehold.co/120x60/dc2626/ffffff?text=KOTAK' },
  { name: 'IDFC FIRST', url: 'https://placehold.co/120x60/059669/ffffff?text=IDFC' },
  { name: 'YES Bank', url: 'https://placehold.co/120x60/0891b2/ffffff?text=YES' },
  { name: 'AU Bank', url: 'https://placehold.co/120x60/7c3aed/ffffff?text=AU' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Software Engineer, Bangalore',
    image: 'https://placehold.co/80x80/7c3aed/ffffff?text=RS',
    content: 'Credgrow helped me find the perfect credit card with amazing rewards. The comparison feature saved me hours of research!',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Marketing Manager, Mumbai',
    image: 'https://placehold.co/80x80/f97316/ffffff?text=PP',
    content: 'Got my personal loan approved in just 2 hours through Credgrow. The EMI calculator helped me plan my finances perfectly.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'Business Owner, Delhi',
    image: 'https://placehold.co/80x80/059669/ffffff?text=AK',
    content: 'Excellent platform for comparing financial products. The team provided great guidance throughout my loan application.',
    rating: 4
  }
];


// export const insurancePlans: InsurancePlan[] = [
//   {
//     id: 'hdfc-optima',
//     providerName: 'HDFC ERGO',
//     planName: 'Optima Secure',
//     imageUrl: 'https://placehold.co/400x250/dc2626/ffffff?text=HDFC+Health',
//     premium: 15000,
//     coverAmount: '₹10 Lakhs',
//     category: 'Health',
//     type: 'individual',
//     bestFor: 'Comprehensive Coverage',
//     features: [
//       '4X coverage benefit automatically',
//       'No room rent capping',
//       'Restore benefit unlimited times',
//       'Consumables cover included',
//       'Free annual health checkup'
//     ],
//     applyUrl: '#',
//     isFeatured: true,
//     eligibility: 'Adults 18-65 years',
//     rating: 4.9
//   },
//   {
//     id: 'lic-jeevan',
//     providerName: 'LIC',
//     planName: 'Jeevan Umang',
//     imageUrl: 'https://placehold.co/400x250/f59e0b/ffffff?text=LIC+Life',
//     premium: 50000,
//     coverAmount: '₹20 Lakhs',
//     category: 'Life',
//     type: 'individual',
//     bestFor: 'Lifetime Income',
//     features: [
//       'Whole life coverage till 100 years',
//       'Guaranteed survival benefits',
//       'Tax benefits under 80C',
//       'Loan facility available',
//       'Participating endowment plan'
//     ],
//     applyUrl: '#',
//     isFeatured: true,
//     eligibility: '90 days - 55 years',
//     rating: 4.8
//   },
//   {
//     id: 'star-family',
//     providerName: 'Star Health',
//     planName: 'Family Health Optima',
//     imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Star+Family',
//     premium: 22000,
//     coverAmount: '₹25 Lakhs',
//     category: 'Health',
//     type: 'family',
//     bestFor: 'Family Floater',
//     features: [
//       'Covers entire family under one sum',
//       'Auto recharge of sum insured',
//       'Newborn baby cover',
//       'Assisted reproduction treatment',
//       'Compassionate travel support'
//     ],
//     applyUrl: '#',
//     isFeatured: true,
//     eligibility: 'Family Floater',
//     rating: 4.6
//   },
//   {
//     id: 'icici-motor',
//     providerName: 'ICICI Lombard',
//     planName: 'Car Protect Plus',
//     imageUrl: 'https://placehold.co/400x250/ea580c/ffffff?text=ICICI+Motor',
//     premium: 8000,
//     coverAmount: 'IDV Value',
//     category: 'Motor',
//     type: 'individual',
//     bestFor: 'Vehicle Protection',
//     features: [
//       'Zero depreciation cover',
//       'Roadside assistance 24x7',
//       'Engine protect add-on',
//       'Cashless garage network',
//       'Consumables cover'
//     ],
//     applyUrl: '#',
//     isFeatured: false,
//     eligibility: 'Private Car Owners',
//     rating: 4.5
//   },
//   {
//     id: 'tata-travel',
//     providerName: 'Tata AIG',
//     planName: 'Travel Guard',
//     imageUrl: 'https://placehold.co/400x250/059669/ffffff?text=Tata+Travel',
//     premium: 1200,
//     coverAmount: '$100,000',
//     category: 'Travel',
//     type: 'individual',
//     bestFor: 'International Travel',
//     features: [
//       'Medical emergency coverage',
//       'Trip cancellation protection',
//       'Lost baggage compensation',
//       'Flight delay reimbursement',
//       'Passport loss assistance'
//     ],
//     applyUrl: '#',
//     isFeatured: false,
//     eligibility: 'All Travelers',
//     rating: 4.4
//   }
// ];