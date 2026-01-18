
import React from 'react';
import { Header } from './components/Header';
import { AIConsultant } from './components/AIConsultant';
import { SERVICES, GALLERY } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-gold/30">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful dreadlocks" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1]">
              Elevate Your <span className="italic text-gold">Loc Journey.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-xl font-light">
              Specialist dreadlock care, from initiation to mastery. Healthy hair, clean parts, and professional styling for every crown.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-bold text-center transition-all">
                Schedule Consultation
              </a>
              <a href="#consultant" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center transition-all">
                Try AI Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
              <p className="text-stone-500">From the first twist to regular maintenance, we provide premium services that prioritize hair health above all.</p>
            </div>
            <a href="#booking" className="text-gold font-bold hover:underline mt-4 md:mt-0">View All Services →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800">
                    {service.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                <p className="font-bold text-stone-900">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Section */}
      <section id="consultant" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Meet Quinti AI</h2>
            <p className="text-lg text-stone-600">
              Can't make it to the studio? Chat with our virtual specialist for maintenance tips, 
              product recommendations, and instant hair health checks using your camera.
            </p>
          </div>
          <AIConsultant />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {GALLERY.map((item) => (
              <div key={item.id} className="relative group aspect-square overflow-hidden bg-stone-200">
                <img src={item.url} alt={item.description} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-center text-white">
                    <p className="text-xs uppercase tracking-widest mb-1 text-gold font-bold">{item.category}</p>
                    <p className="text-sm font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Reservation</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Ready for your <span className="italic">new look?</span></h2>
              <p className="text-stone-400 text-lg mb-8 font-light">
                Secure your session with our master locticians. We recommend booking at least 2 weeks in advance for maintenance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Studio Location</h4>
                    <p className="text-stone-400 text-sm">123 Crown Heights, Brooklyn, NY</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p className="text-stone-400 text-sm">(555) 900-LOCS | info@quintilocks.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-white text-stone-900 p-8 md:p-12 rounded-3xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-500 mb-2 block">Name</label>
                    <input type="text" className="w-full border-b border-stone-200 py-2 focus:border-gold outline-none transition-colors" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-stone-500 mb-2 block">Service</label>
                    <select className="w-full border-b border-stone-200 py-2 focus:border-gold outline-none transition-colors bg-transparent">
                      <option>Starter Locs</option>
                      <option>Retwist</option>
                      <option>Repair</option>
                      <option>Detox</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-stone-500 mb-2 block">Date & Time</label>
                  <input type="datetime-local" className="w-full border-b border-stone-200 py-2 focus:border-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-stone-500 mb-2 block">Notes</label>
                  <textarea className="w-full border-b border-stone-200 py-2 focus:border-gold outline-none transition-colors h-24 resize-none" placeholder="Any specific concerns?"></textarea>
                </div>
                <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-all uppercase tracking-widest">
                  Request Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 py-12 border-t border-stone-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl font-black text-stone-900 tracking-tighter">QUINTILOCKS</span>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-stone-400 hover:text-gold transition-colors font-bold">Instagram</a>
            <a href="#" className="text-stone-400 hover:text-gold transition-colors font-bold">TikTok</a>
            <a href="#" className="text-stone-400 hover:text-gold transition-colors font-bold">Pinterest</a>
          </div>
          <p className="text-stone-400 text-sm">© {new Date().getFullYear()} Quintilocks Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
