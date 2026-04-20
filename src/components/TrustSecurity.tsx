import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Users, Database, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '256-bit', label: 'Encryption' },
  { icon: Lock, value: 'ISO 27001', label: 'Certified' },
  { icon: Users, value: '50K+', label: 'Trust Us' },
  { icon: Database, value: 'Zero', label: 'Data Breaches' },
];

const features = [
  {
    icon: Shield,
    title: 'Data Encryption',
    description: 'All your data is encrypted using military-grade 256-bit SSL encryption, the same technology used by banks worldwide.'
  },
  {
    icon: Eye,
    title: 'Privacy First',
    description: 'We never sell your data to third parties. Your information is used solely to provide you with the best financial products.'
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'Two-factor authentication, biometric login, and OTP verification ensure only you can access your account.'
  },
  {
    icon: FileCheck,
    title: 'RBI Compliant',
    description: 'We strictly adhere to all RBI guidelines and regulations for financial marketplaces and data handling.'
  }
];

const certifications = [
  { name: 'RBI Registered', image: 'https://placehold.co/120x60/f3f4f6/374151?text=RBI' },
  { name: 'ISO 27001', image: 'https://placehold.co/120x60/f3f4f6/374151?text=ISO+27001' },
  { name: 'PCI DSS', image: 'https://placehold.co/120x60/f3f4f6/374151?text=PCI+DSS' },
  { name: 'Norton Secured', image: 'https://placehold.co/120x60/f3f4f6/374151?text=Norton' },
  { name: 'SSL Certificate', image: 'https://placehold.co/120x60/f3f4f6/374151?text=SSL' },
];

const TrustSecurity: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%239333ea' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Bank-Grade Security</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Security Is Our <span className="text-gradient">Priority</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading protection for your financial data
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-border"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Certified & Compliant</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group text-center"
              >
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="mx-auto grayscale group-hover:grayscale-0 transition-all"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground mt-2">{cert.name}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg flex items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-success" />
            Your data is protected by industry-leading security measures
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSecurity;
