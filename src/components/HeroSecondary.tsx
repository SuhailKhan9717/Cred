import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles } from './hero/FloatingParticles.tsx';
import { HeroCarousel } from './hero/HeroCarousel.tsx';
import { ServiceToggle } from './hero/ServiceToggle.tsx';
import { ServiceCards } from './hero/ServiceCards.tsx';
import { BankLogos } from './hero/BankLogos.tsx';
import { heroSlides, services } from '../data/heroData.ts';

export const HeroSecondary = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Service toggle state
  const [activeService, setActiveService] = useState('popular');

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePause = useCallback(() => setIsPaused(true), []);
  const handleResume = useCallback(() => setIsPaused(false), []);

  const handleServiceChange = useCallback((serviceId: string) => {
    setActiveService(serviceId);
  }, []);

  // Get current service offerings
  const currentService = services.find(s => s.id === activeService);
  const offerings = currentService?.offerings || [];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient - adapts to theme */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-red-900 hero-pattern" /> */}
      <div 
        className="absolute inset-0 dark:opacity-100 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 0%, hsl(var(--accent) / 0.2) 0%, transparent 40%),
            radial-gradient(ellipse 50% 30% at 0% 100%, hsl(var(--primary) / 0.15) 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles count={40} activeService={activeService} />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header spacer */}
        <div className="h-20" />

        {/* Hero Carousel */}
        <HeroCarousel
          slides={heroSlides}
          currentSlide={currentSlide}
          isPaused={isPaused}
          onPause={handlePause}
          onResume={handleResume}
        />

        {/* Service Toggle */}
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <ServiceToggle
            services={services}
            activeService={activeService}
            onServiceChange={handleServiceChange}
          />
        </motion.div>

        {/* Service Cards */}
        <div className="container mx-auto py-4">
          {/* <ServiceCards
            offerings={offerings}
            activeServiceId={activeService}
          /> */}
        </div>

        {/* Bank logos */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BankLogos />
        </div>
      </div>
    </section>
  );
};