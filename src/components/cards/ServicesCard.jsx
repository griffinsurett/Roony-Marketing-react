import React from 'react';

const ServiceCard = ({ icon, title, description, color, className = '' }) => (
  <div className={`group relative ${className}`}>
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 h-full shadow-lg hover:shadow-xl">
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${color} mb-6 text-white shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}/>
  </div>
);

export default ServiceCard;
