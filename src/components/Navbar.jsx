import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidGlass } from 'quick-liquid/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { triggerFloralBurst } from '../utils/floweringBurst';
import { asset } from '../utils/asset';

const NAV_LINKS = [
   { name: 'Home', target: null },
   { name: 'About Us', target: 'about' },
   { name: 'Services', target: 'services' },
   { name: 'Why Us', target: 'why-us' },
   { name: 'Testimonials', target: 'testimonials' },
   { name: 'FAQs', target: 'faq' },
];

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
   const [activeItem, setActiveItem] = useState('Home');
   const { isDark, toggleTheme } = useTheme();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 60);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Prevent background page from scrolling while mobile drawer is open
   useEffect(() => {
      if (mobileOpen) {
         const prevBodyOverflow = document.body.style.overflow;
         const prevHtmlOverflow = document.documentElement.style.overflow;
         document.body.style.overflow = 'hidden';
         document.documentElement.style.overflow = 'hidden';
         return () => {
            document.body.style.overflow = prevBodyOverflow;
            document.documentElement.style.overflow = prevHtmlOverflow;
         };
      }
   }, [mobileOpen]);

   // Automatically close mobile menu if resized to desktop breakpoint
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 1024) {
            setMobileOpen(false);
         }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const scrollToSection = (target, name, e) => {
      setActiveItem(name);
      triggerFloralBurst(e);
      setMobileOpen(false);

      if (!target || name === 'Home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         const element = document.getElementById(target);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };

   return (
      <>
         {/* =========================================================================
            DESKTOP & UNIVERSAL STICKY HEADER (Fixed at z-50)
            ========================================================================= */}
         <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
               isScrolled
                  ? 'bg-[#0A2318]/92 backdrop-blur-md border-b border-[#8A7332]/25 py-3 shadow-xl'
                  : 'bg-transparent py-5 sm:py-6'
            }`}
         >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
               {/* -------------------------------------------------------------
                  STATE A: WHEN SCROLLED OR ON MOBILE
                  Logo is strictly on the LEFT
                  ------------------------------------------------------------- */}
               <div
                  onClick={(e) => scrollToSection(null, 'Home', e)}
                  className={`flex items-center gap-2.5 cursor-pointer select-none transition-all duration-300 ${
                     !isScrolled ? 'lg:hidden' : 'flex'
                  }`}
               >
                  <img
                     src={asset('/flower-accent.png')}
                     alt=""
                     className="w-7 h-7 object-contain filter drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]"
                  />
                  <div className="flex flex-col text-left">
                     <span className="font-serif tracking-[0.2em] text-lg sm:text-xl font-light text-[#FAF9F5] uppercase leading-none">
                        Inspiral
                     </span>
                     <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.38em] text-gold-radiant uppercase font-semibold">
                        Events
                     </span>
                  </div>
               </div>

               {/* -------------------------------------------------------------
                  STATE B: INITIAL TOP STATE ON LARGE SCREENS (When NOT Scrolled)
                  Bespoke 3-Column: Left Links | Center Logo | Right Links + Theme
                  ------------------------------------------------------------- */}
               {!isScrolled && (
                  <div className="hidden lg:grid grid-cols-3 items-center w-full">
                     {/* Left Links */}
                     <nav className="flex items-center justify-start gap-1">
                        {NAV_LINKS.slice(0, 3).map((item) => {
                           const isActive = activeItem === item.name;
                           return (
                              <button
                                 key={item.name}
                                 onClick={(e) => scrollToSection(item.target, item.name, e)}
                                 className={`relative px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                                    isActive ? 'text-white font-semibold' : 'text-ivory/80 hover:text-white'
                                 }`}
                              >
                                 {isActive && (
                                    <motion.div
                                       layoutId="activeHeroNavGlass"
                                       className="absolute inset-0 pointer-events-none"
                                       transition={{
                                          type: 'spring',
                                          stiffness: 380,
                                          damping: 30,
                                       }}
                                    >
                                       <LiquidGlass
                                          config={{
                                             appearance: isDark ? 'dark' : 'light',
                                             material: 'clear',
                                             dynamicLighting: true,
                                             borderRadius: 30,
                                             edgeHighlight: 0.7,
                                             specularStrength: 0.3,
                                          }}
                                          className="w-full h-full rounded-full shadow-lg"
                                       />
                                    </motion.div>
                                 )}
                                 <span className="relative z-10">{item.name}</span>
                              </button>
                           );
                        })}
                     </nav>

                     {/* Center Stately Brand Mark */}
                     <div
                        onClick={(e) => scrollToSection(null, 'Home', e)}
                        className="flex flex-col items-center justify-center text-center cursor-pointer select-none"
                     >
                        <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-ivory font-light uppercase">
                           INSPIRAL
                        </h1>
                        <p className="text-[10px] tracking-[0.4em] uppercase text-gold-radiant/90 font-sans font-light -mt-0.5">
                           EVENTS
                        </p>
                     </div>

                     {/* Right Links & Theme Toggle */}
                     <div className="flex items-center justify-end gap-2">
                        {NAV_LINKS.slice(3).map((item) => {
                           const isActive = activeItem === item.name;
                           return (
                              <button
                                 key={item.name}
                                 onClick={(e) => scrollToSection(item.target, item.name, e)}
                                 className={`relative px-4 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] font-medium transition-all cursor-pointer ${
                                    isActive ? 'text-white font-semibold' : 'text-ivory/80 hover:text-white'
                                 }`}
                              >
                                 {isActive && (
                                    <motion.div
                                       layoutId="activeHeroNavGlass"
                                       className="absolute inset-0 pointer-events-none"
                                       transition={{
                                          type: 'spring',
                                          stiffness: 380,
                                          damping: 30,
                                       }}
                                    >
                                       <LiquidGlass
                                          config={{
                                             appearance: isDark ? 'dark' : 'light',
                                             material: 'clear',
                                             dynamicLighting: true,
                                             borderRadius: 30,
                                             edgeHighlight: 0.7,
                                             specularStrength: 0.3,
                                          }}
                                          className="w-full h-full rounded-full shadow-lg"
                                       />
                                    </motion.div>
                                 )}
                                 <span className="relative z-10">{item.name}</span>
                              </button>
                           );
                        })}

                        {/* Theme Toggle */}
                        <button
                           onClick={(e) => {
                              toggleTheme();
                              triggerFloralBurst(e);
                           }}
                           className="w-9 h-9 ml-2 rounded-full border border-white/20 hover:border-gold-radiant flex items-center justify-center text-ivory hover:text-white transition-colors cursor-pointer"
                           aria-label="Toggle theme"
                        >
                           {isDark ? <Sun className="w-4 h-4 text-gold-radiant" /> : <Moon className="w-4 h-4" />}
                        </button>
                     </div>
                  </div>
               )}

               {/* -------------------------------------------------------------
                  STATE C: SCROLLED STICKY STATE ON DESKTOP
                  Links on the RIGHT
                  ------------------------------------------------------------- */}
               {isScrolled && (
                  <div className="hidden lg:flex items-center gap-1.5">
                     <nav className="flex items-center gap-1">
                        {NAV_LINKS.map((item) => (
                           <button
                              key={item.name}
                              onClick={(e) => scrollToSection(item.target, item.name, e)}
                              className="px-3.5 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.14em] text-ivory/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                           >
                              {item.name}
                           </button>
                        ))}
                     </nav>

                     {/* Action Button */}
                     <button
                        onClick={(e) => scrollToSection('cta', 'Contact', e)}
                        className="ml-3 px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.16em] font-bold text-[#0A2318] bg-gold-radiant hover:bg-gold-champagne shadow-md transition-all cursor-pointer"
                     >
                        Plan Event
                     </button>

                     {/* Theme Mode Toggle */}
                     <button
                        onClick={(e) => {
                           toggleTheme();
                           triggerFloralBurst(e);
                        }}
                        className="w-9 h-9 ml-2 rounded-full border border-white/20 hover:border-gold-radiant flex items-center justify-center text-ivory transition-colors cursor-pointer"
                        aria-label="Toggle theme mode"
                     >
                        {isDark ? <Sun className="w-4 h-4 text-gold-radiant" /> : <Moon className="w-4 h-4" />}
                     </button>
                  </div>
               )}

               {/* -------------------------------------------------------------
                  MID TO SMALL SCREENS (Hamburger Menu Button)
                  ------------------------------------------------------------- */}
               <div className="flex lg:hidden items-center gap-2">
                  <button
                     onClick={(e) => {
                        toggleTheme();
                        triggerFloralBurst(e);
                     }}
                     className="w-9 h-9 rounded-full border border-white/20 hover:border-gold-radiant flex items-center justify-center text-ivory transition-colors cursor-pointer"
                     aria-label="Toggle theme mode"
                  >
                     {isDark ? <Sun className="w-4 h-4 text-gold-radiant" /> : <Moon className="w-4 h-4" />}
                  </button>

                  <button
                     onClick={(e) => {
                        setMobileOpen(!mobileOpen);
                        triggerFloralBurst(e);
                     }}
                     className="w-10 h-10 rounded-full border border-[#8A7332]/40 bg-[#0E291E]/80 text-[#FAF9F5] flex items-center justify-center cursor-pointer transition-colors"
                     aria-label="Open mobile menu"
                  >
                     {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
               </div>
            </div>
         </header>

         {/* =========================================================================
            MOBILE & TABLET SLIDE-DOWN DRAWER MENU (Scrollable Drawer, Locked Background)
            ========================================================================= */}
         <AnimatePresence>
            {mobileOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setMobileOpen(false)}
                  className="fixed inset-0 top-[60px] sm:top-[70px] z-40 lg:hidden bg-black/60 backdrop-blur-sm overflow-y-auto overscroll-contain px-3.5 sm:px-6 py-4 flex flex-col"
               >
                  <motion.div
                     initial={{ opacity: 0, y: -16, scale: 0.98 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -16, scale: 0.98 }}
                     transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                     onClick={(e) => e.stopPropagation()}
                     className="w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-[#0A2318]/98 border border-[#8A7332]/40 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl space-y-4 my-auto shrink-0"
                  >
                     <nav className="flex flex-col space-y-1">
                        {NAV_LINKS.map((item) => (
                           <button
                              key={item.name}
                              onClick={(e) => scrollToSection(item.target, item.name, e)}
                              className="px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-left font-serif text-base sm:text-lg tracking-wider text-[#FAF9F5] hover:text-gold-radiant hover:bg-white/5 transition-all flex items-center justify-between cursor-pointer"
                           >
                              <span>{item.name}</span>
                              <span className="text-xs text-[#8A7332] font-sans">→</span>
                           </button>
                        ))}
                     </nav>

                     {/* Action Buttons in Mobile Menu */}
                     <div className="pt-2 border-t border-[#8A7332]/25 space-y-2.5">
                        <button
                           onClick={(e) => scrollToSection('cta', 'Contact', e)}
                           className="w-full py-3 sm:py-3.5 rounded-full font-sans text-xs uppercase tracking-[0.16em] font-bold text-[#0A2318] bg-gold-radiant hover:bg-gold-champagne shadow-lg transition-all cursor-pointer"
                        >
                           Plan Your Event
                        </button>

                        <a
                           href="https://wa.me/"
                           target="_blank"
                           rel="noopener noreferrer"
                           onClick={(e) => triggerFloralBurst(e)}
                           className="w-full py-3 sm:py-3.5 rounded-full font-sans text-xs uppercase tracking-[0.16em] font-semibold text-[#FAF9F5] border border-[#8A7332]/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                           <span>Chat on WhatsApp</span>
                        </a>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
