'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShoppingBag, Search, Filter, ArrowRight, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductsContent = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const categories = [
    "All", "Suiting", "Shirting", "Innerwear", "Linen", "Bed Sheets", "Accessories"
  ];

  const products = [
    { id: 1, name: "Bespoke Italian Suiting", category: "Suiting", brand: "Raymond", image: "https://images.unsplash.com/photo-1594932224828-b4b39ef3a72671?auto=format&fit=crop&q=80&w=800", price: "Starting ₹800/m", size: "lg:col-span-2 lg:row-span-2" },
    { id: 2, name: "Giza Cotton Shirting", category: "Shirting", brand: "Arvind", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800", price: "Starting ₹400/m", size: "" },
    { id: 3, name: "Luxury Silk-Wool Blend", category: "Suiting", brand: "Siyaram", image: "https://images.unsplash.com/photo-1588612196323-96b6fb098d5a?auto=format&fit=crop&q=80&w=800", price: "Starting ₹1200/m", size: "" },
    { id: 4, name: "Hand-Woven Linen Bloom", category: "Linen", brand: "Linen Club", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800", price: "Starting ₹1500/m", size: "lg:col-span-2" },
    { id: 5, name: "Egyptian Cotton Vests", category: "Innerwear", brand: "Jockey", image: "https://images.unsplash.com/photo-1582533081023-ef880625f385?auto=format&fit=crop&q=80&w=800", price: "Pack of 3 ₹600", size: "" },
    { id: 6, name: "Imperial Silk Bed Sheet", category: "Bed Sheets", brand: "Bombay Dyeing", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", price: "Starting ₹1800", size: "" },
    { id: 7, name: "Turkish Cotton Towels", category: "Accessories", brand: "Durga Ambica", image: "https://images.unsplash.com/photo-1595180635405-b778647acae3?auto=format&fit=crop&q=80&w=800", price: "Set of 2 ₹800", size: "lg:col-span-2" },
    { id: 8, name: "Merino Wool Tweed", category: "Suiting", brand: "Raymond", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", price: "Starting ₹2500/m", size: "" },
  ];

  useEffect(() => {
    const catId = searchParams.get('cat');
    if (catId) {
       if (catId === '1' || catId === 'suiting') setActiveCategory("Suiting");
       if (catId === '2' || catId === 'shirting') setActiveCategory("Shirting");
       if (catId === 'bedsheets') setActiveCategory("Bed Sheets");
       if (catId === 'linen') setActiveCategory("Linen");
    }
  }, [searchParams]);

  const filteredProducts = products.filter(p => 
    (activeCategory === "All" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pb-24 min-h-screen bg-cream">
      {/* Editorial Header Section */}
      <section className="bg-navy text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-30"></div>
        <div className="container relative z-10">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-6 block">The Catalog</span>
                <h1 className="editorial-heading mb-0">Fabric <span className="italic font-light">Atelier</span></h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-full lg:w-1/3 group"
              >
                <input 
                  type="text" 
                  placeholder="SEARCH THE COLLECTION..." 
                  className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-xs font-bold tracking-widest text-white focus:outline-none focus:border-gold transition-all uppercase placeholder:text-white/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold transition-colors" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Glass Filter Bar */}
      <section className="py-12 lg:py-16 glass border-y border-navy/5 sticky top-[80px] lg:top-[96px] z-30 overflow-hidden">
        <div className="container overflow-x-auto no-scrollbar scroll-smooth">
           <div className="flex items-center space-x-12 min-w-max pb-2 lg:pb-0">
              <div className="flex items-center space-x-3 text-navy/40 font-bold uppercase tracking-[0.3em] text-[9px] whitespace-nowrap">
                <Filter size={12} className="text-gold" />
                <span>Sort Selection</span>
              </div>
              <div className="flex items-center space-x-12 pr-12 lg:pr-0">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      router.push('/products', { scroll: false });
                    }}
                    className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-all relative group py-2
                    ${activeCategory === cat ? 'text-navy' : 'text-navy/40 hover:text-gold'}`}
                  >
                    {cat}
                    <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-500 ${activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Editorial Boutique Grid */}
      <section className="py-24">
        <div className="container">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-48"
              >
                 <h3 className="text-4xl font-light italic font-heading text-navy/20 mb-12 uppercase tracking-widest">Archive Empty</h3>
                 <button 
                   onClick={() => {setActiveCategory("All"); setSearchQuery("");}} 
                   className="btn btn-outline"
                 >
                    Reset Atelier
                 </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
                {filteredProducts.map((product, index) => (
                  <motion.div 
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`group flex flex-col ${product.size}`}
                  >
                    {/* Artistic Image Display */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 luxury-card border-none">
                       <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                      />
                       <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-4 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-navy border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                        {product.brand}
                      </div>

                      {/* Interaction Bar */}
                      <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center space-x-6">
                         <Link 
                           href="/wholesale" 
                           className="w-14 h-14 bg-white flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all transform hover:rotate-12"
                         >
                           <ShoppingBag size={20} />
                         </Link>
                         <a 
                           href="https://wa.me/+911234567890" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="w-14 h-14 bg-gold flex items-center justify-center text-white hover:bg-navy transition-all transform hover:-rotate-12"
                         >
                           <MessageSquare size={20} />
                         </a>
                      </div>
                    </div>

                    {/* Editorial Description */}
                    <div className="pt-8 bg-transparent">
                       <div className="flex justify-between items-start mb-4">
                          <span className="text-[9px] font-bold text-gold uppercase tracking-[0.4em]">{product.category}</span>
                          <span className="text-[11px] font-bold text-navy/40 uppercase tracking-widest">{product.price}</span>
                       </div>
                       <h3 className="text-2xl font-bold font-heading text-navy group-hover:text-gold transition-colors duration-700 leading-tight">
                        {product.name}
                       </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* B2B Boutique Section */}
      <section className="section-padding pt-0">
         <div className="container">
            <div className="glass-dark p-16 lg:p-32 text-center text-white relative overflow-hidden border-none luxury-card bg-navy">
               <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
               
               <div className="relative z-10 max-w-4xl mx-auto">
                 <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-10 block">Atelier Partnerships</span>
                 <h2 className="editorial-heading text-4xl lg:text-6xl mb-12">Looking for <span className="italic font-light">Master Swatches?</span></h2>
                 <p className="text-gray-400 text-lg mb-16 font-light max-w-2xl mx-auto opacity-80">
                   We supply the world's most discerning boutique owners and tailors with curated swatchbooks and priority mill access.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8">
                    <Link href="/wholesale" className="btn btn-gold !px-16">
                      Wholesale Access
                    </Link>
                    <Link href="/contact" className="btn btn-outline border-white/20 text-white hover:border-white !px-16">
                      Showroom Visit
                    </Link>
                 </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const Products = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-cream"><div className="w-12 h-12 border-4 border-gold border-t-navy rounded-full animate-spin"></div></div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
