import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, TrendingUp, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data security is our top priority. We use bank-grade encryption to protect your information.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best experience for our users.'
    },
    {
      icon: TrendingUp,
      title: 'Transparency',
      description: 'We believe in complete transparency. No hidden fees, no surprises – just honest recommendations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We partner only with trusted banks and NBFCs to bring you the best financial products.'
    }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://placehold.co/200x200/7c3aed/ffffff?text=RK' },
    { name: 'Priya Sharma', role: 'Chief Technology Officer', image: 'https://placehold.co/200x200/f97316/ffffff?text=PS' },
    { name: 'Amit Patel', role: 'Head of Partnerships', image: 'https://placehold.co/200x200/059669/ffffff?text=AP' }
  ];

  const timeline = [
    { year: '2020', event: 'Credgrow was founded with a mission to simplify financial decisions' },
    { year: '2021', event: 'Partnered with 10+ major banks across India' },
    { year: '2022', event: 'Reached milestone of 25,000 successful applications' },
    { year: '2023', event: 'Expanded to 20+ banking partners and introduced loan comparison' },
    { year: '2024', event: 'Serving 50,000+ happy customers with 4.8★ rating' }
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
            Your Trusted Partner in <span className="text-gradient">Financial Growth</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed max-md:text-left">
            At Credgrow, we're on a mission to democratize access to financial products. We believe everyone deserves 
            to make informed financial decisions without the confusion and complexity that often accompanies the process.
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
              Simplifying Financial Decisions for Every Indian
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that choosing the right credit card or personal loan can be overwhelming. With countless 
              options, varying terms, and complex fee structures, it's easy to feel lost.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That's why we built Credgrow – a transparent, unbiased platform where you can compare products 
              side-by-side, understand the true costs, and apply with confidence.
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="mt-3 text-muted-foreground">The principles that guide everything we do</p>
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Journey</h2>
            <p className="mt-3 text-muted-foreground">Key milestones in our growth story</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Meet Our Leadership</h2>
            <p className="mt-3 text-muted-foreground">The team driving Credgrow's mission forward</p>
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
            Ready to Make Smarter Financial Decisions?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join 50,000+ Indians who trust Credgrow for their financial needs
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

export default AboutPage;
