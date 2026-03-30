'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Star, Quote, MessageSquare, ShieldCheck, Gem } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const categories = [
    { id: 1, name: "Bespoke Suiting", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800", count: "500+ Selections", class: "lg:col-span-2 lg:h-[600px]" },
    { id: 2, name: "Premium Shirting", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800", count: "300+ Weaves", class: "lg:h-[400px] lg:mt-24" },
    { id: 3, name: "Luxury Linen", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", count: "Fine Threadcount", class: "lg:h-[500px]" },
    { id: 4, name: "Men's Essentials", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800", count: "Curated Brands", class: "lg:col-span-2 lg:h-[400px] lg:-mt-24" },
  ];

  const brands = ["Arvind", "Raymond", "Siyaram", "Linen Club", "Cadini", "Soktas"];

  const features = [
    { icon: <Gem className="text-gold" size={20} />, title: "Curated Excellence", desc: "Hand-selected fabrics from the world's most prestigious mills." },
    { icon: <ShieldCheck className="text-gold" size={20} />, title: "Authenticity Guaranteed", desc: "Direct partnerships with brands like Arvind and Raymond." },
    { icon: <TrendingUp className="text-gold" size={20} />, title: "Wholesale Mastery", desc: "Expert logistics and tiered pricing for global retailers." },
    { icon: <Users className="text-gold" size={20} />, title: "Legacy of Trust", desc: "A 25-year heritage of serving the most discerning clients." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="overflow-hidden">
      {/* World-Class Hero Section */ }
      <section className="relative h-screen flex items-center bg-navy overflow-hidden">
        {/* Parallax Background Layers */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="/hero-showroom.png" 
            alt="Luxury Showroom" 
            className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
          />
        </motion.div>
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120%] z-10 hidden lg:block opacity-60"
        >
          <img 
            src="/macro-texture.png" 
            alt="Silk Texture" 
            className="w-full h-full object-cover rounded-l-[100px] shadow-premium"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10"></div>

        <div className="container relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-px bg-gold"></span>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold">Since 1995</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="editorial-heading text-white"
            >
              The Science of Style. <br />
              <span className="text-gold italic font-light">The Art of Heritage.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mb-12 text-lg text-gray-400 max-w-xl leading-relaxed font-light"
            >
              India's premier destination for world-class textiles. We bridge the gap between historic craftsmanship and modern sartorial excellence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <Link href="/products" className="btn btn-gold !px-16">
                Explore Atelier
              </Link>
              <Link href="/contact" className="btn btn-outline border-white/20 text-white hover:border-white !px-16">
                Private Visit
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-12 left-12 flex items-center space-x-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
          <span className="text-[8px] tracking-[0.4em] uppercase text-gold/50 vertical-text">Scroll To Discover</span>
        </motion.div>
      </section>

      {/* Brand Heritage Bar */}
      <section className="py-20 glass-dark border-y border-white/5 relative z-20">
        <div className="container overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex items-center space-x-24 opacity-30 whitespace-nowrap"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-3xl font-bold font-heading tracking-widest text-white uppercase italic">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Curated Collections Section - Vertical High-Impact */}
      <section className="section-padding bg-cream relative overflow-hidden">
         <div className="container">
            <div className="flex flex-col lg:flex-row items-baseline justify-between mb-32 border-b border-navy/5 pb-12">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
               >
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-6 block">Hand-Picked Selections</span>
                  <h2 className="editorial-heading text-navy text-6xl lg:text-8xl">Curated <br /><span className="italic font-light">Collections.</span></h2>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, duration: 1.5 }}
                 className="max-w-md mt-12 lg:mt-0"
               >
                  <p className="text-navy/50 text-xl font-light italic leading-relaxed">
                    "Every thread tells a story of heritage. We've curated these limited ensembles to provide the definitive foundations for your sartorial vision."
                  </p>
               </motion.div>
            </div>

            <div className="space-y-24 lg:space-y-64">
               {[
                 { 
                   title: "The Midnight Silk Series", 
                   subtitle: "Evening Mastery", 
                   desc: "A meticulous orchestration of deep indigos and raven blacks, featuring superfine threadcounts from world-renowned mills.",
                   image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
                   tag: "S/S COLLECTION"
                 },
                 { 
                   title: "Atelier Heritage Linens", 
                   subtitle: "Natural Sophistication", 
                   desc: "Breathable, high-density weaves sourced from European flax, designed for the modern gentleman's wardrobe essentials.",
                   image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
                   tag: "LIMITED RESERVE",
                   reverse: true
                 },
                 { 
                   title: "Bespoke Suiting Vault", 
                   subtitle: "Legacy Blends", 
                   desc: "Our private reserve of poly-wool blends and superfine worsted fabrics. The hallmark of Durga Ambica for over 25 years.",
                   image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1200",
                   tag: "LEGACY CORE"
                 }
               ].map((collection, i) => (
                 <motion.div 
                    key={collection.title}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 xl:gap-48 ${collection.reverse ? 'lg:flex-row-reverse' : ''}`}
                 >
                    {/* Collection Image Stage */}
                    <div className="w-full lg:w-3/5 relative group perspective">
                       <div className="absolute -inset-4 border border-gold/10 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000"></div>
                       <div className="luxury-card border-none overflow-hidden aspect-[16/10] bg-navy group-hover:shadow-2xl transition-all duration-1000">
                          <img 
                            src={collection.image} 
                            alt={collection.title} 
                            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2500ms]"
                          />
                          <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-1000"></div>
                          <div className="absolute top-10 left-10 bg-white/95 backdrop-blur px-8 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-navy border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                             {collection.tag}
                          </div>
                       </div>
                    </div>

                    {/* Collection Copy */}
                    <div className="w-full lg:w-2/5 space-y-10">
                       <div className="space-y-4">
                          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.6em] block">{collection.subtitle}</span>
                          <h3 className="editorial-heading text-4xl lg:text-6xl text-navy">{collection.title}</h3>
                       </div>
                       <p className="text-navy/60 text-lg lg:text-xl font-light leading-relaxed max-w-md opacity-0 while-in-view:opacity-100 transition-opacity duration-1000">
                          {collection.desc}
                       </p>
                       <div className="pt-8">
                          <Link href="/products" className="btn btn-primary !px-12 group/btn relative overflow-hidden">
                             <span className="relative z-10">DISCOVER COLLECTION</span>
                             <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                          </Link>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
         
         {/* Decorative Background Element */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-[0.02] -z-10 pointer-events-none select-none">
            <span className="text-[40vw] font-bold font-heading whitespace-nowrap text-navy">ATELIER</span>
         </div>
      </section>

      {/* Secondary Discovery Grid (Existing Categories) */}
      <section className="section-padding bg-white">
         <div className="container">
            <div className="text-center mb-32">
               <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">Full Spectrum</span>
               <h2 className="editorial-heading text-navy">Fabric <span className="italic font-light">Archetypes.</span></h2>
            </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {categories.map((cat, index) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden transition-all duration-1000 ${cat.class}`}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-1000"></div>
                
                {/* Minimal Overlay */}
                <div className="absolute bottom-10 left-10 text-white z-20">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-gold mb-3 block opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-700">{cat.count}</span>
                  <h3 className="text-3xl font-bold font-heading">{cat.name}</h3>
                </div>
                
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-1000 m-6 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atelier Standards Overlay */}
      <section className="section-padding bg-navy text-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-8 block">The Atelier Standard</span>
            <h2 className="editorial-heading mb-16">Reliability is our <span className="italic font-light">Greatest Luxury.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              {features.map((feature, i) => (
                <div key={i} className="group p-8 border border-white/5 hover:border-gold/20 transition-all duration-700 glass-dark">
                  <div className="w-10 h-10 flex items-center justify-center mb-6 bg-gold/5 border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-gold mb-4 uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boutique Partnership Showroom */}
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="luxury-card flex flex-col lg:flex-row min-h-[600px] border-none">
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1557161181-ed0ea0027f30?auto=format&fit=crop&q=80&w=1200" 
                alt="Wholesale Atelier" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-cream">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-6 block">B2B Atelier</span>
              <h2 className="editorial-heading text-navy text-4xl lg:text-5xl mb-10 leading-tight">Empowering Boutiques Through <span className="italic font-light">Global Textile Sourcing</span></h2>
              <p className="text-gray-600 mb-12 font-light leading-relaxed">
                We provide garment shops, boutiques, and designers with a Tier-1 textile supply chain. From exclusive weavers to high-volume shirting mills, we ensure your business never compromises on quality.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <Link href="/wholesale" className="btn btn-primary !px-12">Wholesale Application</Link>
                <div className="flex items-center space-x-3 text-navy opacity-50">
                  <span className="w-8 h-px bg-navy"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Global Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Testimonials */}
      <section className="section-padding bg-cream relative">
        <div className="container overflow-hidden">
           <div className="text-center mb-24">
            <h2 className="editorial-heading text-navy">Reflections of <span className="italic font-light">Satisfaction</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-navy/5">
            {[
              { name: "Siddharth Mehta", role: "Custom Couture Designer", quote: "The consistency of the linen threadcounts and the richness of their suiting catalog has elevated my private label to a national level." },
              { name: "Elena Rossi", role: "Textile Curator", quote: "Their showroom is a masterclass in fabric curation. Durga Ambica hasn't just built a store; they have built an institution for the textile arts." },
              { name: "Karan Johas", role: "Retail Magnate", quote: "Transparency and supply chain reliability are rare in this industry. Durga Ambica is the standard by which all wholesalers should be measured." }
            ].map((t, index) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 1.5 }}
                className="bg-white p-12 hover:bg-navy hover:text-white transition-all duration-1000 border-r border-navy/5 last:border-r-0 group cursor-default"
              >
                <Quote className="text-gold opacity-20 mb-12 group-hover:scale-125 transition-transform duration-700" size={40} strokeWidth={1} />
                <p className="text-xl font-heading leading-relaxed mb-12 italic">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold font-heading uppercase tracking-widest text-navy group-hover:text-gold transition-colors">{t.name}</h4>
                  <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gold group-hover:text-white transition-colors">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Final CTA */}
      <section className="h-[70vh] relative flex items-center justify-center text-center overflow-hidden bg-navy">
         <img 
            src="https://images.unsplash.com/photo-1520006403993-4740f0ad40ad?auto=format&fit=crop&q=80&w=1920" 
            alt="Final CTA Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
          />
         <div className="container relative z-10 max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <h2 className="editorial-heading text-white mb-12">Experience the Weaver's <span className="italic font-light">Legacy.</span></h2>
              <p className="text-gray-400 text-lg mb-12 font-light max-w-2xl mx-auto">From the first thread to the final drape, we ensure your textile journey is as exceptional as your final garment.</p>
              <div className="flex flex-wrap justify-center gap-8">
                 <Link href="/contact" className="btn btn-gold !px-16">Locate a Showroom</Link>
                 <Link href="/wholesale" className="btn btn-outline border-white/20 text-white hover:border-white !px-16">Request a Swatchbook</Link>
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Home;
