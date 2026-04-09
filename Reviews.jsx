import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    date: '2 weeks ago',
    text: 'Best Biryani in Ghatkesar! The quality of rice and the spice level was perfect. Very hygienic and fast service.',
    stars: 5,
  },
  {
    name: 'Priyanka Reddy',
    date: '1 month ago',
    text: 'Amazing breakfast! The Ghee Masala Dosa is out of this world. Highly recommend for family dinners too.',
    stars: 5,
  },
  {
    name: 'Sandeep Varma',
    date: '3 weeks ago',
    text: 'Special Chicken Biryani is a must-try. The quantity serves two people easily. Great value for money and premium taste.',
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Customer Echoes</h4>
          <h2 className="text-5xl md:text-6xl font-black mb-6">Real Reviews</h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-dark p-10 rounded-[2.5rem] border border-white/5 relative group hover:border-gold/30 transition-all shadow-2xl duration-500"
            >
              <Quote size={40} className="text-gold/20 absolute top-8 right-8 group-hover:text-gold/40 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" className="text-gold" />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-black text-xl">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
