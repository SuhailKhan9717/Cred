import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Award, ArrowRight, Shield, IndianRupee } from 'lucide-react';
import type { CreditCard, InsurancePlan, PersonalLoan } from '../data/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { InsurancePlanReal } from '../data/ProductionData';
import { useNavigate } from 'react-router-dom';

interface InsurancePolicyCardProps {
  
  card: InsurancePlanReal; 

  onApply: (plan: InsurancePlanReal) => void;
}

const logos: Record<string, string> = {
  
  "HDFC ERGO": "/insurance/hdfc.png",
  "Bajaj Allianz" : "/insurance/bajaj.jpg",
  "ICICI Lombard" : "/insurance/icici.avif", 
  "LIC" : "/insurance/lic.jpg", 
  "Tata AIG" : "/insurance/tata.jfif"
};

const InsurancePolicyCard: React.FC<InsurancePolicyCardProps> = ({ card, onApply }) => {
  
  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  // Mapped colors to your existing theme variables (success, primary, accent, cta)
  const categoryColors: Record<string, string> = {
    Health: 'bg-success/10 text-success',
    Life: 'bg-primary/10 text-primary',
    Motor: 'bg-accent/10 text-accent',
    Travel: 'bg-cta/10 text-cta',
    Home: 'bg-muted text-muted-foreground'
  };

  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border overflow-hidden group h-full flex flex-col"
    >
      {/* Card Image */}
      <div className="relative shrink-0">
        <img
          src={ logos[card.providerName] ||  card.imageUrl}
          alt={`${card.providerName} ${card.planName}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {card.isFeatured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
            <Award className="w-3 h-3 mr-1" aria-hidden="true" />
            Most Popular
          </Badge>
        )}
        <div className="absolute top-4 right-4">
          <Badge className={categoryColors[card.category] || 'bg-primary/10 text-primary'}>
            {card.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-4">
          <p className="text-sm font-medium text-muted-foreground">{card.providerName}</p>
          <h3 className="text-xl font-bold text-foreground mt-1 line-clamp-1" title={card.planName}>
            {card.planName}
          </h3>
          
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

        {/* Key Stats - Adapted for Insurance (Premium & Cover) */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
          <div>
            <p className="text-xs text-muted-foreground">Est. Premium</p>
            <div className="flex items-center text-foreground font-bold">
              {card.premium}
              <span className="text-[10px] font-normal text-muted-foreground ml-1">/yr</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cover Amount</p>
            <div className="flex items-center text-success font-bold">
               <Shield className="w-3 h-3 mr-1" />
               {card.coverAmount}
            </div>
          </div>
        </div>

        {/* Best For / Highlight Section */}
        <div className="py-4 border-b border-border">
          <p className="text-xs text-muted-foreground">Best For</p>
          <p className="font-semibold text-primary">{card.bestFor}</p>
        </div>

        {/* Features */}
        <ul className="py-4 space-y-2 mb-auto">
          {card.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
          {card.features.length > 3 && (
            <li className="text-sm text-primary font-medium">
              +{card.features.length - 3} more benefits
            </li>
          )}
        </ul>

        {/* Eligibility */}
        <p className="text-xs text-muted-foreground mb-4 pt-2">
          Eligibility: {card.eligibility}
        </p>

        {/* CTA */}
        <Button
          onClick={() => onApply(card)}
        // onClick={()=>navigate(card.applyUrl)}
          className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold group/btn mt-auto"
        >
          Check Premium
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </div>
    </motion.article>
  );
};

export default InsurancePolicyCard;