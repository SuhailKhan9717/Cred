import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { bankLogos } from '../data/mockData';
// import WavesBackground from './utils/WavesBackground';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  const [rotateX, setRotateX] = useState(5);
  const [rotateY, setRotateY] = useState(-12);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(5);
    setRotateY(-12);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background older */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-900 hero-pattern" /> */}

      {/* background red version  */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-red-900 hero-pattern" />


      {/* New Background -v1 */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div> */}

      {/* Background -v2 */}

      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div> */}

      {/* Background -v red version  */}

      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-rose-900">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-24 items-center "
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm text-white/90">Trusted by 50,000+ Indians</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              Unlock Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                Financial
              </span>{' '}
              Potential
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Compare and apply for credit cards & personal loans from India's top banks.
              Get personalized recommendations in seconds.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => onNavigate('creditCards')}
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
              >
                Explore Credit Cards
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => onNavigate('loans')}
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                Check Loan Eligibility
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: Shield, label: '100% Secure' },
                { icon: TrendingUp, label: 'Best Rates' },
                { icon: Award, label: 'Instant Approval' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* <motion.div
            variants={fadeInUp}
            className="relative lg:block hidden "
          >

            <div className="relative max-w-[400px] hidden" style={{ perspective: '2000px' }}>

              <motion.div
                animate={{ y: [50, -50, -50, 100] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-br from-purple-400/40 via-pink-300/30 to-purple-500/40 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_35px_60px_-15px_rgba(147,51,234,0.5)] border border-white/30 overflow-hidden transition-transform duration-500 ease-out rotate-180!"
                style={{
                  transform: 'rotateY(-12deg) rotateX(12deg)',
                  transformStyle: 'preserve-3d', // Step 2: Preserve 3D
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />


                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-2xl" />


                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">

                    <div className="relative w-14 h-10 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 rounded-lg shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                    </div>
                    <span className="text-sm font-semibold text-white/70 tracking-widest">PLATINUM</span>
                  </div>


                  <div className="space-y-1 mb-8">
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-1">
                          {[...Array(4)].map((_, j) => (
                            <div
                              key={j}
                              className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/40 rounded-full"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>


                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
                        CARD HOLDER
                      </p>
                      <p className="text-lg font-bold text-white">
                        XXX-XXX
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
                        VALID THRU
                      </p>
                      <p className="text-base font-bold text-white">12/28</p>
                    </div>
                  </div>
                </div>


                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-16 -right-14 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Approved!</p>
                    <p className="text-xs text-white/70">₹5L Credit Limit</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-12 -left-20 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 z-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">10.5% p.a.</p>
                    <p className="text-xs text-white/70">Lowest Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div> */}

          {/* Visual Card */}

          <motion.div
            variants={fadeInUp}
            className="relative hidden lg:block "
          >
            <div className="relative perspective-2000 max-w-[400px] ml-24">
              {/* Main Card with Glassmorphism */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-br from-red-400/40 via-orange-300/30 to-red-500/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden"
                style={{
                  transform: 'rotateY(-12deg) rotateX(12deg)',
                }}
              >
                {/* Glossy Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

                {/* Decorative Gradient Orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-red-400/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-400/20 rounded-full blur-2xl" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {/* Chip with metallic gradient */}
                    <div className="relative w-14 h-10 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 rounded-lg shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                    </div>
                    <span className="text-sm font-semibold text-white/70 tracking-widest">PLATINUM</span>
                  </div>

                  {/* Card Number Dots with glassmorphism */}
                  <div className="space-y-1 mb-8">
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-1">
                          {[...Array(4)].map((_, j) => (
                            <div
                              key={j}
                              className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/40 rounded-full"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Holder Info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
                        CARD HOLDER
                      </p>
                      <p className="text-lg font-bold text-white">
                        XXX-XXX
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
                        VALID THRU
                      </p>
                      <p className="text-base font-bold text-white">12/28</p>
                    </div>
                  </div>
                </div>

                {/* Holographic effect (optional) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
              </motion.div>

              {/* Floating Stats - Also with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-16 -right-14 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 "
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Approved!</p>
                    <p className="text-xs text-white/70">₹5L Credit Limit</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-12 -left-20 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 z-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">10.5% p.a.</p>
                    <p className="text-xs text-white/70">Lowest Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>




        </motion.div>

        {/* Bank Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-center text-sm text-white/60 mb-6">Partnered with India's Leading Banks</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
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
      </div>
    </section>
  );
};

export default Hero;

// Purple version optimized 

//  <motion.div
//         variants={fadeInUp}
//         className="relative hidden lg:block "
//       >
//         <div className="relative perspective-2000 max-w-[400px] ml-24">
//           {/* Main Card with Glassmorphism */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10 bg-gradient-to-br from-purple-400/40 via-pink-300/30 to-purple-500/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden"
//             style={{
//               transform: 'rotateY(-12deg) rotateX(12deg)',
//             }}
//           >
//             {/* Glossy Overlay Effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

//             {/* Decorative Gradient Orbs */}
//             <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-3xl" />
//             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-2xl" />

//             {/* Card Content */}
//             <div className="relative z-10">
//               <div className="flex items-center justify-between mb-6">
//                 {/* Chip with metallic gradient */}
//                 <div className="relative w-14 h-10 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 rounded-lg shadow-lg overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
//                 </div>
//                 <span className="text-sm font-semibold text-white/70 tracking-widest">PLATINUM</span>
//               </div>

//               {/* Card Number Dots with glassmorphism */}
//               <div className="space-y-1 mb-8">
//                 <div className="flex gap-2">
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className="flex gap-1">
//                       {[...Array(4)].map((_, j) => (
//                         <div
//                           key={j}
//                           className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/40 rounded-full"
//                         />
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Card Holder Info */}
//               <div className="flex justify-between items-end">
//                 <div>
//                   <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
//                     CARD HOLDER
//                   </p>
//                   <p className="text-lg font-bold text-white">
//                     XXX-XXX
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xs text-white/60 tracking-widest font-semibold uppercase mb-1">
//                     VALID THRU
//                   </p>
//                   <p className="text-base font-bold text-white">12/28</p>
//                 </div>
//               </div>
//             </div>

//             {/* Holographic effect (optional) */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />
//           </motion.div>

//           {/* Floating Stats - Also with glassmorphism */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5 }}
//             className="absolute -top-16 -right-14 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 "
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
//                 <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-white">Approved!</p>
//                 <p className="text-xs text-white/70">₹5L Credit Limit</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.7 }}
//             className="absolute -bottom-12 -left-20 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 z-50"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
//                 <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-white">10.5% p.a.</p>
//                 <p className="text-xs text-white/70">Lowest Rate</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>


//  <motion.div
//         variants={fadeInUp}
//         className="relative hidden lg:block"
//       >
//         <div className="relative">
//           {/* Main Card */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10 bg-gradient-to-br from-card to-secondary rounded-3xl p-8 shadow-2xl border border-white/10"
//           >
//             <div className="flex items-center justify-between mb-6">
//               <div className="w-14 h-10 bg-gradient-to-r from-accent to-cta rounded-lg" />
//               <span className="text-sm font-semibold text-muted-foreground">PLATINUM</span>
//             </div>
//             <div className="space-y-1 mb-8">
//               <div className="h-3 w-48 bg-muted rounded" />
//               <div className="h-3 w-32 bg-muted rounded" />
//             </div>
//             <div className="flex justify-between items-end">
//               <div>
//                 <p className="text-xs text-muted-foreground">CARD HOLDER</p>
//                 <p className="font-semibold text-foreground">YOUR NAME</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xs text-muted-foreground">VALID THRU</p>
//                 <p className="font-semibold text-foreground">12/28</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Floating Stats */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5 }}
//             className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
//                 <CheckCircle className="w-5 h-5 text-success" aria-hidden="true" />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-foreground">Approved!</p>
//                 <p className="text-xs text-muted-foreground">₹5L Credit Limit</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.7 }}
//             className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
//                 <TrendingUp className="w-5 h-5 text-accent" aria-hidden="true" />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-foreground">10.5% p.a.</p>
//                 <p className="text-xs text-muted-foreground">Lowest Rate</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>