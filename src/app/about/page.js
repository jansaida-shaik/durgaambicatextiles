'use client';

import React from 'react';
import { Award, History, Target, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pb-24 bg-cream">
      {/* Editorial Header Section */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-30"></div>
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">Our Heritage</span>
            <h1 className="editorial-heading mb-8">A Legacy of <span className="italic font-light text-gold">Exceptional Weaves.</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-light">
              For over a quarter-century, Durga Ambica Textiles has defined the intersection of textile craftsmanship and business integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Storytelling Block */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="luxury-card border-none overflow-hidden aspect-[4/5] lg:aspect-square">
                 <img 
                  src="/hero-showroom.png" 
                  alt="Our Heritage Showroom" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-[2000ms]"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 glass p-10 lg:w-72 luxury-card">
                 <div className="text-5xl font-bold text-navy font-heading italic">25+</div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mt-2">Years of Excellence</div>
                 <div className="w-12 h-px bg-gold mt-4"></div>
              </div>
            </motion.div>
            
            <div className="space-y-12">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold">The Beginning</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy leading-tight">Authenticity, <span className="italic font-light">Without Compromise.</span></h2>
              <p className="text-xl text-navy/60 leading-relaxed font-light italic border-l border-gold/30 pl-8">
                "We don't just sell fabrics; we curate the foundations of identity and the success of enterprise."
              </p>
              <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                <p>
                  Founded in 1995 with a mission to bring world-class mills under one roof, Durga Ambica Textiles has evolved from a local showroom into a regional institution. We are the direct conduit between legendary brands like Arvind, Raymond, and Siyaram, and the discerning boutiques that shape the fashion landscape.
                </p>
                <p>
                  Our curator's eye for quality and our merchant's focus on transparency have enabled us to serve over 50,000 retail clients and scale hundreds of wholesale partnerships.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-[0.3em]">Master Curators</h4>
                  <p className="text-xs text-navy/50 font-light leading-relaxed">We provide direct access to the most exclusive weaves in the subcontinent.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-navy uppercase tracking-[0.3em]">Tier-1 Logistics</h4>
                  <p className="text-xs text-navy/50 font-light leading-relaxed">Swift, reliable supply chain management for bulk operations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-navy p-16 lg:p-24 text-white relative overflow-hidden group luxury-card border-none"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-all duration-1000"></div>
                <h3 className="text-4xl font-bold font-heading mb-8 uppercase tracking-widest text-gold italic font-light">The Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  To provide the highest quality textiles and fabrics with integrity, transparency, and a focus on customer satisfaction. We aim to empower businesses with premium supplies and individuals with timeless style.
                </p>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-16 lg:p-24 text-navy relative overflow-hidden group luxury-card border-none shadow-premium"
             >
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/5 rounded-full transform translate-x-20 translate-y-20 group-hover:scale-150 transition-all duration-1000"></div>
                <h3 className="text-4xl font-bold font-heading mb-8 uppercase tracking-widest text-navy italic font-light">The Vision</h3>
                <p className="text-navy/60 leading-relaxed text-lg font-light">
                  To become the global standard for premium textile curation, recognized for our commitment to quality, innovation, and our deep-rooted heritage in the fabric industry.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Minimalist Counter Section */}
      <section className="py-32 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            {[
              { value: "50k", label: "Discerning Clients" },
              { value: "500", label: "Partnership Showrooms" },
              { value: "15k", label: "Active Collection" },
              { value: "25", label: "Years of Trust" },
            ].map((stat, i) => (
              <div key={i} className="space-y-4 border-l border-navy/5 pl-8">
                <div className="text-4xl lg:text-5xl font-bold text-navy font-heading italic">{stat.value}<span className="text-gold">+</span></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-navy/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atelier Protocol (Values) */}
      <section className="section-padding bg-cream/50">
        <div className="container px-4">
           <div className="text-center mb-24">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-6 block">Our Protocol</span>
            <h2 className="editorial-heading text-navy">Values of <span className="italic font-light">Integrity.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-navy/5 bg-white overflow-hidden">
            {[
              { title: "Pure Provenance", desc: "No compromises on authenticity. We deal only in 100% genuine branded fabrics from authorized mill channels." },
              { title: "Personal Atelier", desc: "Whether you are procuring a single yard or a thousand bolts, every client receives bespoke service." },
              { title: "Transparent Flow", desc: "Predictable, fair pricing for both retail and wholesale partners, ensuring mutual prosperity." }
            ].map((value, i) => (
              <div key={i} className="p-16 text-center space-y-8 border-r border-navy/5 last:border-r-0 hover:bg-navy hover:text-white transition-all duration-1000 group">
                <h4 className="text-2xl font-bold font-heading text-navy group-hover:text-gold transition-all duration-700 uppercase tracking-widest">{value.title}</h4>
                <p className="text-navy/50 group-hover:text-white/60 leading-relaxed text-sm font-light transition-all duration-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
