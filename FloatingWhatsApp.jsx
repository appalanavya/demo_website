import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/910000000000?text=I'd%20like%20to%20order%20delicious%20food%20from%20Sri%20Vandana!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] md:bottom-12 md:right-12 cursor-pointer group transition-all hover:scale-110 active:scale-95"
    >
      <div className="absolute -top-12 right-0 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none">
        Order via WhatsApp
      </div>
      <MessageSquare size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
