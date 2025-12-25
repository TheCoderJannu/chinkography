import { Camera } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand (Camera → Home) */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <div className="relative">
            <Camera
              className={`w-8 h-8 transition-all duration-300 group-hover:rotate-12 ${
                scrolled ? 'text-red-600' : 'text-white'
              }`}
            />
            <div className="absolute inset-0 bg-red-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>

          <span
            className={`text-xl sm:text-2xl font-bold tracking-wider transition-all duration-300 ${
              scrolled ? 'text-red-600' : 'text-white'
            }`}
          >
            CHINKOGRAPHY
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8">
          {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative text-sm font-semibold tracking-wide transition-all duration-300 group ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Let's Talk Button (single line on all devices) */}
        <button
          onClick={() => (window.location.href = 'mailto:chinkography@gmail.com')}
          className="whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 
                     bg-red-600 text-white font-semibold rounded-full 
                     hover:bg-red-700 transition-all duration-300 
                     hover:scale-105 hover:shadow-lg hover:shadow-red-600/50
                     text-xs sm:text-sm md:text-base"
        >
          Let&apos;s Talk
        </button>

      </div>
    </header>
  );
}
