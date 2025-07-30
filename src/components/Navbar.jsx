import React, { useEffect, useRef } from 'react';

// PERBAIKAN: Navbar sekarang menerima activeLink dan setActiveLink sebagai props
const Navbar = ({ activeLink, setActiveLink }) => {
  const navRef = useRef(null);

  const [pillStyle, setPillStyle] = React.useState({});
  const [hoverPillStyle, setHoverPillStyle] = React.useState({ display: 'none' });

  const navLinks = ["Home", "Skils", "Sertifikat", "Kontak"];

  useEffect(() => {
    const updatePillPosition = () => {
      const activeElement = navRef.current?.querySelector(`a[data-link="${activeLink}"]`);
      if (activeElement) {
        setPillStyle({
          width: `${activeElement.offsetWidth}px`,
          transform: `translateX(${activeElement.offsetLeft}px)`,
        });
      }
    };
    
    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [activeLink]); // Tetap bergantung pada activeLink yang sekarang datang dari props

  const handleMouseMove = (e) => {
    if ('ontouchstart' in window) return;
    const targetLink = e.target.closest('a[data-link]');
    if (targetLink) {
      const hoveredLink = targetLink.dataset.link;
      if (hoveredLink !== activeLink) {
        setHoverPillStyle({
          display: 'block',
          width: `${targetLink.offsetWidth}px`,
          transform: `translateX(${targetLink.offsetLeft}px)`,
        });
      } else {
        setHoverPillStyle({ display: 'none' });
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverPillStyle({ display: 'none' });
  };

  return (
    <header className="fixed top-0 w-full flex justify-center z-50 p-2 sm:p-4">
      <nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative px-2 sm:px-4 py-2 sm:py-3 rounded-full bg-blue-950/30 backdrop-blur-xl border border-white/20 shadow-lg outline outline-1 md:outline-2 outline-blue-500 outline-offset-2"
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 h-[80%] rounded-full bg-blue-600 shadow-md transition-all duration-300 ease-in-out"
          style={pillStyle}
        ></span>
        <span
          className="absolute top-1/2 -translate-y-1/2 h-[80%] rounded-full bg-white/20 backdrop-blur-sm pointer-events-none transition-all duration-100 ease-in-out"
          style={hoverPillStyle}
        ></span>

        <ul className="relative z-10 flex items-center gap-x-1 sm:gap-x-2 md:gap-x-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                data-link={link}
                // PERBAIKAN: onClick sekarang memanggil fungsi dari props
                onClick={() => setActiveLink(link)}
                className={`
                  px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 outline-none
                  ${activeLink === link
                    ? 'text-white'
                    : 'text-blue-600'
                  }
                `}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
