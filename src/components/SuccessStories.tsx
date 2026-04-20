import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Star, BadgeCheck, Award } from 'lucide-react';

const stories = [
  {
    id: 1,
    before: { label: '18% Interest', value: 18, color: 'text-destructive' },
    after: { label: '11% Interest', value: 11, color: 'text-success' },
    savings: '₹2.4L',
    savingsLabel: 'over tenure',
    quote: "I was paying way too much on my existing loan. Credgrow helped me find a better rate in minutes. The switching process was seamless, and now I'm saving ₹20,000 every month!",
    user: {
      name: 'Rajesh Kumar',
      role: 'Software Engineer, Bangalore',
      image: 'https://placehold.co/80x80/7c3aed/ffffff?text=RK',
      verified: true
    },
    product: 'Personal Loan',
    rating: 5
  },
  {
    id: 2,
    before: { label: '₹1,500 annual fee', value: 1500, color: 'text-destructive' },
    after: { label: '₹0 fee + 5% cashback', value: 0, color: 'text-success' },
    savings: '₹8,000',
    savingsLabel: '/year',
    quote: "I never thought I could get a premium credit card with zero fees. The rewards I earn now more than pay for my groceries. Highly recommend Credgrow!",
    user: {
      name: 'Priya Sharma',
      role: 'Marketing Manager, Mumbai',
      image: 'https://placehold.co/80x80/f97316/ffffff?text=PS',
      verified: true
    },
    product: 'Credit Card',
    rating: 5
  },
  {
    id: 3,
    before: { label: 'Loan rejected twice', value: 0, color: 'text-destructive' },
    after: { label: 'Approved ₹5L', value: 500000, color: 'text-success' },
    savings: 'Business',
    savingsLabel: 'started',
    quote: "After two rejections, I had lost hope. Credgrow's team guided me on improving my eligibility and matched me with the right lender. Now my business is thriving!",
    user: {
      name: 'Amit Verma',
      role: 'Business Owner, Pune',
      image: 'https://placehold.co/80x80/059669/ffffff?text=AV',
      verified: true
    },
    product: 'Business Loan',
    rating: 5
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto  px-2 sm:px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real People, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Credgrow transformed their financial journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 ">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gradient-to-br from-card via-secondary/30 to-card border-2 border-border hover:border-primary/30 rounded-3xl shadow-xl hover:shadow-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Product Tag */}
              <span className="absolute top-4 left-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold">
                {story.product}
              </span>

              {/* Before/After Stats */}
              <div className="bg-gradient-to-r from-destructive/10 to-success/10 rounded-2xl p-4 mb-6 mt-8">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xs uppercase text-muted-foreground mb-1">Before</p>
                    <p className={`text-lg md:text-xl font-bold ${story.before.color}`}>
                      {story.before.label}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div className="text-center">
                    <p className="text-xs uppercase text-muted-foreground mb-1">After</p>
                    <p className={`text-lg md:text-xl font-bold ${story.after.color}`}>
                      {story.after.label}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-success/10 text-success px-4 py-2 rounded-lg font-bold text-center">
                  Saved {story.savings} {story.savingsLabel}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-foreground leading-relaxed italic pl-6">
                  "{story.quote}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < story.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                  />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <img 
                  src={story.user.image} 
                  alt={story.user.name}
                  className="w-16 h-16 rounded-full border-4 border-primary/10 shadow-lg"
                  loading="lazy"
                />
                <div>
                  <p className="text-xl font-bold text-foreground flex items-center gap-2">
                    {story.user.name}
                    {story.user.verified && (
                      <BadgeCheck className="w-5 h-5 text-primary" />
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{story.user.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
