// src/sections/TestimonialsSection.jsx
import React from 'react';
import TestimonialCard from '../components/cards/TestimonialCard';

const testimonials = [
  { name: "Sarah Johnson", company: "TechStart Inc.", text: "Roony's team transformed our digital presence. Our social media engagement increased by 300% in just 3 months!", rating: 5 },
  { name: "Mike Chen",      company: "Local Bistro",       text: "The Facebook ads campaign brought us more customers than we ever imagined. ROI exceeded our expectations.",        rating: 5 },
  { name: "Lisa Rodriguez", company: "Fitness Plus",      text: "Professional, creative, and results-driven. Roony's content strategy helped us double our client base.",            rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 relative bg-gradient-to-r from-pink-50 to-yellow-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          <span className="bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">What Clients</span>
          <span className="text-gray-800"> Say</span>
        </h2>
        <p className="text-xl text-gray-600">Real results from real businesses we've helped grow.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t,i) => <TestimonialCard key={i} {...t} />)}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;