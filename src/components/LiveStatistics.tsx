import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Users, TrendingUp, DollarSign, CreditCard, CheckCircle, MapPin, Clock } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const activities = [

  { id: 1, name: 'Rajesh M.', location: 'Delhi', action: 'got approved for ₹5L personal loan', type: 'approval', time: 'Just now' },
  { id: 2, name: 'Priya K.', location: 'Bangalore', action: 'applied for SBI SimplyCLICK Card', type: 'apply', time: '1 min ago' },
  { id: 3, name: 'Arjun T.', location: 'Mumbai', action: 'is checking loan eligibility', type: 'check', time: '2 mins ago' },
  { id: 4, name: 'Sneha P.', location: 'Pune', action: 'got HDFC Millennia Card', type: 'approval', time: '3 mins ago' },
  { id: 5, name: 'Vikram R.', location: 'Hyderabad', action: 'compared 8 credit cards', type: 'compare', time: '5 mins ago' },
  { id: 6, name: 'Meera S.', location: 'Chennai', action: 'applied for ICICI Personal Loan', type: 'apply', time: '6 mins ago' },
  { id: 7, name: 'Amit N.', location: 'Noida', action: 'got approved for Axis ACE Credit Card', type: 'approval', time: '8 mins ago' },
  { id: 8, name: 'Kavita L.', location: 'Ahmedabad', action: 'checked EMI for ₹10L home loan', type: 'check', time: '10 mins ago' },
  { id: 9, name: 'Rohit D.', location: 'Gurgaon', action: 'compared personal loan interest rates', type: 'compare', time: '12 mins ago' },
  { id: 10, name: 'Neha B.', location: 'Jaipur', action: 'applied for IDFC FIRST Select Credit Card', type: 'apply', time: '15 mins ago' },
];

const StatCard: React.FC<{ 
  icon: React.ElementType; 
  value: number; 
  suffix: string; 
  label: string; 
  growth: string;
  delay: number;
  enabled: boolean;
}> = ({ icon: Icon, value, suffix, label, growth, delay, enabled }) => {
  const { count, isComplete } = useCountUp({ 
    end: value, 
    duration: 2000, 
    delay,
    enabled 
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000 }}
      className="mb-8 last:mb-0"
    >
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-12 h-12 p-3 rounded-2xl mb-4 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-muted-foreground font-medium text-lg mt-1">{label}</div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 1 : 0 }}
        className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm mt-2"
      >
        ↑ {growth}
      </motion.span>
    </motion.div>
  );
};

const ActivityItem: React.FC<{ activity: typeof activities[0]; isNew?: boolean }> = ({ activity, isNew }) => {
  const initials = activity.name.split(' ').map(n => n[0]).join('');
  
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: -20, height: 0 } : { opacity: 1, y: 0, height: 'auto' }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      exit={{ opacity: 0, y: 20, height: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-6 last:mb-0"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate">{activity.name}</p>
        <p className="text-sm text-muted-foreground truncate">{activity.action}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {activity.location}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {activity.time}
          </span>
        </div>
      </div>
      <div className="shrink-0">
        {activity.type === 'approval' && (
          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
        )}
        {activity.type === 'apply' && (
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const LiveStatistics: React.FC = () => {
  const [visibleActivities, setVisibleActivities] = useState(activities.slice(0, 7));
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setVisibleActivities(prev => {
        const newActivity = {
          ...activities[Math.floor(Math.random() * activities.length)],
          id: Date.now(),
          time: 'Just now'
        };
        return [newActivity, ...prev.slice(0, 6)];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden! ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto  px-2 sm:px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real-Time <span className="text-gradient">Statistics</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary/50 to-background border-2 border-primary/10 rounded-3xl p-10 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-2 text-foreground">Real-Time Impact</h3>
            <p className="text-muted-foreground mb-8">See what's happening right now</p>
            
            <StatCard 
              icon={Users} 
              value={50000} 
              suffix="+" 
              label="Happy Customers" 
              growth="23% this month"
              delay={0}
              enabled={isInView}
            />
            <StatCard 
              icon={DollarSign} 
              value={500} 
              suffix="Cr+" 
              label="Loans Processed" 
              growth="18% this month"
              delay={400}
              enabled={isInView}
            />
            <StatCard 
              icon={TrendingUp} 
              value={4.8} 
              suffix="★" 
              label="Average Rating" 
              growth="0.3 this month"
              delay={800}
              enabled={isInView}
            />
          </motion.div>

          {/* Right Column - Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-lg border border-border rounded-3xl p-8 shadow-lg overflow-y-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-foreground">Recent Activity</h3>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
            </div>
            
            <div className=" overflow-hidden scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2">
              <AnimatePresence mode="popLayout">
                {visibleActivities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;
