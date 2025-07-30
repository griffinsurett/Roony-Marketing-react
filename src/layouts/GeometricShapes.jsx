// src/components/shapes/ShapesBackground.jsx
import React from 'react';
import Circle from '../components/shapes/Circle';
import Triangle from '../components/shapes/Triangle';
import Rectangle from '../components/shapes/Rectangle';

/**
 * ShapesBackground renders a set of geometric shapes as a reusable background.
 * Props:
 *  - className: Tailwind utility classes applied to the container div
 */
const GeometricShapes = ({ className = 'absolute inset-0 overflow-hidden', ...props }) => (
  <div className={className} {...props}>

    <Circle className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-400 opacity-70 animate-float" />
    
    <div className="absolute top-10 left-10">
      <Circle className="w-32 h-32 bg-yellow-400 opacity-80 animate-orbit" />
    </div>
    
    <Triangle
      direction="up"
      className="absolute top-1/4 right-1/4 border-b-[120px] border-l-[80px] border-r-[80px] border-b-purple-400 opacity-60 animate-drift"
    />
    
    <Circle className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-400 opacity-30 animate-wiggle" />
    
    <Rectangle
      className="absolute bottom-20 right-20 w-16 h-16 bg-pink-300 opacity-70 rotate-45 animate-bounce-custom"
    />
    
    <Rectangle
      className="absolute top-1/3 left-1/4 w-12 h-12 bg-pink-400 opacity-60 rotate-12 animate-slide"
    />
    
    <Rectangle
      className="absolute bottom-1/3 right-10 w-24 h-40 bg-orange-400 opacity-60 rotate-12 rounded-lg animate-float"
      style={{ animationDelay: '2s' }}
    />
    
    <Circle className="absolute top-1/2 -left-10 w-40 h-40 bg-blue-400 opacity-60 animate-pulse-move" />
    
    <Circle 
      className="absolute top-20 right-1/3 w-20 h-20 bg-green-400 opacity-50 animate-drift"
      style={{ animationDelay: '3s' }}
    />
    
    <div className="absolute bottom-40 left-20">
      <Rectangle
        className="w-14 h-14 bg-yellow-300 opacity-70 rotate-45 animate-orbit"
      />
    </div>
  </div>
);

export default GeometricShapes;