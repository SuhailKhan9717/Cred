import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { ServiceOffering } from '../../data/heroData';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import type { CreditCardReal, InsurancePlanReal, PersonalLoanReal } from '../../data/ProductionData';

interface ServiceCardsProps {
  offerings: ServiceOffering[];
  activeServiceId: string;
  handleApplyCard: (card: CreditCardReal) => void;
  handleApplyLoan: (loan: PersonalLoanReal) => void;
  handleApplyInsurance: (plan: InsurancePlanReal) => void;
}

// Dynamic icon component
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = Icons[name as keyof typeof Icons] as React.FC<{ className?: string }>;
  return IconComponent ? <IconComponent className={className} /> : null;
};

const ServiceCard = ({ offering, index, handleApplyCard, handleApplyInsurance, handleApplyLoan }: {
  offering: ServiceOffering;
  index: number
  handleApplyCard: (card: CreditCardReal) => void;
  handleApplyLoan: (loan: PersonalLoanReal) => void;
  handleApplyInsurance: (plan: InsurancePlanReal) => void;
}) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      {/* Card */}
      <div className="glass-strong rounded-2xl p-5 sm:p-6 h-full relative overflow-hidden transition-all duration-300 group-hover:border-primary/30">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-10 blur-xl`} />
        </div>

        {/* Badge */}
        {offering.badge && (
          <motion.div
            className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${offering.badge.color === 'primary'
              ? 'bg-primary/20 text-primary border border-primary/30'
              : 'bg-accent/20 text-accent border border-accent/30'
              }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
          >
            {offering.badge.text}
          </motion.div>
        )}

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <DynamicIcon name={offering.icon} className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-foreground mb-1">{offering.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{offering.subtitle}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{offering.description}</p>

          {/* Interest rate if available */}
          {offering.interestRate && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-foreground">{offering.interestRate}</span>
              <span className="text-xs text-muted-foreground">p.a.</span>
            </div>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {offering.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] rounded-full bg-muted text-muted-foreground border border-border"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-2 z-50">
            {
              offering.applyUrl && (
                <Button
                  onClick={() => {
                    const cardIds = ['hdfc-infinia', 'hdfc-pl', 'health-ins', 'sbi-cashback', 'icici-amazon', 'idfc-wealth', 'axis-flipkart', 'au-zenith-plus','kotak-pvr', 'yes-marquee' , 'off-1', 'off-2', 'off-3', 'off-4', 'off-5', 'off-6', 'off-7', 'off-8'];
                    const loanIds = ['axis-pl', 'bajaj-pl', 'hdfc-pl', 'icici-pl', 'sbi-pl', 'tata-pl', 'axis-fibe', 'hdfc-moneyback']
                    const insIds = ['life-ins', 'health-ins', 'motor-ins', 'travel-ins', 'home-ins', 'health-float', 'bike-ins', 'term-life',  ]
                    if (offering) {
                      console.log(offering)
                      if (cardIds.includes(offering.id)) {
                        // It's a Credit Card
                        console.log('inside card func')
                        handleApplyCard({
                          id: offering.id,
                          bankName: offering.title,
                          cardName: offering.title, 
                          imageUrl: '',
                          joiningFee: 0,
                          annualFee: 0,
                          rewardType: 'Cashback',
                          bestFor: '',
                          rewardRate: '',
                          features: [''],
                          applyUrl: '',
                          isFeatured: false,
                          eligibility: '',
                          rating: 5,
                        })
                      } else if (insIds.includes(offering.id)) {
                        // It's Insurance
                        handleApplyInsurance({
                          id: '',
                          providerName: offering.title, 
                          planName: offering.title,
                          imageUrl: '',
                          premium: '',
                          coverAmount: '',
                          category: 'Life',
                          type: 'individual',
                          bestFor: '',
                          features: [''],
                          applyUrl: '',
                          isFeatured: false,
                          eligibility: '',
                          rating: 5,
                        })
                        // Tip: You could also do `${product.providerName} ${product.planName}` if you want more detail!
                      } else if (loanIds.includes(offering.id)) {
                        handleApplyLoan({
                          id: '', 
                          bankName: offering.title, 
                          logoUrl: '',
                          interestRate: '',
                          maxAmount: '', 
                          tenure: '', 
                          processingFee: '', 
                          features: [''], 
                          applyUrl: '', 
                          isFeatured: false,
                          eligibility: '',
                          rating: 5
                        })
                      }
                    }
                  }}
                  // onClick={() => navigate(offering.applyUrl!)}
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 text-sm font-medium cursor-pointer"
                >
                  {offering.cta.primary}
                </Button>
              )
            }

            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent border-border text-foreground hover:bg-muted/50 text-sm hidden"
            >
              {offering.cta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export const ServiceCards = ({ offerings, activeServiceId, handleApplyCard, handleApplyInsurance, handleApplyLoan }: ServiceCardsProps) => {
  return (
    <motion.div
      className="w-full overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Scrollable container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeServiceId}
            className="flex gap-4 sm:gap-6 px-4 sm:px-8 py-2 overflow-x-auto hide-scrollbar scroll-smooth pt-4 cursor-default"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {offerings.map((offering, index) => (
              <ServiceCard key={offering.id} offering={offering} index={index}
                handleApplyCard={handleApplyCard}
                handleApplyInsurance={handleApplyInsurance}
                handleApplyLoan={handleApplyLoan}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator dots for mobile */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {offerings.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};