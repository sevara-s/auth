"use client";  

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Register', path: '/sign-up' },
    { name: 'Login', path: '/login' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                LUMINA
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                className="relative px-2 py-1 overflow-hidden group"
              >
                <span className="text-white font-medium transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {link.name}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                className="relative px-4 py-2 overflow-hidden group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-white font-medium transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {link.name}
                </span>
                <span className="absolute inset-x-4 bottom-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}