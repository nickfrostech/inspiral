import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';

const TESTIMONIALS = [
   {
      id: 1,
      quote:
         'Managing over 700 guests without a single gatecrasher was something we thought was impossible in Lagos. Inspiral made our wedding completely stress-free. Everything started right on time.',
      name: 'Tunde & Folake Adeleke',
      event: 'Traditional & White Wedding, Victoria Island, Lagos',
      avatar: '/avatar-1.jpg',
      rating: 5,
   },
   {
      id: 2,
      quote:
         'Handling diplomats, governors, and partners requires serious order. Inspiral managed protocol, VIP security, and our stage setup with total class.',
      name: 'Dr. Amina Bello',
      event: 'Annual Foundation Gala, Transcorp Hilton, Abuja',
      avatar: '/avatar-2.jpg',
      rating: 5,
   },
   {
      id: 3,
      quote:
         'The decor, lighting, and sound completely transformed the venue. My guests are still talking about how well-organized the party was. Worth every kobo.',
      name: 'Chief Emeka Okoli',
      event: '50th Birthday Celebration, Eko Hotel, Lagos',
      avatar: '/avatar-3.jpg',
      rating: 5,
   },
   {
      id: 4,
      quote:
         'Boat logistics, beach setup, power backup, and food service were coordinated without a single issue. Inspiral handled our entire weekend flawlessly.',
      name: 'Osas & Beverly Ighodaro',
      event: 'Destination Beach Wedding, Ilashe, Lagos',
      avatar: '/avatar-4.jpg',
      rating: 5,
   },
];

export default function Testimonials() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState(1);

   const paginate = useCallback((newDirection) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
         const next = prev + newDirection;
         if (next < 0) return TESTIMONIALS.length - 1;
         if (next >= TESTIMONIALS.length) return 0;
         return next;
      });
   }, []);

   // Auto-swap testimonials every 6.5 seconds
   useEffect(() => {
      const timer = setInterval(() => {
         paginate(1);
      }, 6500);
      return () => clearInterval(timer);
   }, [paginate]);

   const current = TESTIMONIALS[currentIndex];

   return (
      <section
         id="testimonials"
         className="relative w-full bg-[#0A2318] text-[#FAF9F5] pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-24"
      >
         {/* =========================================================================
         TOP ARCHITECTURAL CUSTOM SCULPTED CUT
         Gracefully ends the white section into the emerald section with champagne gold seam
         ========================================================================= */}
         <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none z-20">
            <svg
               viewBox="0 0 1440 90"
               fill="none"
               preserveAspectRatio="none"
               className="w-full h-12 sm:h-16 md:h-24 block text-[#0A2318]"
            >
               {/* Custom Sculpted Architectural Curve */}
               <path
                  d="M0,0 C380,85 720,15 1080,68 C1260,92 1380,75 1440,82 L1440,90 L0,90 Z"
                  fill="currentColor"
               />
               {/* Champagne Gold Hairline Seam */}
               <path
                  d="M0,0 C380,85 720,15 1080,68 C1260,92 1380,75 1440,82"
                  stroke="rgba(212, 175, 55, 0.45)"
                  strokeWidth="1.5"
               />
            </svg>
         </div>

         <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-12 relative z-10">
            {/* =========================================================================
            1. HEADING & SUBHEADING
            ========================================================================= */}
            <div className="text-center space-y-1.5 sm:space-y-2 mb-5 sm:mb-8">
               <h2 className="font-serif uppercase tracking-[0.16em] text-2xl sm:text-3xl md:text-4xl text-[#FAF9F5] font-normal">
                  Testimonials
               </h2>
               <p className="font-sans text-xs sm:text-sm text-[#95A599] font-light max-w-lg mx-auto">
                  Words of distinction from those who trusted us with their defining moments.
               </p>
            </div>

            {/* =========================================================================
            2. THE TESTIMONIAL BOX
            ========================================================================= */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#0E291E]/75 border border-[#8A7332]/30 p-4 sm:p-7 md:p-10 shadow-2xl overflow-hidden backdrop-blur-md">
               {/* Soft Ambient Inner Glow */}
               <div className="absolute top-0 right-0 w-72 h-72 bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />

               <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                     key={current.id}
                     initial={{ opacity: 0, y: 12 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -12 }}
                     transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                     {/* Star Rating of the current testimonial on the card */}
                     <div className="flex items-center gap-1.5 text-gold-radiant mb-2.5 sm:mb-4">
                        {[...Array(current.rating)].map((_, i) => (
                           <svg
                              key={i}
                              className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current filter drop-shadow-[0_0_6px_rgba(229,184,66,0.45)]"
                              viewBox="0 0 20 20"
                           >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                           </svg>
                        ))}
                     </div>

                     {/* The Quote with Flower at the beginning and end */}
                     <p className="font-serif italic text-sm sm:text-lg md:text-xl lg:text-2xl text-[#FAF9F5] leading-relaxed font-light">
                        <img
                           src="/flower-accent.png"
                           alt=""
                           className="inline-block w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain mr-1.5 sm:mr-2 -mt-1 select-none filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                        />
                        {current.quote}
                        <img
                           src="/flower-accent.png"
                           alt=""
                           className="inline-block w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain ml-1.5 sm:ml-2 -mt-1 select-none filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                        />
                     </p>

                     {/* Bottom Row: Commenter Info on Left & Controls on Right (No Divider, Clean Spacing) */}
                     <div className="mt-4 sm:mt-8 flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                        {/* Left Corner: Image of the commenter, Name and Event */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5">
                           <img
                              src={current.avatar}
                              alt={current.name}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#8A7332]/40 shadow-md shrink-0"
                           />
                           <div className="flex flex-col">
                              <h4 className="font-serif text-base sm:text-lg text-[#FAF9F5] font-medium tracking-wide">
                                 {current.name}
                              </h4>
                              <p className="font-sans text-[11px] sm:text-xs text-[#8A7332] font-semibold tracking-wider uppercase mt-0.5">
                                 {current.event}
                              </p>
                           </div>
                        </div>

                        {/* Right Side: Control Buttons */}
                        <div className="flex items-center gap-2.5">
                           <button
                              onClick={(e) => {
                                 paginate(-1);
                                 triggerFloralBurst(e);
                              }}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#8A7332]/40 hover:border-gold-radiant hover:bg-[#8A7332]/15 text-[#FAF9F5] flex items-center justify-center transition-all cursor-pointer group"
                              aria-label="Previous Testimonial"
                           >
                              <svg
                                 className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                              >
                                 <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </button>

                           <button
                              onClick={(e) => {
                                 paginate(1);
                                 triggerFloralBurst(e);
                              }}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#8A7332]/40 hover:border-gold-radiant hover:bg-[#8A7332]/15 text-[#FAF9F5] flex items-center justify-center transition-all cursor-pointer group"
                              aria-label="Next Testimonial"
                           >
                              <svg
                                 className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                              >
                                 <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </section>
   );
}
