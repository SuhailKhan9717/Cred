import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CreditCard, Wallet, Users, Phone, ChevronDown, Shield, IndianRupee } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'creditCards', label: 'Credit Cards', icon: CreditCard },
  { id: 'loans', label: 'Loans', icon: Wallet },
  { id: 'insurance', label: 'Insurance', icon: Wallet },
  { id: 'about', label: 'About Us', icon: Users },
  { id: 'contact', label: 'Contact', icon: Phone },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                {/* <Shield  /> */}
                <IndianRupee className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold text-gradient">Credgrow</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    currentPage === link.id
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  {currentPage === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick('creditCards')}
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileTap={{ scale: 0.95 }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="text-xl font-bold text-gradient">Menu</span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close navigation menu"
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full flex items-center gap-3 px-6 py-4 text-left font-medium transition-colors focus:outline-none focus:bg-secondary ${
                        currentPage === link.id
                          ? 'text-primary bg-primary/10 border-r-4 border-primary'
                          : 'text-foreground/70 hover:text-primary hover:bg-secondary'
                      }`}
                    >
                      {link.icon && <link.icon className="w-5 h-5" aria-hidden="true" />}
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-border">
                  <Button
                    onClick={() => handleNavClick('creditCards')}
                    className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
                  >
                    Get Started
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4" aria-hidden="true" />
                    <span>100% Secure Platform</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
