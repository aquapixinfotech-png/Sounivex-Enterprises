import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Star,
  FileCheck,
  Building,
  Zap
} from 'lucide-react';
import SounivexLogo from './SounivexLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-20 bg-gray-950 overflow-hidden">
      {/* Background Banner with low opacity and high-contrast dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-screen filter contrast-125"
        style={{ backgroundImage: `url('/src/assets/images/hero_abstract_bg_1791206807306.jpg')` }}
      />
      {/* Multi-layered dark vignette to preserve 100% text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-950/80 to-gray-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-950/60 to-gray-950 pointer-events-none" />

      {/* Deep Sky Blue and Gold glowing ambient lights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill with Eagle Deep Sky Blue Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-[#38BDF8]/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-xs sm:text-sm font-semibold text-[#38BDF8]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
              <span>Baghajatin Market Complex, Kolkata • Verified Multi-Services</span>
            </div>

            {/* Main Headline with Gold and Sky Blue Highlights */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Empowering Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#F59E0B]">
                Business, Citizen &
              </span>{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#7DD3FC]">
                Digital Needs
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From <strong className="text-white">Passport & PAN Cards</strong> to <strong className="text-white">Trade Licenses, GST, Company Incorporation</strong>, <strong className="text-white">Mudra Business Loans</strong>, <strong className="text-white">Web Development</strong> and <strong className="text-white">Chip-Level Laptop Repair</strong> — Sounivex Enterprises delivers fast, transparent, single-window execution.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('booking')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-gray-950 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#C59B27] hover:from-[#FDE68A] hover:to-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 text-base"
              >
                <Calendar className="w-5 h-5 text-gray-950" />
                <span>Book Service Online</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-white bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 hover:border-[#38BDF8]/60 shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-base group"
              >
                <span>Browse 50+ Services</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:9903312856"
                className="w-full sm:w-auto px-5 py-4 rounded-xl font-semibold text-[#38BDF8] bg-sky-950/60 hover:bg-sky-900/60 border border-sky-500/40 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#38BDF8]" />
                <span>9903312856</span>
              </a>
            </div>

            {/* Bullet Proof Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Zero Red Tape & Delay</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Official KMC Center</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Doorstep & Office Visit</span>
              </div>
            </div>
          </div>

          {/* Right Visual Emblem Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl bg-gray-950/90 border border-gray-800/90 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden group hover:border-[#38BDF8]/40 transition-all duration-500">
              {/* Outer decorative neon lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Logo Presentation Card */}
              <div className="flex flex-col items-center text-center space-y-6">
                <SounivexLogo size="xl" showText={false} />

                <div>
                  <h3 
                    className="text-2xl sm:text-3xl font-serif font-black tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#CA8A04]"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    SOUNIVEX
                  </h3>
                  <div 
                    className="text-xs sm:text-sm font-serif font-bold tracking-[0.28em] text-[#38BDF8] mt-1"
                    style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                  >
                    ENTERPRISES
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Baghajatin S.P.D. Block, KMC Market Complex, Kolkata
                  </p>
                </div>

                {/* Micro Service Highlights Badges */}
                <div className="w-full grid grid-cols-2 gap-2.5 pt-2 text-left">
                  <div className="p-2.5 rounded-lg bg-gray-900/90 border border-gray-800">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Government</div>
                    <div className="text-xs font-bold text-white mt-0.5">Passport, PAN & ID</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/90 border border-gray-800">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Legal & Tax</div>
                    <div className="text-xs font-bold text-[#D4AF37] mt-0.5">GST & Trade License</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/90 border border-gray-800">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Financing</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">Mudra & Business Loan</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-900/90 border border-gray-800">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Technology</div>
                    <div className="text-xs font-bold text-[#38BDF8] mt-0.5">IT & Laptop Chip Repair</div>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="flex items-center gap-1.5 pt-2 text-xs text-gray-300">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9 / 5.0</span>
                  <span className="text-gray-500">(500+ Local Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
