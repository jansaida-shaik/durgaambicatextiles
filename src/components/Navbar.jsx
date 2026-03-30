'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Collection', path: '/' },
    { name: 'Heritage', path: '/about' },
    { name: 'Atelier', path: '/products' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Partners', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
      scrolled ? 'glass shadow-premium py-6' : 'bg-transparent py-10'
    }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-8 group shrink-0">
          <div className="relative w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center border border-gold/10 p-1 group-hover:border-gold/40 transition-all duration-1000 bg-navy/5 overflow-hidden">
             <img 
               src="/logo-luxury.png" 
               alt="Durga Ambica Divine Emblem" 
               className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-[2000ms]"
             />
          </div>
          <div className="flex flex-col items-start leading-none gap-3">
            <span className="text-2xl font-bold tracking-[0.2em] text-navy font-heading lg:text-4xl transition-all duration-1000">
              DURGA AMBICA
            </span>
            <div className="flex items-center space-x-4">
              <div className="h-px w-8 bg-gold/40"></div>
              <span className="text-[10px] tracking-[0.7em] font-bold text-gold uppercase transition-colors duration-700 whitespace-nowrap">
                ATELIER EST. 1995
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-12 xl:flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:text-gold relative group
                  ${isActive ? 'text-gold' : 'text-navy'}
                `}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center space-x-10">
          <a href="tel:+1234567890" className="flex items-center space-x-3 text-[10px] font-bold tracking-widest text-navy hover:text-gold transition-all duration-500 uppercase">
            <Phone size={14} className="text-gold" />
            <span className="border-b border-navy/10 pb-1 hover:border-gold">Inquiry</span>
          </a>
          <Link href="/wholesale" className="btn btn-primary !px-8 !py-3 text-[10px] shadow-none hover:shadow-premium">
            Partnerships
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="xl:hidden text-navy focus:outline-none p-3 hover:bg-gold/5 transition-colors rounded-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Navigation - "Curtain" Menu */}
      <div className={`
        fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] xl:hidden
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-bold font-heading whitespace-nowrap">DURGA AMBICA</span>
        </div>

        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-8 right-8 text-white p-3 border border-white/10 hover:border-gold hover:text-gold transition-all duration-500"
        >
          <X size={32} strokeWidth={1} />
        </button>

        {navLinks.map((link, i) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`
                text-4xl font-bold uppercase tracking-[0.15em] transition-all duration-700 font-heading
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${isActive ? 'text-gold' : 'text-white hover:text-gold'}
              `}
            >
              {link.name}
            </Link>
          );
        })}

        <div className={`flex flex-col items-center pt-12 space-y-6 w-full px-12 transition-all duration-1000 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full flex items-center justify-center space-x-3 !py-5">
            <MessageSquare size={18} />
            <span className="text-xs">Private Consultation</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
