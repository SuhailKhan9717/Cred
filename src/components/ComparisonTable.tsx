import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const products = [
  {
    id: 1,
    name: 'SBI Simply CLICK',
    bank: 'SBI Card',
    joiningFee: '₹0',
    annualFee: '₹0',
    rewardRate: '1.5%',
    welcomeBonus: '₹500',
    loungeAccess: false,
    fuelSurcharge: true,
    internationalFee: '3.5% fee',
    creditLimit: 'Up to ₹2L',
    recommended: false,
  },
  {
    id: 2,
    name: 'HDFC Regalia',
    bank: 'HDFC Bank',
    joiningFee: '₹500',
    annualFee: '₹1,000',
    rewardRate: '2%',
    welcomeBonus: '₹2,000',
    loungeAccess: '4/year',
    fuelSurcharge: true,
    internationalFee: 'Free',
    creditLimit: 'Up to ₹5L',
    recommended: true,
  },
  {
    id: 3,
    name: 'ICICI Amazon Pay',
    bank: 'ICICI Bank',
    joiningFee: '₹0',
    annualFee: '₹500',
    rewardRate: '1%',
    welcomeBonus: '₹1,000',
    loungeAccess: '2/year',
    fuelSurcharge: false,
    internationalFee: '2% fee',
    creditLimit: 'Up to ₹3L',
    recommended: false,
  },
];

const features = [
  { key: 'joiningFee', label: 'Joining Fee' },
  { key: 'annualFee', label: 'Annual Fee' },
  { key: 'rewardRate', label: 'Reward Rate' },
  { key: 'welcomeBonus', label: 'Welcome Bonus' },
  { key: 'loungeAccess', label: 'Lounge Access' },
  { key: 'fuelSurcharge', label: 'Fuel Surcharge Waiver' },
  { key: 'internationalFee', label: 'International Usage' },
  { key: 'creditLimit', label: 'Credit Limit' },
];

const ComparisonTable: React.FC = () => {
  const renderValue = (value: string | boolean, highlight?: boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="w-8 h-8 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-4 h-4 text-success-foreground" />
        </div>
      ) : (
        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto">
          <X className="w-4 h-4 text-muted-foreground" />
        </div>
      );
    } 
    return (
      <span className={`font-semibold ${highlight ? 'bg-accent/20 px-3 py-2 rounded-lg' : ''}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary max-sm:text-[12px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Smart Comparison</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            See The Difference At A Glance
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We make complex decisions simple
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary-foreground/10 backdrop-blur-2xl border border-primary-foreground/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-primary-foreground/5 backdrop-blur">
            <div className="text-primary-foreground/70 font-medium">Features</div>
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${product.recommended ? 'from-accent/30 to-accent/10' : 'from-primary-foreground/20 to-primary-foreground/10'} backdrop-blur-xl rounded-2xl p-4 text-center  max-sm:p-1 max-sm:pt-0 max-sm:px-0`}>
                  {product.recommended && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-cta text-accent-foreground  px-3 py-1 rounded-full font-bold uppercase max-sm:hidden"
                    >
                      Recommended
                    </motion.span>
                  )}
                  <div className="bg-primary-foreground rounded-lg p-2 w-16 h-8 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{product.bank}</span>
                  </div>
                  <p className="text-primary-foreground font-bold  max-sm:font-normal">{product.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-4 gap-4 items-center py-4 px-6 border-t border-primary-foreground/10 ${i % 2 === 0 ? 'bg-primary-foreground/5' : ''}`}
            >
              <div className="text-primary-foreground/90 font-medium">{feature.label}</div>
              {products.map((product) => (
                <div key={product.id} className="text-primary-foreground text-center">
                  {renderValue(
                    product[feature.key as keyof typeof product] as string | boolean,
                    product.recommended && feature.key === 'welcomeBonus'
                  )}
                </div>
              ))}
            </motion.div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-primary-foreground/5 backdrop-blur ">
            <div />
            {products.map((product) => (
              <div key={product.id}>
                <Button
                  className={`w-full py-4 font-semibold max-sm:hidden ${
                    product.recommended
                      ? 'bg-gradient-to-r from-cta to-cta/90 hover:from-cta/90 hover:to-cta text-cta-foreground'
                      : 'bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30'
                  }`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a href="#" className="text-cta hover:text-cta/80 font-semibold inline-flex items-center gap-2 transition-colors">
            See Detailed Comparison
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
