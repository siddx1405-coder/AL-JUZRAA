import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Wrench, 
  Zap, 
  CheckCircle2, 
  Play, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  ChevronRight,
  Gauge,
  Flame,
  Star,
  MessageCircle,
  Car,
  Layers,
  Award,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeVideo, setActiveVideo] = useState('/assets/promo-video-3.mp4');
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    { id: 1, title: 'Computer Diagnostics & Scan', category: 'electrical', img: '/assets/diagnostics.jpg', desc: 'Full electronic fault scanning, ABS, airbag, and ECU live data reading.', badge: 'Popular' },
    { id: 2, title: 'Throttle Body Servicing', category: 'tuning', img: '/assets/throttle-cleaning.jpg', desc: 'Ultrasonic cleaning and digital idle recalibration for high response.', badge: '99 QAR Deal' },
    { id: 3, title: 'Fuel Injector Testing & Care', category: 'tuning', img: '/assets/injector-testing.jpg', desc: 'High-pressure flow testing and spray nozzle ultrasonic cleaning.', badge: '99 QAR Deal' },
    { id: 4, title: 'AC Gas Refill & Pressure Check', category: 'ac', img: '/assets/ac-gauges.jpg', desc: 'Premium imported refrigerant gas refilling with leak checks.', badge: '99 QAR Special' },
    { id: 5, title: 'Engine Oil & Filter Service', category: 'mechanical', img: '/assets/oil-change.jpg', desc: 'Synthetic oil replacement, oil filter swap, and multi-point safety check.', badge: 'Quick Service' },
    { id: 6, title: 'Underbody & Chassis Work', category: 'mechanical', img: '/assets/mechanic-working.jpg', desc: 'Suspension maintenance, brake pad changes, and steering overhauls.', badge: 'Certified' },
  ];

  const galleryVideos = [
    { id: 'promo-video-3.mp4', title: 'Main Workshop Ad', sub: 'Full Shop Tour', path: '/assets/promo-video-3.mp4' },
    { id: 'promo-video-1.mp4', title: 'Mechanic at Work', sub: 'Action Clip 1', path: '/assets/promo-video-1.mp4' },
    { id: 'promo-video-2.mp4', title: 'AC Diagnostics', sub: 'Action Clip 2', path: '/assets/promo-video-2.mp4' },
    { id: 'promo-video-4.mp4', title: 'Engine Tuning', sub: 'Action Clip 3', path: '/assets/promo-video-4.mp4' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 w-full" />

      {/* Floating Glass Navigation Header */}
      <header className="bg-[#0A0D14]/80 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl text-black shadow-lg shadow-amber-500/20">
              <Zap size={22} className="fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-xl tracking-wider text-white leading-none">
                  AL JUZRAA
                </h1>
                <span className="text-[10px] bg-amber-400/20 text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-400/30">
                  QATAR
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mt-1">
                Auto Electrician & Mechanical Garage
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/97400000000" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold px-4 py-2.5 rounded-xl transition text-xs backdrop-blur-md"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a 
              href="tel:+97400000000" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold px-5 py-2.5 rounded-xl transition text-xs shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={16} className="fill-black" />
              <span>Call Workshop</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION WITH LUXURY WORKSHOP BACKDROP */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/workshop-front.jpg" 
            alt="Al Juzraa Garage Exterior" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/90 to-[#05070A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-[#05070A]/70" />
        </div>

        {/* Ambient Glow Bubbles */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold backdrop-blur-md">
              <Award size={14} /> Official Auto Repair & Electrician Center
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
              High-Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Auto Diagnostics
              </span> & Repairs.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Specialized engine overhauls, advanced electrical scanning, AC refrigerant services, and complete mechanical diagnostics on Shara Al Moatham.
            </p>

            {/* Special Promo Highlights */}
            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              
              {/* Promo Card 1 */}
              <div className="group relative p-6 rounded-2xl bg-[#0A0D14]/90 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-2xl backdrop-blur-xl">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black bg-amber-400 px-3 py-1 rounded-md">
                    Featured Deal
                  </span>
                  <Flame size={20} className="text-amber-400" />
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">99</span>
                  <span className="text-sm font-extrabold text-amber-400">QAR</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-1">Full Engine Tuning</h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Plugs + Injectors + Ignition Coils + Throttle Body Clean
                </p>
              </div>

              {/* Promo Card 2 */}
              <div className="group relative p-6 rounded-2xl bg-[#0A0D14]/90 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-2xl backdrop-blur-xl">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black bg-amber-400 px-3 py-1 rounded-md">
                    Featured Deal
                  </span>
                  <Gauge size={20} className="text-amber-400" />
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">99</span>
                  <span className="text-sm font-extrabold text-amber-400">QAR</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-1">AC Gas Refill</h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Imported Refrigerant + Money-Back Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Right Video Theater Display */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 to-white/5 border border-amber-500/20 shadow-2xl backdrop-blur-2xl overflow-hidden">
              <div className="relative rounded-[22px] overflow-hidden bg-black aspect-video">
                <video 
                  key={activeVideo} 
                  controls 
                  autoPlay 
                  muted 
                  className="w-full h-full object-cover"
                >
                  <source src={activeVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video Playlist Selectors */}
            <div className="grid grid-cols-4 gap-2">
              {galleryVideos.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideo(vid.path)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    activeVideo === vid.path 
                      ? 'border-amber-400 bg-amber-400/20 text-amber-300 font-bold shadow-lg shadow-amber-400/10' 
                      : 'border-white/10 bg-[#0A0D14]/80 text-slate-400 hover:border-white/30'
                  }`}
                >
                  <Play size={14} className={activeVideo === vid.path ? 'fill-amber-400 text-amber-400' : ''} />
                  <div className="mt-2">
                    <p className="text-[11px] font-bold truncate">{vid.title}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">{vid.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Official Business Details & Card Section */}
      <section className="py-16 bg-[#0A0D14] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Verified Workshop
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Al Juzraa Auto Repair Garage
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Equipped with computer scanners, injector testing benches, and hydraulic lifts to handle all mechanical, bodywork, and electrical challenges.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-400" />
                <span>Engine Overhaul</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-400" />
                <span>Gearbox Repairs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-400" />
                <span>Alternators & Starters</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-400" />
                <span>Denting & Painting</span>
              </div>
            </div>
          </div>

          {/* Business Card Section using card.jpg */}
          <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl max-w-md mx-auto">
            <img 
              src="/assets/card.jpg" 
              alt="Al Juzraa Official Business Card" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* FILTERABLE SERVICES SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Workshop Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Comprehensive Auto Diagnostics & Repair
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Filter through our certified auto electrical and mechanical services
            </p>

            {/* Service Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['all', 'tuning', 'electrical', 'mechanical', 'ac'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat 
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20' 
                      : 'bg-white/[0.03] text-slate-400 hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {cat === 'all' ? 'All Services' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((item) => (
              <div 
                key={item.id} 
                className="group relative rounded-3xl bg-[#0A0D14] border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <span className="absolute top-4 right-4 z-10 text-[10px] font-black uppercase tracking-wider bg-black/80 text-amber-400 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-md">
                      {item.badge}
                    </span>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-lg text-white group-hover:text-amber-400 transition">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a 
                    href="tel:+97400000000" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>Book Service</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION & CONTACT SECTION (Interactive Google Maps Redirection) */}
      <section className="py-20 px-6 border-t border-white/10 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Shop Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
              <img src="/assets/workshop-front.jpg" alt="Workshop Front" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
              <img src="/assets/workshop-night.jpg" alt="Workshop Night View" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Workshop Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Visit Our Garage</h2>
            
            <div className="space-y-4">
              
              {/* Clickable Google Maps Location Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Shara+Al+Moatham+Qatar" 
                target="_blank" 
                rel="noreferrer"
                className="group flex gap-4 items-start p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer"
              >
                <MapPin className="text-amber-400 shrink-0 mt-1 group-hover:scale-110 transition" size={22} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base group-hover:text-amber-400 transition">
                      Address (Open in Google Maps)
                    </h4>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-amber-400" />
                  </div>
                  <p className="text-slate-300 text-xs mt-1">Shara Al Moatham (Tijari Road area), Qatar</p>
                  <p className="text-slate-500 text-xs mt-0.5">Opposite Carry Fresh, Super Hyper Market & Oriental</p>
                </div>
              </a>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <Wrench className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-white text-base">Garage Specializations</h4>
                  <p className="text-slate-400 text-xs mt-1">Engine Tuning, AC Refill, Auto Electrician, ABS Scans & Transmission Service</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Shara+Al+Moatham+Qatar" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-8 py-4 rounded-xl text-xs transition shadow-xl shadow-amber-400/10"
              >
                <MapPin size={16} className="fill-black" /> Open Directions on Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-xs">
        <p>© 2026 Al Juzraa Auto Electrician. All rights reserved.</p>
      </footer>

    </div>
  );
}