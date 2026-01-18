
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-stone-900 tracking-tighter">QUINTILOCKS</span>
          <div className="w-2 h-2 bg-gold rounded-full"></div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-stone-600 hover:text-gold transition-colors">Services</a>
          <a href="#gallery" className="text-sm font-semibold text-stone-600 hover:text-gold transition-colors">Gallery</a>
          <a href="#consultant" className="text-sm font-semibold text-stone-600 hover:text-gold transition-colors">AI Consultant</a>
          <a href="#booking" className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-stone-800 transition-all">Book Appointment</a>
        </nav>

        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};
