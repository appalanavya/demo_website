import React from 'react';
import exteriorImg from '../assets/restaurant-exterior.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-gold/20 shadow-2xl">
              <img 
                src={exteriorImg} 
                alt="Sri Vandana Restaurant Exterior" 
                className="w-full aspect-video lg:aspect-square object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Our Legacy</h4>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              A Tradition of <br />
              <span className="text-gold">Authentic Flavors</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Located in Ghatkesar, Hyderabad - Warangal Highway, <strong>Sri Vandana Family Restaurant</strong> has been the destination for food lovers seeking genuine South Indian tastes and world-class Biryani. 
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-3xl font-black text-white mb-1">10k+</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-1">100%</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider">Hygienic Prep</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-1">4.5</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider">Average Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-1">24/7</h3>
                <p className="text-gold text-sm font-bold uppercase tracking-wider">Passionate Service</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg italic border-l-4 border-gold pl-6 py-2">
              "We believe great food is not just about ingredients, but about the passion and tradition served on every plate."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
