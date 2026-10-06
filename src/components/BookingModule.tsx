import React, { useState, useEffect } from 'react';
import { serviceCategories } from '../data/servicesData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  MessageSquare, 
  Send,
  Building,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface BookingModuleProps {
  initialCategory?: string;
  initialService?: string;
}

export const BookingModule: React.FC<BookingModuleProps> = ({ 
  initialCategory = '', 
  initialService = '' 
}) => {
  const [category, setCategory] = useState<string>(initialCategory || serviceCategories[0].title);
  const [specificService, setSpecificService] = useState<string>(initialService);
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('Morning (10:00 AM - 1:00 PM)');
  const [consultationMode, setConsultationMode] = useState<string>('Visit Baghajatin Office');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingSummary, setBookingSummary] = useState<any>(null);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialService) {
      setSpecificService(initialService);
    }
  }, [initialService]);

  // Find active category items
  const activeCategoryObj = serviceCategories.find(c => c.title === category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const summary = {
      fullName,
      phoneNumber,
      emailAddress: emailAddress || 'Not provided',
      category,
      specificService: specificService || 'General Consultation in this category',
      preferredDate: preferredDate || 'Flexible / As soon as possible',
      timeSlot,
      consultationMode,
      notes: notes || 'None',
      submittedAt: new Date().toLocaleString()
    };

    setBookingSummary(summary);
    setSubmitted(true);

    // Construct Mailto targeting sounivexenterprises@gmail.com
    const subject = encodeURIComponent(`[New Booking Request] ${category} - ${fullName}`);
    const emailBody = encodeURIComponent(
`SOUNIVEX ENTERPRISES - CLIENT SERVICE BOOKING
===================================================
Client Name       : ${summary.fullName}
Phone Number      : ${summary.phoneNumber}
Email Address     : ${summary.emailAddress}

Service Category  : ${summary.category}
Selected Service  : ${summary.specificService}
Preferred Date    : ${summary.preferredDate}
Preferred Time    : ${summary.timeSlot}
Consultation Mode : ${summary.consultationMode}

Additional Notes / Requirements:
${summary.notes}

Submitted On      : ${summary.submittedAt}
===================================================
Direct Office: Baghajatin KMC Market Complex, Kolkata - 700086
Helpline: +91 9903312856`
    );

    // Open user's email client directly pre-filled to sounivexenterprises@gmail.com
    const mailtoUrl = `mailto:sounivexenterprises@gmail.com?subject=${subject}&body=${emailBody}`;
    
    // Trigger email client
    const mailLink = document.createElement('a');
    mailLink.href = mailtoUrl;
    mailLink.target = '_blank';
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
  };

  const getWhatsAppBookingUrl = () => {
    if (!bookingSummary) return '#';
    const text = encodeURIComponent(
`Hello Sounivex Enterprises,
I have booked an appointment online:
*Name:* ${bookingSummary.fullName}
*Phone:* ${bookingSummary.phoneNumber}
*Category:* ${bookingSummary.category}
*Service:* ${bookingSummary.specificService}
*Date:* ${bookingSummary.preferredDate} (${bookingSummary.timeSlot})
*Mode:* ${bookingSummary.consultationMode}

Please confirm my slot. Thank you!`
    );
    return `https://wa.me/919903312856?text=${text}`;
  };

  return (
    <section id="booking" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
            Easy Online Appointment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book Your Service{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#F5D061] to-[#D4AF37]">
              Online Now
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Select your required category and service. Your request will be instantly dispatched to <strong className="text-white">sounivexenterprises@gmail.com</strong> and our executive will confirm your slot.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Top color border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#38BDF8] to-[#D4AF37]" />

          {submitted && bookingSummary ? (
            <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-950/80 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="max-w-xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Booking Request Dispatched!</h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Your booking details have been prepared for <strong className="text-[#38BDF8]">sounivexenterprises@gmail.com</strong>.
                </p>
                <div className="mt-2 text-xs text-amber-300 bg-amber-950/50 border border-amber-500/30 p-3 rounded-lg inline-block text-left">
                  <div className="font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                    Email client launched on your device!
                  </div>
                  <span className="text-gray-300">If your email client didn't open automatically, you can also send this booking directly via WhatsApp for instant 10-minute confirmation.</span>
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-gray-950/90 rounded-2xl p-6 border border-gray-800 max-w-xl mx-auto text-left text-sm space-y-2.5">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Client Name:</span>
                  <strong className="text-white">{bookingSummary.fullName}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Phone:</span>
                  <strong className="text-[#38BDF8]">{bookingSummary.phoneNumber}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">{bookingSummary.category}</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Specific Service:</span>
                  <span className="text-[#D4AF37] font-semibold">{bookingSummary.specificService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Preferred Slot:</span>
                  <span className="text-gray-200">{bookingSummary.preferredDate} ({bookingSummary.timeSlot})</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-gray-950 bg-[#38BDF8] hover:bg-[#7dd3fc] shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Service Selection */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#38BDF8] text-gray-950 text-xs font-black flex items-center justify-center">1</span>
                  Select Your Service
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Dropdown */}
                  <div>
                    <label htmlFor="bookingCategory" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Service Category *
                    </label>
                    <select
                      id="bookingCategory"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        setSpecificService('');
                      }}
                      required
                      className="w-full bg-gray-950 border border-gray-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all cursor-pointer"
                    >
                      {serviceCategories.map((c) => (
                        <option key={c.id} value={c.title} className="bg-gray-950 text-white py-1">
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Specific Service Dropdown */}
                  <div>
                    <label htmlFor="bookingSpecificService" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Specific Service Item
                    </label>
                    <select
                      id="bookingSpecificService"
                      value={specificService}
                      onChange={(e) => setSpecificService(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all cursor-pointer"
                    >
                      <option value="">Select specific service (or choose general consultation)</option>
                      {activeCategoryObj?.items.map((item) => (
                        <option key={item.id} value={item.name} className="bg-gray-950 text-white py-1">
                          {item.name}
                        </option>
                      ))}
                      <option value="Custom / Unlisted Service Request">Other / Custom Service Inquiry</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-gray-950 text-xs font-black flex items-center justify-center">2</span>
                  Your Contact Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="bookingFullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="bookingFullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sourav Mukherjee"
                        className="w-full pl-10 pr-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bookingPhone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="bookingPhone"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. 9903312856"
                        className="w-full pl-10 pr-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bookingEmail" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="bookingEmail"
                        type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="e.g. yourname@gmail.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Date, Time & Consultation Mode */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#38BDF8] text-gray-950 text-xs font-black flex items-center justify-center">3</span>
                  Appointment Slot & Mode
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="bookingDate" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="bookingDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="bookingTimeSlot" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      id="bookingTimeSlot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                      <option value="Anytime / Earliest Slot">Anytime / Earliest Slot</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bookingMode" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Meeting Preference
                    </label>
                    <select
                      id="bookingMode"
                      value={consultationMode}
                      onChange={(e) => setConsultationMode(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    >
                      <option value="Visit Baghajatin Office">Visit Baghajatin KMC Office</option>
                      <option value="Online / Phone Consultation">Online / Phone Consultation</option>
                      <option value="Document Pickup (Doorstep Kolkata)">Document Pickup (Doorstep)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="bookingNotes" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Additional Details or Existing Document Notes
                </label>
                <textarea
                  id="bookingNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention any specific issue (e.g. urgent passport renewal, need Mudra loan project report, laptop motherboard display issue)..."
                  className="w-full p-4 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                />
              </div>

              {/* Submission Notice & Button */}
              <div className="pt-4 border-t border-gray-800 space-y-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Submitting sends your request directly to <strong className="text-white">sounivexenterprises@gmail.com</strong> with automated priority routing.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl font-extrabold text-base sm:text-lg text-gray-950 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8] hover:from-[#FDE68A] hover:to-[#38BDF8] shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99]"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Booking to sounivexenterprises@gmail.com</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default BookingModule;
