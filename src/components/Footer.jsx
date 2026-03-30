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
    {
      title: 'Quick Links', links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Brands', path: '/brands' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Products', links: [
        { name: 'Suiting Fabrics', path: '/products?cat=suiting' },
        { name: 'Shirting Fabrics', path: '/products?cat=shirting' },
        { name: 'Bed Sheets', path: '/products?cat=bedsheets' },
        { name: 'Towels & Handkerchiefs', path: '/products?cat=linen' }
      ]
    },
    {
      title: 'Business', links: [
        { name: 'Wholesale Enquiries', path: '/wholesale' },
        { name: 'Bulk Orders', path: '/wholesale#bulk' },
        { name: 'Boutique Partnership', path: '/wholesale#partnership' }
      ]
    }
  ];

  return (
    <footer className="pt-20 pb-10 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="w-full px-10 lg:px-20 2xl:px-24 mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-20 xl:gap-24 mb-12">
          <div className="space-y-12">
            <Link href="/" className="flex flex-col items-start space-y-8 group shrink-0">
              <div className="relative w-24 h-24 flex items-center justify-center border border-gold/10 p-2 group-hover:border-gold/40 transition-all duration-1000 bg-white/5 overflow-hidden">
                <img
                  src="/logo-luxury.png"
                  alt="Durga Ambica Divine Emblem"
                  className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-[2000ms]"
                />
              </div>
              <div className="flex flex-col items-start leading-none gap-3">
                <span className="text-2xl font-bold tracking-[0.2em] text-white font-heading lg:text-3xl transition-all duration-1000">
                  DURGA AMBICA
                </span>
                <div className="flex items-center space-x-4">
                  <div className="h-px w-8 bg-gold/40"></div>
                  <span className="text-[11px] tracking-[0.5em] font-bold text-gold uppercase transition-colors duration-700">
                    TEXTILES EST. 1995
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-gray-400 max-w-sm font-light opacity-80">
              Dedicated to the art of textile curation for over 25 years. We provide the world's most discerning boutiques and designers with the foundations of luxury fashion.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center transition-all duration-700 border border-white/10 hover:border-gold hover:bg-gold hover:text-navy translate-y-0 hover:-translate-y-1" aria-label="Twitter">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-8">
              <h4 className="text-xl font-bold text-gold uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-base transition-colors text-gray-400 hover:text-gold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-gold uppercase tracking-widest">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-base text-gray-400">
                <MapPin size={24} className="text-gold flex-shrink-0 mt-1" />
                <span className="leading-relaxed">123 Main Market Road, Textiles Plaza, City Center, 560001</span>
              </li>
              <li className="flex items-center space-x-4 text-base text-gray-400 group">
                <Phone size={24} className="text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="transition-colors hover:text-gold">+91 12345 67890</a>
              </li>
              <li className="flex items-center space-x-4 text-base text-gray-400 group">
                <Mail size={24} className="text-gold flex-shrink-0" />
                <a href="mailto:info@durgaambicatextiles.com" className="transition-colors hover:text-gold">info@durgaambicatextiles.com</a>
              </li>
              <li>
                <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-base text-gold group font-medium hover:underline">
                  <MessageSquare size={24} />
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
