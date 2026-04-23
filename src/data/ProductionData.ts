export interface CreditCardReal {
  id: string;
  bankName: string;
  cardName: string;
  imageUrl: string;
  joiningFee: number;
  annualFee: number;
  rewardType: 'Cashback' | 'Travel' | 'Shopping' | 'Fuel' | 'Luxury' | 'Wealth' | 'Premium' | 'Rewards' | 'Lifestyle' | 'Entertainment' | 'Business';
  bestFor: string;
  rewardRate: string;
  features: string[];
  applyUrl: string;
  isFeatured: boolean;
  eligibility: string;
  rating: number;
}

export interface PersonalLoanReal {
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

export interface InsurancePlanReal {
  id: string;
  providerName: string;
  planName: string;
  imageUrl: string;
  premium: string;        // Changed from number to string to accept "Affordable"
  coverAmount: string;
  category: 'Health' | 'Life' | 'Motor' | 'Travel' | 'Home';
  type: 'individual' | 'family';
  bestFor: string;
  features: string[];
  applyUrl: string;
  isFeatured: boolean;
  eligibility: string;
  rating: number;
}


export const creditCardProductionData: CreditCardReal[] = [
    {
    id: 'idfc-ashva-metal',
    bankName: 'IDFC FIRST Bank',
    cardName: 'Ashva Metal Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+Ashva+Metal',
    joiningFee: 1,
    annualFee:1,
    rewardType: 'Travel',
    bestFor: 'Heritage',
    rewardRate: '10X Rewards',
    features: [
      'Metal Card',
      'Low Forex',
      'Airport Lounge'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/ashva-upgrade?utm_source=Partner&utm_medium=FinsangIndia_Ashva&utm_campaign=SKYJP_Mycard_01',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'idfc-mayura-metal',
    bankName: 'IDFC FIRST Bank',
    cardName: 'Mayura Metal Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+Mayura+Metal',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Premium',
    rewardRate: '10X Rewards',
    features: [
      'Zero Forex',
      'Airport Transfers',
      'Luxury Hotels'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/mayura-upgrade?utm_source=Partner&utm_medium=FinsangIndia_Mayura&utm_campaign=SKYJP_Mycard_01',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'idfc-first-wealth',
    bankName: 'IDFC FIRST Bank',
    cardName: 'FIRST Wealth Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+FIRST+Wealth',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Wealth',
    bestFor: 'Premium',
    rewardRate: '10X Rewards',
    features: [
      'Lifetime Free',
      'Golf',
      'Low Forex'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'idfc-first-select',
    bankName: 'IDFC FIRST Bank',
    cardName: 'FIRST Select Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+FIRST+Select',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Lifestyle',
    bestFor: 'Travel',
    rewardRate: '10X Rewards',
    features: [
      'Lifetime Free',
      'Buy1Get1 Movie',
      'Lounge'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'idfc-first-powerplus',
    bankName: 'IDFC FIRST Bank',
    cardName: 'FIRST Power+ Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+FIRST+Power%2B',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Fuel',
    bestFor: 'Fuel',
    rewardRate: '6.5% Savings',
    features: [
      'HPCL Benefits',
      'Utility Savings'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/apply?cardType=RPLP&utm_source=Partner&utm_medium=FinsangIndia_HPCL&utm_campaign=SKYJP_Mycard_01',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'idfc-lic-classic',
    bankName: 'IDFC FIRST Bank',
    cardName: 'LIC Classic Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+LIC+Classic',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Shopping',
    bestFor: 'Insurance',
    rewardRate: '6X Rewards',
    features: [
      'Lifetime Free',
      'LIC Premiums'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/lic-standalone?utm_source=LIC_CSL_Employee&utm_medium=LIC_CSL&utm_campaign=Emp_D170000486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'idfc-lic-select',
    bankName: 'IDFC FIRST Bank',
    cardName: 'LIC Select Credit Card',
    imageUrl: 'https://placehold.co/400x250/9d2235/ffffff?text=IDFC+LIC+Select',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Shopping',
    bestFor: 'Insurance',
    rewardRate: '10X Rewards',
    features: [
      'Lifetime Free',
      'Lounge Access'
    ],
    applyUrl: 'https://www.idfcfirst.bank.in/credit-card/ntb-diy/lic-standalone?utm_source=LIC_CSL_Employee&utm_medium=LIC_CSL&utm_campaign=Emp_D170000486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },

  {
    id: 'au-zenithplus-metal',
    bankName: 'AU Small Finance Bank',
    cardName: 'Zenith+ Metal Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+Zenith++Metal',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Premium',
    bestFor: 'Luxury Travel',
    rewardRate: '2 Reward Points/₹100',
    features: [
      'Metal Card',
      '0.99% Forex Markup',
      'Taj Epicure Membership'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'au-vetta',
    bankName: 'AU Small Finance Bank',
    cardName: 'Vetta Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+Vetta',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Lifestyle',
    bestFor: 'Lifestyle Benefits',
    rewardRate: 'Multi-Rewards',
    features: [
      'Quarterly Milestone Benefits',
      'Lounge Access'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'au-lit',
    bankName: 'AU Small Finance Bank',
    cardName: 'LIT Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+LIT',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Shopping',
    bestFor: 'Customizable',
    rewardRate: 'Customizable',
    features: [
      'Switch Features On/Off',
      'Pay for what you use'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'au-spont',
    bankName: 'AU Small Finance Bank',
    cardName: 'SPONT Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+SPONT',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'UPI Transactions',
    rewardRate: 'Coins on UPI',
    features: [
      'Built for UPI',
      'Fuel Surcharge Waiver'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'au-nomo',
    bankName: 'AU Small Finance Bank',
    cardName: 'NOMO Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+NOMO',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'FD Backed',
    rewardRate: 'Build Credit Score',
    features: [
      'No Income Proof',
      'FD Interest + Rewards'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'au-altura',
    bankName: 'AU Small Finance Bank',
    cardName: 'Altura Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+Altura',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Shopping',
    bestFor: 'Daily Spends',
    rewardRate: 'Cashback',
    features: [
      'Up to 2% Cashback',
      'Railway Lounge Access'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'au-altura-plus',
    bankName: 'AU Small Finance Bank',
    cardName: 'Altura Plus Credit Card',
    imageUrl: 'https://placehold.co/400x250/682c91/ffffff?text=AU+Altura+Plus',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Shopping',
    bestFor: 'Double Benefits',
    rewardRate: 'Cashback & Rewards',
    features: [
      '2X Rewards',
      'Railway Lounge Access'
    ],
    applyUrl: 'https://www.aubank.in/personal-banking/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'hdfc-millennia',
    bankName: 'HDFC Bank',
    cardName: 'Millennia Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Millennia',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Online Shopping',
    rewardRate: '5% Cashback',
    features: [
      '5% Cashback on Amazon/Flipkart',
      '1% Offline Cashback'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'hdfc-indianoil',
    bankName: 'HDFC Bank',
    cardName: 'IndianOil Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+IndianOil',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Fuel',
    bestFor: 'Fuel Savings',
    rewardRate: '50 Litres Free Fuel',
    features: [
      '5% Fuel Points',
      'Groceries Rewards'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'hdfc-pixel-play',
    bankName: 'HDFC Bank',
    cardName: 'Pixel Play Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Pixel+Play',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Digital Generation',
    rewardRate: '5% Cashback',
    features: [
      'Customizable Design',
      'PayZapp Integrated'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'hdfc-freedom',
    bankName: 'HDFC Bank',
    cardName: 'Freedom Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Freedom',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Points',
    rewardRate: '10X CashPoints',
    features: [
      '10X on BigBasket/Oyo',
      'Low Interest Period'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'hdfc-infinia-metal-edition',
    bankName: 'HDFC Bank',
    cardName: 'INFINIA Metal Edition Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+INFINIA+Metal+Edition',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Luxury',
    rewardRate: '5 RP/₹150',
    features: [
      'Unlimited Global Lounge',
      'Club Marriott'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'hdfc-diners-club-black-metal',
    bankName: 'HDFC Bank',
    cardName: 'Diners Club Black Metal Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Diners+Club+Black+Metal',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Global Travel',
    rewardRate: 'Unlimited Lounge',
    features: [
      '10,000 Bonus Points',
      '6 Golf Games'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'hdfc-moneyback+',
    bankName: 'HDFC Bank',
    cardName: 'MoneyBack+ Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+MoneyBack+',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Household Spends',
    rewardRate: '10X CashPoints',
    features: [
      '10X on Flipkart/Amazon',
      'Gift Vouchers'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'hdfc-swiggy',
    bankName: 'HDFC Bank',
    cardName: 'Swiggy Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Swiggy',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Food Delivery',
    rewardRate: '10% Cashback',
    features: [
      '10% on Swiggy',
      'Free Swiggy One'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'hdfc-tata-neu-plus',
    bankName: 'HDFC Bank',
    cardName: 'Tata Neu Plus Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Tata+Neu+Plus',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Tata Ecosystem',
    rewardRate: '2% NeuCoins',
    features: [
      '2% back on Tata Neu',
      'UPI Rewards'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'hdfc-tata-neu-infinity',
    bankName: 'HDFC Bank',
    cardName: 'Tata Neu Infinity Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Tata+Neu+Infinity',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Tata Ecosystem',
    rewardRate: '5% NeuCoins',
    features: [
      '5% back on Tata Neu',
      '1.5% Other Spends'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'hdfc-phonepe-ultimo',
    bankName: 'HDFC Bank',
    cardName: 'PhonePe Ultimo Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+PhonePe+Ultimo',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'UPI',
    rewardRate: 'Reward Points',
    features: [
      'Rewards on PhonePe',
      'Scan & Pay Benefits'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'hdfc-phonepe-uno',
    bankName: 'HDFC Bank',
    cardName: 'PhonePe Uno Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+PhonePe+Uno',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'UPI',
    rewardRate: 'Reward Points',
    features: [
      'Rewards on PhonePe',
      'Scan & Pay Benefits'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'hdfc-marriott-bonvoy',
    bankName: 'HDFC Bank',
    cardName: 'Marriott Bonvoy Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Marriott+Bonvoy',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Hotel Stays',
    rewardRate: 'Free Night Award',
    features: [
      'Silver Elite Status',
      'Earn Marriott Points'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'hdfc-irctc',
    bankName: 'HDFC Bank',
    cardName: 'IRCTC Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+IRCTC',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Train Travel',
    rewardRate: '5 Reward Points',
    features: [
      'Savings on Train Tickets',
      'Exec Lounge Access'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'hdfc-diners-club-privilege',
    bankName: 'HDFC Bank',
    cardName: 'Diners Club Privilege Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Diners+Club+Privilege',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Privileges',
    rewardRate: 'Free Lounge Access',
    features: [
      'Buy 1 Get 1 Movie',
      'Swiggy/Zomato Rewards'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'hdfc-shoppers-stop-black',
    bankName: 'HDFC Bank',
    cardName: 'Shoppers Stop Black Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Shoppers+Stop+Black',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Shopping',
    bestFor: 'Fashion',
    rewardRate: '7% Reward Points',
    features: [
      'First Citizen Black Membership',
      'No Expiry Points'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'hdfc-shoppers-stop',
    bankName: 'HDFC Bank',
    cardName: 'Shoppers Stop Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Shoppers+Stop',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Shopping',
    bestFor: 'Fashion',
    rewardRate: '3% Reward Points',
    features: [
      'Silver Edge Membership',
      'Welcome Vouchers'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'hdfc-regalia-gold',
    bankName: 'HDFC Bank',
    cardName: 'Regalia Gold Credit Card',
    imageUrl: 'https://placehold.co/400x250/004c8f/ffffff?text=HDFC+Regalia+Gold',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Travel & Lifestyle',
    rewardRate: '4 RP/₹150',
    features: [
      'Club Vistara Silver',
      'Marks & Spencer Vouchers'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'axis-privilege',
    bankName: 'Axis Bank',
    cardName: 'Privilege Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Privilege',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Travel & Dining',
    rewardRate: '12500 Points',
    features: [
      'Activation Benefits',
      'Double Points'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-flipkart',
    bankName: 'Axis Bank',
    cardName: 'Flipkart Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Flipkart',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Shopping',
    rewardRate: '5% Cashback',
    features: [
      'Unlimited 5% on Flipkart',
      'Lounge Access'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'axis-neo',
    bankName: 'Axis Bank',
    cardName: 'Neo Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Neo',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Shopping',
    bestFor: 'Discounts',
    rewardRate: 'Discounts',
    features: [
      'Zomato/Blinkit Discounts',
      'Utility Bill Offers'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-indianoil',
    bankName: 'Axis Bank',
    cardName: 'IndianOil Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+IndianOil',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Fuel',
    bestFor: 'Fuel',
    rewardRate: '4% Value Back',
    features: [
      '1% Fuel Surcharge Waiver',
      'Rewards on Fuel'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'axis-my-zone',
    bankName: 'Axis Bank',
    cardName: 'My Zone Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+My+Zone',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Shopping',
    bestFor: 'Lifestyle',
    rewardRate: 'Movie Offer',
    features: [
      'SonyLIV Subscription',
      'Swiggy Discount'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'axis-ace',
    bankName: 'Axis Bank',
    cardName: 'ACE Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+ACE',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Bills',
    rewardRate: '5% Cashback',
    features: [
      '5% on GPay Bills',
      '2% on Swiggy/Zomato'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'axis-rewards',
    bankName: 'Axis Bank',
    cardName: 'Rewards Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Rewards',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Everyday',
    rewardRate: 'Membership Benefits',
    features: [
      'Milestone Rewards',
      'Dining Delights'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'axis-google-pay-flex',
    bankName: 'Axis Bank',
    cardName: 'Google Pay Flex Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Google+Pay+Flex',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Flexible',
    rewardRate: 'Rewards',
    features: [
      'Flexible Rewards',
      'GPay Integration'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-airtel',
    bankName: 'Axis Bank',
    cardName: 'Airtel Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Airtel',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Telecom',
    rewardRate: '25% Cashback',
    features: [
      '25% on Airtel',
      '10% on Utilities'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'axis-horizon',
    bankName: 'Axis Bank',
    cardName: 'Horizon Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Horizon',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Miles',
    rewardRate: '5 EDGE Miles/₹100',
    features: [
      'Lounge Access',
      'Travel Vouchers'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'axis-select',
    bankName: 'Axis Bank',
    cardName: 'Select Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Select',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Lifestyle',
    bestFor: 'Online Shopping',
    rewardRate: '2X Rewards',
    features: [
      'BigBasket/Swiggy Discounts',
      'Priority Pass'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'axis-cashback',
    bankName: 'Axis Bank',
    cardName: 'Cashback Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Cashback',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Online',
    rewardRate: '5% Cashback',
    features: [
      '5% on Online Spends',
      '1% Offline'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-magnus',
    bankName: 'Axis Bank',
    cardName: 'Magnus Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Magnus',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Premium',
    rewardRate: '12 RP/₹200',
    features: [
      'Unlimited Int. Lounge',
      'Concierge'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'axis-reserve',
    bankName: 'Axis Bank',
    cardName: 'Reserve Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Reserve',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Ultra Premium',
    rewardRate: '15 RP/₹200',
    features: [
      'Luxury Airport Transfer',
      'Golf'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'axis-atlas',
    bankName: 'Axis Bank',
    cardName: 'Atlas Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Atlas',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Frequent Flyers',
    rewardRate: '5X Miles',
    features: [
      'Tiered Rewards',
      'Airline Transfer Partners'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'axis-aura',
    bankName: 'Axis Bank',
    cardName: 'Aura Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Aura',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Lifestyle',
    bestFor: 'Health',
    rewardRate: 'Health Benefits',
    features: [
      'Decathlon Voucher',
      'Health Checkup'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'axis-pride-platinum',
    bankName: 'Axis Bank',
    cardName: 'Pride Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Pride+Platinum',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Defence',
    rewardRate: 'Custom Design',
    features: [
      'Tricolor Design',
      'Fuel Waiver'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'axis-pride-signature',
    bankName: 'Axis Bank',
    cardName: 'Pride Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Pride+Signature',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Defence',
    rewardRate: 'Custom Design',
    features: [
      'Tricolor Design',
      'Dining Delights'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'axis-lic-signature',
    bankName: 'Axis Bank',
    cardName: 'LIC Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+LIC+Signature',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Insurance',
    rewardRate: '2X Rewards',
    features: [
      'Rewards on LIC',
      'Lounge Access'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'axis-lic-platinum',
    bankName: 'Axis Bank',
    cardName: 'LIC Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+LIC+Platinum',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'Insurance',
    rewardRate: '2X Rewards',
    features: [
      'Rewards on LIC',
      'Fuel Waiver'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'axis-vistara-signature',
    bankName: 'Axis Bank',
    cardName: 'Vistara Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Vistara+Signature',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Air Travel',
    rewardRate: 'Club Vistara Points',
    features: [
      'Premium Economy Ticket',
      'Lounge Access'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'axis-vistara-infinite',
    bankName: 'Axis Bank',
    cardName: 'Vistara Infinite Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Vistara+Infinite',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Air Travel',
    rewardRate: 'Club Vistara Points',
    features: [
      'Business Class Ticket',
      'Gold Membership'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-vistara',
    bankName: 'Axis Bank',
    cardName: 'Vistara Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Vistara',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Air Travel',
    rewardRate: 'Club Vistara Points',
    features: [
      'Economy Ticket',
      'Lounge Access'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'axis-samsung-infinite',
    bankName: 'Axis Bank',
    cardName: 'Samsung Infinite Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Samsung+Infinite',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Samsung',
    rewardRate: '10% Cashback',
    features: [
      '10% on Samsung',
      'Edge Rewards'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'axis-samsung-signature',
    bankName: 'Axis Bank',
    cardName: 'Samsung Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Samsung+Signature',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Samsung',
    rewardRate: '10% Cashback',
    features: [
      '10% on Samsung',
      'Edge Rewards'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'axis-spicejet-voyage-black',
    bankName: 'Axis Bank',
    cardName: 'SpiceJet Voyage Black Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+SpiceJet+Voyage+Black',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Flights',
    rewardRate: 'SpiceClub Points',
    features: [
      'Flight Voucher',
      'Upgrade Voucher'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'axis-spicejet-voyage',
    bankName: 'Axis Bank',
    cardName: 'SpiceJet Voyage Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+SpiceJet+Voyage',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'Flights',
    rewardRate: 'SpiceClub Points',
    features: [
      'Flight Voucher',
      'Upgrade Voucher'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'axis-miles-&-more',
    bankName: 'Axis Bank',
    cardName: 'Miles & More Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Miles+%26+More',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Travel',
    bestFor: 'International',
    rewardRate: 'Miles',
    features: [
      'Welcome Miles',
      'Lounge Access'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'axis-fibe',
    bankName: 'Axis Bank',
    cardName: 'Fibe Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Fibe',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Digital',
    rewardRate: '3% Cashback',
    features: [
      'Numberless Card',
      'RuPay UPI'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'axis-kwik',
    bankName: 'Axis Bank',
    cardName: 'Kwik Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Kwik',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Rewards',
    bestFor: 'UPI',
    rewardRate: 'Rewards',
    features: [
      'UPI on Credit',
      'Virtual Card'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'axis-freecharge-plus',
    bankName: 'Axis Bank',
    cardName: 'Freecharge Plus Credit Card',
    imageUrl: 'https://placehold.co/400x250/97144d/ffffff?text=Axis+Freecharge+Plus',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Cashback',
    bestFor: 'Wallets',
    rewardRate: '5% Cashback',
    features: [
      'Freecharge Spend Rewards',
      'Commute Cashback'
    ],
    applyUrl: 'https://web.axisbank.co.in/DigitalChannel/WebForm/?ipa109&axisreferralcode=319347D17486',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'icici-emeralde-private-metal',
    bankName: 'ICICI Bank',
    cardName: 'Emeralde Private Metal Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Emeralde+Private+Metal',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Ultra Luxury',
    rewardRate: 'Unlimited',
    features: [
      'Unlimited Lounge',
      'Taj Epicure'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'icici-emeralde',
    bankName: 'ICICI Bank',
    cardName: 'Emeralde Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Emeralde',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Luxury',
    rewardRate: 'Rewards',
    features: [
      'Unlimited Lounge',
      'Golf'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'icici-sapphiro',
    bankName: 'ICICI Bank',
    cardName: 'Sapphiro Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Sapphiro',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Lifestyle',
    bestFor: 'Premium',
    rewardRate: 'Rewards',
    features: [
      'Dreamfolks Pass',
      'BOGO Movie'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'icici-rubyx',
    bankName: 'ICICI Bank',
    cardName: 'Rubyx Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Rubyx',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Lifestyle',
    bestFor: 'Lifestyle',
    rewardRate: 'Rewards',
    features: [
      'Dual Network',
      'Entertainment'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'icici-coral',
    bankName: 'ICICI Bank',
    cardName: 'Coral Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Coral',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Entry Level',
    rewardRate: '2 Points/₹100',
    features: [
      'Railway Lounge',
      'Movie Offer'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'icici-platinum-chip',
    bankName: 'ICICI Bank',
    cardName: 'Platinum Chip Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Platinum+Chip',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'Free',
    rewardRate: 'Rewards',
    features: [
      'Lifetime Free',
      'Fuel Surcharge Waiver'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'icici-amazon-pay',
    bankName: 'ICICI Bank',
    cardName: 'Amazon Pay Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Amazon+Pay',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'Shopping',
    rewardRate: '5% Cashback',
    features: [
      '5% for Prime',
      'Lifetime Free'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'icici-makemytrip-signature',
    bankName: 'ICICI Bank',
    cardName: 'MakeMyTrip Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+MakeMyTrip+Signature',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Holidays',
    rewardRate: 'MyCash',
    features: [
      'MMT Black Status',
      'Airport Transfers'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'icici-makemytrip-platinum',
    bankName: 'ICICI Bank',
    cardName: 'MakeMyTrip Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+MakeMyTrip+Platinum',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Holidays',
    rewardRate: 'MyCash',
    features: [
      'MMT Holiday Vouchers',
      'Rewards'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'icici-adani-one-signature',
    bankName: 'ICICI Bank',
    cardName: 'Adani One Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Adani+One+Signature',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Airports',
    rewardRate: '7% Reward',
    features: [
      'Pranaam Service',
      'Flight Discounts'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'icici-adani-one-platinum',
    bankName: 'ICICI Bank',
    cardName: 'Adani One Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Adani+One+Platinum',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'Airports',
    rewardRate: 'Rewards',
    features: [
      'Flight Discounts',
      'Duty Free'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'icici-manchester-united-signature',
    bankName: 'ICICI Bank',
    cardName: 'Manchester United Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Manchester+United+Signature',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'Sports',
    rewardRate: 'Rewards',
    features: [
      'Man Utd Merchandise',
      'Private Event Access'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'icici-manchester-united-platinum',
    bankName: 'ICICI Bank',
    cardName: 'Manchester United Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Manchester+United+Platinum',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'Sports',
    rewardRate: 'Rewards',
    features: [
      'Man Utd Benefits',
      'Top Spender Offers'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'icici-chennai-super-kings',
    bankName: 'ICICI Bank',
    cardName: 'Chennai Super Kings Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Chennai+Super+Kings',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'Sports',
    rewardRate: 'Rewards',
    features: [
      'CSK Merchandise',
      'Meet & Greet'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'icici-hpcl-super-saver',
    bankName: 'ICICI Bank',
    cardName: 'HPCL Super Saver Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+HPCL+Super+Saver',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Fuel',
    bestFor: 'Fuel',
    rewardRate: '5% Back',
    features: [
      'Fuel Cashback',
      'Utility Rewards'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'icici-hpcl-coral',
    bankName: 'ICICI Bank',
    cardName: 'HPCL Coral Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+HPCL+Coral',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Fuel',
    bestFor: 'Fuel',
    rewardRate: '2.5% Back',
    features: [
      'Fuel Surcharge Waiver',
      'Rewards'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'icici-parakram-select',
    bankName: 'ICICI Bank',
    cardName: 'Parakram Select Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Parakram+Select',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Rewards',
    bestFor: 'Defence',
    rewardRate: 'Rewards',
    features: [
      'Insurance Cover',
      'Discount on Processing Fee'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'icici-emirates-emeralde',
    bankName: 'ICICI Bank',
    cardName: 'Emirates Emeralde Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Emirates+Emeralde',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'International',
    rewardRate: 'Skywards Miles',
    features: [
      'Gold Tier Membership',
      'Miles on Spend'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'icici-emirates-sapphiro',
    bankName: 'ICICI Bank',
    cardName: 'Emirates Sapphiro Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Emirates+Sapphiro',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'International',
    rewardRate: 'Skywards Miles',
    features: [
      'Silver Tier',
      'Miles on Spend'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'icici-emirates-rubyx',
    bankName: 'ICICI Bank',
    cardName: 'Emirates Rubyx Credit Card',
    imageUrl: 'https://placehold.co/400x250/e65e25/ffffff?text=ICICI+Emirates+Rubyx',
    joiningFee: 1,
    annualFee: 1,
    rewardType: 'Travel',
    bestFor: 'International',
    rewardRate: 'Skywards Miles',
    features: [
      'Miles on Spend',
      'Lounge'
    ],
    applyUrl: 'https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  // Kotak Mahindra Bank
  {
    id: 'kotak-mojo-platinum',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Mojo Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Mojo+Platinum',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Online',
    rewardRate: '2.5X Points',
    features: [
      'Points on Online',
      'Lounge'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'kotak-league-platinum',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'League Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+League+Platinum',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Core',
    rewardRate: '8X Points',
    features: [
      'PVR Tickets',
      'Milestone Rewards'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'kotak-white',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'White Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+White',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Luxury',
    bestFor: 'Premium',
    rewardRate: 'White Pass',
    features: [
      'Luxury Vouchers',
      'Premium Support'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'kotak-white-reserve',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'White Reserve Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+White+Reserve',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Luxury',
    bestFor: 'Ultra Premium',
    rewardRate: 'White Pass',
    features: [
      'Unlimited Lounge',
      'Low Forex'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'kotak-zen-signature',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Zen Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Zen+Signature',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Lifestyle',
    rewardRate: 'Rewards',
    features: [
      'Priority Pass',
      'Milestone Bonus'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'kotak-pvr-inox',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'PVR INOX Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+PVR+INOX',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Entertainment',
    bestFor: 'Movies',
    rewardRate: 'Free Tickets',
    features: [
      'Free Movie Tickets',
      'F&B Discount'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'kotak-pvr-gold',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'PVR Gold Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+PVR+Gold',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Entertainment',
    bestFor: 'Movies',
    rewardRate: 'Free Tickets',
    features: [
      'PVR Tickets',
      'F&B Discount'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'kotak-pvr-platinum',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'PVR Platinum Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+PVR+Platinum',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Entertainment',
    bestFor: 'Movies',
    rewardRate: 'Free Tickets',
    features: [
      'More PVR Tickets',
      'F&B Discount'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'kotak-indigo-6e-rewards',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'IndiGo 6E Rewards Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+IndiGo+6E+Rewards',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Travel',
    bestFor: 'Flights',
    rewardRate: '3% Rewards',
    features: [
      'Free Flight Ticket',
      '6E Prime'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'kotak-indigo-6e-rewards-xl',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'IndiGo 6E Rewards XL Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+IndiGo+6E+Rewards+XL',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Travel',
    bestFor: 'Flights',
    rewardRate: '6% Rewards',
    features: [
      'Free Flight Ticket',
      '6E Prime Addons'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'kotak-urbane-gold',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Urbane Gold Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Urbane+Gold',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Shopping',
    rewardRate: '3X Points',
    features: [
      'Retail Spend Rewards',
      'Urban Benefits'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'kotak-royale-signature',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Royale Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Royale+Signature',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'Travel',
    rewardRate: '4X Points',
    features: [
      'Lounge Access',
      'Fuel Waiver'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'kotak-privy-league-signature',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Privy League Signature Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Privy+League+Signature',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Lifestyle',
    bestFor: 'Affluent',
    rewardRate: 'Rewards',
    features: [
      'Priority Pass',
      'Shoppers Stop Vouchers'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'kotak-811-dream-different',
    bankName: 'Kotak Mahindra Bank',
    cardName: '811 Dream Different Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+811+Dream+Different',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'FD Backed',
    rewardRate: '2X Points',
    features: [
      'No Income Proof',
      'Credit Builder'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'kotak-upi-rupay',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'UPI RuPay Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+UPI+RuPay',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Rewards',
    bestFor: 'UPI',
    rewardRate: 'Rewards',
    features: [
      'Virtual Card',
      'UPI on Credit'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'kotak-indianoil',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'IndianOil Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+IndianOil',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Fuel',
    bestFor: 'Fuel',
    rewardRate: '4% Back',
    features: [
      'Fuel Surcharge Waiver',
      'Reward Points'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'kotak-biz-edge',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'Biz Edge Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+Biz+Edge',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Business',
    bestFor: 'Business',
    rewardRate: 'Rewards',
    features: [
      'Business Spends',
      'Cash Management'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'kotak-nri-royale',
    bankName: 'Kotak Mahindra Bank',
    cardName: 'NRI Royale Credit Card',
    imageUrl: 'https://placehold.co/400x250/ed1c24/ffffff?text=Kotak+NRI+Royale',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Travel',
    bestFor: 'NRI',
    rewardRate: '2X Rewards',
    features: [
      'Low Forex',
      'Int. Lounge'
    ],
    applyUrl: 'https://www.kotak.com/en/personal-banking/cards/credit-cards.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'sbi-cashback',
    bankName: 'SBI Card',
    cardName: 'CASHBACK SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+CASHBACK',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Cashback',
    bestFor: 'Online',
    rewardRate: '5% Cashback',
    features: [
      '5% Online',
      '1% Offline'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.2
  },
  {
    id: 'sbi-elite',
    bankName: 'SBI Card',
    cardName: 'Elite SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+Elite',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Lifestyle',
    bestFor: 'Premium',
    rewardRate: '5X Points',
    features: [
      'Movie Tickets',
      'Lounge Access'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'sbi-prime',
    bankName: 'SBI Card',
    cardName: 'Prime SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+Prime',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Lifestyle',
    bestFor: 'Utility',
    rewardRate: 'Rewards',
    features: [
      'Pizza Hut/Reliance Vouchers',
      'Lounge'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'sbi-simplyclick',
    bankName: 'SBI Card',
    cardName: 'SimplyCLICK SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+SimplyCLICK',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Rewards',
    bestFor: 'Online',
    rewardRate: '10X Points',
    features: [
      'Amazon Voucher',
      'Online Rewards'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'sbi-flipkart',
    bankName: 'SBI Card',
    cardName: 'Flipkart SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+Flipkart',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Cashback',
    bestFor: 'Shopping',
    rewardRate: '5% Cashback',
    features: [
      'Flipkart Benefits',
      'Lounge'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'sbi-miles-elite',
    bankName: 'SBI Card',
    cardName: 'Miles Elite SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+Miles+Elite',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Travel',
    bestFor: 'Travel',
    rewardRate: 'Travel Credits',
    features: [
      'Flight Bookings',
      'Hotel Rewards'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'sbi-tata-neu-infinity',
    bankName: 'SBI Card',
    cardName: 'Tata Neu Infinity SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+Tata+Neu+Infinity',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Rewards',
    bestFor: 'Tata',
    rewardRate: '10% NeuCoins',
    features: [
      'Tata Neu Benefits',
      'UPI Rewards'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },
  {
    id: 'sbi-indigo',
    bankName: 'SBI Card',
    cardName: 'IndiGo SBI Card',
    imageUrl: 'https://placehold.co/400x250/280071/ffffff?text=SBI+IndiGo',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Travel',
    bestFor: 'Flights',
    rewardRate: '6E Rewards',
    features: [
      'Flight Ticket',
      '6E Rewards'
    ],
    applyUrl: 'https://www.sbicard.com/',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.0
  },

  {
    id: 'yes-marquee',
    bankName: 'YES Bank',
    cardName: 'Marquee Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+Marquee',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Luxury',
    bestFor: 'High Net Worth',
    rewardRate: '36 RP/₹200',
    features: [
      'Unlimited Lounge',
      'Low Forex'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'yes-reserv',
    bankName: 'YES Bank',
    cardName: 'Reserv Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+Reserv',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Lifestyle',
    bestFor: 'Subscription',
    rewardRate: 'Subscription',
    features: [
      'Subscription Plan',
      'Rewards'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'yes-ace',
    bankName: 'YES Bank',
    cardName: 'Ace Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+Ace',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Shopping',
    bestFor: 'Online',
    rewardRate: '8 RP/₹200',
    features: [
      'Waived Fee',
      'Online Rewards'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'yes-wellness-plus',
    bankName: 'YES Bank',
    cardName: 'Wellness Plus Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+Wellness+Plus',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Lifestyle',
    bestFor: 'Health',
    rewardRate: 'Health Benefits',
    features: [
      'Doctor Consultation',
      'Fitness Session'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.8
  },
  {
    id: 'yes-byoc',
    bankName: 'YES Bank',
    cardName: 'BYOC Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+BYOC',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Shopping',
    bestFor: 'Custom',
    rewardRate: 'Custom',
    features: [
      'Build Your Own Card',
      'Select Merchants'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'yes-finbooster',
    bankName: 'YES Bank',
    cardName: 'FinBooster Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+FinBooster',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Rewards',
    bestFor: 'Finance',
    rewardRate: 'Credit Score',
    features: [
      'Credit Education',
      'Rewards'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.1
  },
  {
    id: 'yes-emi',
    bankName: 'YES Bank',
    cardName: 'EMI Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 499,
    annualFee: 499,
    rewardType: 'Shopping',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'yes-pop',
    bankName: 'YES Bank',
    cardName: 'POP Club Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'yes-kiwi',
    bankName: 'YES Bank',
    cardName: 'KIWI KLICK Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://customer.credilio.in/credit-card/utm-broadcast/YES?utm_advisor_code=CRD0067742&utm_card_id=YES_014',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'indus-aura-edge',
    bankName: 'Indusind Bank',
    cardName: 'Platinum Aura Edge Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://induseasycredit.indusind.com/customer/credit-card/new-lead?utm_source=assisted&utm_medium=IBLV2807&utm_campaign=Credit-Card&utm_content=RG01',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'indus-signature',
    bankName: 'Indusind Bank',
    cardName: 'signature credit card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://induseasycredit.indusind.com/customer/credit-card/new-lead?utm_source=assisted&utm_medium=IBLV2807&utm_campaign=Credit-Card&utm_content=RG01',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'equitas-tiga',
    bankName: 'Equitas Small Finance Bank',
    cardName: 'Tiga Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://selfeloans-web.equitas.bank.in/cc/landing-screen?Tpp=DSA01574&Description=vm006',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'equitas-selfe',
    bankName: 'Equitas Small Finance Bank',
    cardName: 'Selfe Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://selfeloans-web.equitas.bank.in/cc/landing-screen?Tpp=DSA01574&Description=vm006',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'equitas-powermiles',
    bankName: 'Equitas Small Finance Bank',
    cardName: 'Power Miles Credit Card',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://selfeloans-web.equitas.bank.in/cc/landing-screen?Tpp=DSA01574&Description=vm006',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'bob',
    bankName: 'Bank of Baroda',
    cardName: 'BOBCARD',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://mycard.bobcard.tech/?utm_source=MMM_xyz&utm_medium=EARNTRA&utm_campaign=EP2960959_941521',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
  {
    id: 'federal-bank',
    bankName: 'Federal Bank',
    cardName: 'Scapia',
    imageUrl: 'https://placehold.co/400x250/005a9c/ffffff?text=YES+EMI',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    bestFor: 'EMI',
    rewardRate: 'Cashback',
    features: [
      'EMI Benefits',
      'Merchant Offers'
    ],
    applyUrl: 'https://apply.scapia.cards/landing_page?utm_source=PaisaWapas&utm_medium=CPS&utm_content=Lounge&utm_campaign=EP2960959',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.9
  },
];


export const personalLoansProductionData: PersonalLoanReal[] = [
  {
    id: 'axis-personal',
    bankName: 'Axis Bank',
    logoUrl: 'https://placehold.co/120x60/7c3aed/ffffff?text=AXIS',
    interestRate: 'Starting ~9.99% p.a.',
    maxAmount: 'Up to ₹40 Lakh',
    tenure: '12 – 84 months',
    processingFee: 'Up to ~2% of loan amount',
    features: [
      'Quick disbursal',
      'No collateral required',
      'Online application',
      'Interest varies based on profile',
      'Bank policy applies'
    ],
    applyUrl: 'https://www.axisbank.com/retail/loans/personal-loan',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  },
  {
    id: 'bajaj-finserv',
    bankName: 'Bajaj Finserv',
    logoUrl: 'https://placehold.co/120x60/0891b2/ffffff?text=BAJAJ',
    interestRate: '~10% p.a. onwards',
    maxAmount: 'Up to ₹55 Lakh',
    tenure: '12 – 96 months',
    processingFee: 'Up to ~3.93% of loan amount',
    features: [
      'Instant approval',
      'No collateral required',
      'Flexible EMIs',
      'Digital process',
      'Use for travel, medical, or wedding'
    ],
    applyUrl: 'https://www.bajajfinserv.in/personal-loan',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.3
  },
  {
    id: 'hdfc-personal',
    bankName: 'HDFC Bank',
    logoUrl: 'https://placehold.co/120x60/dc2626/ffffff?text=HDFC',
    interestRate: '~9.99% p.a. onwards',
    maxAmount: 'Up to ₹50 Lakh',
    tenure: '12 – 60 months',
    processingFee: 'Approx ₹6,500 (Bank specific)',
    features: [
      'Paperless online application',
      'Flexible repayment options',
      'Final rate depends on eligibility',
      'Credit profile based rates',
      'No collateral required'
    ],
    applyUrl: 'https://www.hdfcbank.com/personal/borrow/popular-loans/personal-loan',
    isFeatured: true,
    eligibility: 'Check eligibility at bank site',
    rating: 4.7
  },
  {
    id: 'icici-personal',
    bankName: 'ICICI Bank',
    logoUrl: 'https://placehold.co/120x60/f97316/ffffff?text=ICICI',
    interestRate: '~10.45% – 16.50% p.a.',
    maxAmount: 'Up to ₹50 Lakh',
    tenure: 'Up to 6 years',
    processingFee: 'Up to ~2% of loan amount + taxes',
    features: [
      'Quick digital approval',
      'Flexible EMI scheduling',
      'Actual rates vary by profile',
      'Digital process',
      'No collateral required'
    ],
    applyUrl: 'https://www.icicibank.com/personal-banking/loans/personal-loan',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.6
  },
  {
    id: 'sbi-express',
    bankName: 'SBI',
    logoUrl: 'https://placehold.co/120x60/1e40af/ffffff?text=SBI',
    interestRate: '~10.05% – 15.05% p.a.',
    maxAmount: 'Up to ₹35 Lakh',
    tenure: '6 months – 7 years',
    processingFee: 'Typically ~1.5% (varies)',
    features: [
      'Strong brand trust',
      'Competitive interest options',
      'Rate depends on credit history',
      'Eligibility based on income',
      'No collateral required'
    ],
    applyUrl: 'https://www.sbi.co.in/web/personal-banking/loans/personal-loans/xpress-credit',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.4
  },
  {
    id: 'tata-capital',
    bankName: 'Tata Capital',
    logoUrl: 'https://placehold.co/120x60/059669/ffffff?text=TATA',
    interestRate: '~10.99% – 29.99% p.a.',
    maxAmount: 'Up to ₹35 Lakh',
    tenure: 'Up to 6 years',
    processingFee: 'Varies by lender policy',
    features: [
      'Flexible repayment',
      'No collateral',
      'Quick disbursal',
      'Affordable borrowing options',
      'Recent rate cuts available'
    ],
    applyUrl: 'https://www.tatacapital.com/personal-loan.html',
    isFeatured: false,
    eligibility: 'Check eligibility at bank site',
    rating: 4.5
  }
];



export const insurancePlansProductionData: InsurancePlanReal[] = [
  {
    id: 'health-insurance',
    providerName: 'HDFC ERGO', // Mapped to provider for valid link
    planName: 'Comprehensive Health Cover',
    imageUrl: 'https://placehold.co/400x250/dc2626/ffffff?text=Health+Insurance',
    premium: 'Affordable premiums',
    coverAmount: '₹3 L – ₹1 Cr+',
    category: 'Health',
    type: 'family',
    bestFor: 'Families & Seniors',
    features: [
      'Wide network of hospitals',
      'Cashless treatment',
      'Pre & post-hospitalization cover',
      'Critical illness cover options',
      'Tax benefits under Sec 80D'
    ],
    applyUrl: 'https://www.hdfcergo.com/health-insurance',
    isFeatured: true,
    eligibility: 'Families, individuals, senior citizens',
    rating: 4.9
  },
  {
    id: 'life-insurance',
    providerName: 'LIC', // Mapped to provider for valid link
    planName: 'Term & Endowment Plans',
    imageUrl: 'https://placehold.co/400x250/f59e0b/ffffff?text=Life+Insurance',
    premium: 'Affordable premiums',
    coverAmount: '₹10 L – ₹10 Cr+',
    category: 'Life',
    type: 'individual',
    bestFor: 'Long-term Security',
    features: [
      'Death benefit & income protection',
      'Critical illness rider options',
      'Flexible coverage options',
      'Optional add-ons',
      'Financial security for loved ones'
    ],
    applyUrl: 'https://licindia.in/',
    isFeatured: true,
    eligibility: 'Family heads, earners, long-term planners',
    rating: 4.8
  },
  {
    id: 'motor-insurance',
    providerName: 'ICICI Lombard', // Mapped to provider for valid link
    planName: 'Comprehensive Vehicle Protect',
    imageUrl: 'https://placehold.co/400x250/ea580c/ffffff?text=Motor+Insurance',
    premium: 'Based on IDV',
    coverAmount: 'Damage, theft, accident losses',
    category: 'Motor',
    type: 'individual',
    bestFor: 'Vehicle Owners',
    features: [
      'Fast renewals & claim support',
      'Cashless garages network',
      'Zero depreciation add-on',
      'Roadside assistance',
      'Engine protection'
    ],
    applyUrl: 'https://www.icicilombard.com/motor-insurance',
    isFeatured: false,
    eligibility: 'Car & bike owners',
    rating: 4.5
  },
  {
    id: 'travel-insurance',
    providerName: 'Tata AIG', // Mapped to provider for valid link
    planName: 'International Travel Guard',
    imageUrl: 'https://placehold.co/400x250/059669/ffffff?text=Travel+Insurance',
    premium: 'Per trip basis',
    coverAmount: 'Medical & Trip delays',
    category: 'Travel',
    type: 'individual',
    bestFor: 'Frequent Travelers',
    features: [
      'Medical emergencies coverage',
      'Trip cancellation & baggage loss',
      'COVID-19 coverage variants',
      'Multi-trip & single-trip plans',
      'Hospitalization abroad'
    ],
    applyUrl: 'https://www.tataaig.com/travel-insurance',
    isFeatured: false,
    eligibility: 'Frequent travelers, students abroad',
    rating: 4.4
  },
  {
    id: 'home-insurance',
    providerName: 'Bajaj Allianz', // Added provider for Home Insurance
    planName: 'Home & Belongings Protect',
    imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Home+Insurance',
    premium: 'Flexible sum insured',
    coverAmount: 'Structure & Contents',
    category: 'Home',
    type: 'individual',
    bestFor: 'Homeowners',
    features: [
      'Protection against theft & fire',
      'Natural calamity cover',
      'Covers valuables & contents',
      'Flexible sum insured',
      'Add-on cover options'
    ],
    applyUrl: 'https://www.bajajallianz.com/home-insurance.html',
    isFeatured: false,
    eligibility: 'Homeowners & property investors',
    rating: 4.6
  }
];