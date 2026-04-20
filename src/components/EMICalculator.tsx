import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator, IndianRupee, Percent, Clock, Info } from 'lucide-react';
import { Slider } from './ui/slider';

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 1000, enabled: boolean = true) => {
  const [count, setCount] = useState(0);
const frameRef = useRef<number | null>(null);
const startTimeRef = useRef<number | null>(null);
  const previousEndRef = useRef(end);

  useEffect(() => {
    if (!enabled) return;
    
    const start = previousEndRef.current;
    previousEndRef.current = end;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * easeOut));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [end, duration, enabled]);

  return count;
};

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [isDragging, setIsDragging] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const n = tenure;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principalPercent: Math.round((principal / totalAmount) * 100),
      interestPercent: Math.round((totalInterest / totalAmount) * 100)
    };
  }, [loanAmount, interestRate, tenure]);

  const animatedEmi = useAnimatedCounter(calculations.emi, 800, isInView);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatLakhs = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Calculator className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">EMI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Plan Your Loan Repayment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly EMI and total interest with our easy-to-use calculator
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Inputs Section */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <IndianRupee className="w-4 h-4 text-primary" aria-hidden="true" />
                      Loan Amount
                    </label>
                    <span className="text-lg font-bold text-primary">{formatCurrency(loanAmount)}</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    onPointerDown={() => setIsDragging(true)}
                    onPointerUp={() => setIsDragging(false)}
                    min={50000}
                    max={5000000}
                    step={50000}
                    className={`w-full transition-all ${isDragging ? '[&_[role=slider]]:shadow-[0_0_20px_hsl(var(--primary)/0.6)] [&_[role=slider]]:scale-110' : ''}`}
                    aria-label="Loan amount slider"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>₹50K</span>
                    <span>₹50L</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Percent className="w-4 h-4 text-accent" aria-hidden="true" />
                      Interest Rate (p.a.)
                    </label>
                    <span className="text-lg font-bold text-accent">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={8}
                    max={24}
                    step={0.5}
                    className="w-full"
                    aria-label="Interest rate slider"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>8%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Clock className="w-4 h-4 text-cta" aria-hidden="true" />
                      Loan Tenure
                    </label>
                    <span className="text-lg font-bold text-cta">{tenure} months</span>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={6}
                    max={60}
                    step={6}
                    className="w-full"
                    aria-label="Loan tenure slider"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>6 months</span>
                    <span>60 months</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-primary to-primary p-6 md:p-8 text-primary-foreground">
                <div className="h-full flex flex-col justify-center">
                  {/* Monthly EMI */}
                  <div className="text-center mb-8">
                    <p className="text-sm opacity-80 mb-2">Monthly EMI</p>
                    <motion.p
                      key={calculations.emi}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-4xl md:text-5xl font-bold animate-pulse-slow"
                    >
                      {formatCurrency(animatedEmi)}
                    </motion.p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-sm opacity-80">Principal Amount</span>
                      <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-sm opacity-80">Total Interest</span>
                      <span className="font-semibold">{formatCurrency(calculations.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm opacity-80">Total Amount Payable</span>
                      <span className="font-bold text-lg">{formatCurrency(calculations.totalAmount)}</span>
                    </div>
                  </div>

                  {/* Visual Breakdown */}
                  <div className="mt-6">
                    <div className="flex h-3 rounded-full overflow-hidden bg-white/20">
                      <motion.div
                        className="bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${calculations.principalPercent}%` }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${calculations.interestPercent}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Principal ({calculations.principalPercent}%)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        Interest ({calculations.interestPercent}%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Info className="w-3 h-3" aria-hidden="true" />
            EMI calculation is indicative. Actual EMI may vary based on bank policies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
