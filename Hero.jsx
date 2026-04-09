import React from 'react';
import { Star, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import exteriorImg from '../assets/restaurant-exterior.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[10000ms] ease-out">
        <img 
          src={exteriorImg} 
          alt="Sri Vandana Family Restaurant Exterior" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <span className="inline-block bg-gold/20 backdrop-blur-md border border-gold/40 text-gold px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Top Rated Family Restaurant in Ghatkesar
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight">
            Sri Vandana <br />
            <span className="text-gold">Family Restaurant</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-10 tracking-wide max-w-2xl mx-auto italic">
            "Authentic Taste. Premium Experience."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
            <Link
              to="menu"
              smooth={true}
              duration={500}
              className="w-full md:w-auto bg-gold hover:bg-gold-light text-black px-10 py-5 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase tracking-tighter"
            >
              View Menu
            </Link>
            
            <a
              href="https://wa.me/910000000000?text=I'd%20like%20to%20order%20delicious%20food%20from%20Sri%20Vandana!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-tighter"
            >
              <MessageCircle size={24} className="text-green-400" />
              Order on WhatsApp
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill={s <= 4 ? "#D4AF37" : "none"} className={s <= 4 ? "text-gold" : "text-gray-400"} />
              ))}
              <span className="text-white font-bold ml-2 text-lg">4.5 ⭐</span>
            </div>
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              (10,000+ Happy Customers)
            </p>
          </div>
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-8 z-20 cursor-pointer animate-bounce text-gold/60 hover:text-gold transition-colors"
      >
        <ChevronDown size={40} />
      </Link>
    </section>
  );
};

export default Hero;
