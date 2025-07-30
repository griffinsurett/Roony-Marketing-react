// src/sections/Contact.jsx
import React from 'react';
import ContactCard from '../components/cards/ContactCard';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from './siteData';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <Phone className="w-8 h-8 text-yellow-400 mx-auto" />, 
    title: "Call Us",
    linkPrefix: 'tel:',
    info: "(555) 123-4567",
    color: "yellow-600",
  },
  {
    icon: <Mail className="w-8 h-8 text-yellow-400 mx-auto" />, 
    title: "Email Us",
    linkPrefix: 'mailto:',
    info: "hello@roonymarketing.com",
    color: "orange-600",
  },
  {
    icon: <MapPin className="w-8 h-8 text-yellow-400 mx-auto" />, 
    title: "Location",
    linkPrefix: 'https://www.google.com/maps/search/',
    info: siteData.location,
    color: "red-500",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"></div>
    {/* shapes left out intentionally */}
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
          <span className="text-white">MARKETING</span><br/>
          <span className="text-blue-400">THAT</span><br/>
          <span className="text-blue-400">WORKS</span>
        </h2>
        <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
          Transform your brand with our bold, creative marketing solutions that drive real results
        </p>
        <ContactForm/>
        <div className="grid md:grid-cols-3 gap-6 pt-16">
          {contactInfo.map((c, i) => (
            <ContactCard key={i} icon={c.icon} title={c.title} linkPrefix={c.linkPrefix} info={c.info} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;