import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Award, ArrowRight } from 'lucide-react';
import type { CreditCard } from '../data/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { CreditCardReal } from '../data/ProductionData';
import { useNavigate } from 'react-router-dom'; 

interface CreditCardCardProps {
  card: CreditCardReal;
  onApply: (card: CreditCardReal) => void;
} 

const bankLogos: Record<string, string> = {
  "Kotak Mahindra Bank": "./banks/kotak-bank.png",
  "HDFC Bank": "/banks/hdfc-bank.avif",
  "Axis Bank": "/banks/axis-bank.png",
  "SBI Card": "/banks/sbi-bank.jpg",
  "ICICI Bank": "/banks/icici-bank.webp",
 "IDFC FIRST Bank": "/banks/idfc-bank.jpg", 
  "AU Small Finance Bank": "/banks/au-bank.png",
  "YES Bank": "/banks/yes-bank.png"
  
};

const bankApplyUrls: Record<string, string> = {
  "Axis Bank": "https://customer.credilio.in/credit-card/utm-broadcast/AXIS/?utm_advisor_code=CRD0067742",
  "HDFC Bank": "https://applyonline.hdfcbank.com/cards/credit-cards.html?Channel=DSA&DSACode=XNFY&SMCode=A28596&LGCode=DGPI&LCCode=CRDWEB&LC2=CRDWEB#nbb",
  "ICICI Bank": "https://buy.icicibank.com/ucj/cc/mobile?ius=CRE100009FIN&iup=UCC00476&userId=CRD0067742",
  "SBI Card": "https://customer.credilio.in/credit-card/utm-broadcast/SBI/?utm_advisor_code=CRD0067742",
  "YES Bank": "https://customer.credilio.in/credit-card/utm-broadcast/YES/?utm_advisor_code=CRD0067742",
  "BOB": "https://mycard.bobcard.tech/?utm_source=MMM_xyz&utm_medium=EARNTRA&utm_campaign=943941",
  "IDFC FIRST Bank": "https://www.idfcfirst.bank.in/credit-card/ntb-diy/apply?utm_source=Partner&utm_medium=FinsangIndia&utm_campaign=SKYJP_MYCARD_web",
  "AU Small Finance Bank": "https://cconboarding.au.bank.in/auccself/#/landing?utm_source=pw&utm_medium=banner&utm_campaign=pw-display-campaign_Credweb",
 "IDFC FIRST Bank1": "https://www.idfcfirst.bank.in/credit-card/ntb-diy/lic-standalone?utm_source=LIC_CSL_Employee&utm_medium=LIC_CSL&utm_campaign=Emp_D170000486"


};



const CreditCardCard: React.FC<CreditCardCardProps> = ({ card, onApply }) => {
  const formatCurrency = (amount: number) => {
    if (amount === 0) return 'FREE';
    return `PAID`;
    // return `₹${amount.toLocaleString('en-IN')}`;
  };

  const rewardTypeColors: Record<string, string> = {
    Cashback: 'bg-success/10 text-success',
    Travel: 'bg-primary/10 text-primary',
    Shopping: 'bg-cta/10 text-cta',
    Fuel: 'bg-accent/10 text-accent'  
    
  };

  const handleApplyClick = (id?: string) => {
    // 1. Get the overriding URL for this specific bank
    let overrideUrl = bankApplyUrls[card.bankName];

    // 2. Check if the URL exists and is not an empty string
    // if( card.bankName === "IDFC FIRST Bank" &&
    // card.cardName === "LIC Select Credit Card"){
    //   overrideUrl = "https://www.idfcfirst.bank.in/credit-card/ntb-diy/lic-standalone?utm_source=LIC_CSL_Employee&utm_medium=LIC_CSL&utm_campaign=Emp_D170000486";
    // };
    if(id === "idfc-lic-select"){
  overrideUrl = "https://www.idfcfirst.bank.in/credit-card/ntb-diy/lic-standalone?utm_source=LIC_CSL_Employee&utm_medium=LIC_CSL&utm_campaign=Emp_D170000486";
    // };
    }


    if (overrideUrl) {
      // Create a copy of the card with the updated link
      const updatedCard = { ...card, applyUrl: overrideUrl };
      onApply(updatedCard);
    } else {
      // Fallback to the original data's URL if empty (e.g., Kotak, IDFC)
      onApply(card);
    }
  };


  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}z
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border overflow-hidden group"
    >
      {/* Card Image */}
      <div className="relative">
        <img
          src={bankLogos[card.bankName] || card.imageUrl}
          alt={`${card.bankName} ${card.cardName}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {card.isFeatured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
            <Award className="w-3 h-3 mr-1" aria-hidden="true" />
            Best Seller
          </Badge>
        )}
        <div className="absolute top-4 right-4">
          <Badge className={rewardTypeColors[card.rewardType]}>
            {card.rewardType}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        {/* // card container */}
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">{card.bankName}</p>
          <h3 className="text-xl font-bold text-foreground mt-1">{card.cardName}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-2" aria-label={`Rating: ${card.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(card.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                aria-hidden="true"
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">{card.rating}</span>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
          <div>
            <p className="text-xs text-muted-foreground">Joining Fee</p>
            <p className={`font-bold ${card.joiningFee === 0 ? 'text-success' : 'text-foreground'}`}>
              {formatCurrency(card.joiningFee)}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Annual Fee</p>
            <p className={`font-bold ${card.annualFee === 0 ? 'text-success' : 'text-foreground'}`}>
              {formatCurrency(card.annualFee)}
            </p>
          </div>
        </div>

        {/* Reward Rate */}
        <div className="py-4 border-b border-border">
          <p className="text-xs text-muted-foreground">Reward Rate</p>
          <p className="font-semibold text-primary">{card.rewardRate}</p>
        </div>

        {/* Features */}
        <ul className="py-4 space-y-2">
          {card.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
          {card.features.length > 3 && (
            <li className="text-sm text-primary font-medium">
              +{card.features.length - 3} more features
            </li>
          )}
        </ul>

        {/* Eligibility */}
        <p className="text-xs text-muted-foreground mb-4">
          Eligibility: {card.eligibility}
        </p>

        {/* CTA */}
        <Button
          onClick={() => handleApplyClick(card.id)}
          // onClick={() =>navigate(card.applyUrl)}
          className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold group/btn"
        >         
          Apply Now 
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </div>
    </motion.article>
  );
};

export default CreditCardCard;
