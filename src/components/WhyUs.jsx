import { motion } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';
import { asset } from '../utils/asset';

const WHY_US_FEATURES = [
   {
      id: 'gatecrashers',
      title: 'ELIMINATE GATECRASHERS',
      description:
         'Unique QR codes for every guest. No code, no entry. Take back control of your exclusive events.',
      image: asset('/whyus-couple.jpg'),
      alt: 'Exclusive Guest Attendance by Inspiral Events',
   },
   {
      id: 'invites',
      title: 'WHATSAPP & SMS INVITES',
      description:
         "Send beautiful branded invitations directly to guests' phones.",
      image: asset('/whyus-invite.jpg'),
      alt: 'Luxury Digital Mobile Invitation by Inspiral Events',
   },
   {
      id: 'checkin',
      title: 'SEAMLESS GUEST CHECK-IN',
      description:
         'Instant digital scan and verification. Zero lines, zero friction.',
      image: asset('/whyus-checkin.jpg'),
      alt: 'VIP Reception and Instant QR Verification by Inspiral Events',
   },
   {
      id: 'control',
      title: 'TAKE CONTROL',
      description:
         "Know exactly who's arrived, who hasn't, and manage multiple passes per guest effortlessly.",
      image: asset('/whyus-control.jpg'),
      alt: 'Event Attendance Analytics and Coordinator Control by Inspiral Events',
   },
];

/* =========================================================================
   AUTHENTIC LUXURY DEALER & PARTNER SVG EMBLEMS (High-Fidelity & Stately)
   ========================================================================= */

function RollsRoyceLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-9 h-9 text-[#0A2318] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 40 40" fill="currentColor">
            <rect x="4" y="2" width="32" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 11h8a4 4 0 0 1 4 4c0 2.2-1.8 4-4 4h-8v-8zm0 18v-10h8l6 10h-4l-4.5-8h-1.5v8h-4z" />
            <path d="M16 15h4a1.8 1.8 0 0 1 0 3.6h-4v-3.6z" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-serif tracking-[0.24em] text-sm font-bold text-[#0A2318] uppercase">Rolls-Royce</span>
            <span className="font-sans text-[9px] tracking-[0.36em] text-[#8A7332] uppercase font-semibold">Motor Cars</span>
         </div>
      </div>
   );
}

function DomPerignonLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-9 h-9 text-[#8A7332] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20 4 C10 4 6 12 6 22 C6 32 14 36 20 38 C26 36 34 32 34 22 C34 12 30 4 20 4 Z" />
            <circle cx="20" cy="18" r="4" fill="currentColor" />
            <path d="M20 10 v4 M20 22 v8" strokeWidth="1.5" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-serif italic tracking-[0.14em] text-base font-semibold text-[#0A2318]">Dom Pérignon</span>
            <span className="font-sans text-[9px] tracking-[0.36em] text-[#8A7332] uppercase font-semibold">Champagne</span>
         </div>
      </div>
   );
}

function RitzCarltonLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-9 h-9 text-[#0A2318] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 40 40" fill="currentColor">
            <path d="M10 8l10-5 10 5v14c0 7-6 13-10 15-4-2-10-8-10-15V8z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="16" r="3" />
            <path d="M16 26c1-3 3-4 4-4s3 1 4 4" stroke="currentColor" strokeWidth="2" fill="none" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-serif tracking-[0.2em] text-sm font-bold text-[#0A2318] uppercase">The Ritz-Carlton</span>
            <span className="font-sans text-[9px] tracking-[0.3em] text-[#8A7332] uppercase font-semibold">Hotels</span>
         </div>
      </div>
   );
}

function CartierLogo() {
   return (
      <div className="flex items-center group/item cursor-pointer opacity-85 hover:opacity-100 transition-opacity px-3">
         <span className="font-serif italic text-2xl sm:text-3xl tracking-[0.08em] font-medium text-[#0A2318] group-hover/item:text-gold-radiant transition-colors border-b border-[#8A7332]/40 pb-1">
            Cartier
         </span>
      </div>
   );
}

function MoetLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-8 h-8 text-[#8A7332] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-serif tracking-[0.22em] text-sm font-bold text-[#0A2318] uppercase">Moët & Chandon</span>
            <span className="font-sans text-[9px] tracking-[0.34em] text-[#8A7332] uppercase font-semibold">Fondé en 1743</span>
         </div>
      </div>
   );
}

function AstonMartinLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-12 h-7 text-[#0A2318] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 60 24" fill="currentColor">
            <path d="M4 14 C12 6 24 4 30 11 C36 4 48 6 56 14 C48 11 36 10 30 15 C24 10 12 11 4 14 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="12" x2="48" y2="12" stroke="currentColor" strokeWidth="1.5" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-sans tracking-[0.22em] text-sm font-bold text-[#0A2318] uppercase">Aston Martin</span>
            <span className="font-sans text-[9px] tracking-[0.32em] text-[#8A7332] uppercase font-semibold">Automotive</span>
         </div>
      </div>
   );
}

function FourSeasonsLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-8 h-8 text-[#0A2318] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 4v24M16 14l8-6M16 18l8-4M16 14l-8-6M16 18l-8-4M16 22l6-3M16 22l-6-3" strokeLinecap="round" />
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-serif tracking-[0.2em] text-sm font-bold text-[#0A2318] uppercase">Four Seasons</span>
            <span className="font-sans text-[9px] tracking-[0.32em] text-[#8A7332] uppercase font-semibold">Hotels & Resorts</span>
         </div>
      </div>
   );
}

function BvlgariLogo() {
   return (
      <div className="flex items-center group/item cursor-pointer opacity-85 hover:opacity-100 transition-opacity px-3">
         <span className="font-serif tracking-[0.35em] text-base font-bold text-[#0A2318] group-hover/item:text-gold-radiant transition-colors uppercase">
            B V L G A R I
         </span>
      </div>
   );
}

function BentleyLogo() {
   return (
      <div className="flex items-center gap-3.5 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <svg className="w-12 h-7 text-[#0A2318] group-hover/item:text-gold-radiant transition-colors shrink-0" viewBox="0 0 50 24" fill="currentColor">
            <path d="M2 13 C10 6 20 6 25 12 C30 6 40 6 48 13 C40 10 30 10 25 15 C20 10 10 10 2 13 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="25" cy="12" r="5" fill="#0A2318" />
            <text x="25" y="14.5" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">B</text>
         </svg>
         <div className="flex flex-col text-left">
            <span className="font-sans tracking-[0.24em] text-sm font-bold text-[#0A2318] uppercase">Bentley</span>
            <span className="font-sans text-[9px] tracking-[0.36em] text-[#8A7332] uppercase font-semibold">Motors</span>
         </div>
      </div>
   );
}

function ChopardLogo() {
   return (
      <div className="flex items-center group/item cursor-pointer opacity-85 hover:opacity-100 transition-opacity px-3">
         <span className="font-serif italic text-2xl tracking-[0.14em] font-medium text-[#0A2318] group-hover/item:text-gold-radiant transition-colors">
            Chopard
         </span>
      </div>
   );
}

function TiffanyLogo() {
   return (
      <div className="flex items-center group/item cursor-pointer opacity-85 hover:opacity-100 transition-opacity px-3">
         <span className="font-serif tracking-[0.26em] text-sm font-semibold text-[#0A2318] group-hover/item:text-gold-radiant transition-colors uppercase">
            Tiffany & Co.
         </span>
      </div>
   );
}

function HarrodsLogo() {
   return (
      <div className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity cursor-pointer group/item">
         <div className="flex flex-col text-left">
            <span className="font-serif italic tracking-[0.18em] text-lg font-bold text-[#8A7332] group-hover/item:text-gold-radiant transition-colors">Harrods</span>
            <span className="font-sans text-[8px] tracking-[0.38em] text-[#0A2318] uppercase -mt-0.5 font-semibold">Private Events</span>
         </div>
      </div>
   );
}

const DEALER_LOGOS = [
   RollsRoyceLogo,
   DomPerignonLogo,
   CartierLogo,
   RitzCarltonLogo,
   MoetLogo,
   AstonMartinLogo,
   FourSeasonsLogo,
   BvlgariLogo,
   BentleyLogo,
   ChopardLogo,
   TiffanyLogo,
   HarrodsLogo,
];

/* =========================================================================
   AUTHENTIC LUXURY WEDDING RING PORTAL (Half-Cut Side Positioning)
   Ring vertical diameter matches scrolling container height.
   Inner hole is filled with #F8F6F0 so scrolling logos vanish cleanly.
   ========================================================================= */

function WeddingRingPortal({ side = 'left' }) {
   const isLeft = side === 'left';
   return (
      <div
         className={`pointer-events-auto cursor-pointer absolute top-0 bottom-0 z-30 select-none flex items-center ${
            isLeft ? 'left-0 -translate-x-[45%]' : 'right-0 translate-x-[45%]'
         }`}
         onClick={(e) => triggerFloralBurst(e)}
         title="Wedding Band Portal — Signifying Celebration & Union"
      >
         <img
            src={asset(isLeft ? '/ring-left-filled.png' : '/ring-right-filled.png')}
            alt="Luxury Diamond Wedding Ring Portal"
            className="h-full w-auto object-contain pointer-events-none select-none"
         />
      </div>
   );
}

export default function WhyUs() {
   return (
      <section id="why-us" className="relative w-full bg-[#F8F6F0] text-charcoal pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-24 overflow-x-clip">
         {/* =========================================================================
         1. CARDS CONTAINER (Max-Width 7XL)
         ========================================================================= */}
         <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 space-y-8 sm:space-y-12 md:space-y-16 relative z-10">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-40px' }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3"
            >
               <h2 className="font-serif uppercase tracking-[0.14em] text-2xl sm:text-3xl md:text-4xl text-[#0A2318] font-normal">
                  Why Event Planners Choose Us
               </h2>
               <p className="font-sans font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.08em] text-[#55695C]">
                  From exclusive corporate events to weddings — we&apos;ve got you covered.
               </p>
            </motion.div>

            {/* 4 Cards in a Row: Zero Shadows, Zero Hover Animation, Smooth Entrance Animation, Zero Black Shades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
               {WHY_US_FEATURES.map((feature, index) => (
                  <motion.div
                     key={feature.id}
                     initial={{ opacity: 0, y: 45 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: '-40px' }}
                     transition={{
                        duration: 0.75,
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                     onClick={(e) => triggerFloralBurst(e)}
                     className="cursor-pointer h-full"
                  >
                     <div className="h-full p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#E8E4DC] flex flex-col justify-between hover:border-gold-champagne/60 transition-colors shadow-sm">
                        <div>
                           {/* Photo Box (Clean, No dark gradient shade) */}
                           <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 border border-[#E8E4DC] bg-white">
                              <img
                                 src={feature.image}
                                 alt={feature.alt}
                                 className="w-full h-full object-cover object-center"
                              />
                           </div>

                           {/* Bold Uppercase Title */}
                           <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider text-[#0A2318] mb-1.5 sm:mb-2 leading-snug">
                              {feature.title}
                           </h3>

                           {/* Clean Description */}
                           <p className="font-sans text-xs sm:text-sm text-[#3E5245] font-light leading-relaxed">
                              {feature.description}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* =========================================================================
         2. SCROLLING DEALERS RIBBON (Full-Width Edge-to-Edge with Height-Matched Wedding Ring Portals, Borderless)
         ========================================================================= */}
         <div className="w-full mt-10 sm:mt-16 md:mt-20 relative">
            {/* Centered Heading */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-30px' }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="text-center mb-4 sm:mb-6 px-3.5 sm:px-5"
            >
               <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#8A7332]">
                  Trusted By Distinguished Dealers & Luxury Houses
               </span>
            </motion.div>

            {/* Scrolling Dealer Ribbon (Seamless Plain Background, Responsive Height: Reduced on Mobile/Tablet, Stately on Desktop) */}
            <div className="w-full relative h-20 sm:h-24 md:h-28 lg:h-36 flex items-center">
               {/* Left Wedding Ring Portal (Ring height matches container, half-cut into screen edge) */}
               <WeddingRingPortal side="left" />

               {/* Right Wedding Ring Portal (Ring height matches container, half-cut into screen edge) */}
               <WeddingRingPortal side="right" />


               {/* Slow Infinite Marquee on Plain Background */}
               <div
                  className="flex overflow-hidden mx-6 sm:mx-10 w-full"
                  style={{
                     maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  }}
               >
                  <motion.div
                     animate={{ x: ['0%', '-50%'] }}
                     transition={{
                        duration: 65,
                        ease: 'linear',
                        repeat: Infinity,
                     }}
                     className="flex items-center gap-10 sm:gap-16 md:gap-20 lg:gap-24 shrink-0 pr-10 sm:pr-16 md:pr-20 lg:pr-24"
                  >
                     {DEALER_LOGOS.concat(DEALER_LOGOS).map((DealerComponent, idx) => (
                        <div
                           key={idx}
                           onClick={(e) => triggerFloralBurst(e)}
                           className="shrink-0 flex items-center justify-center py-2"
                        >
                           <DealerComponent />
                        </div>
                     ))}
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
}
