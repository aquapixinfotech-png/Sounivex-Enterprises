import React from 'react';
import SounivexLogo from './SounivexLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { serviceCategories } from '../data/servicesData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLogoManager?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLogoManager }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-300 relative overflow-hidden">
      {/* Top micro decorative gold/cyan strip */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#38BDF8] to-[#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <SounivexLogo size="lg" />

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              SOUNIVEX ENTERPRISES is your verified multi-disciplinary consultancy in South Kolkata. Providing citizens and corporate enterprises with quick, transparent, and single-window documentation, taxation, licenses, loans, web apps, and hardware solutions.
            </p>

            {/* Address */}
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 pt-2 border-t border-gray-900">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white">Address:</strong> BAGHAJATIN S.P.D. BLOCK, KMC MARKET COMPLEX, UNIT-3, 1ST FLOOR, SHOP NO. 13, BAGHAJATIN STATION ROAD, KOLKATA - 700086
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  <strong className="text-white">Helpline / WhatsApp:</strong>{' '}
                  <a href="tel:9903312856" className="text-[#D4AF37] hover:underline font-mono">
                    9903312856
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:sounivexenterprises@gmail.com" className="text-[#38BDF8] hover:underline">
                    sounivexenterprises@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#38BDF8]" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#38BDF8]" />
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#38BDF8]" />
                  Services Directory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('booking')} 
                  className="text-[#D4AF37] font-semibold hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  Book Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#38BDF8]" />
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Key Services Categories */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2">
              Our Service Domains
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
              {serviceCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onNavigate('services')}
                  className="text-left py-1 hover:text-[#38BDF8] transition-colors flex items-center gap-1.5 truncate"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="truncate">{c.title}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gray-950 border border-gray-800/80 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Need Immediate Help?</div>
                <div className="text-[11px] text-gray-400">Chat directly with our coordinator</div>
              </div>
              <a
                href="https://wa.me/919903312856?text=Hello%20Sounivex%20Enterprises"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#38BDF8] text-gray-950 font-bold text-xs hover:bg-[#7dd3fc] transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-gray-300">SOUNIVEX ENTERPRISES</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {onOpenLogoManager && (
              <button
                onClick={onOpenLogoManager}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-[#38BDF8] border border-gray-800 transition-colors text-xs"
                title="Change or upload company logo"
              >
                <span>⚙️ Customize Logo</span>
              </button>
            )}
            <span>Baghajatin Market Complex, Kolkata</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
