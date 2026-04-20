import { motion } from 'framer-motion';
import { bankLogos } from '../../data/mockData';

const banks = [
  { name: 'HDFC Bank' },
  { name: 'ICICI Bank' },
  { name: 'SBI' },
  { name: 'Axis Bank' },
  { name: 'Kotak' },
  { name: 'Yes Bank' },
];

export const BankLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="py-8 border-t border-border/50"
    >
      <p className="text-center text-muted-foreground text-sm mb-6 uppercase tracking-wider">
        Partnered with India's Leading Banks
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        {bankLogos.map((bank, i) => (
          <motion.img
            key={bank.name}
            src={bank.url}
            alt={`${bank.name} logo`}
            className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.9 + i * 0.05 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
    </motion.div>
  );
};