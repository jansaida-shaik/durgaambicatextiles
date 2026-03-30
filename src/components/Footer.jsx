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
    <footer className="pt-20 pb-10 bg-navy text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start leading-none group text-white">
              <span className="text-2xl font-bold tracking-tighter transition-colors font-heading">
                DURGA AMBICA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-gold uppercase mt-0.5 group-hover:text-white transition-colors">
                TEXTILES
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Trusted textile showroom specializing in premium suiting and shirting fabrics from top brands. Serving retail and wholesale customers with excellence since 25+ years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 transition-colors duration-300 border rounded-full border-white/20 hover:border-gold hover:text-gold" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 transition-colors duration-300 border rounded-full border-white/20 hover:border-gold hover:text-gold" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 transition-colors duration-300 border rounded-full border-white/20 hover:border-gold hover:text-gold" aria-label="Twitter">
                <Twitter size={20} />
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
