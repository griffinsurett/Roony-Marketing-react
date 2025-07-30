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
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      @keyframes drift {
        0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        25% { transform: translateX(10px) translateY(-15px) rotate(90deg); }
        50% { transform: translateX(-5px) translateY(-10px) rotate(180deg); }
        75% { transform: translateX(-10px) translateY(5px) rotate(270deg); }
        100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
      }
      
      @keyframes orbit {
        0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
      }
      
      @keyframes slide {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(40px) rotate(180deg); }
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-30px) scale(1.1); }
      }
      
      @keyframes wiggle {
        0%, 100% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(3deg) scale(1.05); }
        75% { transform: rotate(-3deg) scale(0.95); }
      }
      
      @keyframes pulse-move {
        0%, 100% { transform: scale(1) translateX(0px); }
        50% { transform: scale(1.2) translateX(20px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-drift {
        animation: drift 8s ease-in-out infinite;
      }
      
      .animate-orbit {
        animation: orbit 10s linear infinite;
      }
      
      .animate-slide {
        animation: slide 7s ease-in-out infinite;
      }
      
      .animate-bounce-custom {
        animation: bounce 4s ease-in-out infinite;
      }
      
      .animate-wiggle {
        animation: wiggle 3s ease-in-out infinite;
      }
      
      .animate-pulse-move {
        animation: pulse-move 5s ease-in-out infinite;
      }
    `}</style>

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