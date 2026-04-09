import React from 'react';
import exteriorImg from '../assets/restaurant-exterior.jpg';
import chickenBiryani from '../assets/chicken-biryani.png';
import idlyVada from '../assets/idly-vada.png';
import chicken65 from '../assets/chicken-65.png';
import fishBiryani from '../assets/fish-biryani.png';
import mushroomBiryani from '../assets/mushroom-biryani.png';

const Gallery = () => {
  const images = [
    { src: exteriorImg, title: 'Restaurant Exterior' },
    { src: chickenBiryani, title: 'Dum Biryani' },
    { src: idlyVada, title: 'Soft Tiffins' },
    { src: chicken65, title: 'Crispy Starter' },
    { src: fishBiryani, title: 'Seafood Special' },
    { src: mushroomBiryani, title: 'Vegetarian Delight' },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Visual Feast</h4>
          <h2 className="text-5xl md:text-6xl font-black mb-6 whitespace-nowrap">Our Gallery</h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square group overflow-hidden rounded-3xl transition-all duration-500"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-black text-xl uppercase tracking-widest border-b-2 border-gold pb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
