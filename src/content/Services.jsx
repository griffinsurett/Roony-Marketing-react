// src/sections/ServicesSection.jsx
import React from 'react';
import ServiceCard from '../components/cards/ServicesCard';
import { MessageSquare, Users, Target, Database, Code, TrendingUp } from 'lucide-react';

const services = [
  { icon: <MessageSquare className="w-8 h-8" />, title: "Content Creation", description: "Compelling content that resonates with your audience and drives engagement across all platforms.", color: "from-pink-500 to-purple-600" },
  { icon: <Users className="w-8 h-8" />, title: "Social Media Management", description: "Complete social media strategy, posting, and community management to grow your brand.", color: "from-cyan-500 to-blue-600" },
  { icon: <Target className="w-8 h-8" />, title: "Facebook Ads", description: "Data-driven paid advertising campaigns that maximize ROI and reach your ideal customers.", color: "from-yellow-500 to-orange-600" },
  { icon: <Database className="w-8 h-8" />, title: "CRM Management", description: "Streamlined customer relationship management to nurture leads and boost conversions.", color: "from-green-500 to-teal-600" },
  { icon: <Code className="w-8 h-8" />, title: "Website Design & Development", description: "Modern, responsive websites with hosting solutions that convert visitors into customers.", color: "from-indigo-500 to-purple-600" },
  { icon: <TrendingUp className="w-8 h-8" />, title: "Digital Strategy", description: "Comprehensive digital marketing strategies tailored to your business goals and market.", color: "from-pink-500 to-red-600" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 relative bg-gradient-to-br from-purple-50 to-cyan-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          <span className="text-gray-800">Our </span>
          <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive digital marketing solutions designed to elevate your brand and drive measurable business growth.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => <ServiceCard key={i} {...svc} />)}
      </div>
    </div>
  </section>
);

export default ServicesSection;