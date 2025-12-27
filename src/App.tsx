import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Qualifications from './pages/Qualifications';
import MyWorks from './pages/MyWorks';

/* 🔥 Scroll reset on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen">
        <Header />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Gallery />
                <About />
                <Contact />
              </>
            }
          />

          {/* QUALIFICATIONS */}
          <Route path="/qualifications" element={<Qualifications />} />

          {/* MY WORKS */}
          <Route path="/my-works" element={<MyWorks/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
