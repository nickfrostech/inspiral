import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
   return (
      <ThemeProvider>
         <main className="relative w-full min-h-screen bg-canvas-base dark:bg-canvas-dark text-charcoal dark:text-ivory transition-colors duration-500 font-sans">
            {/* Universal Responsive Sticky Navbar */}
            <Navbar />

            {/* 1. Fully Static Hero Section (Pinned to viewport behind the sliding curtain) */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
               <Hero />
            </div>

            {/* 2. Viewport Spacer (Enables natural scroll while letting clicks pass through to Hero) */}
            <div className="h-screen w-full pointer-events-none" />

            {/* 3. Sliding Content Layer (Rides smoothly over the static Hero like an architectural curtain) */}
            <div className="relative z-10 min-h-screen bg-[#0A2318] rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(0,0,0,0.65)] border-t border-emerald-leaf/30">
               <About />
               <Services />
               <WhyUs />
               <CTA />
               <Testimonials />
               <FAQ />
               <Footer />
            </div>
         </main>
      </ThemeProvider>
   );
}
