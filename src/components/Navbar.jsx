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
    { name: 'Heritage', path: '/about' },
    { name: 'Atelier', path: '/products' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Partners', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-navy/5' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center overflow-hidden flex-shrink-0 border shadow-[0_12px_30px_rgba(223,192,142,0.18)] transition-all duration-500 ${
            scrolled
              ? 'border-gold/40 bg-gradient-to-br from-cream via-white to-gold-light/70'
              : 'border-gold/30 bg-gradient-to-br from-white/20 via-gold/20 to-gold/40 backdrop-blur-md'
          } group-hover:border-gold/70 group-hover:shadow-[0_18px_40px_rgba(223,192,142,0.28)]`}>
            <img
              src="/logo-luxury.png"
              alt="Durga Ambica"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-sm sm:text-base font-bold tracking-[0.12em] font-heading transition-colors duration-300 ${
              scrolled ? 'text-navy' : 'text-cream'
            }`}>
              DURGA AMBICA
            </span>
            <span className={`text-[9px] tracking-[0.4em] font-bold uppercase mt-0.5 ${
              scrolled ? 'text-gold' : 'text-gold-light'
            }`}>
              TEXTILES EST. 1995
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold relative group ${
                  isActive ? 'text-gold' : scrolled ? 'text-navy/70' : 'text-white/80'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+1234567890" className={`flex items-center space-x-2 text-[10px] font-bold tracking-widest hover:text-gold transition-all duration-300 uppercase ${
            scrolled ? 'text-navy/60' : 'text-white/70'
          }`}>
            <Phone size={13} className="text-gold" />
            <span>Inquiry</span>
          </a>
          <Link href="/wholesale" className="btn btn-primary !px-6 !py-2.5 text-[10px] shadow-none hover:shadow-premium">
            Partnerships
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden focus:outline-none p-2 transition-colors ${
            scrolled ? 'text-navy' : 'text-white'
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation - Curtain Menu */}
      <div className={`
        fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden
        ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-bold font-heading whitespace-nowrap">DURGA AMBICA</span>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white p-2.5 border border-white/10 hover:border-gold hover:text-gold transition-all duration-300"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {navLinks.map((link, i) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`
                text-3xl font-bold uppercase tracking-[0.12em] transition-all duration-500 font-heading
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                ${isActive ? 'text-gold' : 'text-white hover:text-gold'}
              `}
            >
              {link.name}
            </Link>
          );
        })}

        <div className={`flex flex-col items-center pt-6 space-y-4 w-full px-10 transition-all duration-700 delay-400 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="https://wa.me/+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full flex items-center justify-center space-x-3 !py-4"
          >
            <MessageSquare size={16} />
            <span className="text-xs tracking-widest">Private Consultation</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
