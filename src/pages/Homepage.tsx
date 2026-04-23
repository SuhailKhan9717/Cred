


import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EMICalculator from '../components/EMICalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import CreditCardsPage from '../pages/CreditCardsPage';
import LoansPage from '../pages/LoansPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ApplicationModal from '../components/ApplicationModal';
import LiveStatistics from '../components/LiveStatistics';
import ComparisonTable from '../components/ComparisonTable';
import BlogPreview from '../components/BlogPreview';
import FAQAccordion from '../components/FAQAccordion';
import SuccessStories from '../components/SuccessStories';
import MobileAppPromo from '../components/MobileAppPromo';
import TrustSecurity from '../components/TrustSecurity';
import NewsletterSignup from '../components/NewsletterSignup';
import type { CreditCard, InsurancePlan, PersonalLoan } from '../data/mockData';
import Services from '../components/Services';
import InsurancePage from './InsurancePage';
import UpdateHero from '../components/UpdateHero';
import PopularOfferTable from '../components/hero/ComparissionTable';
import AboutPageNew from './NewAboutUsPage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from '../components/TermsAndConditions';
import type { CreditCardReal, InsurancePlanReal } from '../data/ProductionData';

type PageType = 'home' | 'creditCards' | 'loans' | 'about' | 'contact' | 'insurance' | 'privacy' | 'terms';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const getInitialPage = (): PageType => {
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page');
  const validPages = ['home', 'creditCards', 'loans', 'about', 'contact', 'insurance', 'privacy', 'terms'];
  
  if (pageParam && validPages.includes(pageParam)) {
    return pageParam as PageType;
  }
  return 'home'; // Default fallback
};

const Homepage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CreditCardReal | PersonalLoan | InsurancePlanReal | null>(null);
  const [productType, setProductType] = useState<'card' | 'loan' | 'insurance'>('card');

 const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page as PageType);
    
    // 2. Update the browser URL without reloading the page
    const url = new URL(window.location.href);
    if (page === 'home') {
      url.searchParams.delete('page'); // Keeps the URL clean for the homepage
    } else {
      url.searchParams.set('page', page);
    }
    window.history.pushState({}, '', url);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleApplyCard = useCallback((card: CreditCardReal) => {
    setSelectedProduct(card);
    setProductType('card');
    setIsModalOpen(true);
  }, []);

  const handleApplyLoan = useCallback((loan: PersonalLoan) => {
    setSelectedProduct(loan);
    setProductType('loan');
    setIsModalOpen(true);
  }, []);

  const handleApplyInsurance = useCallback((insurance: InsurancePlanReal) => {
    setSelectedProduct(insurance);
    setProductType('insurance');
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Header currentPage={currentPage} setCurrentPage={handleNavigate} />

      <main id="main-content">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >

              {/* <Hero onNavigate={handleNavigate} /> */}
              <UpdateHero onNavigate={handleNavigate} />
              <PopularOfferTable
              handleApplyCard={handleApplyCard}
              handleApplyLoan={handleApplyLoan}
              handleApplyInsurance={handleApplyInsurance}
              />
              {/* <HeroSecondary /> */}
              <Services onNavigate={handleNavigate} />
              <EMICalculator />
              <LiveStatistics />
              <ComparisonTable />
              <WhyChooseUs />
              <BlogPreview />
              <FAQAccordion />
              <SuccessStories />
              <MobileAppPromo />
              <TrustSecurity />
              <NewsletterSignup />
            </motion.div>
          )}

          {currentPage === 'creditCards' && (
            <motion.div
              key="creditCards"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <CreditCardsPage onApply={handleApplyCard} />
            </motion.div>
          )}

          {currentPage === 'loans' && (
            <motion.div
              key="loans"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
            <LoansPage onApply={handleApplyLoan} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <AboutPageNew onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ContactPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'insurance' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <InsurancePage onApply={handleApplyInsurance} />
            </motion.div>
          )}
          
          {currentPage === 'privacy' && (
            <motion.div
              key="privacy"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <PrivacyPolicy />
            </motion.div>
          )}
          
          {currentPage === 'terms' && (
            <motion.div
              key="terms"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <TermsAndConditions />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        productType={productType}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Homepage;
