import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Check, CreditCard, TrendingUp, Shield, Bell, Download } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  'Instant loan eligibility checks',
  'Real-time application tracking',
  'Personalized card recommendations',
  'Biometric security & encryption',
  '24/7 AI-powered support'
];

const floatingIcons = [
  { icon: CreditCard, x: -60, y: -40, delay: 0 },
  { icon: TrendingUp, x: 80, y: -60, delay: 0.5 },
  { icon: Shield, x: -80, y: 80, delay: 1 },
  { icon: Bell, x: 60, y: 100, delay: 1.5 },
];

const MobileAppPromo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Coming Soon</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Financial Freedom In Your Pocket
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Compare, apply, and track all your financial products on the go
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gradient-to-br from-success to-success/80 p-2 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-success-foreground" />
                  </div>
                  <span className="text-lg text-primary-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-lg border border-primary-foreground/30 text-primary-foreground px-6 py-6 rounded-2xl"
              >
                <Download className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-lg border border-primary-foreground/30 text-primary-foreground px-6 py-6 rounded-2xl"
              >
                <Download className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </Button>
            </div>

            {/* QR Code */}
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-primary-foreground p-4 rounded-2xl">
                <img 
                  src="https://placehold.co/100x100/ffffff/7c3aed?text=QR" 
                  alt="QR Code to download app"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Scan to download
              </p>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary-foreground/20 to-transparent blur-3xl" />
            
            {/* Floating icons */}
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                style={{ 
                  position: 'absolute', 
                  left: `calc(50% + ${item.x}px)`,
                  top: `calc(50% + ${item.y}px)`,
                }}
                className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-lg rounded-2xl flex items-center justify-center"
              >
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            ))}

            {/* Phone */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="bg-foreground rounded-[3rem] p-3 border-8 border-foreground/80 shadow-2xl">
                <div className="w-72 h-[500px] bg-gradient-to-br from-card to-secondary rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 bg-primary/10 flex items-center justify-center">
                      <div className="w-24 h-5 bg-foreground rounded-full" />
                    </div>
                    
                    {/* App content mockup */}
                    <div className="flex-1 p-4 space-y-3">
                      <div className="h-6 w-32 bg-primary/20 rounded-lg" />
                      <div className="h-24 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl" />
                      <div className="h-4 w-full bg-muted rounded-lg" />
                      <div className="h-4 w-3/4 bg-muted rounded-lg" />
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-20 bg-card rounded-xl shadow-sm" />
                        <div className="h-20 bg-card rounded-xl shadow-sm" />
                      </div>
                      <div className="h-16 bg-primary/20 rounded-xl mt-4" />
                    </div>

                    {/* Bottom nav */}
                    <div className="h-16 bg-card border-t border-border flex items-center justify-around px-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-primary' : 'bg-muted'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromo;
