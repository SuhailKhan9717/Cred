import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Wifi, CreditCard as CardIcon } from 'lucide-react';
import type { CardVisual, CelebrityEndorsement } from '../../data/heroData';

interface PremiumCardProps {
  cardVisual: CardVisual;
  celebrity: CelebrityEndorsement;
  isActive?: boolean;
}

export const PremiumCard = ({ cardVisual, celebrity, isActive = true }: PremiumCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

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

  return (
    <div className="absolute perspective-1000 -right-60 top-52 scale-75">
      {/* Main card container with 3D effect */}
      <motion.div
        className="relative preserve-3d cursor-pointer"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* The Premium Card */}
        <motion.div
          className={`relative w-[320px] sm:w-[380px] h-[220px] sm:h-[240px] rounded-2xl overflow-hidden shadow-2xl`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Card gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cardVisual.gradient}`} />
          
          {/* Holographic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5" />
          
          {/* Subtle pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.05) 10px,
                rgba(255,255,255,0.05) 20px
              )`,
            }}
          />

          {/* Card content */}
          <div className="relative h-full p-6 flex flex-col justify-between text-white">
            {/* Top row - Logo and contactless */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-lg font-bold tracking-wider">{cardVisual.type.toUpperCase()}</span>
                <p className="text-xs text-white/70 mt-0.5">Credit Card</p>
              </div>
              <Wifi className="w-6 h-6 text-white/80 rotate-90" />
            </div>

            {/* Chip */}
            <div className="flex items-center gap-4">
              <div 
                className={`w-12 h-9 rounded-md ${
                  cardVisual.chipColor === 'gold' 
                    ? 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600' 
                    : 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500'
                }`}
                style={{
                  backgroundImage: cardVisual.chipColor === 'gold' 
                    ? 'linear-gradient(135deg, #D4AF37 0%, #FBF5B7 25%, #D4AF37 50%, #B08D57 100%)' 
                    : undefined,
                }}
              >
                <div className="w-full h-full flex flex-col justify-center gap-0.5 p-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-[2px] bg-white/30 rounded-full" />
                  ))}
                </div>
              </div>
              <CardIcon className="w-8 h-8 text-white/40" />
            </div>

            {/* Card number */}
            <div className="flex gap-4 text-lg tracking-[0.2em] font-mono">
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span>4589</span>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">Card Holder</p>
                <p className="text-sm font-medium tracking-wide">PREMIUM MEMBER</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/60 uppercase tracking-wider">Valid Thru</p>
                <p className="text-sm font-medium">12/28</p>
              </div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{ translateX: isActive ? ['100%', '-100%'] : '-100%' }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
          />
        </motion.div>

        {/* Celebrity endorsement panel - floating beside card */}
        <motion.div
          className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 glass rounded-2xl p-3 sm:p-4 w-[140px] sm:w-[160px] hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative mb-3">
            <img
              src={celebrity.image}
              alt={celebrity.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain border-2 border-border mx-auto"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground">✓</span>
            </div>
          </div>
          <p className="text-foreground text-xs font-semibold text-center">{celebrity.name}</p>
          <p className="text-muted-foreground text-[10px] text-center mb-2">{celebrity.title}</p>
          <p className="text-muted-foreground text-[10px] italic text-center leading-tight">
            {celebrity.tagline}
          </p>
        </motion.div>
      </motion.div>

      {/* Glow effect under card */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-primary/30 to-transparent blur-2xl" />
    </div>
  );
};