'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Smartphone, Mail, MessageSquare } from 'lucide-react';

const Wholesale = () => {
  const [formState, setFormState] = useState({
    name: '',
    businessType: '',
    phone: '',
    email: '',
    productsWanted: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        businessType: '',
        phone: '',
        email: '',
        productsWanted: '',
        message: ''
      });
    }, 1000);
  };

  const businessTypes = [
    "Boutique Designer", "Master Tailor", "Garment Curator", "Bulk Textile Merchant", "Regional Showroom"
  ];

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
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">B2B Atelier</span>
              <h1 className="editorial-heading mb-8">Wholesale <span className="italic font-light text-gold">Mastery.</span></h1>
              <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-12 opacity-80 max-w-2xl">
                India's most sophisticated supply chain for premium textiles. We empower world-class enterprises with the foundations of luxury fashion.
              </p>
              <div className="flex items-center space-x-12 opacity-20 grayscale grayscale-100">
                  <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">Arvind</span>
                  <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase font-heading">Raymond</span>
                  <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">Siyaram</span>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Partnership Content Area */}
      <section className="section-padding">
        <div className="container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Info Column */}
              <div className="space-y-20">
                 <div>
                    <h2 className="editorial-heading text-navy text-4xl lg:text-5xl mb-12 leading-tight">Partnership <span className="italic font-light">Benefits</span></h2>
                    <ul className="space-y-12">
                      {[
                        { title: "Primary Access", desc: "Authorized tier-1 distribution of premium weaves, ensuring absolute authenticity for your showroom." },
                        { title: "Tiered Scale Pricing", desc: "Optimized commercial models designed to empower boutique scalability and enterprise growth." },
                        { title: "Bespoke Logistics", desc: "Priority fulfillment and global inventory tracking for timed fashion collection launches." },
                        { title: "Sartorial Guidance", desc: "Direct consultation on upcoming textile trends and high-end weave compositions." }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-8 group">
                           <div className="w-10 h-10 shrink-0 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                              <span className="text-xs font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                           </div>
                           <div>
                              <h4 className="font-bold text-navy text-xl mb-3 font-heading uppercase tracking-widest leading-none">{item.title}</h4>
                              <p className="text-navy/40 leading-relaxed font-light text-sm">{item.desc}</p>
                           </div>
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="bg-navy p-12 lg:p-16 luxury-card border-none bg-navy text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
                    <h3 className="text-2xl font-bold font-heading mb-6 uppercase tracking-widest text-gold italic font-light">Direct Channel</h3>
                    <p className="text-gray-400 mb-10 italic leading-relaxed font-light">Faster commercial response for master tailors and bulk merchants. Speak directly with our partnership director.</p>
                    <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full flex items-center justify-center space-x-3 py-5">
                       <MessageSquare size={18} />
                       <span className="text-xs">Secure Wholesale Channel</span>
                    </a>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy/5">
                    <div className="p-10 bg-white flex flex-col justify-center items-center text-center group border-r border-navy/5 transition-all duration-1000 hover:bg-navy hover:text-white">
                        <Smartphone size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                        <p className="text-[8px] font-bold text-navy/30 group-hover:text-gold uppercase tracking-[0.4em] mb-2 transition-colors">VOICE ENQUIRY</p>
                        <p className="font-bold text-lg font-heading tracking-widest group-hover:text-white transition-colors">+91 12345 67890</p>
                    </div>
                    <div className="p-10 bg-white flex flex-col justify-center items-center text-center group transition-all duration-1000 hover:bg-navy hover:text-white">
                        <Mail size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                        <p className="text-[8px] font-bold text-navy/30 group-hover:text-gold uppercase tracking-[0.4em] mb-2 transition-colors">SECURE EMAIL</p>
                        <p className="font-bold text-lg font-heading tracking-widest group-hover:text-white transition-colors">B2B@DURGAAMBICA.COM</p>
                    </div>
                 </div>
              </div>

              {/* Inquiry Form Column */}
              <div className="sticky top-32">
                 <div className="bg-white p-12 lg:p-20 luxury-card shadow-premium border-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-1 bg-gold opacity-20"></div>
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-24"
                      >
                         <h3 className="text-4xl font-bold font-heading text-navy mb-6 leading-tight italic font-light">Dossier Received.</h3>
                         <p className="text-navy/50 mb-12 text-lg font-light">Verification is in progress. Our B2B director will respond within one business day.</p>
                         <button 
                            onClick={() => setIsSubmitted(false)} 
                            className="btn btn-outline"
                         >
                            New Discovery
                         </button>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-3xl font-bold font-heading text-navy mb-12 uppercase tracking-widest">Atelier <span className="text-gold">Inquiry</span></h2>
                        <form onSubmit={handleSubmit} className="space-y-12">
                          <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                            <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Principal Name</label>
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
                            <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Business Type</label>
                            <select 
                              required
                              className="w-full bg-transparent px-0 py-2 text-lg text-navy font-heading focus:outline-none appearance-none"
                              value={formState.businessType}
                              onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                            >
                               <option value="" disabled>SELECT TYPE</option>
                               {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                                <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Primary Line</label>
                                <input 
                                  type="tel" 
                                  required
                                  className="w-full bg-transparent px-0 py-2 text-xl text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light"
                                  placeholder="+91..."
                                  value={formState.phone}
                                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                />
                             </div>
                             <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                                <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Corporate Email</label>
                                <input 
                                  type="email" 
                                  required
                                  className="w-full bg-transparent px-0 py-2 text-xl text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light"
                                  placeholder="OFFICE@DOMAIN.COM"
                                  value={formState.email}
                                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                                />
                             </div>
                          </div>

                          <div className="group border-b border-navy/5 pb-2 transition-all focus-within:border-gold">
                            <label className="text-[8px] font-bold uppercase tracking-[0.4em] text-navy/40 mb-3 block group-focus-within:text-gold transition-colors">Requirements Dossier</label>
                            <textarea 
                              rows="3"
                              required
                              className="w-full bg-transparent px-0 py-2 text-lg text-navy font-heading focus:outline-none placeholder:text-navy/10 placeholder:font-light resize-none"
                              placeholder="SPECIFY FABRICS & EXPECTED VOLUME"
                              value={formState.productsWanted}
                              onChange={(e) => setFormState({...formState, productsWanted: e.target.value})}
                            ></textarea>
                          </div>

                          <button type="submit" className="btn btn-primary w-full py-6">
                             <Send size={16} className="mr-3" />
                             <span className="text-[10px] tracking-[0.3em]">APPLICATION FOR PARTNERSHIP</span>
                          </button>
                        </form>
                      </>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;
