import React, { useState, useMemo } from 'react';
import { 
  serviceCategories, 
  ServiceCategory, 
  ServiceItem 
} from '../data/servicesData';
import { 
  IdCard, 
  Scale, 
  Building2, 
  Banknote, 
  Laptop, 
  Wrench, 
  Search, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (categoryTitle: string, serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping
  const renderCategoryIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'IdCard': return <IdCard className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Banknote': return <Banknote className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      default: return <Layers className={className} />;
    }
  };

  // Filtered categories and items
  const filteredCategories = useMemo(() => {
    return serviceCategories.map(cat => {
      // If category filter is active and doesn't match, return null
      if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) {
        return null;
      }

      // Filter items by search query if present
      if (!searchQuery.trim()) {
        return cat;
      }

      const q = searchQuery.toLowerCase();
      const catMatches = cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
      const matchingItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );

      if (catMatches || matchingItems.length > 0) {
        return {
          ...cat,
          items: catMatches && matchingItems.length === 0 ? cat.items : matchingItems
        };
      }

      return null;
    }).filter(Boolean) as ServiceCategory[];
  }, [selectedCategoryId, searchQuery]);

  const totalResultsCount = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="services" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            Complete Service Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Services Under{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#38BDF8]">
              One Single Roof
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Browse through our verified categories. Select any service to book an appointment or get instant consultation.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-12">
          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#38BDF8]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by service name (e.g. GST, Passport, Loan, Trade License, CCTV, Laptop)..."
              className="w-full pl-11 pr-4 py-3.5 bg-gray-950/90 border border-gray-800 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 rounded-xl text-white placeholder-gray-500 text-sm shadow-xl transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center px-1">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                selectedCategoryId === 'all'
                  ? 'bg-[#38BDF8] text-gray-950 border-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.4)]'
                  : 'bg-gray-950/80 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              All Categories ({serviceCategories.length})
            </button>
            {serviceCategories.map((cat) => {
              const isActive = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-gray-950 border-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.3)]'
                      : 'bg-gray-950/80 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
                  }`}
                >
                  <span className={isActive ? 'text-gray-950' : 'text-[#38BDF8]'}>
                    {renderCategoryIcon(cat.iconName, 'w-3.5 h-3.5')}
                  </span>
                  <span>{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 text-sm text-gray-400 flex items-center justify-between border-b border-gray-800 pb-3">
            <span>Showing results for "<strong className="text-white">{searchQuery}</strong>"</span>
            <span className="text-[#38BDF8] font-bold">{totalResultsCount} services found</span>
          </div>
        )}

        {/* Categories & Service Cards */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-gray-950/60 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-lg">No services matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategoryId('all'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gray-950/80 rounded-2xl border border-gray-800 p-6 sm:p-8 relative overflow-hidden shadow-2xl backdrop-blur-sm"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] via-[#D4AF37] to-[#38BDF8]" />

                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800/80">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-700 text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.15)] shrink-0">
                      {renderCategoryIcon(category.iconName, 'w-7 h-7 text-[#38BDF8]')}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-950 text-[#38BDF8] border border-sky-500/30">
                          {category.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-3xl">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Fast Action */}
                  <button
                    onClick={() => onSelectServiceForBooking(category.title)}
                    className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-gray-950 bg-[#38BDF8] hover:bg-[#7dd3fc] transition-all shadow-md"
                  >
                    <span>Book In This Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Service Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item: ServiceItem) => (
                    <div
                      key={item.id}
                      className="group p-4 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-[#38BDF8]/50 hover:bg-gray-900 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start gap-2.5">
                          <div className="mt-1 w-4 h-4 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between">
                        <span className="text-[11px] text-gray-500 font-mono">Baghajatin Center</span>
                        <button
                          onClick={() => onSelectServiceForBooking(category.title, item.name)}
                          className="text-xs font-semibold text-[#D4AF37] hover:text-white flex items-center gap-1 transition-colors"
                        >
                          Book Now
                          <ArrowRight className="w-3 h-3 text-[#38BDF8]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default ServicesSection;
