import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, MapPin, Newspaper, Calendar, Briefcase, Info, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import tawaLogo from '@/assets/tawa-logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; top: number } | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about', hasDropdown: true },
    { name: t('nav.destinations'), path: '/destinations', hasDropdown: true },
    { name: t('nav.news'), path: '/news', hasDropdown: true },
    { name: t('nav.events'), path: '/events', hasDropdown: true },
    { name: t('nav.investments'), path: '/investments', hasDropdown: true },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // Dropdown content
  const dropdownContent: Record<string, Array<{ label: string; path: string; icon?: any; description?: string }>> = {
    '/about': [
      { label: 'Our Mission', path: '/about#mission', icon: Info, description: 'Learn about our goals' },
      { label: 'Our Vision', path: '/about#vision', icon: Info, description: 'See our future plans' },
      { label: 'Our Story', path: '/about#story', icon: Info, description: 'Discover our history' },
      { label: 'Core Values', path: '/about#values', icon: Info, description: 'What we stand for' },
    ],
    '/destinations': [
      { label: 'IKORONGO & GRUMET GR', path: '/destination/ikorongo-grumet', icon: MapPin, description: '8,500 km²' },
      { label: 'SELOUS GR', path: '/destination/selous', icon: MapPin, description: '50,000 km²' },
      { label: 'MASWA GR', path: '/destination/maswa', icon: MapPin, description: '2,200 km²' },
      { label: 'PANDE GR', path: '/destination/pande', icon: MapPin, description: '2,500 km²' },
      { label: 'View All', path: '/destinations', icon: ArrowRight, description: 'See all destinations' },
    ],
    '/news': [
      { label: 'Latest News', path: '/news', icon: Newspaper, description: 'Recent updates' },
      { label: 'Conservation News', path: '/news?category=conservation', icon: Newspaper, description: 'Wildlife protection' },
      { label: 'Tourism Updates', path: '/news?category=tourism', icon: Newspaper, description: 'Travel information' },
      { label: 'Community News', path: '/news?category=community', icon: Newspaper, description: 'Local updates' },
    ],
    '/events': [
      { label: 'Upcoming Events', path: '/events', icon: Calendar, description: 'See what\'s coming' },
      { label: 'Safari Tours', path: '/events?type=safari', icon: Calendar, description: 'Wildlife experiences' },
      { label: 'Conservation Workshops', path: '/events?type=workshop', icon: Calendar, description: 'Educational programs' },
      { label: 'Community Events', path: '/events?type=community', icon: Calendar, description: 'Local activities' },
    ],
    '/investments': [
      { label: 'Eco-Lodge Development', path: '/investments#eco-lodge', icon: Briefcase, description: 'Sustainable tourism' },
      { label: 'Tour Operations', path: '/investments#tour-operations', icon: Briefcase, description: 'Licensed operators' },
      { label: 'Conservation Projects', path: '/investments#conservation', icon: Briefcase, description: 'Protection initiatives' },
      { label: 'Community Programs', path: '/investments#community', icon: Briefcase, description: 'Local development' },
    ],
  };

  const handleMouseEnter = (path: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const navItem = navItemRefs.current[path];
    if (navItem) {
      const rect = navItem.getBoundingClientRect();
      const headerHeight = 64; // h-16 = 64px
      setDropdownPosition({
        left: rect.left,
        top: headerHeight + 8 // Position below header container with gap
      });
    }
    setHoveredItem(path);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
      setDropdownPosition(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 w-full ${
        isScrolled 
          ? 'backdrop-blur-md shadow-md border-b border-jungle/10' 
          : 'backdrop-blur-sm'
      }`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0,
        width: '100%',
        maxWidth: '100%',
        backgroundColor: isScrolled ? 'rgba(32, 223, 102, 0.95)' : 'rgba(32, 223, 102, 0.90)',
        zIndex: 99999,
        visibility: 'visible',
        display: 'block',
        transform: 'translateY(0)',
        willChange: 'auto',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="container-safari w-full mx-auto relative px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 transition-all duration-300"
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
                className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-foreground' 
                    : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]'
                }`}
                style={{
                  textShadow: isScrolled 
                    ? 'none' 
                    : '0 1px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                TAWA
              </motion.h1>
              <motion.p 
                className={`text-[10px] sm:text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-foreground/80' 
                    : 'text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                }`}
                style={{
                  textShadow: isScrolled 
                    ? 'none' 
                    : '0 1px 2px rgba(0, 0, 0, 0.4)',
                }}
              >
                Wildlife Authority
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasDropdown = item.hasDropdown && dropdownContent[item.path];
              const isHovered = hoveredItem === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  ref={(el) => {
                    if (hasDropdown) {
                      navItemRefs.current[item.path] = el;
                    }
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-md group overflow-visible flex items-center gap-1.5"
                  >
                    {/* Subtle background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-md bg-white/15"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                    
                    {/* Professional underline animation */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isActive ? 'bg-white' : 'bg-white/0 group-hover:bg-white'
                      }`}
                      initial={false}
                      whileHover={{ 
                        scaleX: 1,
                        opacity: 1
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        transformOrigin: 'center',
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                        boxShadow: isActive ? '0 2px 8px rgba(255, 255, 255, 0.4)' : 'none'
                      }}
                    />
                    
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                        layoutId="activeNavUnderline"
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 35,
                          mass: 0.6
                        }}
                        style={{
                          boxShadow: '0 2px 8px rgba(255, 255, 255, 0.4)'
                        }}
                      />
                    )}
                    
                    {/* Text with strong contrast */}
                    <motion.span
                      className={`relative z-10 block whitespace-nowrap font-medium ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-white group-hover:text-white'
                      }`}
                      style={{
                        textShadow: isActive
                          ? '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)'
                          : '0 2px 4px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.8)',
                        WebkitTextStroke: '0.3px rgba(0, 0, 0, 0.3)'
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: "easeOut"
                      }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Dropdown chevron icon */}
                    {hasDropdown && (
                      <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ChevronDown 
                          className="w-3.5 h-3.5 transition-colors text-white"
                          style={{
                            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6))'
                          }}
                        />
                      </motion.div>
                    )}
                  </Link>

                </motion.div>
              );
            })}
          </div>

          {/* Language Switcher, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={toggleTheme}
              className={`p-1.5 rounded-md transition-all duration-200 ${
                isScrolled 
                  ? 'bg-jungle/8 hover:bg-jungle/15 text-foreground' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1.5 rounded-md transition-all duration-200 ${
                isScrolled 
                  ? 'bg-jungle/8 hover:bg-jungle/15 text-foreground' 
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
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Dropdown Menus - Positioned below header container */}
      <AnimatePresence>
        {hoveredItem && dropdownPosition && dropdownContent[hoveredItem] && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ 
              duration: 0.15, 
              ease: "easeOut"
            }}
            className={`fixed w-56 rounded-lg shadow-xl border border-jungle/20 overflow-hidden z-[100000] ${
              theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
            }`}
            style={{
              left: `${dropdownPosition.left}px`,
              top: `${dropdownPosition.top}px`,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 2px rgba(0, 0, 0, 0.15)',
              backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)',
              backdropFilter: 'blur(12px)'
            }}
            onMouseEnter={() => handleMouseEnter(hoveredItem)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dropdown arrow */}
            <div 
              className={`absolute -top-1.5 left-5 w-3 h-3 border-l border-t border-jungle/20 transform rotate-45 ${
                theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
              }`}
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)'
              }}
            />
            
            {/* Dropdown items */}
            <div className="relative z-10 py-1.5">
              {dropdownContent[hoveredItem].map((dropdownItem, idx) => {
                const Icon = dropdownItem.icon;
                return (
                  <Link
                    key={dropdownItem.path}
                    to={dropdownItem.path}
                    className="group/dropdown relative flex items-center gap-2.5 px-3 py-2 hover:bg-jungle/8 transition-colors duration-150"
                  >
                    {/* Icon */}
                    {Icon && (
                      <div className="relative z-10 p-1 rounded-md bg-jungle/8 group-hover/dropdown:bg-jungle/15 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-jungle" />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 min-w-0">
                      <div className="font-medium text-foreground group-hover/dropdown:text-jungle transition-colors text-sm leading-tight">
                        {dropdownItem.label}
                      </div>
                      {dropdownItem.description && (
                        <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                          {dropdownItem.description}
                        </div>
                      )}
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="relative z-10 opacity-0 group-hover/dropdown:opacity-100 transition-opacity">
                      <ArrowRight className="w-3 h-3 text-jungle" />
                    </div>
                    
                    {/* Bottom border */}
                    {idx < (dropdownContent[hoveredItem]?.length || 0) - 1 && (
                      <div className="absolute bottom-0 left-3 right-3 h-px bg-jungle/8" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-t border-jungle/20 shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'
            }`}
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.99)' : 'rgba(255, 255, 255, 0.99)',
              backdropFilter: 'blur(12px)'
            }}
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
                      className={`relative block px-5 py-3.5 text-base md:text-lg font-heading font-semibold tracking-wide transition-all duration-300 rounded-lg overflow-hidden group ${
                        isActive
                          ? 'text-jungle bg-jungle/10'
                          : 'text-foreground hover:text-jungle hover:bg-jungle/8'
                      }`}
                    >
                      {/* Background hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-jungle/0 group-hover:bg-jungle/5 transition-all duration-300"
                        initial={false}
                      />
                      
                      <motion.span
                        className="relative z-10 block"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {item.name}
                      </motion.span>
                      
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-jungle rounded-r-full"
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          style={{
                            boxShadow: '2px 0 8px rgba(34, 197, 94, 0.3)'
                          }}
                        />
                      )}
                      
                      {/* Bottom underline for active */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-jungle/30"
                          layoutId="mobileActiveUnderline"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
    </header>
  );
}
