import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Check, 
  RotateCcw, 
  Sparkles, 
  Info, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { 
  getActiveLogoUrl, 
  setActiveLogoUrl, 
  siteConfig 
} from '../config/siteConfig';

interface LogoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoManagerModal: React.FC<LogoManagerModalProps> = ({ isOpen, onClose }) => {
  const [currentLogo, setCurrentLogo] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [urlInput, setUrlInput] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const active = getActiveLogoUrl();
      setCurrentLogo(active);
      setPreviewUrl(active);
      setUrlInput(active.startsWith('data:') ? '' : active);
      setSaveSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, SVG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPreviewUrl(result);
        setUrlInput('');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyLogo = () => {
    const targetUrl = previewUrl || urlInput.trim();
    setActiveLogoUrl(targetUrl);
    setCurrentLogo(targetUrl);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    setActiveLogoUrl('');
    setCurrentLogo('');
    setPreviewUrl('');
    setUrlInput('');
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-gray-900 border-2 border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#38BDF8] to-[#D4AF37]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/30 text-[#D4AF37]">
              <ImageIcon className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Customize Company Logo</h3>
              <p className="text-xs text-gray-400">Upload or replace the SOUNIVEX logo anytime</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6">
          {/* Current / Preview Display */}
          <div className="p-5 rounded-2xl bg-gray-950 border border-gray-800 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Live Logo Preview
            </div>

            <div className="flex items-center justify-center gap-6 py-2">
              {/* Navbar Preview Size */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 rounded-sm bg-black border border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.3)] flex items-center justify-center p-1 overflow-hidden">
                  {previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt="Logo Preview" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-[10px] text-amber-400 font-serif font-black">SE</div>
                  )}
                </div>
                <span className="text-[10px] text-gray-500 font-mono">Navbar (Small)</span>
              </div>

              {/* Large Card Preview Size */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-24 h-24 rounded-lg bg-black border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center p-2 overflow-hidden">
                  {previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt="Logo Preview Large" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-xl text-[#D4AF37] font-serif font-black">SE</div>
                      <div className="text-[8px] text-[#38BDF8] font-bold">SOUNIVEX</div>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-500 font-mono">Hero Display (Large)</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              {previewUrl 
                ? 'Custom Logo selected! Click "Save & Apply Logo" to update the whole website.' 
                : 'Currently using the original gold & deep sky-blue vector eagle logo.'}
            </p>
          </div>

          {/* Option A: Upload from Device */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Method 1: Upload Image File (From Computer / Mobile)
            </label>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/png, image/jpeg, image/svg+xml, image/webp" 
              className="hidden" 
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3.5 px-4 rounded-xl border border-dashed border-[#38BDF8]/60 bg-sky-950/30 hover:bg-sky-900/40 text-[#38BDF8] text-sm font-semibold flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Choose Image File (PNG, JPG, SVG, WebP)</span>
            </button>
          </div>

          {/* Option B: Enter URL */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Method 2: Or Paste Image URL / Hosted Path
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                placeholder="e.g. /logo.png or https://example.com/logo.png"
                className="flex-1 px-4 py-2.5 bg-gray-950 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
              />
              <button
                type="button"
                onClick={() => setPreviewUrl(urlInput.trim())}
                className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold rounded-xl"
              >
                Preview
              </button>
            </div>
          </div>

          {/* Hosting Guide Box */}
          <div className="p-3.5 rounded-xl bg-gray-950/80 border border-gray-800 text-xs text-gray-400 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-amber-300">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              Permanent Hosting Tip (ওয়েবসাইট আপলোডের সময়):
            </div>
            <p className="leading-relaxed">
              যখন ওয়েবসাইট কোনো হোস্টিংয়ে আপলোড করবেন, আপনি আপনার লোগো ফাইলটি <code className="text-[#38BDF8] bg-gray-900 px-1 py-0.5 rounded">public/logo.png</code> হিসেবে সেভ করতে পারেন অথবা <code className="text-[#38BDF8] bg-gray-900 px-1 py-0.5 rounded">src/config/siteConfig.ts</code> ফাইলে <code className="text-amber-300">customLogoUrl: "/logo.png"</code> লিখে দিতে পারেন।
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleApplyLogo}
              disabled={saveSuccess}
              className="w-full sm:flex-1 py-3 px-6 rounded-xl font-bold text-gray-950 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8] hover:from-[#FDE68A] hover:to-[#38BDF8] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-gray-950" />
                  <span>Logo Applied Successfully!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-gray-950" />
                  <span>Save & Apply Logo</span>
                </>
              )}
            </button>

            {currentLogo && (
              <button
                type="button"
                onClick={handleResetToDefault}
                className="w-full sm:w-auto py-3 px-4 rounded-xl font-medium text-xs text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoManagerModal;
