import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, TrendingUp, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPageNew: React.FC<AboutPageProps> = ({ onNavigate }) => {
  // Mapped "Our Promise" from real data to the existing Values grid structure
  const values = [
    {
      icon: TrendingUp,
      title: 'Transparency',
      description: 'Honest and transparent credit card comparisons. We do not issue cards directly; we guide you to the right choice.'
    },
    {
      icon: Heart,
      title: 'Personalization',
      description: 'Personalized recommendations based on your needs, lifestyle, spending habits, and financial goals.'
    },
    {
      icon: Award, // Represents the quality of the journey
      title: 'Simplicity',
      description: 'Simple application journeys. We strive to remove complexity from credit decisions.'
    },
    {
      icon: Shield, // Represents support and trust
      title: 'Dedicated Support',
      description: 'Dedicated support at every step. We guide every user toward a stronger financial future.'
    }
  ];

  // Updated with Real Leadership Team
  const team = [
    { 
      name: 'Rajat Gupta', 
      role: 'Founder', 
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=RG' 
    },
    { 
      name: 'Manju Gupta', 
      role: 'Director', 
      image: 'https://placehold.co/200x200/f97316/ffffff?text=MG' 
    },
    { 
      name: 'Ronak Gupta', 
      role: 'Legal & Compliance', 
      image: 'https://placehold.co/200x200/059669/ffffff?text=RG' 
    }
  ];

  // Adapted Timeline structure to show "Company Facts/Journey" based on real text
  // Since real dates weren't provided, we use short labels in the 'year' slot.
  const timeline = [
    { year: 'Entity', event: 'Credgrow is a product of Maytawi Industries Pvt. Ltd., created to help individuals discover the best credit cards.' },
    { year: 'Purpose', event: 'We are a customer-first financial platform focused on simplifying choices through expert guidance.' },
    { year: 'Vision', event: 'To become India’s most trusted credit card discovery platform, empowering individuals with smarter choices.' },
    { year: 'Policy', event: 'We do not provide loans directly. All approvals and rates are governed by partner banks and institutions.' },
    { year: 'Goal', event: 'We don’t just help you apply for a card. We help you grow your financial future.' }
  ];

  return (
    <section className="py-8 md:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-md:text-left">
            Your Financial Growth is <span className="text-gradient">Our Purpose</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed max-md:text-left">
            At Credgrow, we believe everyone deserves access to the right financial opportunities — simply, transparently, and confidently. 
            We are a product of Maytawi Industries Pvt. Ltd., focused on helping you discover financial products that match your lifestyle.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-accent">Our Mission</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 ">
              Simplifying Financial Access
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To simplify credit card selection through technology-driven insights, personalized recommendations, and honest comparisons — 
              making financial access easier, faster, and more reliable for everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our technology-driven approach removes confusion and brings clarity to every financial decision. We strive to guide every user 
              toward a stronger financial future with confidence.
            </p>
            <Button onClick={() => onNavigate('creditCards')} className="bg-primary hover:bg-primary/90 group">
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <img 
                src="https://placehold.co/500x400/7c3aed/ffffff?text=Our+Mission" 
                alt="Credgrow team working on financial solutions"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Promise</h2>
            <p className="mt-3 text-muted-foreground">Driven by a shared vision to simplify financial access</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-card text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline (Adapted for Company Overview) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Who We Are</h2>
            <p className="mt-3 text-muted-foreground">Transparency and technology at our core</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-2xl p-4 border border-border shadow-card inline-block">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <p className="text-foreground mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Leadership Team</h2>
            <p className="mt-3 text-muted-foreground">Committed to creating meaningful financial impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
             Start Your Financial Journey Today
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            At Credgrow, we remove complexity from credit decisions and guide you toward a stronger financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('creditCards')}
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold"
            >
              Explore Credit Cards
            </Button>
            <Button
              onClick={() => onNavigate('loans')}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30"
            >
              Check Loan Offers
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPageNew;