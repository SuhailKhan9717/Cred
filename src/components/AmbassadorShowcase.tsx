import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Wifi, CreditCard as CardIcon, CheckCircle2 } from 'lucide-react';
import type { VisualComposition } from '../data/heroData';

interface AmbassadorShowcaseProps {
  composition: VisualComposition;
  isActive?: boolean;
}

export const AmbassadorShowcase = ({ composition, isActive = true }: AmbassadorShowcaseProps) => {
  const { ambassador, card } = composition;
  
  // 3D tilt effect for the card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Frame accent colors
  const accentColors = {
    red: 'from-primary/30 to-accent/30',
    gold: 'from-amber-500/30 to-yellow-400/30',
    emerald: 'from-emerald-500/30 to-teal-400/30',
  };

  const accentBorder = {
    red: 'border-primary/20',
    gold: 'border-amber-400/20',
    emerald: 'border-emerald-400/20',
  };

  return (
    <div className="relative ">
      {/* Main glass frame container */}
      <motion.div
        className="relative w-full max-w-[480px] sm:max-w-[520px] lg:w-[400px] "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Outer glow effect */}
        <div 
          className={`absolute -inset-4 rounded-[32px] bg-gradient-to-br ${accentColors[ambassador.frameAccent]} blur-2xl opacity-60`}
        />
        
        {/* Glass frame */}
        <motion.div 
          className={`relative overflow-hidden rounded-3xl border ${accentBorder[ambassador.frameAccent]} bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150`}
          style={{
            boxShadow: `
              0 25px 50px -12px rgba(239, 68, 68, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
            `,
          }}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Ambassador image section */}
          <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
            {/* Gradient overlay on image */}
            <div 
              className={`absolute inset-0 bg-gradient-to-b z-10`}
            />
            
            {/* Vignette effect */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
              }}
            />
            
            {/* Ambassador image */}
            <motion.img
              src={'./update.png'}
              alt={ambassador.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-top "
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              style={{
                filter: 'saturate(1.1) contrast(1.05)',
              }}
            />

            {/* Hidden Floating credit card */}
   
          </div>

          {/* Endorsement quote section */}
          <motion.div 
            className="relative border-t border-white/10 bg-black/20 dark:bg-black/30 backdrop-blur-md p-4 sm:p-6 hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {/* Quote icon */}
            <div className="absolute top-4 left-4 text-4xl text-white/10 font-serif leading-none">"</div>
            
            <div className="relative z-10 ">
              {/* Quote text */}
              <p className="text-white/90 dark:text-white/85 text-sm sm:text-base italic leading-relaxed mb-3 pl-4 opacity-0">
                "{ambassador.quote.text}"
              </p>
              
              {/* Attribution */}
              <div className="flex items-center gap-3 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    — {'Rajat Gupta'}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
              </div>
              {/* <p className="text-white/60 text-xs sm:text-sm mt-1 pl-4">
                {ambassador.quote.role}
              </p> */}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom glow */}
      <div 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl opacity-40"
        style={{
          background: `linear-gradient(to top, hsl(var(--primary) / 0.4), transparent)`,
        }}
      />
    </div>
  );
};
