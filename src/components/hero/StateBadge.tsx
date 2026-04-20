import { motion } from 'framer-motion';

interface StatBadgeProps {
  value: string;
  label: string;
  delay?: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const StatBadge = ({ value, label, delay = 0, position }: StatBadgeProps) => {
  const positionClasses = {
    'top-left': '-top-4 -left-12',
    'top-right': '-top-8 -right-20',
    'bottom-left': '-bottom-4 -left-8',
    'bottom-right': '-bottom-8 -right-16',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} glass rounded-xl px-4 py-3 backdrop-blur-xl z-10`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.p 
        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {value}
      </motion.p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
};