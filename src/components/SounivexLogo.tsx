import React, { useState, useEffect } from 'react';
import { getActiveLogoUrl } from '../config/siteConfig';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SounivexLogo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md'
}) => {
  const [customLogo, setCustomLogo] = useState<string>('');

  useEffect(() => {
    // Initial fetch
    setCustomLogo(getActiveLogoUrl());

    // Listen for custom logo updates
    const handleUpdate = () => {
      setCustomLogo(getActiveLogoUrl());
    };

    window.addEventListener('sounivex-logo-updated', handleUpdate);
    return () => window.removeEventListener('sounivex-logo-updated', handleUpdate);
  }, []);

  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }[size];

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm'
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Emblem Frame with thin deep-sky-blue border */}
      <div 
        className={`${iconDimensions} relative shrink-0 rounded-sm bg-black border border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)] flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 hover:scale-105`}
      >
        {customLogo ? (
          /* Custom Uploaded / Configured Logo */
          <img 
            src={customLogo} 
            alt="Sounivex Enterprises Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* Default SVG Vector Emblem */
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Inner ambient glow */}
            <circle cx="100" cy="100" r="90" fill="url(#logoGlow)" opacity="0.15" />
            
            <defs>
              <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              
              {/* Gold gradient for SE Monogram */}
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D061" />
                <stop offset="45%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#C59B27" />
                <stop offset="100%" stopColor="#E6C252" />
              </linearGradient>

              {/* Deep Sky Blue Gradient for Eagle */}
              <linearGradient id="eagleBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="40%" stopColor="#0EA5E9" />
                <stop offset="80%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#7DD3FC" />
              </linearGradient>

              {/* Wing Feather Gradient */}
              <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>

            {/* Letter 'E' background serif */}
            <path
              d="M 90 28 H 175 V 50 H 135 V 88 H 168 V 108 H 135 V 148 H 175 V 170 H 90 Z"
              fill="url(#goldGrad)"
            />

            {/* Letter 'S' intertwined in front */}
            <path
              d="M 132 46 C 120 32 100 24 76 24 C 44 24 24 42 24 68 C 24 94 44 106 72 114 C 98 122 112 128 112 142 C 112 154 100 162 82 162 C 60 162 42 150 32 136 L 16 154 C 30 174 54 184 82 184 C 118 184 138 166 138 138 C 138 110 118 98 88 90 C 64 82 50 76 50 64 C 50 54 60 46 76 46 C 94 46 110 54 120 66 Z"
              fill="url(#goldGrad)"
            />

            {/* Eagle / Soaring Bird in Deep Sky Blue */}
            <g transform="translate(18, 55) scale(0.65)">
              {/* Left/Rear Wing Feathers */}
              <path
                d="M 50 85 C 38 60 18 35 0 20 C 14 36 22 54 26 72 C 18 56 8 42 -4 34 C 8 50 18 70 20 84 C 10 70 0 60 -10 54 C 2 72 12 90 18 104 Z"
                fill="url(#featherGrad)"
              />
              
              {/* Primary Spread Wing in Deep Sky Blue */}
              <path
                d="M 38 78 C 30 52 14 24 0 0 C 18 18 32 40 40 64 C 42 42 36 22 28 8 C 42 26 50 48 54 70 C 58 52 56 36 50 20 C 62 38 68 62 68 84 C 74 68 76 50 74 36 C 82 54 84 76 82 96 C 88 80 92 64 92 50 C 98 70 96 92 90 110 L 70 116 Z"
                fill="url(#eagleBlueGrad)"
              />
              
              {/* Eagle Body & Torso */}
              <path
                d="M 50 80 C 65 72 82 74 98 86 C 108 94 116 106 120 120 C 114 128 102 134 90 134 C 74 134 62 126 54 114 C 48 102 46 90 50 80 Z"
                fill="url(#eagleBlueGrad)"
              />

              {/* White/Ice Blue Head & Crest */}
              <path
                d="M 96 86 C 104 80 114 80 124 84 C 130 87 134 92 136 98 C 132 102 124 104 118 104 C 110 104 102 98 96 86 Z"
                fill="#FFFFFF"
              />
              
              {/* Eagle Beak - Gold / Amber */}
              <path
                d="M 134 94 L 146 98 L 134 104 Z"
                fill="#F59E0B"
              />

              {/* Eye accent */}
              <circle cx="124" cy="92" r="2.5" fill="#000000" />
              <circle cx="125" cy="91" r="0.8" fill="#F59E0B" />

              {/* White Tail Feathers */}
              <path
                d="M 34 116 C 26 126 18 140 12 152 C 20 144 30 138 42 134 C 32 144 24 158 20 170 C 30 158 42 150 54 144 C 44 156 38 168 36 180 C 48 168 62 158 72 150 L 64 126 Z"
                fill="#E0F2FE"
              />
              
              {/* Golden Talons / Feet */}
              <path
                d="M 58 138 L 54 152 M 64 138 L 64 154 M 70 136 L 74 150"
                stroke="#F59E0B"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
      </div>

      {/* Full Company Name */}
      {showText && (
        <div className="flex flex-col tracking-wider">
          <span 
            className={`font-serif font-black tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#CA8A04] leading-tight ${titleSizes}`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif" }}
          >
            SOUNIVEX
          </span>
          <span 
            className={`font-serif font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-[#E2E8F0] via-[#38BDF8] to-[#93C5FD] leading-none ${subSizes} mt-0.5`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif" }}
          >
            ENTERPRISES
          </span>
        </div>
      )}
    </div>
  );
};
export default SounivexLogo;
