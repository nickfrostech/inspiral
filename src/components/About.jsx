import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';
import { asset } from '../utils/asset';

const METRICS = [
   { target: 10, suffix: '+', label: 'Years of Excellence', sub: 'Founded in Lagos, 2014' },
   { target: 650, suffix: '+', label: 'Events Produced', sub: 'Lagos, Abuja & Beyond' },
   { target: 45, suffix: '+', label: 'Partner Venues', sub: 'Eko Hotel, Landmark, Hilton' },
   { target: 100, suffix: '%', label: 'On-Time Execution', sub: 'Zero stress, zero delays' },
];

function StatCounter({ target, suffix }) {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: '-40px' });
   const motionValue = useMotionValue(0);
   const springValue = useSpring(motionValue, {
      damping: 32,
      stiffness: 60,
   });

   useEffect(() => {
      if (inView) {
         motionValue.set(target);
      }
   }, [inView, motionValue, target]);

   useEffect(() => {
      const unsubscribe = springValue.on('change', (latest) => {
         if (ref.current) {
            ref.current.textContent = `${Math.round(latest)}${suffix}`;
         }
      });
      return unsubscribe;
   }, [springValue, suffix]);

   return (
      <span ref={ref} className="tabular-nums">
         0{suffix}
      </span>
   );
}

const PILLARS = [
   {
      num: '01',
      title: 'Scenography & Decor',
      desc: 'Bespoke floral installations, kinetic stage lighting, and luxury entrance arches.',
   },
   {
      num: '02',
      title: 'Protocol & VIP Security',
      desc: 'Instant QR code verification, trained bouncers, and zero crowd issues.',
   },
   {
      num: '03',
      title: 'Power & Production',
      desc: 'Heavy-duty backup generators, concert-grade sound, and timeline control.',
   },
];

const STAT_BORDERS = [
   'border-r border-b lg:border-b-0 lg:border-r border-white/10',
   'border-b lg:border-b-0 lg:border-r border-white/10',
   'border-r lg:border-r border-white/10',
   '',
];

export default function About() {
   return (
      <section
         id="about"
         className="relative w-full py-14 sm:py-20 md:py-28 px-3.5 sm:px-6 md:px-12 bg-[#0A2318] text-ivory transition-colors duration-500 overflow-visible"
      >
         {/* Ambient Warm Golden & Emerald Color Diffusion */}
         <div className="pointer-events-none absolute top-12 -right-20 w-[450px] h-[450px] rounded-full bg-emerald-leaf/25 blur-3xl" />
         <div className="pointer-events-none absolute bottom-12 -left-20 w-[450px] h-[450px] rounded-full bg-gold-champagne/20 blur-3xl" />

         <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-24">
            {/* =========================================================================
            1. IMPACT METRICS STRIP (Clear LiquidGlass with Botanical Flower PNG on side)
            ========================================================================= */}
            <motion.div
               initial={{ opacity: 0, y: 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-60px' }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full"
            >
               <div className="p-1.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl relative z-10 bg-white/6 backdrop-blur-xl border border-white/15">
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                     {METRICS.map((metric, idx) => (
                        <div
                           key={metric.label}
                           className={`p-3 sm:p-5 md:p-8 text-center space-y-1 ${STAT_BORDERS[idx]}`}
                        >
                           <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-radiant font-light tracking-tight">
                              <StatCounter target={metric.target} suffix={metric.suffix} />
                           </p>
                           <p className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold text-white">
                              {metric.label}
                           </p>
                           <p className="font-sans text-[11px] sm:text-xs text-emerald-sage/75 font-light">
                              {metric.sub}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Botanical Magnolia Flower Accent (Sprouting & Blooming organically from root to top) */}
               <div className="absolute -top-12 -right-4 sm:-top-16 sm:-right-8 md:-top-20 md:-right-10 w-28 sm:w-36 md:w-44 pointer-events-none z-20 select-none">
                  <motion.img
                     src={asset('/flower-accent.png')}
                     alt="Botanical Flower Accent"
                     initial={{
                        opacity: 0,
                        scaleY: 0.15,
                        scaleX: 0.25,
                        y: 35,
                        rotate: -12,
                     }}
                     whileInView={{
                        opacity: 1,
                        scaleY: 1,
                        scaleX: 1,
                        y: 0,
                        rotate: 0,
                     }}
                     viewport={{ once: true, margin: '-40px' }}
                     transition={{
                        duration: 1.7,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                     style={{
                        transformOrigin: 'bottom center',
                     }}
                     className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] origin-bottom"
                  />
               </div>
            </motion.div>

            {/* =========================================================================
            2. BRAND NARRATIVE & ATELIER PHILOSOPHY (Editorial Two-Column Layout)
            ========================================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
               {/* Left Column: Shortened Editorial Headline & Punchy Copy */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-6"
               >
                  <div className="space-y-2">
                     <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-radiant font-semibold">
                        The Atelier &amp; Philosophy
                     </p>
                     <h3 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight">
                        Crafting Unforgettable Nigerian Celebrations.
                     </h3>
                  </div>

                  <p className="text-sm md:text-base font-light text-ivory/85 leading-relaxed font-sans max-w-xl">
                     We bring world-class planning and production to your milestone events—from luxury traditional and white weddings to high-profile corporate galas. Zero stress, perfect execution.
                  </p>

                  {/* The Three Pillars using High-Performance CSS Glass */}
                  <div className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
                     {PILLARS.map((pillar) => (
                        <div
                           key={pillar.num}
                           className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl space-y-1.5 sm:space-y-2 group transition-all bg-white/6 backdrop-blur-md border border-white/10 hover:border-gold-radiant/40"
                        >
                           <p className="font-serif text-lg text-gold-radiant font-light">
                              {pillar.num}
                           </p>
                           <h4 className="font-sans text-xs uppercase tracking-[0.16em] font-semibold text-white">
                              {pillar.title}
                           </h4>
                           <p className="font-sans text-xs text-ivory/80 font-light leading-relaxed">
                              {pillar.desc}
                           </p>
                        </div>
                     ))}
                  </div>

                  {/* Action Button using Hardware-Accelerated CSS Glass */}
                  <div className="pt-3">
                     <button
                        onClick={(e) => triggerFloralBurst(e)}
                        className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-semibold text-white bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-gold-champagne/80 cursor-pointer shadow-xl transition-all duration-300 active:scale-95"
                     >
                        Explore Our Disciplines
                     </button>
                  </div>
               </motion.div>

               {/* Right Column: Editorial Visual Composition (Matches Left Texts Height Exactly, No Shadow) */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative h-full flex flex-col"
               >
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-0">
                     <img
                        src={asset('/about-atelier.jpg')}
                        alt="Inspiral Events Atelier Curation"
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                     {/* Floating Translucent CSS Glass Media Tag */}
                     <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-ivory space-y-1 bg-black/50 backdrop-blur-md border border-white/20 shadow-lg">
                           <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-radiant font-semibold">
                              Signature Production
                           </p>
                           <p className="font-serif italic text-base leading-tight text-white">
                              Where spatial design becomes living memory.
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
