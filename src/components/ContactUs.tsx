import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  Navigation,
  ShieldCheck
} from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(`[Website Contact Inquiry] ${subject || 'General Inquiry'} - ${name}`);
    const emailBody = encodeURIComponent(
`SOUNIVEX ENTERPRISES - CLIENT INQUIRY
===================================================
Name          : ${name}
Phone         : ${phone}
Email         : ${email || 'Not provided'}
Subject       : ${subject}

Message:
${message}

Submitted On  : ${new Date().toLocaleString()}
===================================================`
    );

    setIsSent(true);

    // Open email to sounivexenterprises@gmail.com
    const mailtoUrl = `mailto:sounivexenterprises@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    const mailLink = document.createElement('a');
    mailLink.href = mailtoUrl;
    mailLink.target = '_blank';
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
`Hello Sounivex Enterprises,
My name is ${name || 'Client'}.
Inquiry: ${message || subject || 'I want to know about your services.'}
Please connect with me.`
    );
    return `https://wa.me/919903312856?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Banner with low opacity and high-contrast dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity filter blur-[2px]"
        style={{ backgroundImage: `url('/src/assets/images/about_corporate_bg_1791206821236.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950 pointer-events-none" />

      {/* Deep sky blue & gold ambient lights */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
            Get In Touch & Visit Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8]">
              Sounivex Enterprises
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Have questions regarding Govt certificates, GST, Company incorporation, loans, or laptop repair? Visit our Baghajatin center or send us a direct message.
          </p>
        </div>

        {/* 2-Column Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Column 1: Contact Details & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 shadow-xl relative overflow-hidden group hover:border-[#38BDF8]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-sky-950/60 border border-[#38BDF8]/30 text-[#38BDF8] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                    Our Registered Office Address
                  </h4>
                  <p className="text-sm text-gray-300 font-semibold leading-relaxed">
                    SOUNIVEX ENTERPRISES
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
                    BAGHAJATIN S.P.D. BLOCK, KMC MARKET COMPLEX,<br />
                    UNIT-3, 1ST FLOOR, SHOP NO. 13,<br />
                    BAGHAJATIN STATION ROAD, KOLKATA - 700086
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-800/80">
                    <a
                      href="https://maps.google.com/?q=Baghajatin+KMC+Market+Complex+Kolkata+700086"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Get Driving Directions via Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 shadow-xl group hover:border-[#D4AF37]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-500/30 text-[#D4AF37] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="text-base font-bold text-white mb-1">
                    Call / WhatsApp Helpline
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">
                    Direct communication with Senior Executive
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <a
                      href="tel:9903312856"
                      className="text-lg sm:text-xl font-bold font-mono text-[#D4AF37] hover:text-white transition-colors"
                    >
                      +91 9903312856
                    </a>
                    <a
                      href="https://wa.me/919903312856?text=Hello%20Sounivex%20Enterprises"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950 text-[#38BDF8] border border-sky-500/40 text-xs font-semibold hover:bg-sky-900 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 shadow-xl group hover:border-[#38BDF8]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-sky-950/60 border border-[#38BDF8]/30 text-[#38BDF8] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Official Email Support
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">
                    Send documents, tender inquiries & partnership proposals
                  </p>
                  <a
                    href="mailto:sounivexenterprises@gmail.com"
                    className="text-sm sm:text-base font-semibold text-[#38BDF8] hover:text-white transition-colors break-all"
                  >
                    sounivexenterprises@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800/80 flex items-center gap-4 text-xs text-gray-300">
              <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <strong className="text-white">Office Working Hours:</strong>
                <div>Monday - Saturday: 10:00 AM to 8:30 PM</div>
                <div className="text-gray-400">Sunday: 10:00 AM to 2:00 PM (By prior appointment)</div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-gray-900/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#D4AF37] to-[#38BDF8]" />

            <h3 className="text-2xl font-bold text-white mb-2">Send Direct Message</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Submitting this form routes directly to <strong className="text-[#38BDF8]">sounivexenterprises@gmail.com</strong>.
            </p>

            {isSent ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-950 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Your message has been formatted and targeted to <strong className="text-white">sounivexenterprises@gmail.com</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#38BDF8] text-gray-950 font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Also send via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-lg bg-gray-800 text-gray-300 font-medium text-xs hover:bg-gray-700"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amitabha Roy"
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9903312856"
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@gmail.com"
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject / Service Needed *
                    </label>
                    <input
                      id="contactSubject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. GST Filing / Mudra Loan Inquiry"
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                    Your Message Details *
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write details of what you need assistance with..."
                    className="w-full p-4 bg-gray-950 border border-gray-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-gray-950 bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#38BDF8] hover:from-[#FDE68A] hover:to-[#38BDF8] shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message to sounivexenterprises@gmail.com</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map Component */}
        <div className="rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          <div className="p-4 sm:p-6 bg-gray-900/90 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-950 text-[#38BDF8] border border-sky-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Interactive Location Map</h4>
                <p className="text-xs text-gray-400">
                  Baghajatin S.P.D. Block, KMC Market Complex, Kolkata - 700086
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Baghajatin+KMC+Market+Complex+Baghajatin+Station+Road+Kolkata+700086"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-xs font-semibold text-[#38BDF8] hover:bg-gray-700 hover:text-white transition-all border border-gray-700"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-[360px] sm:h-[420px] bg-gray-950">
            <iframe
              title="Sounivex Enterprises Baghajatin Location"
              src="https://maps.google.com/maps?q=Baghajatin+KMC+Market+Complex,+Baghajatin+Station+Road,+Kolkata+700086&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
