import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';
import { asset } from '../utils/asset';

const SCENES = [
   {
      id: 'beach',
      src: asset('/hero-beach.jpg'),
      alt: 'Luxury Beach Wedding by Inspiral Events',
      panFrom: '0%',
      panTo: '-5%',
   },
   {
      id: 'hall',
      src: asset('/hero-hall.jpg'),
      alt: 'Grand Banquet Hall by Inspiral Events',
      panFrom: '-5%',
      panTo: '0%',
   },
   {
      id: 'party',
      src: asset('/hero-party.jpg'),
      alt: 'Night Gala & Party Celebration by Inspiral Events',
      panFrom: '0%',
      panTo: '-5%',
   },
];

export default function Hero() {
   const heroRef = useRef(null);
   const isInView = useInView(heroRef, { margin: '0px' });
   const [currentScene, setCurrentScene] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // Automatic slideshow: strictly pauses when user scrolls past Hero section or switches tabs
   useEffect(() => {
      if (!isInView) return;
      const timer = setInterval(() => {
         setCurrentScene((prev) => (prev + 1) % SCENES.length);
      }, 6500);
      return () => clearInterval(timer);
   }, [isInView]);

   const handleScrollDown = () => {
      window.scrollTo({
         top: window.innerHeight,
         behavior: 'smooth',
      });
   };

   return (
      <section
         ref={heroRef}
         className="relative w-full h-screen min-h-[660px] flex flex-col justify-between overflow-hidden text-ivory"
      >
         {/* =========================================================================
          BACKGROUND VIDEO-SYNC SLIDESHOW (Strictly paused & hidden when scrolled away)
          ========================================================================= */}
         <div
            className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300"
            style={{
               visibility: isInView ? 'visible' : 'hidden',
               willChange: isInView ? 'opacity, transform' : 'auto',
            }}
         >
            {isInView && (
               <AnimatePresence initial={false}>
                  <motion.img
                     key={currentScene}
                     src={SCENES[currentScene].src}
                     alt={SCENES[currentScene].alt}
                     className="absolute inset-y-0 -left-[5%] w-[110%] h-full object-cover object-center max-w-none"
                     initial={isMobile ? { opacity: 0 } : { opacity: 0, x: SCENES[currentScene].panFrom }}
                     animate={isMobile ? { opacity: 1 } : { opacity: 1, x: SCENES[currentScene].panTo }}
                     exit={{ opacity: 0 }}
                     transition={{
                        opacity: { duration: 1.4, ease: 'easeInOut' },
                        x: isMobile ? undefined : { duration: 7.2, ease: 'linear' },
                     }}
                  />
               </AnimatePresence>
            )}

            {/* Ambient Warm Golden & Botanical Emerald Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/80" />
            <div className="absolute inset-0 bg-radial from-transparent via-emerald-deep/25 to-black/75 mix-blend-multiply" />
         </div>

         {/* Spacer for Top Navbar */}
         <div className="h-16 w-full pointer-events-none" />

         {/* =========================================================================
          CENTER HERO CONTENT (Permanent Text: Stable, Elegant, No Mid-Transition Changes)
          ========================================================================= */}
         <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-3.5 sm:px-6 text-center max-w-5xl mx-auto my-auto">
            {/* Main Headline (Prominent, High-Fashion Editorial Presence on Small Screens) */}
            <div className="space-y-4">
               <h2 className="font-serif italic font-normal text-[2.65rem] sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-md leading-[1.08]">
                  Welcome to Inspiral Events
               </h2>
            </div>

            {/* Single Refined Framed Tagline */}
            <div className="mt-6 sm:mt-10 max-w-2xl">
               <div className="border border-white/40 px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full backdrop-blur-xs">
                  <p className="text-[11px] sm:text-xs md:text-sm font-sans font-light tracking-[0.16em] sm:tracking-[0.2em] text-ivory/95 uppercase">
                     Nigeria&apos;s Premier Luxury Wedding &amp; Event Management Atelier
                  </p>
               </div>
            </div>

            {/* Action Buttons using Hardware-Accelerated CSS Glass */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
               <button
                  onClick={(e) => {
                     triggerFloralBurst(e);
                     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-semibold text-white bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-gold-champagne/80 cursor-pointer shadow-xl transition-all duration-300 active:scale-95"
               >
                  Explore Services
               </button>

               <button
                  onClick={(e) => {
                     triggerFloralBurst(e);
                     document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#0A2318] bg-gold-radiant hover:bg-gold-champagne cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(229,184,66,0.4)] transition-all duration-300 active:scale-95"
               >
                  Plan Your Event
               </button>
            </div>
         </div>

         {/* =========================================================================
          BOTTOM SCROLL DOWN INDICATOR (Hardware-Accelerated CSS Glass)
          ========================================================================= */}
         <div className="relative z-20 pb-8 px-6 flex flex-col items-center justify-center">
            <button
               onClick={handleScrollDown}
               className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
               aria-label="Scroll to discover"
            >
               <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-ivory/70 group-hover:text-gold-radiant transition-colors font-light">
                  Scroll
               </span>

               <motion.div
                  animate={isInView ? { y: [0, 6, 0] } : { y: 0 }}
                  transition={{
                     repeat: isInView ? Infinity : 0,
                     duration: 2.2,
                     ease: 'easeInOut',
                  }}
               >
                  <div className="w-9 h-9 aspect-square shrink-0 rounded-full flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-md border border-white/25 group-hover:border-gold-champagne/60 transition-colors">
                     <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-ivory/90 group-hover:text-gold-radiant transition-colors"
                     >
                        <path
                           d="M7 2V12M7 12L3 8M7 12L11 8"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
               </motion.div>
            </button>
         </div>
      </section>
   );
}
