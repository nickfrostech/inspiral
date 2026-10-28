import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerFloralBurst } from '../utils/floweringBurst';

const FAQS = [
   {
      id: 1,
      question: 'How do you handle uninvited guests and gatecrashers?',
      answer:
         'Every guest receives a unique QR code on WhatsApp or SMS. No code, no entry. Our verification team and bouncers scan each pass at the entrance so only invited guests get in.',
   },
   {
      id: 2,
      question: 'How early should we book our event?',
      answer:
         'We recommend booking 3 to 6 months ahead, especially for December dates and large traditional weddings. However, we can also plan fast-track events within 4 weeks.',
   },
   {
      id: 3,
      question: 'Do you handle events outside Lagos?',
      answer:
         'Yes. We plan luxury weddings and events across Nigeria—including Lagos, Abuja, Port Harcourt, and destination celebrations in Dubai, Zanzibar, and Ghana.',
   },
   {
      id: 4,
      question: 'Can you work with our family’s caterers and vendors?',
      answer:
         'Yes. We can coordinate seamlessly with your preferred caterers, MCs, and DJs, or provide our own trusted vendors for decor, sound, lighting, drinks, and security.',
   },
   {
      id: 5,
      question: 'How do you handle power supply during the party?',
      answer:
         'We never rely on venue power alone. We provide synchronized heavy-duty backup generators with automatic switchover so your event never goes dark.',
   },
];

export default function FAQ() {
   const [openId, setOpenId] = useState(1);

   const toggle = (id, e) => {
      setOpenId(openId === id ? null : id);
      triggerFloralBurst(e);
   };

   return (
      <section
         id="faq"
         className="relative w-full bg-[#0A2318] text-[#FAF9F5] py-12 sm:py-16 md:py-24 border-t border-[#8A7332]/20"
      >
         <div className="max-w-3xl mx-auto px-3.5 sm:px-6 md:px-8 relative z-10 space-y-6 sm:space-y-8 md:space-y-10">
            {/* Header */}
            <div className="text-center space-y-1.5 sm:space-y-2">
               <h2 className="font-serif uppercase tracking-[0.14em] text-2xl sm:text-3xl md:text-4xl text-[#FAF9F5] font-normal">
                  Frequently Asked Questions
               </h2>
               <p className="font-sans text-xs sm:text-sm text-[#95A599] font-light max-w-md mx-auto">
                  Everything you need to know about planning your event with us.
               </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-2.5 sm:space-y-3">
               {FAQS.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                     <div
                        key={faq.id}
                        className={`rounded-xl sm:rounded-2xl transition-colors duration-200 border overflow-hidden ${
                           isOpen
                              ? 'bg-[#0E291E] border-[#8A7332]/60'
                              : 'bg-[#0E291E]/60 border-[#8A7332]/25 hover:border-[#8A7332]/40'
                        }`}
                     >
                        {/* Question Row (Always pinned to top of the card) */}
                        <button
                           onClick={(e) => toggle(faq.id, e)}
                           className="w-full px-4 sm:px-6 py-3.5 sm:py-5 text-left flex items-center justify-between gap-3.5 sm:gap-4 cursor-pointer select-none group"
                        >
                           <span className="font-serif text-base sm:text-lg text-[#FAF9F5] font-normal tracking-wide group-hover:text-gold-radiant transition-colors">
                              {faq.question}
                           </span>

                           {/* Plus/Minus Indicator */}
                           <span className="w-7 h-7 rounded-full border border-[#8A7332]/40 group-hover:border-gold-radiant flex items-center justify-center shrink-0 transition-colors">
                              <svg
                                 className={`w-3.5 h-3.5 text-gold-radiant transition-transform duration-300 ${
                                    isOpen ? 'rotate-45' : 'rotate-0'
                                 }`}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                              >
                                 <line x1="12" y1="5" x2="12" y2="19" />
                                 <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                           </span>
                        </button>

                        {/* Answer: Animates strictly downward without separator line */}
                        <AnimatePresence initial={false}>
                           {isOpen && (
                              <motion.div
                                 key="faq-content"
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: 'auto', opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.28, ease: 'easeOut' }}
                                 className="overflow-hidden"
                              >
                                 <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-[#95A599] font-light leading-relaxed">
                                    {faq.answer}
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
