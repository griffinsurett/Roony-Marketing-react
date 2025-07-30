import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { siteData } from '../content/siteData';

const navLinks = [
  { href: "#home",        label: "Home",        hoverColor: { scrolled: "pink-600",    transparent: "blue-400" } },
  { href: "#about",       label: "About",       hoverColor: { scrolled: "cyan-600",    transparent: "blue-400" } },
  { href: "#services",    label: "Services",    hoverColor: { scrolled: "yellow-600",  transparent: "blue-400" } },
  { href: "#testimonials",label: "Testimonials",hoverColor: { scrolled: "purple-600",  transparent: "blue-400" } },
  { href: "#contact",     label: "Contact",     hoverColor: { scrolled: "orange-600", transparent: "blue-400" } },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 flex justify-center items-stretch mx-auto flex-col w-full px-8 min-h-[10vh] lg:min-h-[15vh] z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
        : 'bg-white/10 backdrop-blur-md border-b border-white/20'
    }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Logo className="w-15 h-15 md:w-20 md:h-20 lg:w-25 lg:h-25" />
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`transition-colors font-medium lg:text-lg ${
                  isScrolled
                    ? `text-gray-700 hover:text-${link.hoverColor.scrolled}`
                    : `text-white hover:text-${link.hoverColor.transparent}`
                }`}>
                {link.label}
              </a>
            ))}
          </div>
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(o => !o)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t ${
          isScrolled ? 'bg-white/95 border-gray-200' : 'bg-white/20 border-white/20'
        }`}>
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`block transition-colors font-medium ${
                  isScrolled
                    ? `text-gray-700 hover:text-${link.hoverColor.scrolled}`
                    : `text-white hover:text-${link.hoverColor.transparent}`
                }`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
