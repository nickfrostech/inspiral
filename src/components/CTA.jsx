import { motion } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';
import { asset } from '../utils/asset';

export default function CTA() {
   return (
      <section
         id="cta"
         className="relative w-full bg-[#F8F6F0] text-charcoal pt-4 sm:pt-6 pb-16 sm:pb-24 md:pb-32 overflow-hidden"
      >
         <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 relative z-10">
            {/* Clean, Compact Card with Entrance Animation, Top-Left Flower, No Gradients */}
            <motion.div
               initial={{ opacity: 0, y: 30, scale: 0.98 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true, margin: '-30px' }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="relative rounded-2xl sm:rounded-3xl bg-[#0A2318] border border-[#8A7332]/40 py-8 sm:py-10 md:py-14 px-4 sm:px-8 md:px-10 text-center text-[#FAF9F5] shadow-xl overflow-hidden"
            >
               {/* Flower on Top Left - Scaled & Positioned Cleanly */}
               <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 select-none pointer-events-none">
                  <img
                     src={asset('/flower-accent.png')}
                     alt="Inspiral Floral Accent"
                     className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                  />
               </div>

               {/* Title & 2 Buttons Only */}
               <div className="max-w-xl mx-auto space-y-5 sm:space-y-7 relative z-10">
                  <h2 className="font-serif uppercase tracking-[0.12em] text-xl sm:text-3xl md:text-4xl text-[#FAF9F5] font-normal leading-tight">
                     Ready for your next event?
                  </h2>

                  <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
                     <button
                        onClick={(e) => triggerFloralBurst(e)}
                        className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-bold text-[#0A2318] bg-[#E5B842] hover:bg-[#D4AF37] shadow-[0_0_20px_rgba(229,184,66,0.3)] transition-all cursor-pointer"
                     >
                        Plan Your Event
                     </button>

                     <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => triggerFloralBurst(e)}
                        className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-sans text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold text-[#FAF9F5] border border-[#8A7332]/50 hover:border-gold-radiant hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
                     >
                        <svg className="w-4 h-4 text-[#E5B842]" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.665-.698c.969.585 1.961.942 2.795.942 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.769-5.77-5.769zm3.393 8.163c-.144.405-.837.774-1.17.822-.311.045-.694.072-2.071-.497-1.761-.727-2.883-2.523-2.97-2.64-.088-.117-.714-.951-.714-1.815 0-.865.454-1.291.616-1.467.162-.176.353-.221.471-.221.118 0 .235.001.338.006.108.005.253-.041.396.303.147.353.5 1.22.544 1.309.044.088.073.191.015.308-.058.118-.088.192-.176.294-.088.103-.186.23-.265.309-.089.088-.182.185-.078.363.103.177.46.758.988 1.228.679.605 1.252.793 1.43.881.176.088.279.074.382-.044.103-.118.441-.515.559-.691.118-.176.235-.147.397-.088.162.059 1.029.485 1.205.573.176.088.294.132.338.206.044.073.044.426-.1 831z" />
                        </svg>
                        <span>Chat on WhatsApp</span>
                     </a>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
