import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, CreditCard, Wallet, Lock, User, HelpCircle } from 'lucide-react';

const categories = [
  { id: 'general', label: 'General', icon: Shield },
  { id: 'credit-cards', label: 'Credit Cards', icon: CreditCard },
  { id: 'loans', label: 'Loans', icon: Wallet },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'account', label: 'Account', icon: User },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'Is Credgrow safe to use?',
    answer: "Absolutely. We use bank-grade 256-bit encryption to protect your data. We're ISO 27001 certified and comply with all RBI regulations. We never store your banking passwords or OTPs."
  },
  {
    id: 2,
    category: 'general',
    question: 'Do you charge any fees?',
    answer: "No, Credgrow is 100% free for users. We earn a small commission from banks when you successfully apply, but this never affects your rates or terms."
  },
  {
    id: 3,
    category: 'credit-cards',
    question: 'How long does credit card approval take?',
    answer: "Most banks provide instant approval for eligible candidates. Once approved, you'll receive your physical card within 7-10 business days. Digital cards are often available immediately."
  },
  {
    id: 4,
    category: 'credit-cards',
    question: 'Can I apply for multiple cards at once?',
    answer: "Yes, but we recommend applying for 1-2 cards at a time. Multiple applications in a short period can temporarily impact your credit score due to hard inquiries."
  },
  {
    id: 5,
    category: 'loans',
    question: 'What documents do I need for a personal loan?',
    answer: "Typically: ID proof (Aadhaar/PAN), address proof, last 3 months' salary slips, and 6 months' bank statements. Self-employed individuals need ITR and business proof."
  },
  {
    id: 6,
    category: 'loans',
    question: 'How is my loan eligibility calculated?',
    answer: "We consider your monthly income, existing debts, credit score, age, and employment stability. Generally, banks offer 10-50x your monthly income based on your profile."
  },
  {
    id: 7,
    category: 'security',
    question: 'Why do you need my personal information?',
    answer: "Banks require KYC details for any financial product. We only collect information necessary for eligibility checks and applications. Your data is encrypted and never sold."
  },
  {
    id: 8,
    category: 'security',
    question: 'What if I face issues with my application?',
    answer: "Our support team is available 9 AM - 9 PM via email and chat. We'll help track your application and coordinate with banks on your behalf."
  }, 
  {
  id: 9,
  category: 'general',
  question: 'Which banks are available on Credgrow?',
  answer: 'Credgrow partners with leading Indian banks including HDFC, ICICI, SBI, Axis, IDFC FIRST, Kotak, and more. Bank availability may vary based on your profile and location.'
},
{
  id: 10,
  category: 'general',
  question: 'Will using Credgrow affect my credit score?',
  answer: 'Browsing products and checking eligibility on Credgrow does not impact your credit score. A score impact occurs only when you submit a formal application and the bank performs a hard inquiry.'
},
{
  id: 11,
  category: 'general',
  question: 'Can I track my application status?',
  answer: 'Yes. Once you apply through Credgrow, you’ll receive regular updates via SMS and email. You can also contact our support team for real-time status checks.'
},

{
  id: 12,
  category: 'credit-cards',
  question: 'What is a lifetime free credit card?',
  answer: 'A lifetime free credit card has no joining fee or annual fee for the entire duration of usage, regardless of spending milestones.'
},
{
  id: 13,
  category: 'credit-cards',
  question: 'How do reward points and cashback differ?',
  answer: 'Cashback is credited directly to your statement, while reward points can be redeemed for vouchers, travel bookings, or products depending on the bank’s rewards program.'
},
{
  id: 14,
  category: 'credit-cards',
  question: 'Can I upgrade my credit card later?',
  answer: 'Yes. Most banks allow upgrades based on your spending pattern, income growth, and credit history. Credgrow helps you identify upgrade opportunities.'
},

{
  id: 15,
  category: 'loans',
  question: 'How quickly is the loan amount disbursed?',
  answer: 'For eligible applicants, loan disbursal can happen within 24–48 hours after document verification. Some banks offer same-day disbursal.'
},
{
  id: 16,
  category: 'loans',
  question: 'Can I prepay or foreclose my loan?',
  answer: 'Yes, most banks allow partial prepayment or foreclosure. Charges, if any, depend on the lender and loan terms.'
},
{
  id: 17,
  category: 'loans',
  question: 'Do loans from Credgrow require collateral?',
  answer: 'Personal loans listed on Credgrow are unsecured and do not require any collateral or guarantor.'
},

{
  id: 18,
  category: 'security',
  question: 'How does Credgrow protect my data?',
  answer: 'All data is encrypted using 256-bit SSL encryption. Access is strictly controlled and monitored, following ISO 27001 security standards.'
},
{
  id: 19,
  category: 'security',
  question: 'Does Credgrow store my bank credentials?',
  answer: 'No. Credgrow never asks for or stores your net banking passwords, card PINs, or OTPs.'
},
{
  id: 20,
  category: 'security',
  question: 'Is Credgrow compliant with Indian regulations?',
  answer: 'Yes. Credgrow follows RBI guidelines and works only with regulated banks and NBFC partners.'
},

{
  id: 21,
  category: 'account',
  question: 'Do I need to create an account to use Credgrow?',
  answer: 'You can explore products without an account. An account is required only when you apply, so we can securely track your application.'
},
{
  id: 22,
  category: 'account',
  question: 'How do I update my personal details?',
  answer: 'You can update your details by contacting our support team. For security reasons, some changes may require verification.'
},
{
  id: 23,
  category: 'account',
  question: 'Can I delete my Credgrow account?',
  answer: 'Yes. You can request account deletion by emailing our support team. Your data will be permanently removed as per our privacy policy.'
},
{
  id: 24,
  category: 'account',
  question: 'I forgot my login details. What should I do?',
  answer: 'Use the “Forgot Password” option on the login page or contact support for quick account recovery.'
},
{
  id: 25,
  category: 'account',
  question: 'Will I receive promotional emails?',
  answer: 'We only send relevant product updates and offers. You can unsubscribe anytime from your email preferences.'
}

];

const FAQAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Credgrow
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Category Filter - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block sticky top-24 h-fit min-w-[280px]"
          >
            <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <cat.icon className="w-5 h-5" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Category Filter - Mobile */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide  ">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-muted-foreground border border-border'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 flex-1"
          >
            <AnimatePresence mode="wait">
              {filteredFaqs.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-card/80 backdrop-blur border border-border rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden ${
                    openItems.includes(faq.id) ? 'bg-gradient-to-br from-secondary/50 to-card' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-secondary/50 transition-colors"
                    aria-expanded={openItems.includes(faq.id)}
                  >
                    <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 ${openItems.includes(faq.id) ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
