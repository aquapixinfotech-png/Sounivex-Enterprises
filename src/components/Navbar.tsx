import React, { useState, useEffect } from 'react';
import SounivexLogo from './SounivexLogo';
import { Phone, Menu, X, Calendar, MessageSquare, MapPin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenLogoManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenLogoManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Online', highlight: true },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for direct contact & location in Kolkata */}
      <div className="bg-black/95 text-xs border-b border-gray-800/80 px-4 py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              Baghajatin KMC Market Complex, Kolkata - 700086
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline text-emerald-400 text-[11px] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Mon-Sat: 10AM - 8:30PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:9903312856" 
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#38BDF8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              Call: <strong className="text-white font-mono">9903312856</strong>
            </a>
            <a 
              href="mailto:sounivexenterprises@gmail.com"
              className="text-gray-400 hover:text-[#38BDF8] transition-colors hidden lg:inline"
            >
              sounivexenterprises@gmail.com
            </a>
            {onOpenLogoManager && (
              <button
                onClick={onOpenLogoManager}
                className="text-gray-400 hover:text-[#38BDF8] text-[11px] font-medium px-2 py-0.5 rounded bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors flex items-center gap-1"
                title="Customize or upload new logo"
              >
                <span>Change Logo</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-950/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-gray-800/90 py-2.5' 
            : 'bg-gradient-to-b from-gray-950/95 via-gray-950/85 to-transparent backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with full company name */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded p-1"
            >
              <SounivexLogo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-gray-900 border border-gray-700/80 shadow-inner'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900/60'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.id === 'booking' && <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />}
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#38BDF8] to-[#D4AF37] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Actions (Call & WhatsApp) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919903312856?text=Hello%20Sounivex%20Enterprises,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#38BDF8] bg-sky-950/40 border border-sky-500/30 hover:bg-sky-900/50 hover:border-sky-400 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <button
                onClick={() => handleLinkClick('booking')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-gray-950 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#C59B27] hover:from-[#FDE68A] hover:to-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-gray-950" />
                <span>Book Service</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => handleLinkClick('booking')}
                className="px-3 py-1.5 rounded-md text-xs font-bold text-gray-950 bg-[#D4AF37] hover:bg-[#F5D061]"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/80 border border-gray-700/60 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#38BDF8]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-b border-gray-800 shadow-2xl px-5 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white border-l-4 border-[#38BDF8]'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900/60'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {item.id === 'booking' && <Calendar className="w-4 h-4 text-[#38BDF8]" />}
                    {item.label}
                  </span>
                  {isActive && <span className="text-xs text-[#38BDF8] font-bold">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-800 space-y-2.5">
            <a
              href="tel:9903312856"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-900 text-white font-medium border border-gray-700/70"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call 9903312856
            </a>
            <a
              href="https://wa.me/919903312856?text=Hello%20Sounivex%20Enterprises"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-sky-950/80 text-[#38BDF8] font-medium border border-sky-500/40"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
