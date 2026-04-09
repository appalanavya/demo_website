import React from 'react';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer group inline-block mb-8">
              <div className="text-3xl font-black text-gold tracking-tight lowercase italic">
                v<span className="text-white">andana</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Bringing the authentic taste of Hyderabad to your table. Experience premium dining and heartwarming hospitality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link to="about" smooth={true} duration={500} className="hover:text-gold transition-colors cursor-pointer">Our Story</Link></li>
              <li><Link to="menu" smooth={true} duration={500} className="hover:text-gold transition-colors cursor-pointer">Menu Special</Link></li>
              <li><Link to="gallery" smooth={true} duration={500} className="hover:text-gold transition-colors cursor-pointer">Gallery</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="hover:text-gold transition-colors cursor-pointer">Locate Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>Ghatkesar, Hyderabad - Warangal Highway</li>
              <li>Telangana, 501301</li>
              <li>+91 91000 00000</li>
              <li>support@srivandana.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-6 italic">Get updates on special offers and new dishes.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-all w-full"
              />
              <button 
                type="button" 
                className="bg-gold text-black px-6 py-3 rounded-r-xl font-black text-xs uppercase tracking-widest hover:bg-gold-light transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © 2026 Sri Vandana Family Restaurant. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-1">
            Made with <Heart size={10} className="text-red-600 fill-red-600" /> for Authentic Taste.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
