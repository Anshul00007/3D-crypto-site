import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ];

  const menuVariants = {
    open: { 
      x: 0, 
      transition: { 
        type: 'tween', 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
    closed: { 
      x: '100%', 
      transition: { 
        type: 'tween', 
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1
      } 
    }
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 20 }
  };

  return (
    <motion.nav 
      style={{ opacity }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-yellow-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-yellow-400"
          >
            INFINITY TRADERS
          </motion.span>

          {/* Desktop Menu */}
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-300 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-black/95 backdrop-blur-lg md:hidden z-50 shadow-2xl border-l border-yellow-400/20"
            >
              <div className="flex flex-col items-start p-6 space-y-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      activeClass="text-yellow-400"
                      className="text-xl text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {item.name}
                      </motion.div>
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