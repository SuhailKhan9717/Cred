import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, HeadphonesIcon, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const features = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Bank-grade encryption protects your personal and financial data at all times.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: Zap,
    title: 'Instant Comparison',
    description: 'Compare offers from 20+ banks in seconds. Find the best rates without hassle.',
    color: 'bg-accent/10 text-accent'
  },
  {
    icon: Award,
    title: 'Best Rates Guaranteed',
    description: 'We negotiate exclusive rates with banks so you always get the best deal.',
    color: 'bg-cta/10 text-cta'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Guidance',
    description: 'Free consultation from our financial advisors to help you make informed decisions.',
    color: 'bg-success/10 text-success'
  }
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '20+', label: 'Partner Banks' },
  { value: '₹500Cr+', label: 'Loans Processed' },
  { value: '4.8★', label: 'Average Rating' }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="text-gradient">Credgrow</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            India's most trusted financial marketplace helping you make smarter financial decisions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border text-center group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            What Our Customers Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-lg:gap-2">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" aria-hidden="true" />
              
              <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>

              <footer className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <cite className="not-italic font-semibold text-foreground">{testimonial.name}</cite>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
