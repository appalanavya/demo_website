import React from 'react';
import chickenBiryani from '../assets/chicken-biryani.png';
import fishBiryani from '../assets/fish-biryani.png';
import masalaDosa from '../assets/masala-dosa.png';

const specials = [
  {
    name: 'Signature Chicken Biryani',
    image: chickenBiryani,
    tag: 'Must Try',
    desc: 'Slow-cooked perfection with premium basmati rice and secret spices.'
  },
  {
    name: 'Royal Fish Biryani',
    image: fishBiryani,
    tag: 'Bestseller',
    desc: 'The highway favorite - fresh fish with aromatic long-grain rice.'
  },
  {
    name: 'Giant Masala Dosa',
    image: masalaDosa,
    tag: 'Top Rated',
    desc: 'A massive crispy golden dosa served with three types of chutneys.'
  }
];

const SpecialDishes = () => {
  return (
    <section className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Chef's Choice</h4>
            <h2 className="text-5xl md:text-6xl font-black mb-0">Our Special Dishes</h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg italic border-l-2 border-gold/40 pl-6">
            Handpicked by our executive chefs, these dishes represent the absolute peak of our culinary tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specials.map((dish, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-[3rem] transition-all duration-500"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="bg-gold text-black w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-4">
                    {dish.tag}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-2">{dish.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dish.desc}
                  </p>
                  <div className="h-1 w-full bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
