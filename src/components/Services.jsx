import { motion } from 'motion/react';
import { LiquidGlass } from 'quick-liquid/react';
import { triggerFloralBurst } from '../utils/floweringBurst';

const SERVICES = [
   {
      id: 'weddings',
      category: 'Luxury Weddings',
      title: 'White & Traditional Weddings',
      subtitle: 'Grand ballroom receptions & vibrant traditional ceremonies',
      description: 'From Alaga and Igbankwu traditions to fairy-tale white wedding receptions. Flawless guest verification, stage decor, and timeline coordination.',
      image: '/hero-beach.jpg',
      alt: 'Luxury Nigerian Wedding Production by Inspiral Events',
      capacity: '200 – 1,500 Guests',
      pills: ['Grand Stage Decor', 'VIP Table Service', 'Zero Gatecrashers'],
   },
   {
      id: 'galas',
      category: 'Owambes & Galas',
      title: 'High-Society Owambes & Galas',
      subtitle: 'Exclusive milestone celebrations & black-tie banquets',
      description: 'Breathtaking hall transformation, live band and DJ acoustic setup, premium drinks service, and seamless guest hospitality.',
      image: '/hero-party.jpg',
      alt: 'Luxury Nigerian Gala and Owambe by Inspiral Events',
      capacity: '150 – 1,200 Guests',
      pills: ['Immersive Lighting', 'Live Band Sound', 'VIP Security'],
   },
   {
      id: 'summits',
      category: 'Corporate Summits',
      title: 'Corporate Summits & State Galas',
      subtitle: 'Forums, product launches & end-of-year dinners',
      description: 'Broadcast-quality stage setup, multi-screen LED walls, protocol management for dignitaries, and guaranteed backup power.',
      image: '/hero-hall.jpg',
      alt: 'Corporate Summit and Conference by Inspiral Events',
      capacity: '300 – 2,500+ Delegates',
      pills: ['LED Stage Walls', 'Dignitary Protocol', '24/7 Power Backup'],
   },
   {
      id: 'activations',
      category: 'Brand Runways',
      title: 'Brand Runways & Activations',
      subtitle: 'Fashion debuts & experiential luxury showcases',
      description: 'Custom runway construction, media walls, VIP hospitality, and high-impact press coverage flow.',
      image: '/services-activation.jpg',
      alt: 'Fashion Runway Activation by Inspiral Events',
      capacity: '200 – 1,000 Attendees',
      pills: ['Custom Runway', 'Red Carpet Media', 'Influencer Lounge'],
   },
   {
      id: 'gastronomy',
      category: 'Bespoke Banquets',
      title: 'Luxury Banquets & Mixology Bars',
      subtitle: 'Fine dining, gourmet small chops & cocktail lounges',
      description: 'Coordinating premier Nigerian and continental caterers, bespoke tablescapes, champagne service, and trained uniformed ushers.',
      image: '/services-gastronomy.jpg',
      alt: 'Luxury Nigerian Event Banquet Table by Inspiral Events',
      capacity: '50 – 800 Guests',
      pills: ['Gourmet Plating', 'Cocktail Mixology', 'Trained Ushers'],
   },
   {
      id: 'milestones',
      category: 'Milestones',
      title: 'Milestone Birthdays & Anniversaries',
      subtitle: '50th, 60th & 70th jubilee celebrations',
      description: 'Unforgettable milestone parties produced with personalized decor, tribute videos, surprise guest performances, and indoor pyro.',
      image: '/hero-gala.jpg',
      alt: 'Milestone Jubilee Celebration by Inspiral Events',
      capacity: '100 – 1,000 Guests',
      pills: ['Special Effects', 'Live Entertainment', 'Guest Itineraries'],
   },
];

export default function Services() {
   return (
      <section id="services" className="relative w-full bg-[#F8F6F0] text-charcoal pt-12 sm:pt-16 pb-10 sm:pb-12 md:pb-16">
         {/* =========================================================================
         TOP ARCHITECTURAL CUSTOM SCULPTED CUT
         Gracefully carves the emerald About section into the warm alabaster Services section
         ========================================================================= */}
         <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none z-20">
            <svg
               viewBox="0 0 1440 90"
               fill="none"
               preserveAspectRatio="none"
               className="w-full h-12 sm:h-16 md:h-24 block text-[#F8F6F0]"
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

         {/* Ambient Warm Golden Glow */}
         <div className="pointer-events-none absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-gold-champagne/10 blur-3xl" />

         <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 space-y-8 sm:space-y-12 md:space-y-16 relative z-10">
            {/* =========================================================================
            1. SECTION HEADER (Smooth Entrance Animation)
            ========================================================================= */}
            <motion.div
               initial={{ opacity: 0, y: 35 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-60px' }}
               transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
               className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
            >
               <p className="font-sans text-xs uppercase tracking-[0.3em] text-emerald-botanic font-semibold">
                  Our Disciplines
               </p>
               <h2 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight">
                  Mastery in Every Gathering.
               </h2>
               <p className="text-sm md:text-base font-light text-taupe leading-relaxed font-sans">
                  From intimate coastal vows to world-class summits, we curate each dimension with architectural rigor.
               </p>
            </motion.div>

            {/* =========================================================================
            2. SIX CARDS IN 3-COLUMN GRID (Cascading Entrance Animation & Hover Elevation)
            ========================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
               {SERVICES.map((service, index) => (
                  <motion.div
                     key={service.id}
                     initial={{ opacity: 0, y: 60, scale: 0.93 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
                     whileHover={{ y: -6 }}
                     viewport={{ once: true, margin: '-50px' }}
                     transition={{
                        duration: 0.85,
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                     className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 hover:border-gold-champagne/60 shadow-md hover:shadow-2xl transition-all duration-500 h-[320px] sm:h-[360px] md:h-[385px] flex flex-col justify-between p-3.5 sm:p-5 md:p-6 select-none cursor-pointer"
                  >
                     {/* Full Bleed Background Image with Smooth Zoom */}
                     <img
                        src={service.image}
                        alt={service.alt}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                     />

                     {/* Vignette Gradient Overlay (Deepens on Hover to Highlight Details) */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:from-black/95 group-hover:via-black/75 group-hover:to-black/45 transition-colors duration-500 pointer-events-none" />

                     {/* Top Floating Bar: Category Pill & Capacity Pill (Both LiquidGlass) */}
                     <div className="relative z-10 flex items-center justify-between">
                        <LiquidGlass
                           config={{
                              appearance: 'light',
                              material: 'clear',
                              dynamicLighting: true,
                              borderRadius: 20,
                              edgeHighlight: 0.75,
                              specularStrength: 0.35,
                           }}
                           className="px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em] font-semibold text-white shadow-md"
                        >
                           {service.category}
                        </LiquidGlass>

                        <LiquidGlass
                           config={{
                              appearance: 'light',
                              material: 'clear',
                              dynamicLighting: true,
                              borderRadius: 20,
                              edgeHighlight: 0.7,
                              specularStrength: 0.3,
                           }}
                           className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-sans tracking-[0.15em] font-medium text-gold-radiant shadow-md"
                        >
                           {service.capacity}
                        </LiquidGlass>
                     </div>

                     {/* Bottom Card Content: Title & Extra Details Revealed on Hover */}
                     <div className="relative z-10 space-y-2">
                        {/* Always Visible: Title & Subtitle */}
                        <div className="space-y-0.5">
                           <h3 className="font-serif italic font-normal text-xl sm:text-2xl text-white tracking-tight leading-tight">
                              {service.title}
                           </h3>
                           <p className="font-sans text-[11px] text-gold-radiant/90 font-light line-clamp-1">
                              {service.subtitle}
                           </p>
                        </div>

                        {/* Extra Details Revealed on Hover (Smooth Expand Drawer) */}
                        <div className="space-y-2.5 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-400 ease-out overflow-hidden pointer-events-none group-hover:pointer-events-auto">
                           <p className="text-[11px] font-sans text-ivory/85 leading-relaxed font-light pt-0.5 line-clamp-2">
                              {service.description}
                           </p>

                           {/* Deliverables Pills (All LiquidGlass) */}
                           <div className="flex flex-wrap gap-1.5">
                              {service.pills.map((pill) => (
                                 <LiquidGlass
                                    key={pill}
                                    config={{
                                       appearance: 'light',
                                       material: 'clear',
                                       dynamicLighting: true,
                                       borderRadius: 20,
                                       edgeHighlight: 0.7,
                                       specularStrength: 0.3,
                                    }}
                                    className="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-medium text-white flex items-center gap-1 shadow-sm"
                                 >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne shrink-0" />
                                    {pill}
                                 </LiquidGlass>
                              ))}
                           </div>

                           {/* Action Button (LiquidGlass) */}
                           <div className="pt-1">
                              <LiquidGlass
                                 as="button"
                                 config={{
                                    appearance: 'light',
                                    material: 'clear',
                                    dynamicLighting: true,
                                    borderRadius: 30,
                                    edgeHighlight: 0.8,
                                    specularStrength: 0.35,
                                 }}
                                 liquidPress={{ scale: 0.95, squish: 0.03 }}
                                 onClick={(e) => triggerFloralBurst(e)}
                                 className="w-full py-2 rounded-full text-[11px] font-sans uppercase tracking-[0.2em] font-semibold text-white cursor-pointer shadow-md hover:border-gold-champagne/60 transition-colors text-center"
                              >
                                 Inquire Experience
                              </LiquidGlass>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
