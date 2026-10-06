import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import BookingModule from './components/BookingModule';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LogoManagerModal from './components/LogoManagerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bookingCategory, setBookingCategory] = useState<string>('');
  const [bookingService, setBookingService] = useState<string>('');
  const [isLogoManagerOpen, setIsLogoManagerOpen] = useState<boolean>(false);

  // Scroll to section helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pre-fill booking form and scroll to it
  const handleSelectServiceForBooking = (categoryTitle: string, serviceName?: string) => {
    setBookingCategory(categoryTitle);
    if (serviceName) {
      setBookingService(serviceName);
    }
    handleNavigate('booking');
  };

  // Intersection observer to track active section while scrolling
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'booking', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-[#38BDF8] selection:text-gray-950 antialiased">
      {/* Fixed Navigation Bar with exact requested menu items */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onOpenLogoManager={() => setIsLogoManagerOpen(true)}
      />

      {/* Main Content Body */}
      <main>
        {/* 1. Home / Hero Section with background visual banner */}
        <Hero 
          onNavigate={handleNavigate} 
        />

        {/* 2. About Us - Comprehensive company details, mission, vision & eagle philosophy */}
        <AboutUs />

        {/* 3. Services - Organized by category with search, icons & book now links */}
        <ServicesSection 
          onSelectServiceForBooking={handleSelectServiceForBooking} 
        />

        {/* 4. Book Online - Category select & auto email to sounivexenterprises@gmail.com */}
        <BookingModule 
          initialCategory={bookingCategory}
          initialService={bookingService}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* 5. Contact Us - Interactive form to sounivexenterprises@gmail.com + Google Maps */}
        <ContactUs />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenLogoManager={() => setIsLogoManagerOpen(true)}
      />

      {/* Quick Mobile Action Buttons (WhatsApp & Call) */}
      <FloatingActions onBookClick={() => handleNavigate('booking')} />

      {/* Customizable Logo Manager Modal */}
      <LogoManagerModal 
        isOpen={isLogoManagerOpen} 
        onClose={() => setIsLogoManagerOpen(false)} 
      />
    </div>
  );
}
