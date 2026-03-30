'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pb-24 bg-cream">
      {/* Editorial Header Section */}
      <section className="bg-navy py-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-30"></div>
        <div className="container relative z-10 px-10 lg:px-24">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="max-w-4xl"
           >
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">Inquiry Protocol</span>
              <h1 className="editorial-heading mb-8">Connect with <span className="italic font-light text-gold">The Atelier.</span></h1>
              <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-12 opacity-80 max-w-2xl">
                Experience the tactile luxury of our collections in person or reach out for bespoke procurement advice.
              </p>
              <div className="flex items-center space-x-6">
                 <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-12">
                    <MessageSquare size={16} className="mr-3" />
                    <span className="text-[10px] tracking-[0.3em]">SECURE WHATSAPP</span>
                 </a>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container px-4">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-20">
                 <div className="space-y-16">
                    <h2 className="editorial-heading text-navy text-4xl mb-12 italic font-light">Showroom <span className="text-gold">Details</span></h2>
                    
                    <div className="flex items-start space-x-8 group">
                       <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                          <MapPin size={18} />
                       </div>
                       <div>
                          <h4 className="text-[9px] font-bold text-navy/30 uppercase tracking-[0.4em] mb-3 group-hover:text-gold transition-colors">LOCATION</h4>
                          <p className="text-navy text-lg font-heading tracking-widest leading-relaxed">123 MAIN MARKET ROAD, TEXTILES PLAZA, CITY CENTER, 560001</p>
                       </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                       <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                          <Phone size={18} />
                       </div>
                       <div>
                          <h4 className="text-[9px] font-bold text-navy/30 uppercase tracking-[0.4em] mb-3 group-hover:text-gold transition-colors">TELEPHONE</h4>
                          <div className="space-y-2">
                            <a href="tel:+1234567890" className="text-navy block hover:text-gold transition-colors text-lg font-heading tracking-widest">+91 12345 67890</a>
                            <a href="tel:+0801234567" className="text-navy block hover:text-gold transition-colors text-lg font-heading tracking-widest">+080 1234 567</a>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                       <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                          <Mail size={18} />
                       </div>
                       <div>
                          <h4 className="text-[9px] font-bold text-navy/30 uppercase tracking-[0.4em] mb-3 group-hover:text-gold transition-colors">ELECTRONIC</h4>
                          <div className="space-y-2">
                            <a href="mailto:info@durgaambica.com" className="text-navy block hover:text-gold transition-colors text-lg font-heading tracking-widest">INFO@DURGAAMBICA.COM</a>
                            <a href="mailto:SALES@DURGAAMBICA.COM" className="text-navy block hover:text-gold transition-colors text-lg font-heading tracking-widest">SALES@DURGAAMBICA.COM</a>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                       <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                          <Clock size={18} />
                       </div>
                       <div>
                          <h4 className="text-[9px] font-bold text-navy/30 uppercase tracking-[0.4em] mb-3 group-hover:text-gold transition-colors">ATELIER HOURS</h4>
                          <p className="text-navy text-lg font-heading tracking-widest">MON - SAT: 10:00 - 21:00</p>
                          <p className="text-navy text-lg font-heading tracking-widest">SUN: PRIVATE SESSIONS</p>
                       </div>
                    </div>
                 </div>

                 <div className="bg-navy p-12 luxury-card border-none bg-navy text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
                    <h3 className="text-xl font-bold font-heading mb-6 uppercase tracking-widest text-gold italic font-light">Social Journal</h3>
                    <div className="flex space-x-6 relative z-10">
                       <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-700">
                          <Instagram size={20} />
                       </a>
                       <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-700">
                          <Facebook size={20} />
                       </a>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                 <div className="bg-white p-12 lg:p-24 luxury-card shadow-premium border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-px bg-gold opacity-30"></div>
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-32"
                      >
                         <h2 className="editorial-heading text-navy text-4xl mb-8 italic font-light">Transmission <span className="text-gold">Complete.</span></h2>
                         <p className="text-navy/50 mb-12 text-lg font-light leading-relaxed max-w-md mx-auto">Your dossier has been routed to our showroom director. Expect a response within one business cycle.</p>
                         <button 
                            onClick={() => setIsSubmitted(false)} 
                            className="btn btn-outline"
                          >
                           New Transmission
                         </button>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-3xl font-bold font-heading text-navy mb-16 uppercase tracking-[0.3em]">Direct <span className="text-gold italic font-light">Inquiry</span></h2>
                        <form onSubmit={handleSubmit} className="space-y-16">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                               <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                                  <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Correspondent</label>
                                  <input 
                                    type="text" 
                                    required
                                    className="w-full bg-transparent px-0 py-2 text-xl text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light"
                                    placeholder="FULL NAME"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                  />
                               </div>
                               <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                                  <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Electronic Mail</label>
                                  <input 
                                    type="email" 
                                    required
                                    className="w-full bg-transparent px-0 py-2 text-xl text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light"
                                    placeholder="CLIENT@DOMAIN.COM"
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                  />
                               </div>
                           </div>

                           <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                              <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Inquiry Subject</label>
                              <input 
                                type="text" 
                                required
                                className="w-full bg-transparent px-0 py-2 text-xl text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light"
                                placeholder="THE NATURE OF YOUR REQUEST"
                                value={formState.subject}
                                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                              />
                           </div>

                           <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                              <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Detailed Requirements</label>
                              <textarea 
                                rows="4"
                                required
                                className="w-full bg-transparent px-0 py-2 text-lg text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light resize-none"
                                placeholder="HOW MAY WE ASSIST YOUR PROCUREMENT?"
                                value={formState.message}
                                onChange={(e) => setFormState({...formState, message: e.target.value})}
                              ></textarea>
                           </div>

                           <button type="submit" className="btn btn-primary w-full py-6">
                              <span className="text-[10px] tracking-[0.4em]">INITIATE CONTACT</span>
                           </button>
                        </form>
                      </>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Showroom Map Section */}
      <section className="container px-4 mb-32">
         <div className="aspect-[21/9] bg-white luxury-card border-none shadow-premium relative overflow-hidden group">
            <div className="absolute inset-0 bg-navy/5 transition-all duration-1000 group-hover:bg-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-12 text-center">
              <div className="w-16 h-16 border border-gold/20 flex items-center justify-center bg-white shadow-xl mb-8 group-hover:scale-110 transition-transform duration-1000">
                <MapPin size={24} className="text-gold" />
              </div>
              <h3 className="editorial-heading text-4xl mb-6 italic font-light text-navy">The Atelier <span className="text-gold">Floorplan</span></h3>
              <p className="text-navy/40 max-w-md mx-auto mb-12 font-light tracking-widest text-xs">VISIT OUR DIRECT SHOWROOM FOR EXCLUSIVE ACCESS TO MASTER BOLTS & SWATCH ARCHIVES.</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary !px-16"
              >
                 GET DIRECTIONS
              </a>
            </div>
            
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
