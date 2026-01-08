import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHomeSection = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 hidden md:block
        transition-all duration-700
        ${scrolled ? 'bg-white/5 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/chinkography-logo.PNG"
              alt="Chinkography Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg tracking-[0.2em] text-red-600 font-semibold">
              CHINKOGRAPHY
            </span>
          </Link>

          <nav className="flex gap-10">
            <NavItem label="Home" onClick={() => goHomeSection('home')} />
            <NavItem label="Gallery" onClick={() => goHomeSection('gallery')} />
            <NavItem label="About" onClick={() => goHomeSection('about')} />
            <NavItem label="Contact" onClick={() => goHomeSection('contact')} />
            <Link to="/my-works" className="nav-link text-red-600">
              My Works
            </Link>
            <Link to="/qualifications" className="nav-link text-red-600">
              Qualifications
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className={`md:hidden fixed top-0 inset-x-0 z-50
        transition-all duration-700
        ${scrolled ? 'bg-white/5 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-6'}`}
      >
        <div className="px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/chinkography-logo.PNG"
              alt="Chinkography Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-sm tracking-[0.25em] font-semibold text-red-600">
              CHINKOGRAPHY
            </span>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300
              ${menuOpen ? 'bg-red-600 rotate-45 translate-y-2' : 'bg-red-600'}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300
              ${menuOpen ? 'opacity-0' : 'bg-red-600'}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300
              ${menuOpen ? 'bg-red-600 -rotate-45 -translate-y-2' : 'bg-red-600'}`}
            />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40
          bg-white/80 backdrop-blur-2xl
          flex flex-col items-center justify-center gap-10
          text-xl tracking-widest"
        >
          <MobileNav onClick={() => goHomeSection('home')}>Home</MobileNav>
          <MobileNav onClick={() => goHomeSection('gallery')}>Gallery</MobileNav>
          <MobileNav onClick={() => goHomeSection('about')}>About</MobileNav>
          <MobileNav onClick={() => goHomeSection('contact')}>Contact</MobileNav>

          {/* 🔥 FIXED LINKS */}
          <Link
            to="/my-works"
            onClick={() => setMenuOpen(false)}
            className="nav-link text-red-600"
          >
            My Works
          </Link>

          <Link
            to="/qualifications"
            onClick={() => setMenuOpen(false)}
            className="nav-link text-red-600"
          >
            Qualifications
          </Link>
        </div>
      )}
    </>
  );
}

/* ================= COMPONENTS ================= */

function NavItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="nav-link text-red-600">
      {label}
    </button>
  );
}

function MobileNav({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="nav-link text-red-600">
      {children}
    </button>
  );
}
