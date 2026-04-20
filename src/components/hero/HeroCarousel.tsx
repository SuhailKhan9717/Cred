import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../../components/ui/button';
import type { HeroSlide } from '../../data/heroData';
import { PremiumCard } from './PremiumCard';
import { StatBadge } from './StateBadge';

interface HeroCarouselProps {
  slides: HeroSlide[];
  currentSlide: number;
  isPaused: boolean;
  onPause: () => void;
  onResume: () => void;
}

export const HeroCarousel = ({ 
  slides, 
  currentSlide, 
  isPaused,
  onPause,
  onResume 
}: HeroCarouselProps) => {
  const slide = slides[currentSlide];

  return (
    <div 
      className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              {/* Subtitle badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">{slide.subtitle}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                {slide.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === slide.title.split(' ').length - 1 ? (
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                        {word}
                      </span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg shadow-primary/30"
                >
                  {slide.primaryCTA.text}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group glass border-border text-foreground hover:bg-muted/50 text-lg px-8 py-6 rounded-xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  {slide.secondaryCTA.text}
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground text-xs font-semibold"
                    >
                      {['VK', 'DP', 'MS', '+'][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold">1M+ Happy Customers</p>
                  <p className="text-muted-foreground text-sm">Trusted by millions</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right - Card Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-card'}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Floating badges */}
                <StatBadge
                  value={slide.stats.badge1.value}
                  label={slide.stats.badge1.label}
                  position="top-left"
                  delay={0.8}
                />
                <StatBadge
                  value={slide.stats.badge2.value}
                  label={slide.stats.badge2.label}
                  position="bottom-right"
                  delay={1}
                />

                {/* The premium card with celebrity */}
                <PremiumCard
                  cardVisual={slide.cardVisual}
                  celebrity={slide.celebrity}
                  isActive={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="relative h-1 w-12 rounded-full bg-muted overflow-hidden"
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? undefined : '100%' }}
                transition={{ duration: 7, ease: 'linear' }}
              />
            )}
            {index < currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};