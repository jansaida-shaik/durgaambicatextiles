'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

const Brands = () => {
  const brandList = [
    {
      name: "Arvind",
      tagline: "The Art of Fashion",
      desc: "India's largest denim manufacturer and a pioneer in premium shirting fabrics. Known for their innovation in textile technology and classic cotton designs.",
      features: ["Premium Linens", "High-count Cottons", "Innovative Weaves"],
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Raymond",
      tagline: "The Complete Man",
      desc: "Synonymous with premium suiting fabrics for over nine decades. Raymond offers some of the finest wool and poly-wool blends in the world.",
      features: ["Superfine Wool", "Formal Suiting", "Premium Wool Blends"],
      image: "https://images.unsplash.com/photo-1594932224828-b4b39ef3a72671?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Siyaram",
      tagline: "Come home to Siyaram's",
      desc: "One of India's most loved textile brands, offering a versatile range of shirting and suiting fabrics that blend tradition with modern aesthetics.",
      features: ["Versatile Designs", "Durable Fabrics", "Fashionable Patterns"],
      image: "https://images.unsplash.com/photo-1588612196323-96b6fb098d5a?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Linen Club",
      tagline: "The Passion for Linen",
      desc: "Authorized dealer of authentic European linen fabrics. Linen Club is the benchmark for luxury and comfort in breathable natural fabrics.",
      features: ["100% Pure Linen", "Hand-picked European Flax", "Breathable Comfort"],
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800"
    }
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
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">The Portfolio</span>
              <h1 className="editorial-heading mb-8">Prestigious <span className="italic font-light text-gold">Alliances.</span></h1>
              <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-12 opacity-80 max-w-2xl">
                We curate the finest threads from the world's most legendary mills. Our portfolio is a testament to 25 years of uncompromising quality.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Brands Alternating Grid */}
      <section className="section-padding">
        <div className="container">
           <div className="space-y-24 lg:space-y-64">
              {brandList.map((brand, index) => (
                <motion.div 
                   key={brand.name}
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2 }}
                   className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                   {/* Artistic Image Stage */}
                   <div className="w-full lg:w-1/2 relative group">
                      <div className="absolute top-0 left-0 w-full h-full border border-gold/10 -translate-x-8 -translate-y-8 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000"></div>
                      <div className="luxury-card border-none overflow-hidden aspect-[16/10] bg-white group-hover:shadow-premium transition-all duration-1000">
                        <img 
                          src={brand.image} 
                          alt={brand.name} 
                          className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-[2500ms] group-hover:scale-110"
                        />
                        <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur px-8 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-navy border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                           {brand.name}
                        </div>
                      </div>
                   </div>

                   {/* Editorial Content */}
                   <div className="w-full lg:w-1/2 space-y-12">
                      <div className="flex items-center space-x-6">
                         <div className="h-px w-12 bg-gold/30"></div>
                         <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold">{brand.name}</h2>
                      </div>
                      <h3 className="editorial-heading text-4xl lg:text-5xl leading-tight mb-8">"{brand.tagline}"</h3>
                      <p className="text-navy/60 leading-relaxed text-lg lg:text-xl font-light opacity-90">{brand.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-10 border-y border-navy/5">
                         {brand.features.map(f => (
                           <div key={f} className="flex items-center space-x-4 text-navy group/feature">
                              <Star size={14} className="text-gold rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                              <span className="text-[11px] font-bold uppercase tracking-widest">{f}</span>
                           </div>
                         ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-12 pt-8">
                         <Link href="/products" className="btn btn-gold !px-16">
                            View Collection
                         </Link>
                         <Link href="/wholesale" className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy hover:text-gold transition-colors flex items-center group/link">
                            <span className="mr-4">ATELIER PROCUREMENT</span>
                            <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                         </Link>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Authenticity Banner */}
      <section className="section-padding pt-0">
         <div className="container">
            <div className="bg-navy p-16 lg:p-32 text-center text-white relative overflow-hidden luxury-card border-none">
               <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
               <div className="relative z-10 max-w-4xl mx-auto">
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-10 block">Integrity Protocol</span>
                  <h2 className="editorial-heading text-4xl lg:text-6xl mb-12">Direct from <span className="italic font-light">The Source.</span></h2>
                  <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-20 max-w-2xl mx-auto opacity-80">
                    We maintain the strictest quality controls to ensure that every meter of fabric sold in our showroom is 100% original and direct from the manufacturer.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-16">
                     <div className="text-center group">
                        <Award className="text-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-700" size={48} />
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">AUTHORIZED DEALER</p>
                     </div>
                     <div className="text-center group">
                        <Star className="text-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-700" size={48} />
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">GUARANTEED ORIGINAL</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Brands;
