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

  const bgClasses = isScrolled
    ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
    : 'bg-white/10 backdrop-blur-md border-b border-white/20';

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 ${bgClasses}`}>
      {/* header row: fixed height */}
      <div className="h-16 lg:h-20 flex items-center justify-between px-6 lg:px-8">
        <Logo className="w-12 h-12 lg:w-16 lg:h-16" />

        {/* desktop links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`font-medium transition-colors lg:text-lg ${
                isScrolled
                  ? `text-gray-700 hover:text-${link.hoverColor.scrolled}`
                  : `text-white hover:text-${link.hoverColor.transparent}`
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(o => !o)}
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          {isMenuOpen
            ? <X className="w-8 h-8 lg:w-6 lg:h-6" />
            : <Menu className="w-8 h-8 lg:w-6 lg:h-6" />}
        </button>
      </div>

      {/* mobile menu panel: absolutely positioned under header */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 w-full ${isScrolled ? 'bg-white/95 border-b border-gray-200' : 'bg-white/20 border-b border-white/20'} backdrop-blur-md`}>
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`block font-medium transition-colors ${
                  isScrolled
                    ? `text-gray-700 hover:text-${link.hoverColor.scrolled}`
                    : `text-white hover:text-${link.hoverColor.transparent}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
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
