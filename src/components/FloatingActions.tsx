import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      {/* WhatsApp Quick Pill */}
      <a
        href="https://wa.me/919903312856?text=Hello%20Sounivex%20Enterprises,%20I%20need%20assistance%20with%20your%20services"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95"
        title="Chat on WhatsApp (9903312856)"
      >
        <MessageSquare className="w-4 h-4 fill-gray-950 text-gray-950" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:9903312856"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#38BDF8] hover:bg-[#7dd3fc] text-gray-950 font-bold text-xs shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all hover:scale-105 active:scale-95"
        title="Call 9903312856"
      >
        <Phone className="w-4 h-4 fill-gray-950 text-gray-950" />
        <span className="hidden sm:inline">Call 9903312856</span>
      </a>
    </aside>
  );
};
export default FloatingActions;
