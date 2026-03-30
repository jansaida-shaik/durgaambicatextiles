'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  const footerLinks = [
    { title: 'Quick Links', links: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Brands', path: '/brands' },
      { name: 'Contact', path: '/contact' }
    ]},
    { title: 'Products', links: [
      { name: 'Suiting Fabrics', path: '/products?cat=suiting' },
      { name: 'Shirting Fabrics', path: '/products?cat=shirting' },
      { name: 'Bed Sheets', path: '/products?cat=bedsheets' },
      { name: 'Towels & Handkerchiefs', path: '/products?cat=linen' }
    ]},
    { title: 'Business', links: [
      { name: 'Wholesale Enquiries', path: '/wholesale' },
      { name: 'Bulk Orders', path: '/wholesale#bulk' },
      { name: 'Boutique Partnership', path: '/wholesale#partnership' }
    ]}
  ];

  return (
    <footer className="pt-40 pb-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="container">
        <div className="grid grid-cols-1 gap-16 mb-24 lg:grid-cols-4">
          <div className="space-y-10">
            <Link href="/" className="flex flex-col items-start space-y-6 group shrink-0">
              <div className="relative w-16 h-16 flex items-center justify-center border border-gold/10 p-1 group-hover:border-gold/40 transition-all duration-1000 bg-white/5 overflow-hidden">
                 <img 
                   src="/logo-luxury.png" 
                   alt="Durga Ambica Divine Emblem" 
                   className="w-full h-full object-contain filter drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                 />
              </div>
              <div className="flex flex-col items-start leading-none gap-2">
                <span className="text-xl font-bold tracking-[0.2em] text-white font-heading lg:text-2xl transition-all duration-1000">
                  DURGA AMBICA
                </span>
                <div className="flex items-center space-x-3">
                  <div className="h-px w-6 bg-gold/40"></div>
                  <span className="text-[9px] tracking-[0.5em] font-bold text-gold uppercase transition-colors duration-700">
                    ATELIER EST. 1995
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm font-light opacity-80">
              Dedicated to the art of textile curation for over 25 years. We provide the world's most discerning boutiques and designers with the foundations of luxury fashion.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-lg font-bold text-gold uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-sm transition-colors text-gray-400 hover:text-gold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={20} className="text-gold flex-shrink-0" />
                <span>123 Main Market Road, Textiles Plaza, City Center, 560001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 group">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="transition-colors hover:text-gold">+91 12345 67890</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 group">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:info@durgaambicatextiles.com" className="transition-colors hover:text-gold">info@durgaambicatextiles.com</a>
              </li>
              <li>
                <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm text-gold group font-medium hover:underline">
                  <MessageSquare size={20} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            &copy; {year} Durga Ambica Textiles. All rights reserved. Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
