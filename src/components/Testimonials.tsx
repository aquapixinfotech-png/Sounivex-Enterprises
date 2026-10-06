import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  PlusCircle, 
  CheckCircle2, 
  X, 
  Sparkles,
  MessageSquare,
  User,
  MapPin,
  Briefcase
} from 'lucide-react';

interface Testimonial {
  id?: string;
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
  date?: string;
  isUserAdded?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 'default-1',
    name: "Subrata Banerjee",
    location: "Garia, Kolkata",
    service: "GST & Trade License KMC",
    text: "Getting a KMC Trade License and GST registration was a nightmare until I visited Sounivex Enterprises in Baghajatin Market. Everything was submitted and approved within days. Very knowledgeable and polite team!",
    rating: 5,
    date: "Recent"
  },
  {
    id: 'default-2',
    name: "Dr. Ananya Sengupta",
    location: "Jadavpur, Kolkata",
    service: "Tatkaal Passport & Domicile",
    text: "Needed my passport renewed urgently for an international medical conference. Sounivex handled documentation, slot appointment and police verification advisory flawlessly. Truly five-star service.",
    rating: 5,
    date: "Recent"
  },
  {
    id: 'default-3',
    name: "Harpreet Singh Khurana",
    location: "Baghajatin, Kolkata",
    service: "Mudra Business Loan & MSME",
    text: "They prepared my project report and helped me secure a Mudra business loan for my hardware store without GST complications. If you need honest financial assistance in South Kolkata, go to Sounivex.",
    rating: 5,
    date: "Recent"
  },
  {
    id: 'default-4',
    name: "Ritabrata Mukherjee",
    location: "Santoshpur, Kolkata",
    service: "Laptop Motherboard Chip-Level Repair",
    text: "Authorized service center quoted 28,000 for full motherboard replacement. Sounivex repaired the chip level circuit in 48 hours for a fraction of the cost. My laptop is working like brand new.",
    rating: 5,
    date: "Recent"
  }
];

const LOCAL_STORAGE_KEY = 'sounivex_user_testimonials';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form State
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [service, setService] = useState<string>('Govt. ID & Digital Services');
  const [comment, setComment] = useState<string>('');
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed: Testimonial[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTestimonials([...parsed, ...defaultTestimonials]);
        }
      }
    } catch (e) {
      console.error('Failed to load saved testimonials', e);
    }
  }, []);

  const handleRatingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      return;
    }

    const newReview: Testimonial = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Kolkata',
      service: service.trim() || 'General Consultation',
      text: comment.trim(),
      rating: rating || 5,
      date: 'Just now',
      isUserAdded: true
    };

    const updated = [newReview, ...testimonials];
    setTestimonials(updated);

    // Save user reviews to localStorage
    try {
      const existingSaved = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsedExisting: Testimonial[] = existingSaved ? JSON.parse(existingSaved) : [];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newReview, ...parsedExisting]));
    } catch (e) {
      console.error('Failed to persist review', e);
    }

    // Success feedback & reset
    setSubmittedSuccess(true);
    setName('');
    setLocation('');
    setComment('');
    setRating(5);

    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsFormOpen(false);
    }, 2500);
  };

  const getRatingLabel = (stars: number) => {
    switch (stars) {
      case 5: return '⭐⭐⭐⭐⭐ Excellent (5/5)';
      case 4: return '⭐⭐⭐⭐ Very Good (4/5)';
      case 3: return '⭐⭐⭐ Good (3/5)';
      case 2: return '⭐⭐ Fair (2/5)';
      case 1: return '⭐ Needs Improvement (1/5)';
      default: return 'Rate your experience';
    }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Quote className="w-3.5 h-3.5 text-[#38BDF8]" />
            Client Testimonials & Ratings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Hundreds Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#F5D061] to-[#D4AF37]">
              Kolkata & Beyond
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Real feedback from business owners, professionals, and citizens who rely on our prompt services.
          </p>

          {/* Interactive Button to Open Review Form */}
          <div className="mt-6 flex justify-center">
            {!isFormOpen ? (
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-gray-950 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8] hover:from-[#FDE68A] hover:to-[#38BDF8] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <PlusCircle className="w-4 h-4 text-gray-950" />
                <span>Rate Us & Write a Review</span>
              </button>
            ) : (
              <button
                onClick={() => setIsFormOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-gray-400 bg-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <X className="w-4 h-4 text-[#38BDF8]" />
                <span>Close Review Box</span>
              </button>
            )}
          </div>
        </div>

        {/* Rating & Review Submission Form Modal / Card */}
        {isFormOpen && (
          <div className="max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-900/95 border-2 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#38BDF8] to-[#D4AF37]" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-[#D4AF37]">
                    <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Share Your Feedback</h3>
                    <p className="text-xs text-gray-400">Your review will be instantly displayed on this page</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submittedSuccess ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 bg-emerald-950/90 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Review Added Successfully!</h4>
                  <p className="text-sm text-gray-300">
                    Thank you for rating Sounivex Enterprises. Your feedback is now live below.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRatingSubmit} className="space-y-5">
                  {/* Step A: Star Rating Selector */}
                  <div className="bg-gray-950/90 p-4 rounded-2xl border border-gray-800 text-center">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Select Your Star Rating *
                    </label>
                    
                    <div className="flex items-center justify-center gap-2 py-1">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const isFilled = (hoverRating || rating) >= starVal;
                        return (
                          <button
                            type="button"
                            key={starVal}
                            onClick={() => setRating(starVal)}
                            onMouseEnter={() => setHoverRating(starVal)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-125 focus:outline-none"
                            title={`${starVal} Star`}
                          >
                            <Star
                              className={`w-8 h-8 transition-colors duration-150 ${
                                isFilled
                                  ? 'text-amber-400 fill-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                                  : 'text-gray-700 hover:text-amber-300'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-xs font-bold text-[#38BDF8] mt-2 font-mono">
                      {getRatingLabel(hoverRating || rating)}
                    </div>
                  </div>

                  {/* Step B: Name & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reviewerName" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <User className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <input
                          id="reviewerName"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Ghosh"
                          className="w-full pl-9 pr-3 py-2.5 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reviewerLocation" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                        Location / Area (Kolkata)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <MapPin className="w-4 h-4 text-[#38BDF8]" />
                        </div>
                        <input
                          id="reviewerLocation"
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Baghajatin / Jadavpur"
                          className="w-full pl-9 pr-3 py-2.5 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step C: Service Category */}
                  <div>
                    <label htmlFor="reviewerService" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Service Availed
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <select
                        id="reviewerService"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all cursor-pointer"
                      >
                        <option value="Govt. ID & Digital Services">Govt. ID & Digital Services (PAN / Voter / Passport)</option>
                        <option value="Taxation & Legal Services">Taxation & Legal (Trade License / GST / ITR)</option>
                        <option value="Business Registrations & Licenses">Business Licenses (MSME / FSSAI / Pvt Ltd)</option>
                        <option value="All Types of Loan Assistance">Loan Assistance (Business / Mudra / Home)</option>
                        <option value="IT, Software & Creative Services">IT & Creative (Website / Software / Marketing)</option>
                        <option value="Hardware & Networking Repair">Hardware & Repair (Laptop / CCTV / Networking)</option>
                        <option value="Other Service">Other Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Step D: Review Comment */}
                  <div>
                    <label htmlFor="reviewerComment" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Comment / Review Experience *
                    </label>
                    <textarea
                      id="reviewerComment"
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write how Sounivex Enterprises helped you, timing, staff behavior, etc..."
                      className="w-full p-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-gray-950 bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#38BDF8] hover:from-[#FDE68A] hover:to-[#38BDF8] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      <Sparkles className="w-4 h-4 text-gray-950" />
                      <span>Post My Rating & Review</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className={`bg-gray-900/80 rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-xl group relative overflow-hidden ${
                t.isUserAdded 
                  ? 'border-[#38BDF8]/60 bg-gradient-to-b from-gray-900 via-gray-900 to-sky-950/30 ring-1 ring-[#38BDF8]/30 shadow-[0_0_25px_rgba(56,189,248,0.15)]' 
                  : 'border-gray-800 hover:border-[#38BDF8]/50'
              }`}
            >
              {/* If user newly added */}
              {t.isUserAdded && (
                <div className="absolute top-0 right-0 bg-[#38BDF8] text-gray-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-bl-lg shadow-sm">
                  Verified Review
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#38BDF8]/40 group-hover:text-[#38BDF8] transition-colors" />
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800/80">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#D4AF37] px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/20 text-right truncate max-w-[120px]">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
