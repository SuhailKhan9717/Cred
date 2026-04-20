import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Search, CreditCard as CreditCardIcon, SlidersHorizontal } from 'lucide-react';
// import { creditCards } from '../data/mockData';
import type {  CreditCard } from '../data/mockData';
import CreditCardCard from '../components/CreditCardCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { creditCardProductionData, type CreditCardReal } from '../data/ProductionData';

interface CreditCardsPageProps {
  // Mock 
  onApply: (card: CreditCardReal) => void;
}

interface Filters {
  banks: string[];
  rewardTypes: string[];
  feeType: 'all' | 'free' | 'premium';
  searchQuery: string;
}

const CreditCardsPage: React.FC<CreditCardsPageProps> = ({ onApply }) => {
  // Rendering Production Data : 
  const creditCards = creditCardProductionData; 

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    banks: [],
    rewardTypes: [],
    feeType: 'all',
    searchQuery: ''
  });

  const uniqueBanks = useMemo(() => 
    [...new Set(creditCards.map(card => card.bankName))],
    []
  );

  const rewardTypes = ['Cashback', 'Travel', 'Shopping', 'Fuel'];

  const filteredCards = useMemo(() => {
    return creditCards.filter(card => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!card.cardName.toLowerCase().includes(query) && 
            !card.bankName.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Bank filter
      if (filters.banks.length > 0 && !filters.banks.includes(card.bankName)) {
        return false;
      }

      // Reward type filter
      if (filters.rewardTypes.length > 0 && !filters.rewardTypes.includes(card.rewardType)) {
        return false;
      }

      // Fee type filter
      if (filters.feeType === 'free' && card.joiningFee !== 0) return false;
      if (filters.feeType === 'premium' && card.joiningFee === 0) return false;

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

  const handleRewardTypeToggle = (type: string) => {
    setFilters(prev => ({
      ...prev,
      rewardTypes: prev.rewardTypes.includes(type)
        ? prev.rewardTypes.filter(t => t !== type)
        : [...prev.rewardTypes, type]
    }));
  };

  const clearFilters = () => {
    setFilters({
      banks: [],
      rewardTypes: [],
      feeType: 'all',
      searchQuery: ''
    });
  };

  const hasActiveFilters = filters.banks.length > 0 || 
    filters.rewardTypes.length > 0 || 
    filters.feeType !== 'all' ||
    filters.searchQuery !== '';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Fee Type */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Fee Type</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Cards' },
            { value: 'free', label: 'Free (₹0 joining fee)' },
            { value: 'premium', label: 'Premium (paid)' }
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="feeType"
                value={option.value}
                checked={filters.feeType === option.value}
                onChange={() => setFilters(prev => ({ ...prev, feeType: option.value as Filters['feeType'] }))}
                className="accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reward Types */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Reward Category</h4>
        <div className="space-y-2">
          {rewardTypes.map(type => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                id={`reward-${type}`}
                checked={filters.rewardTypes.includes(type)}
                onCheckedChange={() => handleRewardTypeToggle(type)}
              />
              <Label htmlFor={`reward-${type}`} className="text-sm cursor-pointer">{type}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Banks */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Banks</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uniqueBanks.map(bank => (
            <div key={bank} className="flex items-center gap-2">
              <Checkbox
                id={`bank-${bank}`}
                checked={filters.banks.includes(bank)}
                onCheckedChange={() => handleBankToggle(bank)}
              />
              <Label htmlFor={`bank-${bank}`} className="text-sm cursor-pointer">{bank}</Label>
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
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <CreditCardIcon className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Credit Cards</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Find Your Perfect Credit Card
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare features, rewards, and fees from India's top banks
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
              placeholder="Search cards by name or bank..."
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="pl-10"
              aria-label="Search credit cards"
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
                {filters.banks.length + filters.rewardTypes.length + (filters.feeType !== 'all' ? 1 : 0)}
              </span>
            )}
          </Button>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredCards.length} of {creditCards.length} credit cards
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
            {filteredCards.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CreditCardCard card={card} onApply={onApply} />
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
                <h3 className="text-xl font-semibold text-foreground mb-2">No cards found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </motion.div>
            )}
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

export default CreditCardsPage;
