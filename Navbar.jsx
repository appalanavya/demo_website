import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Menu', to: 'menu' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <div className="text-2xl md:text-3xl font-black text-gold tracking-tight lowercase italic">
            v<span className="text-white">andana</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="text-sm uppercase tracking-widest font-semibold hover:text-gold transition-colors cursor-pointer"
              activeClass="text-gold"
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-gold transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="bg-gold hover:bg-gold-light text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 cursor-pointer uppercase text-xs tracking-widest"
          >
            Order Now
          </Link>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <button onClick={onCartClick} className="relative p-2 text-white">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-1">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="menu"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold text-black text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
