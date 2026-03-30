import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+911234567890";
  const message = "Hi, I'm interested in Durga Ambica Textiles fabrics and would like more information.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 transition-all duration-300 transform rounded-full shadow-2xl bg-[#25D366] hover:bg-[#128C7E] hover:scale-110 active:scale-95 group focus:outline-none"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:animate-none"></div>
      <MessageSquare size={32} className="relative text-white" />
          
      <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border-l-4 border-l-gold">
         <span className="text-sm font-bold text-navy uppercase tracking-widest">Enquire Now</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
