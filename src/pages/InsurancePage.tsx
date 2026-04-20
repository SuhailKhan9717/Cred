import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Search, ShieldCheck as ShieldIcon, SlidersHorizontal } from 'lucide-react';
// Assuming you renamed your data and component files accordingly
// import {  insurancePlans } from '../data/mockData'; 
import type {  InsurancePlan, PersonalLoan } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import InsurancePolicyCard from '../components/InsurancePolicyCard';
import { insurancePlansProductionData, type InsurancePlanReal } from '../data/ProductionData';
import FAQSection from '../components/FaqSection';

export const faqData = [
  {
    question: "What types of insurance does Credgrow offer?",
    answer: "Credgrow helps you compare and apply for Health, Life, Motor, Travel, and Home Insurance from trusted insurance partners. We make it easy to find plans that match your needs and budget."
  },
  {
    question: "Is Credgrow an insurance company?",
    answer: "No. Credgrow is a digital comparison and application assistance platform and a product of Maytawi Industries Pvt. Ltd. We do not underwrite or issue insurance policies. Final policies are provided by licensed insurance companies."
  },
  {
    question: "How do I choose the right insurance plan?",
    answer: "Simply share your basic details and requirements. Credgrow shows personalized plan options so you can compare coverage, premiums, and benefits before applying."
  },
  {
    question: "Are my personal details safe on Credgrow?",
    answer: "Yes. We use secure systems and industry-standard safeguards to protect your information. Your data is shared only with relevant insurance partners for policy processing."
  },
  {
    question: "Can I buy insurance completely online?",
    answer: "Yes. Most insurance plans on Credgrow can be purchased online with minimal documentation and quick approval."
  },
  {
    question: "Will Credgrow help with claims?",
    answer: "While claims are handled directly by insurance providers, Credgrow offers guidance and support to help you understand the claim process."
  },
  {
    question: "What documents are required to buy insurance?",
    answer: "Typically required documents include:\n• ID proof (Aadhaar / PAN)\n• Address proof\n• Age proof\n• Vehicle or travel details (for Motor/Travel insurance)\n\nExact requirements may vary by insurer."
  },
  {
    question: "Can I customize my insurance coverage?",
    answer: "Yes. Many plans allow add-ons such as critical illness cover, zero depreciation, or personal accident riders based on your needs."
  },
  {
    question: "Do insurance plans offer tax benefits?",
    answer: "Yes. Health and Life Insurance premiums may be eligible for tax benefits under applicable sections of the Income Tax Act, subject to government rules."
  },
  {
    question: "How can I contact Credgrow for support?",
    answer: "You can reach our support team via email or through the contact form on our website. We’re here to help at every step."
  }
];

interface InsurancePageProps {
  onApply: (plan: InsurancePlanReal) => void;
}

interface Filters {
  providers: string[];
  categories: string[];
  planScope: 'all' | 'individual' | 'family';
  searchQuery: string;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ onApply }) => {
  const insurancePlans = insurancePlansProductionData; 
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    providers: [],
    categories: [],
    planScope: 'all',
    searchQuery: ''
  });

  const uniqueProviders = useMemo(() => 
    [...new Set(insurancePlans.map(plan => plan.providerName))].sort(),
    []
  );

  const categories = ['Health', 'Life', 'Motor', 'Travel', 'Home'];

  const filteredPlans = useMemo(() => {
    return insurancePlans.filter(plan => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!plan.planName.toLowerCase().includes(query) && 
            !plan.providerName.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Provider filter (formerly Bank)
      if (filters.providers.length > 0 && !filters.providers.includes(plan.providerName)) {
        return false;
      }

      // Category filter (formerly Reward Type)
      if (filters.categories.length > 0 && !filters.categories.includes(plan.category)) {
        return false;
      }

      // Plan Scope filter (formerly Fee Type)
      // Assuming plan.type is either 'individual' or 'family'
      if (filters.planScope === 'individual' && plan.type !== 'individual') return false;
      if (filters.planScope === 'family' && plan.type !== 'family') return false;

      return true;
    });
  }, [filters]);

  const handleProviderToggle = (provider: string) => {
    setFilters(prev => ({
      ...prev,
      providers: prev.providers.includes(provider)
        ? prev.providers.filter(p => p !== provider)
        : [...prev.providers, provider]
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const clearFilters = () => {
    setFilters({
      providers: [],
      categories: [],
      planScope: 'all',
      searchQuery: ''
    });
  };

  const hasActiveFilters = filters.providers.length > 0 || 
    filters.categories.length > 0 || 
    filters.planScope !== 'all' ||
    filters.searchQuery !== '';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Plan Scope (Formerly Fee Type) */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Plan Scope</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Plans' },
            { value: 'individual', label: 'Individual' },
            { value: 'family', label: 'Family / Floater' }
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="planScope"
                value={option.value}
                checked={filters.planScope === option.value}
                onChange={() => setFilters(prev => ({ ...prev, planScope: option.value as Filters['planScope'] }))}
                className="accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories (Formerly Reward Types) */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Insurance Category</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Providers (Formerly Banks) */}
      <div>
        <h4 className="font-semibold text-foreground mb-3">Insurers</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uniqueProviders.map(provider => (
            <div key={provider} className="flex items-center gap-2">
              <Checkbox
                id={`provider-${provider}`}
                checked={filters.providers.includes(provider)}
                onCheckedChange={() => handleProviderToggle(provider)}
              />
              <Label htmlFor={`provider-${provider}`} className="text-sm cursor-pointer">{provider}</Label>
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
            <ShieldIcon className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Insurance Plans</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Secure Your Future Today
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare coverage, premiums, and benefits from India's top insurers
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
              placeholder="Search plans by name or insurer..."
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="pl-10"
              aria-label="Search insurance plans"
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
                {filters.providers.length + filters.categories.length + (filters.planScope !== 'all' ? 1 : 0)}
              </span>
            )}
          </Button>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredPlans.length} of {insurancePlans.length} insurance policies
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
            {filteredPlans.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPlans.map((plan, i) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <InsurancePolicyCard  card={plan} onApply={onApply} />
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
                <h3 className="text-xl font-semibold text-foreground mb-2">No plans found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </motion.div>
            )}
            <FAQSection data ={faqData}/>
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

export default InsurancePage;