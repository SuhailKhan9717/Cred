import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const articles = [
  {
    id: 1,
    title: '7 Ways to Improve Your CIBIL Score Fast',
    category: 'Credit Tips',
    excerpt: 'Your credit score is the key to better loan offers. Learn proven strategies to boost your CIBIL score by 50+ points in just 3 months.',
    readTime: '5 min read',
    date: 'Dec 28, 2025',
    author: {
      name: 'Rahul Sharma',
      role: 'Financial Expert',
      initials: 'RS'
    },
    image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Credit+Score',
    categoryColor: 'bg-primary/10 text-primary'
  },
  {
    id: 2,
    title: 'Credit Card vs Personal Loan: Which is Right for You?',
    category: 'Loan Guide',
    excerpt: "Confused between taking a credit card or personal loan? We break down the pros, cons, and ideal use cases for each option.",
    readTime: '7 min read',
    date: 'Dec 25, 2025',
    author: {
      name: 'Priya Mehta',
      role: 'Credit Advisor',
      initials: 'PM'
    },
    image: 'https://placehold.co/600x400/f97316/ffffff?text=Credit+vs+Loan',
    categoryColor: 'bg-cta/10 text-cta'
  },
  {
    id: 3,
    title: 'Understanding Interest Rates: A Complete Guide',
    category: 'Money Management',
    excerpt: 'Decoding interest rates, EMI calculations, and how to negotiate better rates with banks. Everything you need to know in simple terms.',
    readTime: '6 min read',
    date: 'Dec 22, 2025',
    author: {
      name: 'Amit Verma',
      role: 'Loan Specialist',
      initials: 'AV'
    },
    image: 'https://placehold.co/600x400/059669/ffffff?text=Interest+Rates',
    categoryColor: 'bg-success/10 text-success'
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learn & Grow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Financial <span className="text-gradient">Wisdom Hub</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights to help you make smarter decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-lg:gap-2">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gradient-to-br from-card to-secondary/30 border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`absolute top-4 left-4 ${article.categoryColor} backdrop-blur px-4 py-2 rounded-full text-xs font-bold`}>
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {article.author.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{article.author.name}</p>
                      <p className="text-xs text-muted-foreground">{article.author.role}</p>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Explore All Articles
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
