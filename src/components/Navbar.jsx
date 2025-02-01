import { useState, useMemo } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Charts', to: 'charts' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  const logoAnimation = useMemo(() => ({
    initial: { opacity: 0, x: '-100%' },
    animate: { 
      opacity: 1,
      x: 0, // Logo slides in from the left
      transition: { duration: 1, ease: "easeOut" }, // Smooth slide-in
    },
    whileHover: {
      scale: 1.1,
      textShadow: '0 0 500px white, 0 0 80px white, 0 0 700px white', // Glowing white effect
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    whileTap: { scale: 0.95 },
  }), []);

  const navButtonHover = {
    whileHover: { 
      scale: 1.05, 
      textShadow: '0 0 8px rgba(255, 223, 0, 0.8)', 
      color: '#FBBF24',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-yellow-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            {...logoAnimation}
            className="text-3xl font-bold text-yellow-400 orbitron relative cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.span
              style={{
                transform: 'translateZ(30px) rotateY(0deg) rotateX(0deg)',
                textShadow: '0 0 25px rgba(255, 223, 0, 0.8)', // Initial glow
                display: 'inline-block',
              }}
              whileTap={{
                rotateY: 180,
                transition: { duration: 1, ease: "easeInOut" }
              }}
              className="block text-glow-yellow relative z-10"
            >
              A$ INFINITY EXCHANGE
            </motion.span>

            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * 40 - 20,
                    y: Math.random() * 40 - 20,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 80 - 40,
                    y: Math.random() * 80 - 40,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    filter: 'blur(2px)',
                    boxShadow: '0 0 8px rgba(255, 223, 0, 0.5)',
                  }}
                />
              ))}
            </div>

            <motion.div
              className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-yellow-400 pointer-events-none"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              style={{
                filter: 'blur(12px)',
                boxShadow: '0 0 40px 15px rgba(255, 223, 0, 0.7)',
              }}
            />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-yellow-400"
                className="text-gray-300 orbitron font-medium cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <motion.div {...navButtonHover}>
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-300 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { x: 0, transition: { type: 'tween', duration: 0.3, staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { x: '100%', transition: { type: 'tween', duration: 0.3, staggerChildren: 0.1, staggerDirection: -1 } },
              }}
              className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-black/95 backdrop-blur-lg md:hidden z-50 shadow-2xl border-l border-yellow-400/20"
            >
              <div className="flex flex-col items-start p-6 space-y-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    className="w-full"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      activeClass="text-yellow-400"
                      className="text-gray-300 orbitron text-lg hover:text-yellow-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
