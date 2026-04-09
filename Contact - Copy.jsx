import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Visit Us</h4>
            <h2 className="text-5xl md:text-6xl font-black mb-10">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-gold/10 p-4 rounded-2xl text-gold">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400 leading-relaxed italic">
                    Ghatkesar, Hyderabad - Warangal Highway,<br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gold/10 p-4 rounded-2xl text-gold">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400 font-medium">+91 91000 00000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gold/10 p-4 rounded-2xl text-gold">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Mon - Sun: 7:00 AM - 11:30 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {/* Optional: Add social handles later */}
            </div>
          </div>

          {/* Form/Map Placeholder Side */}
          <div className="w-full lg:w-1/2">
            <div className="h-full min-h-[400px] bg-dark-lighter rounded-[3rem] border border-white/10 p-2 overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.989028913498!2d78.6800!3d17.4300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76!2sGhatkesar%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin" 
                className="w-full h-full rounded-[2.8rem] filter grayscale invert contrast-75"
                frameBorder="0" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
