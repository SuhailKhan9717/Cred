import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Award, CheckCircle, Play } from 'lucide-react';
import { Button } from './ui/button';
import { bankLogos } from '../data/mockData';
import { HeroCarousel } from './hero/HeroCarousel';
import { ServiceToggle } from './hero/ServiceToggle';
import { ServiceCards } from './hero/ServiceCards';
import { BankLogos } from './hero/BankLogos';
import { heroSlides, services, type HeroSlide } from '../data/heroData';
import HeroCarouselComponent from './hero/HeroCarouselComponent';
import ComparisonTable from './ComparisonTable';
import PopularOfferTable from './hero/ComparissionTable';
// import WavesBackground from './utils/WavesBackground';

interface HeroProps {
    onNavigate: (page: string) => void;
}


const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};



const UpdateHero: React.FC<HeroProps> = ({ onNavigate }) => {


    // Carousel state
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



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



    return (
        <section className="relative flex items-center overflow-hidden w-full">

            {/* background red version  */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-red-900 hero-pattern" /> */}

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

            <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-10 ">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className=" items-center w-full"
                >

                    <HeroCarouselComponent
                        onNavigate={onNavigate}
                        slides={heroSlides}
                        currentSlide={currentSlide}
                        isPaused={isPaused}
                        onPause={handlePause}
                        onResume={handleResume}
                    />
                    {/* Hero Carousel */}
                    {/* <HeroCarousel
                            slides={heroSlides}
                            currentSlide={currentSlide}
                            isPaused={isPaused}
                            onPause={handlePause}
                            onResume={handleResume}
                        /> */}


                </motion.div>


            </div>
        </section>
    );
};

export default UpdateHero;