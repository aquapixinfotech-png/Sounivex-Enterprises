import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  CheckCircle, 
  Compass, 
  Clock, 
  Building,
  Target
} from 'lucide-react';
import SounivexLogo from './SounivexLogo';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Banner with low opacity and high-contrast dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity filter blur-[1px]"
        style={{ backgroundImage: `url('/src/assets/images/about_corporate_bg_1791206821236.jpg')` }}
      />
      
      {/* Gradient Vignettes to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
            About Sounivex Enterprises
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Trusted Multi-Disciplinary <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8]">
              Business, Legal & Tech Partner
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Headquartered in <strong className="text-white">Baghajatin, Kolkata</strong>, Sounivex Enterprises is Bengal’s premier single-window enterprise hub, delivering flawless citizen paperwork, legal taxation, business incorporation, banking credit, and cutting-edge IT infrastructure under one roof.
          </p>
        </div>

        {/* Narrative & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: The Sounivex Philosophy & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-900/80 border border-gray-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#D4AF37]"></span>
                The Sounivex Vision: Precision, Speed & Integrity
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Navigating government offices, municipal clearances, complicated GST filings, bank loans, and corporate compliance can be overwhelming for individuals and business owners alike. 
                <strong className="text-white"> Sounivex Enterprises</strong> was founded with a clear mission: <em>to completely eliminate red tape, procedural delays, and bureaucratic confusion</em>.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-4">
                Whether you are an ordinary citizen applying for an urgent Passport, PAN or Land Mutation, a startup owner seeking MSME, FSSAI, or Pvt. Ltd. company incorporation, or an established trader requiring chip-level hardware repair and modern software development — our veteran specialists deliver end-to-end solutions with zero hassle.
              </p>

              {/* The Soaring Eagle Concept */}
              <div className="mt-6 p-4 rounded-xl bg-gray-950/70 border border-[#38BDF8]/30 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-950 text-[#38BDF8] shrink-0 border border-sky-500/30">
                  <Target className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Eagle Symbolism in Our Logo</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">
                    The deep sky-blue soaring eagle in our emblem represents our core values: razor-sharp vision to identify client requirements, fearless agility to cut through bureaucracy, and elevated execution standards that set our clients above the ordinary.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#D4AF37]">
                  50+
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">Services Covered</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#38BDF8]">
                  5,000+
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">Happy Clients</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                  99.8%
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1">Approval Success</div>
              </div>
            </div>
          </div>

          {/* Right: Why Choose Sounivex (High-contrast value cards) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-950 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    Official Baghajatin KMC Center
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Walk in directly to our physical center at Baghajatin KMC Market Complex, Unit-3, Shop 13 for in-person consultation and document verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-950 border border-gray-800 hover:border-[#38BDF8]/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-sky-950/40 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    100% Legal & Data Privacy
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Strict confidentiality for your confidential personal Aadhaar, PAN, financial statements, and business documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-950 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    Fast-Track Processing
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Direct online portal links and experienced liaison officers guarantee zero unnecessary delays in approvals and certificates.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-gray-900/90 to-gray-950 border border-gray-800 hover:border-[#38BDF8]/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-sky-950/40 border border-[#38BDF8]/30 text-[#38BDF8] group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    End-to-End Online & Offline Support
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Book online, submit details via WhatsApp/Email, or visit us in person. We handle everything from drafting to final delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Domains Showcase */}
        <div className="rounded-2xl p-8 bg-gray-900/70 border border-gray-800 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-white">Govt. Certifications & Identity</h5>
                <p className="text-xs text-gray-400 mt-0.5">Aadhaar, Passport, PAN, Birth, Marriage, Domicile & RTO licenses.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-white">Commercial Taxation & Corporate</h5>
                <p className="text-xs text-gray-400 mt-0.5">GST, Income Tax, Trade License, MSME, FSSAI & Pvt Ltd formation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-white">Finance, IT & Tech Infrastructure</h5>
                <p className="text-xs text-gray-400 mt-0.5">Mudra/Business loans, Web apps, Marketing, Laptop chip-level & CCTV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
