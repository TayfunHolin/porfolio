import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

const navItems = [
  { label: 'Works', path: '/works' },
  { label: 'Articles', path: '/articles' },
  { label: 'Experience', path: '/experience' },
  { label: 'About', path: '/about' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  // Get active nav item index
  const activeIndex = navItems.findIndex(
    item => location.pathname === item.path || location.pathname.startsWith(item.path + '/')
  );

  // Update underline position when active index changes
  useEffect(() => {
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const el = navRefs.current[activeIndex];
      setUnderlineStyle({
        left: el?.offsetLeft ?? 0,
        width: el?.offsetWidth ?? 0
      });
    }
  }, [activeIndex]);

  // Enable transition only after first render
  useEffect(() => {
    const timer = setTimeout(() => setEnableTransition(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useBodyScrollLock(isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-500 ${
          isScrolled ? 'py-3 mt-3 px-6 bg-surface/70 backdrop-blur-xl border border-white/[0.06] rounded-2xl' : 'py-6 px-6'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group text-text-primary hover:text-text-secondary transition-colors">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[
                  "M21.9971 9.82206C22.0054 12.8354 21.9971 13.6311 21.9554 13.6615C21.9262 13.6789 20.5462 13.692 18.891 13.6876C16.4646 13.6789 15.8684 13.6876 15.8267 13.7311C15.785 13.7746 15.7766 14.2007 15.7891 15.8574C15.8016 17.5662 15.7933 17.9314 15.7474 17.9619C15.6724 18.0097 13.346 18.0141 13.3168 17.9662C13.2793 17.9054 13.2793 11.6396 13.3126 11.5005C13.3335 11.4265 13.3668 11.357 13.3918 11.3352C13.4502 11.2961 13.8254 11.2918 15.7099 11.3004C16.3186 11.3004 16.944 11.2961 17.1066 11.2874C17.265 11.2744 17.4068 11.2744 17.4235 11.2874C17.4527 11.3048 18.4283 11.3178 19.1412 11.3091L19.5039 11.3048V8.68283C19.5039 7.23923 19.5164 6.04348 19.5331 6.03044C19.5498 6.01304 20.1043 6.00435 20.7713 6.00869L21.9846 6.02174L21.9971 9.82206Z",
                  "M21.9637 16.0878C21.9929 16.14 22.0013 16.5009 21.9971 17.0748L21.9846 17.9793H20.7547H19.5248L19.5122 17.0488C19.5039 16.4009 19.5164 16.1009 19.5498 16.0617C19.5873 16.0139 19.8249 16.0008 20.7588 16.0008C21.872 16.0008 21.922 16.0052 21.9637 16.0878Z",
                  "M15.7433 6.03478C15.7808 6.06522 15.7933 6.38264 15.785 7.48273L15.7725 8.89155H14.5425H13.3126L13.3001 7.48273C13.2918 6.38264 13.3043 6.06522 13.3418 6.03478C13.371 6.01739 13.913 6 14.5425 6C15.1721 6 15.7141 6.01739 15.7433 6.03478Z",
                  "M11.6449 7.23923V8.45673H6.82951H2.01407L2.00156 7.28272C1.99739 6.63918 2.00156 6.08696 2.01407 6.05653C2.02658 6.00869 2.9855 6 6.83785 6.00869L11.6449 6.02174V7.23923Z",
                  "M8.05526 11.4005C8.06776 11.6005 8.0761 13.1615 8.07193 14.8703L8.05942 17.9793H6.85035H5.64128L5.63294 15.8269C5.62878 14.6442 5.62461 13.2137 5.62461 12.6527C5.62044 12.0918 5.63295 11.5005 5.64545 11.3352L5.67464 11.0439H6.85035H8.03024L8.05526 11.4005Z",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    fill="currentColor"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.6,
                    }}
                  />
                ))}
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <h2 className="sr-only">Main Navigation</h2>
              <div className="relative flex items-center gap-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    ref={el => { navRefs.current[index] = el; }}
                    to={item.path}
                    className={`relative font-sans text-sm transition-colors hover:text-text-primary ${
                      location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                        ? 'text-text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {activeIndex !== -1 && underlineStyle.width > 0 && (
                  <span
                    className="absolute -bottom-1 h-px bg-text-primary"
                    style={{
                      left: underlineStyle.left,
                      width: underlineStyle.width,
                      transition: enableTransition ? 'left 0.3s ease, width 0.3s ease' : 'none'
                    }}
                  />
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-3 -mr-1 rounded-full text-text-secondary hover:text-text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Open menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center gap-[5px]">
                  <span className="block w-full h-[1.3px] bg-current"></span>
                  <span className="block w-full h-[1.3px] bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Outside header for proper z-index stacking */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-background z-[100]"
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-5 right-5 p-3 rounded-full text-text-secondary hover:text-text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`font-serif text-3xl transition-colors hover:text-text-primary ${
                      location.pathname === item.path
                        ? 'text-text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
