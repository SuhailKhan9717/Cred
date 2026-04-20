import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight, Percent, IndianRupee, Clock, Award } from 'lucide-react';
import type { PersonalLoan } from '../data/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

interface LoanCardProps {
  loan: PersonalLoan;
  onApply: (loan: PersonalLoan) => void;
}

const logos: Record<string, string> = {
  
  "HDFC Bank": "/banks/hdfc-bank.avif",
  "Axis Bank": "/banks/axis-bank.png",
  "SBI Card": "/banks/sbi-bank.jpg",
  "ICICI Bank": "/banks/icici-bank.webp",
  "Bajaj Finserv" : "/loans/bajaj.svg", 
  "Tata Capital" : "/loans/tata.jfif"

};

const LoanCard: React.FC<LoanCardProps> = ({ loan, onApply }) => {
  const navigate = useNavigate()
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logos[loan.bankName] || loan.logoUrl}
              alt={`${loan.bankName} logo`}
              className="w-16 h-8 object-contain "
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-bold text-foreground">{loan.bankName}</h3>
              <p className="text-sm text-muted-foreground">Personal Loan</p>
            </div>
          </div>
          {loan.isFeatured && (
            <Badge className="bg-accent text-accent-foreground font-semibold text-[10px] text-nowrap">
              <Award className="w-3 h-3 mr-1" aria-hidden="true" />
              Top Pick
            </Badge>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3" aria-label={`Rating: ${loan.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(loan.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
              aria-hidden="true"
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{loan.rating}</span>
        </div>
      </div>

      {/* Key Stats */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 py-4 bg-secondary/50 rounded-xl px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Percent className="w-4 h-4" aria-hidden="true" />
            </div>
            <p className="text-xs text-muted-foreground">Interest Rate</p>
            <p className="font-bold text-foreground text-sm mt-1">{loan.interestRate}</p>
          </div>
          <div className="text-center border-x border-border">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <IndianRupee className="w-4 h-4" aria-hidden="true" />
            </div>
            <p className="text-xs text-muted-foreground">Max Amount</p>
            <p className="font-bold text-foreground text-sm mt-1">{loan.maxAmount}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-cta mb-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
            </div>
            <p className="text-xs text-muted-foreground">Tenure</p>
            <p className="font-bold text-foreground text-sm mt-1">{loan.tenure}</p>
          </div>
        </div>

        {/* Processing Fee */}
        <div className="py-4 border-b border-border">
          <p className="text-xs text-muted-foreground">Processing Fee</p>
          <p className="font-semibold text-foreground">{loan.processingFee}</p>
        </div>

        {/* Features */}
        <ul className="py-4 space-y-2">
          {loan.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
          {loan.features.length > 3 && (
            <li className="text-sm text-primary font-medium">
              +{loan.features.length - 3} more benefits
            </li>
          )}
        </ul>

        {/* Eligibility */}
        <p className="text-xs text-muted-foreground mb-4">
          Eligibility: {loan.eligibility}
        </p>

        {/* CTA */}
        <Button
          // onClick={() => navigate(loan.applyUrl)}
          onClick={() => onApply(loan)}
          className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold group"
        >
          Apply Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Button>
      </div>
    </motion.article>
  );
};

export default LoanCard;
