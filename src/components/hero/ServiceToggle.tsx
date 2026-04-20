import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { Service } from '../../data/heroData';

interface ServiceToggleProps {
  services: Service[];
  activeService: string;
  onServiceChange: (serviceId: string) => void;
}

// Dynamic icon component
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = Icons[name as keyof typeof Icons] as React.FC<{ className?: string }>;
  return IconComponent ? <IconComponent className={className} /> : null;
};

export const ServiceToggle = ({ services, activeService, onServiceChange }: ServiceToggleProps) => {
  const activeIndex = services.findIndex(s => s.id === activeService);

  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {/* Glass container */}
      <div className="glass-strong rounded-2xl p-1.5 sm:p-2">
        {/* Scrollable container for mobile */}
        <div className="flex overflow-x-auto hide-scrollbar justify-between items-center sm:gap-2 pb-1">
          {services.map((service, index) => {
            const isActive = service.id === activeService;
            
            return (
              <motion.button
                key={service.id}
                onClick={() => onServiceChange(service.id)}
                className={`
                  relative flex items-center justify-center gap-2 sm:px-5 py-2.5 sm:py-3 rounded-xl
                    w-full 
                  ${isActive 
                    ? 'text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground '
                  }
                `}
                // whileHover={{ scale: isActive ? 1 : 1.02 }}
                // whileTap={{ scale: 0.98 }}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                    layoutId="activeServiceBg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {/* Glow effect */}
                    {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent blur-lg opacity-50" /> */}
                  </motion.div>
                )}

                {/* Content */}
                <motion.div 
                  className="relative z-10 flex items-center gap-2 cursor-pointer  "
                  animate={{ x: isActive ? 0 : 0 }}
                >
                  <DynamicIcon 
                    name={service.icon} 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`} 
                  />
                  <span className="text-sm sm:text-base font-medium text-nowrap">{service.name}</span>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Progress indicator line */}
      <div className="mt-3 h-0.5 bg-muted rounded-full overflow-hidden hidden sm:block">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: '12.5%', x: '10%' }}
          animate={{ 
            width: `${100 / services.length}%`,
            x: `${activeIndex * 100}%`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};
