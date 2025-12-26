{/*import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['CREATIVE DIRECTOR', 'CINEMATOGRAPHER', 'SENIOR EDITOR', 'PHOTOGRAPHER', 'VISUAL ARTIST', 'STORY TELLER', 'CONTENT CREATOR'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden mb-6">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter animate-slide-up">
            CHINKOGRAPHY
          </h1>
        </div>

        <div className="h-16 mb-8 overflow-hidden">
          {texts.map((text, index) => (
            <div
              key={text}
              className={`text-3xl md:text-5xl font-bold text-red-500 transition-all duration-700 ${
                currentText === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-full absolute'
              }`}
            >
              {text}
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
I SEE WHAT YOU CAN'T</p>

        <div className="flex gap-6 justify-center animate-fade-in-delay">
          <button
            onClick={() =>
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 transform"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-110"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 1s both;
        }
      `}</style>
    </section>
  );
}*/}
 
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    'CREATIVE DIRECTOR',
    'CINEMATOGRAPHER',
    'SENIOR EDITOR',
    'PHOTOGRAPHER',
    'VISUAL ARTIST',
    'STORY TELLER',
    'CONTENT CREATOR',
  ];

  // Text change interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="overflow-hidden mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight animate-slide-up">
            CHINKOGRAPHY
          </h1>
        </div>

        {/* Animated Role Text */}
        <div className="relative h-16 mb-8 flex items-center justify-center overflow-hidden">
          <div
            key={currentText}
            className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 animate-role-slide px-2"
          >
            {texts[currentText]}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
          WE SEE WHAT YOU CAN&apos;T
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
          <button
            onClick={() =>
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="whitespace-nowrap px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
          >
            View Our Work
          </button>

          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="whitespace-nowrap px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105"
          >
            Get connected
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
<a
  href="#gallery"
  className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
  aria-label="Scroll to gallery"
>
  <ChevronDown className="w-8 h-8 text-white hover:text-red-500 transition-colors" />
</a>


      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes role-slide {
          0% { opacity: 0; transform: translateY(40px); }
          30% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-40px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out;
        }

        .animate-role-slide {
          animation: role-slide 2.8s ease-in-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out 0.5s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 1.2s ease-out 1s both;
        }
      `}</style>
    </section>
  );
}
