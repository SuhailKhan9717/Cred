import { AnimatePresence, motion } from "framer-motion";
import { updatedHeroSlides, type HeroSlide } from "../../data/heroData";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Play, TrendingUp } from "lucide-react";
import { StatBadge } from "./StateBadge";
import { PremiumCard } from "./PremiumCard";
import { AmbassadorShowcase } from "../AmbassadorShowcase";

interface HeroCarouselCopmonentsProps {
    slides: HeroSlide[];
    currentSlide: number;
    isPaused: boolean;
    onPause: () => void;
    onResume: () => void;
    onNavigate: (page: string) => void;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};


const HeroCarouselComponent: React.FC<HeroCarouselCopmonentsProps> = ({
    slides,
    currentSlide,
    isPaused,
    onPause,
    onResume,
    onNavigate
}) => {
    const slide = slides[currentSlide];
    const updateSlides = updatedHeroSlides[currentSlide]
    return (
        <div
            className="relative flex items-center w-full pb-20 pt-10"
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
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                            >
                                {/* new pointer  */}
                                {/* <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" /> */}

                                {/* old  pointer  */}
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                                </span>

                                <span className="text-sm text-white/90">{slide.subtitle}</span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                            >
                                {slide.title.split(' ').map((word, i) => (
                                    <span key={i}>
                                        {i === slide.title.split(' ').length - 1 ? (
                                            <span className="text-cta">
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
                                className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                {slide.description}
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Button
                                    onClick={() => onNavigate(slide.primaryCTA.href)}
                                    size="lg"
                                    className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
                                >
                                    {slide.primaryCTA.text}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    onClick={() => onNavigate(slide.secondaryCTA.href)}
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
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
                                    <p className="text-white/90 font-semibold">Increasing Happy Customers</p>
                                    <p className="text-white/60 text-sm">Trusted by millions</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right - Card Visual */}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id + '-visual'}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Floating achievement badges */}
                                {updateSlides.visualComposition.badges.map((badge, index) => (
                                    <></>
                                    // <FloatingBadge
                                    //     key={badge.id}
                                    //     badge={badge}
                                    //     delay={0.8 + index * 0.15}
                                    // />
                                ))}

                                {/* The Ambassador Showcase */}
                                <AmbassadorShowcase
                                    composition={updateSlides.visualComposition}
                                    isActive={true}
                                />

                                {/* <div className="absolute"> */}
                                    {/* Floating badges */}
                                    {/* <StatBadge
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

                                    <PremiumCard
                                        cardVisual={slide.cardVisual}
                                        celebrity={slide.celebrity}
                                        isActive={true}
                                    /> */}
                                {/* </div> */}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        key={slide.id + '-card'}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex justify-center lg:justify-end hidden "
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

                    {/* <AnimatePresence mode="wait"> */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative hidden lg:hidden "
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
                                className="absolute -bottom-12 -left-20 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 z-10"
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
                    {/* </AnimatePresence> */}
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
    )
}


export default HeroCarouselComponent