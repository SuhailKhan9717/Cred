import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Search, Wallet, SlidersHorizontal } from 'lucide-react';
// import { personalLoans } from '../data/mockData';
import type { PersonalLoan } from '../data/mockData';
import LoanCard from '../components/LoanCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { personalLoansProductionData } from '../data/ProductionData';
import FAQSection from '../components/FaqSection';

export const faqData = [
  {
    question: "What is a personal loan?",
    answer: "A personal loan is an unsecured loan that can be used for any personal requirement such as medical expenses, travel, weddings, or emergencies."
  },
  {
    question: "Who can apply for a personal loan?",
    answer: "Salaried or self-employed individuals with a stable income and good credit score can apply."
  },
  {
    question: "Do I need collateral?",
    answer: "No. Personal loans are unsecured and do not require any collateral."
  },
  {
    question: "How long does approval take?",
    answer: "Many lenders provide instant or same-day approvals, depending on your profile."
  },
  {
    question: "What documents are required?",
    answer: "Generally required documents include:\n• PAN Card\n• Aadhaar / Address proof\n• Salary slips / bank statements\n\nRequirements may vary by lender."
  },
  {
    question: "Does Credgrow approve the loan?",
    answer: "No. Credgrow only facilitates comparison and application. Final approval is done by partner banks or NBFCs."
  },
  {
    question: "Can I prepay or foreclose my loan?",
    answer: "Yes, most lenders allow prepayment or foreclosure, subject to their terms."
  }
];


interface LoansPageProps {
  onApply: (loan: PersonalLoan) => void;
}

interface Filters {
  banks: string[];
  maxInterestRate: number;
  searchQuery: string;
}

const LoansPage: React.FC<LoansPageProps> = ({ onApply }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    banks: [],
    maxInterestRate: 24,
    searchQuery: ''
  });
  const personalLoans = personalLoansProductionData;

  const uniqueBanks = useMemo(() => 
    [...new Set(personalLoans.map(loan => loan.bankName))].sort(),
    []
  );

  const filteredLoans = useMemo(() => {
    return personalLoans.filter(loan => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!loan.bankName.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Bank filter
      if (filters.banks.length > 0 && !filters.banks.includes(loan.bankName)) {
        return false;
      }

      // Interest rate filter (check the lower bound of the rate range)
      const lowerRate = parseFloat(loan.interestRate.split('%')[0]);
      if (lowerRate > filters.maxInterestRate) return false;

      return true;
    });
  }, [filters]);

  const handleBankToggle = (bank: string) => {
    setFilters(prev => ({
      ...prev,
      banks: prev.banks.includes(bank)
        ? prev.banks.filter(b => b !== bank)
        : [...prev.banks, bank]
    }));
  };

  const clearFilters = () => {
    setFilters({
      banks: [],
      maxInterestRate: 24,
      searchQuery: ''
    });
  };

  const hasActiveFilters = filters.banks.length > 0 || 
    filters.maxInterestRate < 24 ||
    filters.searchQuery !== '';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Interest Rate Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-foreground">Max Interest Rate</h4>
          <span className="text-sm font-medium text-primary">{filters.maxInterestRate}%</span>
        </div>
        <Slider
          value={[filters.maxInterestRate]}
          onValueChange={(value) => setFilters(prev => ({ ...prev, maxInterestRate: value[0] }))}
          min={8}
          max={24}
          step={1}
          className="w-full"
          aria-label="Maximum interest rate"
        />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>8%</span>
          <span>24%</span>
        </div>
      </div>

      {/* Banks */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Banks & NBFCs</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uniqueBanks.map(bank => (
            <div key={bank} className="flex items-center gap-2">
              <Checkbox
                id={`loan-bank-${bank}`}
                checked={filters.banks.includes(bank)}
                onCheckedChange={() => handleBankToggle(bank)}
              />
              <Label htmlFor={`loan-bank-${bank}`} className="text-sm cursor-pointer">{bank}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <section className="py-8 md:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Wallet className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-accent">Personal Loans</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Get the Best Personal Loan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare interest rates and features from India's leading banks and NBFCs
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search by bank name..."
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="pl-10"
              aria-label="Search loans"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
            Filters
            {hasActiveFilters && (
              <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </Button>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredLoans.length} of {personalLoans.length} loan offers
        </p>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-64 shrink-0"
          >
            <div className="sticky top-24 bg-card rounded-2xl p-6 border border-border shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Filter className="w-4 h-4" aria-hidden="true" />
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline focus:outline-none"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </motion.aside>

          {/* Cards Grid */}
          <div className="flex-1">
            {filteredLoans.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredLoans.map((loan, i) => (
                  <motion.div
                    key={loan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <LoanCard loan={loan} onApply={onApply} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No loans found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </motion.div>
            )}

            <FAQSection data={faqData}/>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsFilterOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary focus:outline-none"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-72px)]">
              <FilterContent />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LoansPage;
