import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Gift, ArrowRight, CheckCircle, Lock, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-cta via-cta/90 to-cta relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 relative text-center">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Icon */}
              <div className="bg-cta-foreground/20 backdrop-blur p-5 rounded-2xl w-fit mx-auto mb-6">
                <Mail className="w-8 h-8 text-cta-foreground" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-4">
                Never Miss A Great Deal
              </h2>
              <p className="text-lg md:text-xl text-cta-foreground/90 mb-6 max-w-2xl mx-auto">
                Join 10,000+ subscribers getting exclusive offers, financial tips, and card launch updates
              </p>

              {/* Incentive Badge */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 bg-cta-foreground/20 backdrop-blur-lg text-cta-foreground px-6 py-3 rounded-full font-semibold text-lg mb-8"
              >
                <Gift className="w-5 h-5" />
                Get ₹500 cashback on your first application
              </motion.div>

              {/* Avatars */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-cta-foreground"
                    />
                  ))}
                </div>
                <span className="text-cta-foreground/90 font-medium ml-2">+ 10,000 subscribers</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="bg-cta-foreground/10 backdrop-blur-2xl border border-cta-foreground/30 rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`flex-1 bg-cta-foreground/20 border-0 text-cta-foreground placeholder:text-cta-foreground/60 px-6 py-4 text-lg rounded-xl focus-visible:ring-2 focus-visible:ring-cta-foreground/50 ${
                      error ? 'ring-2 ring-destructive' : ''
                    }`}
                    aria-label="Email address"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="bg-cta-foreground text-cta hover:bg-cta-foreground/90 px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-all shadow-xl"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
                
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive-foreground bg-destructive/20 mt-2 text-sm px-4 py-2 rounded-lg"
                  >
                    {error}
                  </motion.p>
                )}
              </form>

              <p className="text-cta-foreground/70 text-sm mt-4 flex items-center justify-center gap-1">
                <Lock className="w-4 h-4" />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success/20 backdrop-blur-xl border border-success/30 rounded-2xl p-8"
            >
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-cta-foreground mb-2">You're In!</h3>
              <p className="text-cta-foreground/90">Check your email for exclusive offers</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSignup;
