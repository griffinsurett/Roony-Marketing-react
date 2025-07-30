// src/components/Button.jsx
import React from 'react';

/**
 * A button that can also render as a link when given `href`.
 *
 * Props:
 *  - variant: 'primary' | 'secondary'
 *  - href: if provided, renders an `<a>` instead of `<button>`
 *  - icon, children, className, etc.
 */
const Button = ({
  variant = 'primary',
  href,
  className = '',
  icon,
  children,
  ...props
}) => {
  const baseClasses =
    'px-12 cursor-pointer py-5 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl uppercase';
  const variants = {
    primary: 'bg-blue-400 hover:bg-yellow-500 text-gray-900',
    secondary: 'border-4 border-white text-white hover:bg-white hover:text-gray-900',
  };
  const variantClasses = variants[variant] || variants.primary;
  const allClasses = `${baseClasses} ${variantClasses} ${className}`;

  // If href is provided, render an anchor
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  // Otherwise, a normal button
  return (
    <button className={allClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
