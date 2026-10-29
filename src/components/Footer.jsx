import { triggerFloralBurst } from '../utils/floweringBurst';

export default function Footer() {
   const scrollToTop = (e) => {
      triggerFloralBurst(e);
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className="relative w-full bg-[#05130D] text-[#FAF9F5] border-t border-[#8A7332]/25 overflow-hidden">
         <div className="max-w-7xl mx-auto px-3.5 sm:px-8 md:px-12 pt-10 sm:pt-14 pb-8 sm:pb-10 relative z-10 space-y-10 sm:space-y-12">
            {/* Top Grid: Brand Identity & Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
               {/* Brand Column (lg:col-span-5) */}
               <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 relative select-none">
                        <img
                           src="/flower-accent.png"
                           alt=""
                           className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                        />
                     </div>
                     <div>
                        <h3 className="font-serif text-2xl tracking-[0.22em] text-[#FAF9F5] uppercase font-light">
                           INSPIRAL
                        </h3>
                        <p className="font-sans text-[9px] tracking-[0.38em] uppercase text-[#8A7332] font-semibold -mt-0.5">
                           EVENTS
                        </p>
                     </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#95A599] font-light leading-relaxed max-w-sm">
                     Nigeria&apos;s premier event management and production company. Specializing in luxury weddings, milestone celebrations, and corporate events with zero stress.
                  </p>

                  <div className="pt-1 text-xs font-sans tracking-[0.2em] text-[#8A7332] uppercase font-medium">
                     Lagos • Abuja • Port Harcourt
                  </div>
               </div>

               {/* Navigation: Quick Links (lg:col-span-3) */}
               <div className="lg:col-span-3 space-y-3">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#8A7332]">
                     Quick Links
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#95A599] font-light">
                     <li>
                        <a href="#about" className="hover:text-gold-radiant transition-colors">
                           About Us
                        </a>
                     </li>
                     <li>
                        <a href="#services" className="hover:text-gold-radiant transition-colors">
                           Our Services
                        </a>
                     </li>
                     <li>
                        <a href="#why-us" className="hover:text-gold-radiant transition-colors">
                           Why Choose Us
                        </a>
                     </li>
                     <li>
                        <a href="#testimonials" className="hover:text-gold-radiant transition-colors">
                           Testimonials
                        </a>
                     </li>
                     <li>
                        <a href="#faq" className="hover:text-gold-radiant transition-colors">
                           FAQs
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Office & Contact (lg:col-span-4) */}
               <div className="lg:col-span-4 space-y-3">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#8A7332]">
                     Contact Us
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-[#95A599] font-light">
                     <p className="text-[#FAF9F5]">Victoria Island & Lekki Phase 1, Lagos</p>
                     <p>Maitama, Abuja, Nigeria</p>
                     <p className="pt-1 text-[#8A7332] font-semibold">+234 (0) 803 892 4110</p>
                     <p className="text-gold-radiant">info@inspiralevents.ng</p>
                  </div>
               </div>
            </div>

            {/* Bottom Row: Copyright & Back to Top */}
            <div className="pt-6 border-t border-[#8A7332]/15 flex items-center justify-between flex-wrap gap-4 text-xs font-sans text-[#7A8C80]">
               <p>© 2026 Inspiral Events Nigeria. All rights reserved.</p>

               <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-[#8A7332] hover:text-gold-radiant transition-colors cursor-pointer group"
               >
                  <span className="uppercase tracking-[0.2em] text-[10px] font-semibold">Back to Top</span>
                  <svg
                     className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>
      </footer>
   );
}
