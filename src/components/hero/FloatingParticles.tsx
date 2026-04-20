import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingParticlesProps {
  count?: number;
  activeService?: string;
}

export const FloatingParticles = ({ count = 30, activeService }: FloatingParticlesProps) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [count]);

  // Color shifts based on active service
  const getParticleColor = (index: number) => {
    const colors = {
      popular: ['#EF4444', '#FF6B35'],
      'credit-cards': ['#EF4444', '#64748B'],
      insurance: ['#10B981', '#14B8A6'],
      loans: ['#8B5CF6', '#A855F7'],
      accounts: ['#EF4444', '#FF6B35'],
      deposits: ['#8B5CF6', '#6366F1'],
      investments: ['#10B981', '#22C55E'],
      offers: ['#F59E0B', '#EF4444'],
    };
    const palette = colors[activeService as keyof typeof colors] || colors.popular;
    return palette[index % 2];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: getParticleColor(particle.id),
            opacity: particle.opacity,
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{
            y: '-100vh',
            rotate: 720,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 84% 60% / 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(14 100% 60% / 0.12) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};