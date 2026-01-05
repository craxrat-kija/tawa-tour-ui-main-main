import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import tawaLogo from '@/assets/tawa-logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About TAWA', path: '/about' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'News & Events', path: '/news' },
  { name: 'Investments', path: '/investments' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-jungle/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-safari">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 transition-all duration-300"
              style={{
                borderColor: isScrolled ? 'rgb(34, 197, 94)' : 'rgba(255, 255, 255, 0.5)'
              }}
            >
              <img 
                src={tawaLogo} 
                alt="TAWA Logo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.h1 
                className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'
                }`}
              >
                TAWA
              </motion.h1>
              <motion.p 
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow-md'
                }`}
              >
                Wildlife Authority
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to={item.path}
                      className="relative px-6 py-3.5 text-base font-medium transition-all duration-300 rounded-xl group overflow-hidden"
                    >
                      {/* Animated gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl ${
                          isScrolled 
                            ? 'bg-gradient-to-r from-jungle/10 via-jungle/5 to-jungle/10' 
                            : 'bg-gradient-to-r from-white/20 via-white/10 to-white/20'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '200%', opacity: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                      
                      {/* Animated border that draws around clockwise */}
                      {/* Top border line */}
                      <motion.div
                        className={`absolute top-0 left-0 h-[3px] rounded-full ${
                          isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                        }`}
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))',
                          boxShadow: isScrolled 
                            ? '0 0 8px rgba(34, 197, 94, 0.4)' 
                            : '0 0 8px rgba(255, 193, 7, 0.4)'
                        }}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.5, delay: 0, ease: [0.4, 0, 0.2, 1] }}
                      />
                      
                      {/* Right border line */}
                      <motion.div
                        className={`absolute top-0 right-0 w-[3px] rounded-full ${
                          isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                        }`}
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))',
                          boxShadow: isScrolled 
                            ? '0 0 8px rgba(34, 197, 94, 0.4)' 
                            : '0 0 8px rgba(255, 193, 7, 0.4)'
                        }}
                        initial={{ height: 0 }}
                        whileHover={{ height: '100%' }}
                        transition={{ duration: 0.5, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      />
                      
                      {/* Bottom border line */}
                      <motion.div
                        className={`absolute bottom-0 right-0 h-[3px] rounded-full ${
                          isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                        }`}
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))',
                          boxShadow: isScrolled 
                            ? '0 0 8px rgba(34, 197, 94, 0.4)' 
                            : '0 0 8px rgba(255, 193, 7, 0.4)'
                        }}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      />
                      
                      {/* Left border line */}
                      <motion.div
                        className={`absolute bottom-0 left-0 w-[3px] rounded-full ${
                          isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                        }`}
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))',
                          boxShadow: isScrolled 
                            ? '0 0 8px rgba(34, 197, 94, 0.4)' 
                            : '0 0 8px rgba(255, 193, 7, 0.4)'
                        }}
                        initial={{ height: 0 }}
                        whileHover={{ height: '100%' }}
                        transition={{ duration: 0.5, delay: 0.75, ease: [0.4, 0, 0.2, 1] }}
                      />
                      
                      {/* Text with enhanced animation */}
                      <motion.span
                        className={`relative z-10 block ${
                          isActive
                            ? isScrolled
                              ? 'text-jungle font-semibold'
                              : 'text-jungle-yellow font-semibold'
                            : isScrolled 
                              ? 'text-foreground group-hover:text-jungle' 
                              : 'text-white group-hover:text-jungle-yellow'
                        }`}
                        whileHover={{ 
                          scale: 1.15,
                          letterSpacing: '0.05em',
                          rotate: [0, -5, 5, -3, 3, 0]
                        }}
                        transition={{ 
                          duration: 0.6, 
                          type: "keyframes",
                          ease: "easeInOut"
                        }}
                      >
                        {item.name}
                        
                        {/* Active indicator dot near text */}
                        {isActive && (
                          <motion.span
                            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                              isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                            }`}
                            layoutId="activeNavDot"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.span>
                    
                    {/* Active underline - closer to text */}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3/4 rounded-full ${
                          isScrolled ? 'bg-jungle' : 'bg-jungle-yellow'
                        }`}
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'bg-jungle/10 hover:bg-jungle/20 text-foreground' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'bg-jungle/10 hover:bg-jungle/20 text-foreground' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-jungle/10 shadow-lg overflow-hidden"
          >
            <div className="container-safari py-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`relative block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                        isActive
                          ? 'text-jungle bg-jungle/10'
                          : 'text-foreground hover:text-jungle hover:bg-jungle/5'
                      }`}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-jungle rounded-r-full"
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
