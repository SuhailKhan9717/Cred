import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, IndianRupee } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Credit Cards', id: 'creditCards' },
    { label: 'Personal Loans', id: 'loans' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: 'privacy' },
    { label: 'Terms & Conditions', href: 'terms' },
    { label: 'Disclaimer', href: 'home' },
    { label: 'Cookie Policy', href: 'home' }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                 <IndianRupee className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold">Credgrow</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted financial partner. We help you compare and apply for the best credit cards and loans from India's leading banks.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-background/70 hover:text-background transition-colors text-sm focus:outline-none focus:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      // href={link.href}
                      onClick={()=>onNavigate(link.href)}
                      className="text-background/70 hover:text-background transition-colors text-sm focus:outline-none focus:underline cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Exclusive Offers</h3>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive personalized offers and financial tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-background/70">
              <Lock className="w-4 h-4 text-success" aria-hidden="true" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <img src="https://placehold.co/40x25/ffffff/333333?text=RBI" alt="RBI Registered" className="h-4" />
              <span>RBI Partner Banks</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <img src="https://placehold.co/40x25/ffffff/333333?text=ISO" alt="ISO Certified" className="h-4" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-xs text-background/50 max-w-3xl mx-auto">
          <p className="mb-2">
            Credgrow is a financial marketplace and does not directly provide loans or credit cards. 
            All products are offered by respective partner banks and financial institutions.
          </p>
          <p>Subject to approval by respective banks. Terms & conditions apply.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} Credgrow. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://placehold.co/60x30/ffffff/333333?text=Visa" alt="Visa" className="h-6 opacity-70" />
              <img src="https://placehold.co/60x30/ffffff/333333?text=MC" alt="Mastercard" className="h-6 opacity-70" />
              <img src="https://placehold.co/60x30/ffffff/333333?text=RuPay" alt="RuPay" className="h-6 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
