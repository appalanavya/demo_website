import React, { useState } from 'react';
import { Plus } from 'lucide-react';

import chickenBiryani from '../assets/chicken-biryani.png';
import fishBiryani from '../assets/fish-biryani.png';
import mushroomBiryani from '../assets/mushroom-biryani.png';
import idlyVada from '../assets/idly-vada.png';
import masalaDosa from '../assets/masala-dosa.png';
import chicken65 from '../assets/chicken-65.png';

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Biryani');
  const categories = ['Biryani', 'Tiffins', 'Starters', 'Drinks'];

  const menuItems = {
    Biryani: [
      { id: 1, name: 'Special Chicken Biryani', price: 320, image: chickenBiryani, desc: 'Rich, spicy, and authentic Hyderabadi style.' },
      { id: 2, name: 'Fish Biryani', price: 380, image: fishBiryani, desc: 'Tender fish fillets layered with aromatic rice.' },
      { id: 3, name: 'Mushroom Biryani', price: 280, image: mushroomBiryani, desc: 'Garnished with fresh herbs and caramelized onions.' },
    ],
    Tiffins: [
      { id: 4, name: 'Idly Vada Combo', price: 90, image: idlyVada, desc: 'Two soft idlies and one crispy medu vada.' },
      { id: 5, name: 'Ghee Masala Dosa', price: 110, image: masalaDosa, desc: 'Golden crispy dosa with spicy potato masala.' },
    ],
    Starters: [
      { id: 6, name: 'Chicken 65', price: 240, image: chicken65, desc: 'Crispy, spicy deep-fried chicken chunks.' },
    ],
    Drinks: [
      { id: 7, name: 'Filter Coffee', price: 30, image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400', desc: 'Authentic South Indian filter coffee.' },
      { id: 8, name: 'Masala Chai', price: 25, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400', desc: 'Brewed with fresh ginger and cardamom.' },
      { id: 9, name: 'Thick Milkshake', price: 120, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400', desc: 'Creamy and refreshing seasonal flavors.' },
    ]
  };

  return (
    <section id="menu" className="py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Taste the Royalty</h4>
          <h2 className="text-5xl md:text-6xl font-black mb-6">Our Signature Menu</h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-gold text-black shadow-lg scale-105' 
                  : 'bg-dark-lighter text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-all duration-500">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.id}
              className="group bg-dark-lighter rounded-[2rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all shadow-2xl"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-gold font-black px-4 py-2 rounded-2xl border border-gold/30">
                  ₹{item.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-gold hover:text-black border border-white/10 hover:border-gold text-white font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-xs"
                >
                  <Plus size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
